module.exports = class Time {

  getTime() {
    const date = new Date();
    return date.toLocaleString();
  }

}