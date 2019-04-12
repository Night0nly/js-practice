import Book from "./book";
import Line from "./line";

class Books {
  private readonly bookListValue: Book[];
  constructor(lines: Line[]) {
    const books = lines.map(line => new Book(line));
    const map = new Map(
      books
        .filter(book => book.sampleFlag)
        .map(
          (sample): [string, Book] => [sample.sampleIdentificationKey, sample]
        )
    );

    this.bookListValue = books.filter(book => !book.sampleFlag).map(book => {
      const sample = map.get(book.sampleIdentificationKey);
      if (sample) {
        book.sampleValue = sample;
      }
      return book;
    });
  }

  get bookList(): Book[] {
    return this.bookListValue;
  }

  public getBook(id: string): Book | undefined {
    return this.bookListValue.find(book => book.idValue === id);
  }
}

export default Books;