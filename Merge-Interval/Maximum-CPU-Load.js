// JavaScript implementation to find the
// maximum CPU Load from the given array of jobs

// the job struct will have s(starting time) , e(ending time) , load(cpu load)
class Job{
	constructor(s,e,l){
		this.s = s; this.e = e; this.load = l
	}
}

// endpoint will have val(the time associated with the endpoint),
// load(cpu load associated with the endpoint),
// a flag isStart which will tell if the endpoints starting or ending point
// an interval
class Endpoint{
	constructor(v = 0, l = 0, isStart = false){
		this.val = v
		this.load = l
		this.isStart = isStart
	}
}

function comp(a, b) {
	if (a.val != b.val)
		return a.val - b.val;
	return a.isStart == true && b.isStart == false;
}

// function to find maximum cpu load
function maxCpuLoad(v){
	let count = 0 // count will contain the count of current loads
	let result = 0 // result will contain maximum of all counts

	// this data array will contain all the endpoints combined with their load values
	// and flags telling whether they are starting or ending point
	let data = []

	for(let i = 0; i < v.length; i++){
		data.push(new Endpoint(v[i].s, v[i].load, true))
		data.push(new Endpoint(v[i].e, v[i].load, false))
	}

	data.sort(comp)

	for(let i = 0; i < data.length; i++)
	{
		if(data[i].isStart == true){
			count += data[i].load
			result = Math.max(result, count)
		}
		else
			count -= data[i].load
	}
	return result
}

// Driver code to test maxCpuLoad function
let v = [new Job(6, 7, 10), new Job(2, 4, 11), new Job(8, 12, 15)]
document.write(maxCpuLoad(v),"</br>")
