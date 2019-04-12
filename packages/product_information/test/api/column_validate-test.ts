import * as chai from "chai";
const expect = chai.expect;
import {
  isANumber,
  isDateFormat,
  isDateTimeFormat,
  isNotEmpty,
  isPeriodColumnFormat,
  isTypeFormat
} from "../../src/api/column_validate";

describe("ProductInformation#column_validate", () => {
  describe("isANumber", () => {
    it("should be a true", () => {
      expect(isANumber("10")).to.be.true;
    });
    it("should be false", () => {
      expect(isANumber("aaa")).to.be.false;
      expect(isANumber("  ")).to.be.false;
    });
  });

  describe("isNotEmpty", () => {
    it("should be a true", () => {
      expect(isNotEmpty("aa")).to.be.true;
    });
    it("should be false", () => {
      expect(isNotEmpty("   ")).to.be.false;
    });
  });

  describe("isDateFormat", () => {
    it("should be a true", () => {
      expect(isDateFormat("2012/02/23")).to.be.true;
    });
    it("should be false", () => {
      expect(isDateFormat("2020/99/23")).to.be.false;
      expect(isDateFormat("aaa")).to.be.false;
      expect(isDateFormat("2020")).to.be.false;
      expect(isDateFormat("  ")).to.be.false;
    });
  });

  describe("isDateTimeFormat", () => {
    it("should be a true", () => {
      expect(isDateTimeFormat("2012/02/23 12:00:59")).to.be.true;
    });
    it("should be false", () => {
      expect(isDateTimeFormat("2020/02/23")).to.be.false;
      expect(isDateTimeFormat("12:00:59")).to.be.false;
      expect(isDateTimeFormat("aaa")).to.be.false;
      expect(isDateTimeFormat("2020")).to.be.false;
      expect(isDateTimeFormat("  ")).to.be.false;
    });
  });

  describe("isPeriodColumnFormat", () => {
    it("should be a true", () => {
      expect(isPeriodColumnFormat("12")).to.be.true;
      expect(isPeriodColumnFormat("無期限")).to.be.true;
    });
    it("should be false", () => {
      expect(isPeriodColumnFormat("aa")).to.be.false;
      expect(isPeriodColumnFormat("  ")).to.be.false;
    });
  });

  describe("isTypeFormat", () => {
    it("should be a true", () => {
      expect(isTypeFormat("サンプル")).to.be.true;
      expect(isTypeFormat("DL")).to.be.true;
    });
    it("should be false", () => {
      expect(isTypeFormat("aa")).to.be.false;
      expect(isTypeFormat("11")).to.be.false;
      expect(isTypeFormat("  ")).to.be.false;
    });
  });
});
