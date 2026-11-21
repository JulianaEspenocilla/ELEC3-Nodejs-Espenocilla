const fs = require("fs");
const path = require("path");

const command = process.argv[2];
const filename = process.argv[3];
const content = process.argv[4];

const filePath = path.join(__dirname, "files", filename || "");

switch (command) {
    case "create":
        fs.writeFileSync(filePath, content);
        console.log("File created successfully.");
        break;

    case "read":
        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, "utf8");
            console.log(data);
        } else {
            console.log("File does not exist.");
        }
        break;

    case "update":
        if (fs.existsSync(filePath)) {
            fs.appendFileSync(filePath, "\n" + content);
            console.log("File updated.");
        } else {
            console.log("File does not exist.");
        }
        break;

    case "delete":
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
            console.log("File deleted.");
        } else {
            console.log("File does not exist.");
        }
        break;

    case "list":
        const files = fs.readdirSync(path.join(__dirname, "files"));

        files.forEach(file => {
            const fullPath = path.join(__dirname, "files", file);

            console.log("\n------------------");
            console.log("Full Path:", fullPath);
            console.log("File Name:", path.basename(file));
            console.log("Extension:", path.extname(file));

            const data = fs.readFileSync(fullPath, "utf8");
            console.log("Contents:");
            console.log(data);
        });

        break;

    default:
        console.log("Invalid command.");
}