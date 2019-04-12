class COLUMN {
  constructor(
    private readonly positionValue: number,
    private readonly nameValue: string
  ) {
    this.positionValue = positionValue;
    this.nameValue = nameValue;
  }
  static get ID() {
    return new COLUMN(0, "ID");
  }
  static get PUBLISHER() {
    return new COLUMN(3, "出版社");
  }
  static get AUTHOR() {
    return new COLUMN(5, "作者");
  }
  static get TITLE_ID() {
    return new COLUMN(6, "タイトルID");
  }
  static get TITLE() {
    return new COLUMN(7, "タイトル名");
  }
  static get FORMAT() {
    return new COLUMN(8, "フォーマット");
  }
  static get TYPE() {
    return new COLUMN(10, "DL区分");
  }
  static get VOLUME() {
    return new COLUMN(11, "通番");
  }
  static get SUBTITILE() {
    return new COLUMN(12, "配信許諾名");
  }
  static get PRICE() {
    return new COLUMN(16, "価格");
  }
  static get DL_PERIOD() {
    return new COLUMN(17, "DL期限");
  }
  static get PERMISSION_START_DATE() {
    return new COLUMN(18, "許諾開始日");
  }
  static get PERMISSION_END_DATE() {
    return new COLUMN(19, "許諾終了日");
  }
  static get DELIVERY_START_DATE() {
    return new COLUMN(20, "配信開始日");
  }
  static get DELIVERY_END_DATE() {
    return new COLUMN(21, "配信終了日");
  }
  static get REGISTRATION_TIME() {
    return new COLUMN(22, "登録日時");
  }
  static get UPDATE_TIME() {
    return new COLUMN(23, "更新日時");
  }

  get position(): number {
    return this.positionValue;
  }

  get name(): string {
    return this.nameValue;
  }

}

export default COLUMN;
