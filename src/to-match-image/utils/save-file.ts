import fs from 'fs';
import Buffer from 'buffer';

const saveFile = (fileContent: string) => {
  fs.writeFile('image-content.tmp', fileContent, function (err) {
  });
}

export default saveFile;
