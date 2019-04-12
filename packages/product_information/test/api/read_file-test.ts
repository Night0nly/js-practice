import * as chai from "chai";
const expect = chai.expect;
import * as fs from "fs";
import Line from "../../src/api/line";
import readFile from "../../src/api/read_file";

const LINE1 ="id1" + "\t" +
  "cp1" + "\t" +
  "store1" + "\t" +
  "Toyboo!" + "\t" +
  "電子書籍" + "\t" +
  "author1" + "\t" +
  "titleId1" + "\t" +
  "titleName1" + "\t" +
  "EPUB3.0" + "\t" +
  "汎用" + "\t" +
  "DL" + "\t" +
  "1" + "\t" +
  "本編" + "\t" +
  "○" + "\t" +
  "○" + "\t" +
  "○" + "\t" +
  "1000" + "\t" +
  "無期限" + "\t" +
  "2017/06/01" + "\t" +
  "2999/12/31" + "\t" +
  "2017/06/01" + "\t" +
  "2999/12/31" + "\t" +
  "2017/07/11 06:06:52" + "\t" +
  "2017/07/11 06:06:52";
const LINE2 =
  "id2" + "\t" +
  "cp2" + "\t" +
  "store2" + "\t" +
  "Toyboo!" + "\t" +
  "電子書籍" + "\t" +
  "author2" + "\t" +
  "titleId2" + "\t" +
  "titleName2" + "\t" +
  "EPUB3.0" + "\t" +
  "汎用" + "\t" +
  "DL" + "\t" +
  "1" + "\t" +
  "本編" + "\t" +
  "○" + "\t" +
  "○" + "\t" +
  "○" + "\t" +
  "1000" + "\t" +
  "無期限" + "\t" +
  "2017/06/01" + "\t" +
  "2999/12/31" + "\t" +
  "2017/06/01" + "\t" +
  "2999/12/31" + "\t" +
  "2017/07/11 06:06:52" + "\t" +
  "2017/07/11 06:06:52";
const FILE_CONTENT = `header\n${LINE1}\n${LINE2}`;
const FILE_PATH = "tmp.tsv";

describe("ProductInformation#read_file", () => {
  before(done => {
    fs.writeFile(FILE_PATH, FILE_CONTENT, (err: any) => {
      if (err) { throw err; }
      done();
    });
  });

  it("should have 2 line (except header)", () => {
    expect(readFile(FILE_PATH)).have.lengthOf(2);
  });

  it("should equal to line 2", () => {
    expect(readFile(FILE_PATH)[1]).to.be.deep.equal(new Line(3, LINE2));
  });

  after(() => {
    fs.unlink(FILE_PATH, err => {
      if (err) { throw err; }
    });
  });
});
