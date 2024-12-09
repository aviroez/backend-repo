const fs = require('fs');
const path = require('path');

// Get the environment variable for the service account path
const serviceAccountEnv = process.env.SERVICE_ACCOUNT || 'service_account.json';

// Define the source and destination paths
const sourcePath = path.join(__dirname, serviceAccountEnv);
const destPath = path.join(__dirname, 'functions', serviceAccountEnv);

// Check if the file exists at the source path
if (fs.existsSync(sourcePath)) {
    // Copy the file to the functions directory
    fs.copyFile(sourcePath, destPath, (err) => {
        if (err) {
            console.error(`Error copying ${serviceAccountEnv}:`, err);
        } else {
            console.log(`${serviceAccountEnv} copied successfully!`);
        }
    });
} else {
    console.error(`Service account file not found at: ${sourcePath}`);
}
