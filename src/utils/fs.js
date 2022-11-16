import * as fs from "fs";
import path from "path";
import { cwd } from "process";


const read = (dir) => {
  return JSON.parse(
    fs.readFileSync(path.resolve(cwd(), `./src/model/${dir}.json`), {
      encoding: "utf-8",
      flag: "r",
    })
  );
};

const write = (dir, data) => {
  return fs.writeFileSync(
    path.resolve(cwd(), `./src/model/${dir}.json`),
    JSON.stringify(data, null, 4)
  );
};

export {
  read,
  write,
};
