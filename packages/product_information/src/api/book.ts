import COLUMN from "./column";
import Line from "./line";

class Book {
  private readonly id: string;
  private readonly publisher: string;
  private readonly author: string;
  private readonly bookSampleFlag: boolean;
  private readonly title: string;
  private readonly titleId: string;
  private readonly subtitle: string;
  private readonly volume: number;
  private readonly bookFormat: string;
  private readonly price: number;
  private readonly deliveryEndsAt: Date;
  private readonly deliveryStartsAt: Date;
  private sample: Book;
  constructor(line: Line) {
    this.id = line.getColumnValue(COLUMN.ID);
    this.publisher = line.getColumnValue(COLUMN.PUBLISHER);
    this.author = line.getColumnValue(COLUMN.AUTHOR);
    this.title = line.getColumnValue(COLUMN.TITLE);
    this.titleId = line.getColumnValue(COLUMN.TITLE_ID);
    this.subtitle = line.getColumnValue(COLUMN.SUBTITILE);
    this.bookFormat = line.getColumnValue(COLUMN.FORMAT);
    this.volume = Number(line.getColumnValue(COLUMN.VOLUME));
    this.price = Number(line.getColumnValue(COLUMN.PRICE));
    this.bookSampleFlag = line.getColumnValue(COLUMN.TYPE) === "サンプル";
    this.deliveryStartsAt = new Date(line.getColumnValue(COLUMN.DELIVERY_START_DATE));
    this.deliveryEndsAt = new Date(line.getColumnValue(COLUMN.DELIVERY_END_DATE));
  }

  get sampleIdentificationKey(): string {
    return this.bookFormat + this.titleId + this.volume;
  }

  get sampleFlag(): boolean {
    return this.bookSampleFlag;
  }

  get idValue(): string {
    return this.id;
  }

  set sampleValue(value: Book) {
    this.sample = value;
  }
}

export default Book;