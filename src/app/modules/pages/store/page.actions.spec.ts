import * as fromPage from './page.actions';

describe('loadPages', () => {
  it('should return an action', () => {
    expect(fromPage.loadPages().type).toBe('[Page] Load Pages');
  });
});
