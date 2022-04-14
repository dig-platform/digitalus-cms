import * as fromDig from './dig.actions';

describe('loadDigs', () => {
  it('should return an action', () => {
    expect(fromDig.loadDigs().type).toBe('[Dig] Load Digs');
  });
});
