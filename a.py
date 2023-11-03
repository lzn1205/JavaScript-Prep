import hashlib

# Define file signatures for the supported file types
file_signatures = {
    "MPG": bytes.fromhex("000001BA"),
    "PDF": bytes.fromhex("25504446"),
    "BMP": bytes.fromhex("424D"),
    "GIF": bytes.fromhex("47494638"),
    "JPG": bytes.fromhex("FFD8"),
    "DOCX": bytes.fromhex("504B0304"),
    "AVI": bytes.fromhex("52494646"),
    "PNG": bytes.fromhex("89504E470D0A1A0A"),
}

def find_files_in_disk_image(disk_image_path):
    recovered_files = []

    with open(disk_image_path, "rb") as image_file:
        disk_image_data = image_file.read()

        for file_type, signature in file_signatures.items():
            start_offset = disk_image_data.find(signature)
            while start_offset != -1:
                end_offset = start_offset + len(signature)
                recovered_data = disk_image_data[start_offset:]

                # You may need to implement more specific logic to identify the end of the file

                # Generate SHA-256 hash for the recovered file
                sha256_hash = hashlib.sha256(recovered_data).hexdigest()

                recovered_files.append(
                    {
                        "filename": f"File{len(recovered_files) + 1}.{file_type.lower()}",
                        "start_offset": hex(start_offset),
                        "end_offset": hex(end_offset),
                        "sha256_hash": sha256_hash,
                    }
                )

                # Move to the next occurrence
                start_offset = disk_image_data.find(signature, end_offset)

    return recovered_files

def main():
    disk_image_path = "Project2.dd"
    recovered_files = find_files_in_disk_image(disk_image_path)

    # Output the recovered file information
    for i, file_info in enumerate(recovered_files):
        print(f"File{i + 1}.{file_info['filename']}, Start Offset: {file_info['start_offset']}, End Offset: {file_info['end_offset']}")
        print(f"SHA-256: {file_info['sha256_hash']}\n")

if __name__ == "__main__":
    main()
