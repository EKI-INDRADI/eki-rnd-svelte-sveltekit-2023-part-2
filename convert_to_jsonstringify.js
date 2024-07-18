const fs = require('fs');

// Path to your JSON file
const filePath = 'firebase-secrets.server.json';

// Read the file
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    try {
        // Parse the JSON data
        const jsonData = JSON.parse(data);

        // Convert the JSON object to a JSON string
        const jsonString = JSON.stringify(jsonData);

        console.log('JSON String:', jsonString);

        // Optionally, you can save this JSON string to another file or use it as needed
        const outputFilePath = 'str.firebase-secrets.server.json';
        fs.writeFile(outputFilePath, jsonString, (err) => {
            if (err) {
                console.error('Error writing the file:', err);
            } else {
                console.log('JSON string saved to', outputFilePath);
            }
        });
    } catch (parseError) {
        console.error('Error parsing JSON:', parseError);
    }
});