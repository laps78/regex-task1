import Validator from '../app';

test('Validate usernames', () => {
  expect(Validator.validateUsername('aeefGKJhbHkj133-kjf__12l')).toBe(true);
  expect(Validator.validateUsername('ytghknlk')).toBe(true);
  expect(Validator.validateUsername('dkdjfiJDK_224-df')).toBe(true);
  expect(Validator.validateUsername('ETIhjko567_HJ22-KJ')).toBe(true);
  expect(Validator.validateUsername('srrasA234i')).toBe(true);
  expect(Validator.validateUsername('kl;dsjf')).toBe(false);
  expect(Validator.validateUsername('hdsjk11')).toBe(false);
  expect(Validator.validateUsername('_ksaih-123')).toBe(false);
  expect(Validator.validateUsername('123456')).toBe(false);
  expect(Validator.validateUsername('-iusd98_-1')).toBe(false);
  expect(Validator.validateUsername(';dfHJJH.E')).toBe(false);
})
