module.exports = class TestService {

  multiplyNum(num, multiplyBy) {
    return num * multiplyBy;
  }

  saveNum(num, saveTo) {
    return new Promise((resolve) => {
      setTimeout(() => {
        saveTo.push(num);
        resolve('Saved');
      }, 1000);
    })
  }

  multiplyAndSave(num, multiplyBy, saveTo) {
    const res = this.multiplyNum(num, multiplyBy);
    this.saveNum(res, saveTo);
    return res;
  }
}