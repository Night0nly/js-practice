import * as chai from "chai";
import * as chaiThings from "chai-things";
chai.use(chaiThings).should();
chai.use(require("chai-date-string"));
chai.use(require("chai-http"));
import * as sinon from "sinon";
import * as controller from "../src/api/controllers/products_controller";
import app from "../src/server";

const ERRORS_DETAIL = [
  '2行目の列数はおかしいです。21になっています。',
  '3行目の「ID」は空文字です。',
  '3行目の「通番」はおかしいです。xxxになっています。',
  '3行目の「DL期限」はおかしいです。無sになっています。',
  '3行目の「更新日時」はおかしいです。2017/0 06:06:52になっています。'
];


describe("ProductInformation#server", () => {
  describe("/GET products", () => {
    it("should get all the products", done => {
      chai.request(app)
        .get("/products")
        .end((err: any, res: any) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a("array");
          res.body.should.have.length(69);
          res.body[0].should.be.an("object");
          res.body[0].should.have.property("id").and.to.be.a("string");
          res.body[0].should.have.property("publisher").and.to.be.a("string");
          res.body[0].should.have.property("author").and.to.be.a("string");
          res.body[0].should.have.property("title").and.to.be.a("string");
          res.body[0].should.have.property("subtitle").and.to.be.a("string");
          res.body[0].should.have.property("volume").and.to.be.a("number");
          res.body[0].should.have.property("price").and.to.be.a("number");
          res.body[0].should.have
            .property("delivery_starts_at")
            .and.to.be.a.dateString();
          res.body[0].should.have
            .property("delivery_ends_at")
            .and.to.be.a.dateString();
          res.body[0].should.have.property("sample").and.to.be.a("object");
          res.body[0].title.should.equal("はなさかじいさん");
          res.body[1].title.should.equal("シンデレラ");
          res.body[2].title.should.equal("ウサギとカメ");
          done();
        });
    });

    it("should get wrong file format error", done => {
      const stub = sinon.stub(controller, "errorsDetail").returns(ERRORS_DETAIL);
      chai.request(app)
        .get("/products")
        .end((err, res) => {
          res.should.have.status(500);
          res.body.should.be.an("object");
          res.body.should.have.property("type")
            .eql("https://github.com/mediadotech/javascript_training/tree/CreateProductsInformationProgram/packages/product_information/resources/errors/wrong-file-format.md");
          res.body.should.have.property("title").eql("TSV file content is incorrect.");
          res.body.should.have.property("detail").eql(ERRORS_DETAIL);
          stub.restore();
          done();
        });
    });
  });

  describe("/GET/:id products", () => {
    it("should GET a product by the given id", done => {
      const id = "00287aky";
      chai.request(app)
        .get("/products/" + id)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.an("object");
          res.body.should.have.property("id").eql(id);
          res.body.should.have.property("publisher").eql("Toyboo!");
          res.body.should.have
            .property("author")
            .eql("たにぐちはじめ･かまだこうこ");
          res.body.should.have.property("title").eql("シンデレラ");
          res.body.should.have.property("subtitle").eql("本編");
          res.body.should.have.property("volume").eql(1);
          res.body.should.have.property("price").eql(1000);
          res.body.should.have.property("delivery_starts_at").eql("2017-06-01");
          res.body.should.have.property("delivery_ends_at").eql("2999-12-31");
          res.body.should.have.property("sample").and.to.be.a("object");
          res.body.sample.should.have.property("id").eql("00287akx");
          done();
        });
    });

    it("should get product not found error", done => {
      const id = "wrong-id";
      chai.request(app)
        .get("/products/" + id)
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.an("object");
          res.body.should.have.property("type")
            .eql("https://github.com/mediadotech/javascript_training/tree/CreateProductsInformationProgram/packages/product_information/resources/errors/product-not-found.md");
          res.body.should.have.property("detail").eql(`Product with id ${id} not found`);
          done();
        });
    });
  });

  describe("/wrong-url", () => {
    it("should get url not found error ", done => {
      chai.request(app)
        .get("/abc")
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.an("object");
          res.body.should.have.property("type")
            .eql("https://github.com/mediadotech/javascript_training/tree/CreateProductsInformationProgram/packages/product_information/resources/errors/url-not-found.md");
          res.body.should.have.property("detail").eql("Url is incorrect");
          done();
        });
    });
  });

});
