import { IsAdminDirective } from './is-admin.directive';

describe('IsAdminDirective', () => {
  it('should create an instance', () => {
    const directive = new IsAdminDirective(null, null, null);
    expect(directive).toBeTruthy();
  });
});
