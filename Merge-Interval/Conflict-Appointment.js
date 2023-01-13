// Javascript program to print all conflicting
// appointments in a given set of appointments

// Structure to represent an interval
class Interval
{
	constructor()
	{
		this.low = 0;
		this.high = 0;
	}
}

class ITNode
{
	// 'i' could also be a normal variable
	constructor()
	{
		this.max = 0;
		this.left = null;
		this.right = null;
		this.i = null;
	}
}

// A utility function to create a new node
function newNodeDouble(l, h)
{
	var temp = new Interval();
	temp.low = l;
	temp.high = h;
	return temp;
}

// A utility function to create a new node
function newNodeSingle(i)
{
	var temp = new ITNode();
	temp.i = i;
	temp.max = i.high;
	temp.left = temp.right = null;
	return temp;
}

// A utility function to insert a new
// Interval Search Tree Node. This is
// similar to BST Insert. Here the
// low value of interval is used to
// maintain BST property
function insert(root, i)
{
	
	// Base case: Tree is empty,
	// new node becomes root
	if (root == null)
		return newNodeSingle(i);

	// Get low value of interval at root
	var l = root.i.low;

	// If root's low value is smaller,
	// then new interval goes to left subtree
	if (i.low < l)
		root.left = insert(root.left, i);

	// Else, new node goes to right subtree.
	else
		root.right = insert(root.right, i);

	// Update the max value of this
	// ancestor if needed
	if (root.max < i.high)
		root.max = i.high;
	return root;
}

// A utility function to check if given
// two intervals overlap
function doOVerlap(i1, i2)
{
	if (i1.low < i2.high && i2.low < i1.high)
		return true;	
	return false;
}

// The main function that searches a given
// interval i in a given Interval Tree.
function overlapSearch(root, i)
{
	
	// Base Case, tree is empty
	if (root == null)
		return null;

	// If given interval overlaps with root
	if (doOVerlap(root.i, i))
		return root.i;

	// If left child of root is present
	// and max of left child is greater
	// than or equal to given interval,
	// then i may overlap with an interval
	// is left subtree
	if (root.left != null &&
		root.left.max >= i.low)
		return overlapSearch(root.left, i);

	// Else interval can only
	// overlap with right subtree
	return overlapSearch(root.right, i);
}

// This function prints all conflicting
// appointments in a given array of appointments.
function printConflicting(appt, n)
{
	
	// Create an empty Interval Search
	// Tree, add first appointment
	var root = null;
	root = insert(root, appt[0]);

	// Process rest of the intervals
	for(var i = 1; i < n; i++)
	{
		
		// If current appointment conflicts
		// with any of the existing intervals,
		// print it
		var res = overlapSearch(root, appt[i]);
		
		if (res != null)
			document.write("[" + appt[i].low +
							"," + appt[i].high +
							"] Conflicts with [" +
							res.low + "," +
							res.high + "]<br>");
							
		// Insert this appointment
		root = insert(root, appt[i]);
	}
}

// Driver code
var appt = Array(6);
appt[0] = newNodeDouble(1, 5);
appt[1] = newNodeDouble(3, 7);
appt[2] = newNodeDouble(2, 6);
appt[3] = newNodeDouble(10, 15);
appt[4] = newNodeDouble(5, 6);
appt[5] = newNodeDouble(4, 100);
var n = appt.length;
document.write(
	"Following are conflicting intervals<br>");
printConflicting(appt, n);

