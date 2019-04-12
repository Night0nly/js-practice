import * as chai from "chai";
const expect = chai.expect;
import * as fs from "fs";
import * as sinon from "sinon";
import * as controller from "../../../src/api/controllers/products_controller";

const LINE1 ="id1" + "\t" +
  "cp1" + "\t" +
  "store1" + "\t" +
  "Toyboo!" + "\t" +
  "電子書籍" + "\t" +
  "author1" + "\t" +
  "titleId1" + "\t" +
  "titleName1" + "\t" +
  "EPUB3.0" + "\t" +
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
  "   " + "\t" +
  "cp2" + "\t" +
  "store2" + "\t" +
  "Toyboo!" + "\t" +
  "電子書籍" + "\t" +
  "author2" + "\t" +
  "titleId2" + "\t" +
  "titleName2" + "\t" +
  "EPUB3.0" + "\t" +
  "汎用" + "\t" +
  "23" + "\t" +
  "aaa" + "\t" +
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
const ERROR_DETAIL = [
  "2行目の列数はおかしいです。20になっています。",
  "3行目の「ID」は空文字です。",
  "3行目の「DL区分」はおかしいです。23になっています。",
  "3行目の「通番」はおかしいです。aaaになっています。"
];

describe("ProductInfomation#product_controller", () => {
  before(done => {
    fs.writeFile(FILE_PATH, FILE_CONTENT, (err: any) => {
      if (err) { throw err; }
      done();
    });
  });

  describe("errorDetail", () => {
    it('should ', (done) => {
      const stub = sinon.stub(controller, "defaultPath").returns(FILE_PATH);
      expect(controller.errorsDetail()).to.have.members(ERROR_DETAIL);
      stub.restore();
	  done();
    });
  });

  after(() => {
    fs.unlink(FILE_PATH, err => {
      if (err) { throw err; }
    });
  });
});
