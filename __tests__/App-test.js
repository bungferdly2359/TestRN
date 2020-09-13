import {addNumbers} from '../src/mathUtils';
import {track} from '../src/analyticsUtils';

jest.mock('../src/analyticsUtils');

test('add numbers', () => {
  expect(addNumbers(1, 2)).toEqual(3);
  expect(track).toBeCalledWith('addNumbers');
});
