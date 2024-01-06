const fileLocation = get("File Location"); // Get the file location from the input

try {
    const fileInputStream = new java.io.FileInputStream(fileLocation);
    let data;
    let content = "";
    
    while ((data = fileInputStream.read()) !== -1) {
        content += String.fromCharCode(data);
    }
    
    fileInputStream.close();
    
    setVar("Content Read", content); // Set the content read to the output variable
} catch (e) {
    handleError(e); // Handle any errors that may occur during the file reading process
}
