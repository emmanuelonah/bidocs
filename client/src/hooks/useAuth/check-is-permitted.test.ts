import { checkIsPermitted } from './check-is-permitted.util';

describe('checkIsPermitted', () => {
  const permissions = [2, 3, 4, 5, 6, 7];
  it('should pass when permitted payload is FOUND in my permissions', () => {
    const isPermitted = checkIsPermitted(permissions, 2);

    expect(isPermitted).toBeTruthy();
  });

  it('should fail when permitted payload is NOT FOUND in my permissions', () => {
    const isPermitted = checkIsPermitted(permissions, 9);

    expect(isPermitted).toBeFalsy();
  });
});
