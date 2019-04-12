import * as moment from "moment";

const DATE_FORMAT = "YYYY/MM/DD";
const DATE_TIME_FORMAT = "YYYY/MM/DD hh:mm:ss";
const SAMPLE_VALUE = "サンプル";
const BOOK_VALUE = "DL";
const NO_PERIOD_VALUE = "無期限";

export const isNotEmpty = (value: string) => !!value.trim();

export const isANumber = (value: string) =>
  isNotEmpty(value) && !Number.isNaN(Number(value));

export const isDateFormat = (value: string) =>
  moment(value, DATE_FORMAT, true).isValid();

export const isDateTimeFormat = (value: string) =>
  moment(value, DATE_TIME_FORMAT, true).isValid();

export const isPeriodColumnFormat = (value: string) =>
  isNotEmpty(value) && (isANumber(value) || value === NO_PERIOD_VALUE);

export const isTypeFormat = (value: string) =>
  isNotEmpty(value) && (value === BOOK_VALUE || value === SAMPLE_VALUE);
