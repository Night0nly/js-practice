import * as chai from "chai";
const expect = chai.expect;
import Errorline from "../../src/api/errorline";
import Line from "../../src/api/line";
import validateLine from "../../src/api/line_validate";
import COLUMN from "../../src/api/column";

const CORRECT_LINE = new Line(
  1,
  "id1" + "\t" +
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
  "2017/07/11 06:06:52"
);
const WRONG_COLUMN_SIZE_LINE = new Line(
  1,
  "cp1" + "\t" +
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
  "2017/07/11 06:06:52" + "\t" +
  "2017/07/11 06:06:52"
);
const WRONG_LINE2 = new Line(
  1,
  "id1" + "\t" +
  "cp1" + "\t" +
  "store1" + "\t" +
  "Toyboo!" + "\t" +
  "電子書籍" + "\t" +
  "author1" + "\t" +
  "titleId1" + "\t" +
  "titleName1" + "\t" +
  "EPUB3.0" + "\t" +
  "汎用" + "\t" +
  "wrong" + "\t" +
  "1" + "\t" +
  "本編" + "\t" +
  "○" + "\t" +
  "○" + "\t" +
  "○" + "\t" +
  "1000" + "\t" +
  "wrong" + "\t" +
  "2017/06/01" + "\t" +
  "2999/12/31" + "\t" +
  "2017/06/01" + "\t" +
  "2999/12/31" + "\t" +
  "2017/07/11 06:wrong" + "\t" +
  "2017/07/11 06:06:52"
);

const NO_ERROR = validateLine(CORRECT_LINE);
const WRONG_COLUMN_SIZE_ERROR = validateLine(WRONG_COLUMN_SIZE_LINE);
const ERROR2 = validateLine(WRONG_LINE2);

const EXPECTED_WRONG_COLUMN_SIZE_ERROR = new Errorline(1, [], 14);
const EXPECTED_ERROR2 = new Errorline(1,[
  [COLUMN.TYPE, "wrong"],
  [COLUMN.DL_PERIOD, "wrong"],
  [COLUMN.REGISTRATION_TIME, "2017/07/11 06:wrong"]
]);

describe("ProductInformation#line_validate", () => {
  it("should be undefined", () => {
    expect(NO_ERROR).to.be.equal(undefined);
  });

  it("should be wrong column size Errorline", () => {
    expect(WRONG_COLUMN_SIZE_ERROR).to.be.deep.equal(EXPECTED_WRONG_COLUMN_SIZE_ERROR);
  });

  it("should be wrong column format Errorline", () => {
    expect(ERROR2).to.be.deep.equal(EXPECTED_ERROR2);
  });
});
