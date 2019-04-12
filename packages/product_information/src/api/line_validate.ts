import COLUMN from "./column";
import {
  isANumber,
  isDateFormat,
  isDateTimeFormat,
  isNotEmpty,
  isPeriodColumnFormat,
  isTypeFormat,
} from "./column_validate";
import Errorline from "./errorline";
import Line from "./line";

const COLUMN_SIZE = 24;

const CHECKER = new Map([
  [COLUMN.ID, isNotEmpty],
  [COLUMN.FORMAT, isNotEmpty],
  [COLUMN.TYPE, isTypeFormat],
  [COLUMN.VOLUME, isANumber],
  [COLUMN.PRICE, isANumber],
  [COLUMN.DL_PERIOD, isPeriodColumnFormat],
  [COLUMN.DELIVERY_START_DATE, isDateFormat],
  [COLUMN.DELIVERY_END_DATE, isDateFormat],
  [COLUMN.PERMISSION_START_DATE, isDateFormat],
  [COLUMN.PERMISSION_END_DATE, isDateFormat],
  [COLUMN.UPDATE_TIME, isDateTimeFormat],
  [COLUMN.REGISTRATION_TIME, isDateTimeFormat],
]);

const validateLine: (line: Line) => Errorline | undefined = (line: Line) => {
  if (line.columnSize !== COLUMN_SIZE) {
    return new Errorline(line.index, [], line.columnSize);
  }

  const errorColumns = Array.from(CHECKER)
    .map(([column, predicate]) => {
      const value = line.getColumnValue(column);
      if (predicate(value)) {
        return [];
      } else {
        return [column, value];
      }
    })
    .filter(errs => errs.length !== 0);

  if (errorColumns.length !== 0) {
    return new Errorline(line.index, errorColumns);
  }
};

export default validateLine;
