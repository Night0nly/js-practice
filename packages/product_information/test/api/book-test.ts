import * as chai from "chai";
const expect = chai.expect;
import Book from "../../src/api/book";
import Line from "../../src/api/line";

const BOOK = new Book(
  new Line(
    5,
    "id5" + "\t" +
    "cp5" + "\t" +
    "store5" + "\t" +
    "publisher5" + "\t" +
    "電子書籍" + "\t" +
    "author5" + "\t" +
    "titleId5" + "\t" +
    "titleName5" + "\t" +
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
  )
);

describe("ProductInformation#book", () => {
  describe("Sample identification key", () => {
    it("should equal string of 'bookFormat+titleId+volume'", () => {
      expect(BOOK.sampleIdentificationKey).to.be.equal("EPUB3.0titleId51");
    });
  });

  describe("Create new book", () => {
    it("should have id", () => {
      expect(BOOK).have.property("id").eql("id5");
    });
    it("should have publisher", () => {
      expect(BOOK).have.property("publisher").eql("publisher5");
    });
    it("should have author", () => {
      expect(BOOK).have.property("author").eql("author5");
    });
    it("should have title", () => {
      expect(BOOK).have.property("title").eql("titleName5");
    });
    it("should have titleId", () => {
      expect(BOOK).have.property("titleId").eql("titleId5");
    });
    it("should have subtitle", () => {
      expect(BOOK).have.property("subtitle").eql("本編");
    });
    it("should have volume", () => {
      expect(BOOK).have.property("volume").eql(1);
    });
    it("should have price", () => {
      expect(BOOK).have.property("price").eql(1000);
    });
    it("should have expect(BOOK)Format", () => {
      expect(BOOK).have.property("bookFormat").eql("EPUB3.0");
    });
    it("should have deliveryStartsAt", () => {
      expect(BOOK).have
        .property("deliveryStartsAt")
        .eql(new Date("2017/06/01"));
    });
    it("should have deliveryEndsAt", () => {
      expect(BOOK).have.property("deliveryEndsAt").eql(new Date("2999/12/31"));
    });
  });
});
