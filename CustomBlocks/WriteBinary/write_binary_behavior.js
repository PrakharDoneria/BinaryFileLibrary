const dataToWrite = get("Data to Write"); // Get the binary data to be written
const fileLocation = get("File Location"); // Get the file location from the input

try {
    const fileOutputStream = new java.io.FileOutputStream(fileLocation);
    fileOutputStream.write(new java.lang.String(dataToWrite).getBytes());
    fileOutputStream.close();

    setVar("Write Success", true); // Set write success to true
} catch (e) {
    handleError(e); // Handle any errors that may occur during the file writing process
    setVar("Write Success", false); // Set write success to false in case of an error
}
