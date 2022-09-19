// TODO: write your code here
export default class Validator {
  validateUsername(userName) {
    const expression = '/^[^\d_-]([^\.]|[\d{1,3}A-Za-z_-]+)[^\d_\.-]$/';
    const re = new RegExp(expression);
    return re.test(userName);
  }
}
