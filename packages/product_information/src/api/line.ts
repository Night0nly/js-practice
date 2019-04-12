import COLUMN from "./column";

class Line {
  private readonly columns: string[];
  constructor(private readonly lineIndex: number, value: string) {
    this.lineIndex = lineIndex;
    this.columns = value.split("\t");
  }

  get index(): number {
    return this.lineIndex;
  }

  public getColumnValue(column: COLUMN): string {
    return this.columns[column.position];
  }

  get columnSize(): number {
    return this.columns.length;
  }
}

export default Line;