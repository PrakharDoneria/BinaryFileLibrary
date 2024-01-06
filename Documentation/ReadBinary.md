# ReadBinary Documentation

## Overview

The `ReadBinary` block is part of the Binary File Handling Library for Sketchware Pro. It enables you to read binary data from a specified file.

### Block Information

- **Block Name:** ReadBinary
- **Category:** Custom
- **Library:** Binary File Handling Library
- **Author:** [Your Name]

## Inputs

1. **File Location (Text):**
   - Description: The path to the binary file you want to read.
   - Type: Text

## Outputs

1. **Content Read (Text):**
   - Description: The content read from the specified binary file.
   - Type: Text

## Example Usage

```java
// Example ReadBinary Usage
ReadBinary("file_location");
```

## How to Use

1. Drag and drop the `ReadBinary` block into your Sketchware project.

2. Input the file location by providing the path to the binary file.

3. Connect the block to other parts of your project where you need the binary data.

4. The block will read the content from the specified file, and the result will be stored in the `Content Read` variable.

## Important Notes

- Ensure the specified file exists before attempting to read from it.
- The `Content Read` output will contain the binary data read from the file.

## Troubleshooting

- If you encounter issues reading the file, double-check the file location and permissions.

