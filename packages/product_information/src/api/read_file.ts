import * as fs from "fs";
import Line from "./line";

const readFile = (filePath: string) => {
  const content = fs.readFileSync(filePath).toString();
  return content
    .split("\n")
    .slice(1)
    .map((l, index) => new Line(index + 2, l));
};

export default readFile;