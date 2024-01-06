const dataToAppend = get("Data to Append"); // Get the binary data to be appended
const fileLocation = get("File Location"); // Get the file location from the input

try {
    const fileOutputStream = new java.io.FileOutputStream(fileLocation, true); // true for append mode
    fileOutputStream.write(new java.lang.String(dataToAppend).getBytes());
    fileOutputStream.close();

    setVar("Append Success", true); // Set append success to true
} catch (e) {
    handleError(e); // Handle any errors that may occur during the file appending process
    setVar("Append Success", false); // Set append success to false in case of an error
}
