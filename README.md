# Binary File Handling Library

The Binary File Handling Library provides functionality for reading, writing, and appending binary data to files in Sketchware Pro.

## Features

- **ReadBinary:** Read binary data from a specified file.
- **WriteBinary:** Write binary data to a specified file.
- **AppendBinary:** Append binary data to a specified file.

## Getting Started

1. Import the library into your Sketchware Pro project using the Library Downloader.

2. Explore the example project (`example_project_layout.xml`) for usage demonstrations.

3. Customize the library blocks based on your project requirements.

## Blocks

### ReadBinary

- **Inputs:**
  - `File Location`: The path to the file to read.

- **Outputs:**
  - `Content Read`: The content read from the file.

### WriteBinary

- **Inputs:**
  - `Data to Write`: The binary data to write.
  - `File Location`: The path to the output file.

- **Outputs:**
  - `Write Success`: Indicates whether the write operation was successful.

### AppendBinary

- **Inputs:**
  - `Data to Append`: The binary data to append.
  - `File Location`: The path to the output file.

- **Outputs:**
  - `Append Success`: Indicates whether the append operation was successful.

## Example Project

Check out the `example_project_layout.xml` for a sample project demonstrating the usage of the Binary File Handling Library.

## License

This library is released under the [MIT License](LICENSE).

