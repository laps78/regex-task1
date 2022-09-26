// TODO: write your code here
export default class Validator {
  static validateUsername(userName) {
    return /^[^\d_-]([a-zA-Z\-_]+\d{0,3})+[^\d_-]$/.test(userName);
  }
}
