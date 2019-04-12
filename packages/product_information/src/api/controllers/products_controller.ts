import * as express from "express";
import * as moment from "moment";
import * as path from "path";
import Books from "../books";
import validateLine from "../line_validate";
import readFile from "../read_file";

export const defaultPath = () => {
  return path.resolve(
    __dirname,
    "..",
    "..",
    "..",
    "resources",
    "permits.tsv"
  );
};

export const errorsDetail = () => {
  return readFile(defaultPath())
    .map(line => validateLine(line))
    .filter(err => err)
    // @ts-ignore
    .reduce((array, err) => array.concat(err.errorDetail), []);
};
const books = new Books(readFile(defaultPath()));

export const errors = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  if (errorsDetail().length !== 0) {
    res.setHeader("Content-Type", "application/problem+json");
    res.status(500).json({
      type: "https://github.com/mediadotech/javascript_training/tree/CreateProductsInformationProgram/packages/product_information/resources/errors/wrong-file-format.md",
      title: "TSV file content is incorrect.",
      detail: errorsDetail()
    });
  } else {
    next("route");
  }
};

export const get = (req: express.Request, res: express.Response) => {
  const booksJSON = JSON.stringify(books.bookList, REPLACER, 2);
  res.setHeader("Content-Type", "application/json");
  res.send(booksJSON);
};

export const detail = (req: express.Request, res: express.Response) => {
  const book = books.getBook(req.params.productId);
  if (book) {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(book, REPLACER, 2));
  } else {
    res.setHeader("Content-Type", "application/problem+json");
    res.status(404).json({
      type: "https://github.com/mediadotech/javascript_training/tree/CreateProductsInformationProgram/packages/product_information/resources/errors/product-not-found.md",
      detail: `Product with id ${req.params.productId} not found`
    });
  }
};

Date.prototype.toJSON = function() {return moment(this).format("YYYY-MM-DD");};

const REPLACER = (key:any, value: any) =>
{
  if(value && typeof value === "object" && !(value instanceof Array)) {
    return Object.keys(value)
      .filter(k => k !== "titleId" && k !== "bookSampleFlag" && k !== "bookFormat")
      .reduce((obj: { [x: string]: string }, k) => {
        obj[k.replace(/([A-Z])/g, (x, y: string) => "_" + y.toLowerCase())] = value[k];
        return obj;
      }, {});
  }
  return value;
};
