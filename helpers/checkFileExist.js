import fs from 'fs';

export const checkFolderExist = (directory) => {

    let path = `./test/screenshots/${directory}`;

    if (!fs.existsSync(path)) {
        fs.mkdirSync(path, { 
            recursive: true
        });
        console.log(`${path} directory is ready.`);
    }
}
