import Validator from '../app';

test.each([
  { userName: 'aeefGKJhbHkj133-kjf__12l', expected: true },
  { userName: 'ytghknlk', expected: true },
  { userName: 'dkdjfiJDK_224-df', expected: true },
  { userName: 'ETIhjko567_HJ22-KJ', expected: true },
  { userName: 'srrasA234i', expected: true },
  { userName: 'kl;dsjf', expected: false },
  { userName: 'jhdsjk11_', expected: false },
  { userName: '_ksaih-123', expected: false },
  { userName: '123456', expected: false },
  { userName: '-iusd98_-1', expected: false },
  { userName: 'dfHJJH.E', expected: false },
])('Validator should validate usernames', (userName, expected) => {
  const validator = new Validator();
  expect(validator.validateUsername(userName)).toBe(expected);
});
