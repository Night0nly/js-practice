import * as chai from "chai";
import * as chaiThings from "chai-things";
chai.use(chaiThings).should();
import Book from "../../src/api/book";
import Books from "../../src/api/books";
import Line from "../../src/api/line";

const LINE1 = new Line(
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
const LINE2 = new Line(
  2,
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
  "2017/07/11 06:06:52"
);
const SAMPLE_LINE1 = new Line(
  6,
  "id6" + "\t" +
  "cp1" + "\t" +
  "store1" + "\t" +
  "Toyboo!" + "\t" +
  "電子書籍" + "\t" +
  "author1" + "\t" +
  "titleId1" + "\t" +
  "titleName1" + "\t" +
  "EPUB3.0" + "\t" +
  "汎用" + "\t" +
  "サンプル" + "\t" +
  "1" + "\t" +
  "サンプル" + "\t" +
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

const BOOKS = new Books([LINE1, LINE2, SAMPLE_LINE1]);
const BOOK1 = new Book(LINE1);
const BOOK2 = new Book(LINE2);
BOOK1.sampleValue = new Book(SAMPLE_LINE1);

describe("ProductInformation#books", () => {
  it("should include", () => {
    BOOKS.bookList.should.include.something.that.deep.equal(BOOK1);
    BOOKS.bookList.should.include.something.that.deep.equal(BOOK2);
  });

  it("should get a book by the given id", () => {
    chai.expect(BOOKS.getBook("id2")).to.be.deep.equal(BOOK2);
    chai.expect(BOOKS.getBook("id2sss")).to.be.equal(undefined);
  });
});
