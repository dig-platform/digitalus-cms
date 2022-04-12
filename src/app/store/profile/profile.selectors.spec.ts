import * as fromProfile from './profile.reducer';
import { selectProfileState } from './profile.selectors';

describe('Profile Selectors', () => {
  it('should select the feature state', () => {
    const result = selectProfileState({
      [fromProfile.profileFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
