import COLUMN from "./column";

class Errorline {
  constructor(
    private readonly index: number,
    private readonly errorColumns: Array<Array<COLUMN|string>>,
    private readonly columnSize?: number
  ) {
    this.index = index;
    this.errorColumns = errorColumns;
    this.columnSize = columnSize;
  }

  get errorDetail(): string[] {
    const makeMessage = (column: COLUMN, value: string) => {
      if(column.name === COLUMN.ID.name || column.name === COLUMN.FORMAT.name) {
        return `「${column.name}」は空文字です。`;
      } else {
        return `「${column.name}」はおかしいです。${value}になっています。`;
      }
    };

    if(this.columnSize) {
      return [`${this.index}行目の列数はおかしいです。${this.columnSize}になっています。`];
    } else {
      return this.errorColumns
      // @ts-ignore
        .map(err => `${this.index}行目の${makeMessage(err[0], err[1])}`);
    }
  }
}

export default Errorline;