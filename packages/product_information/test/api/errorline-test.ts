import * as chai from 'chai';
import * as chaiThings from 'chai-things';
chai.use(chaiThings).should();
import Errorline from '../../src/api/errorline';
import COLUMN from "../../src/api/column";

const ERROR_DETAIL1 = new Errorline(1, [], 20).errorDetail;
const ERROR_DETAIL2 = new Errorline(2, [[COLUMN.ID, '  '], [COLUMN.TYPE, 'aaa'], [COLUMN.VOLUME, 'tt']]).errorDetail;

describe('ProductInformation#errorline', () => {
  describe('errorDetail', () => {
    it('amount of column error should include message', () => {
      ERROR_DETAIL1.should.include('1行目の列数はおかしいです。20になっています。');
    });

    it('column format error should include message', () => {
      ERROR_DETAIL2.should.include('2行目の「DL区分」はおかしいです。aaaになっています。');
      ERROR_DETAIL2.should.include('2行目の「通番」はおかしいです。ttになっています。');
      ERROR_DETAIL2.should.include('2行目の「ID」は空文字です。');
    });
  });
});
