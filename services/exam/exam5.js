class Exam5Service {

    async exec() {
      let arr = [1, 2, 3];
      let sum = arr.reduce((acc, num) => acc + num, 0);
  
      const intervalPromises = arr.map(num => this.runInterval(num));
      let intervals = await Promise.all(intervalPromises);
  
      // Return a promise that resolves when all intervals have finished
      return new Promise((resolve) => {
        setTimeout(() => {
          this.clearAllIntervals(intervals);
          console.log("All functions done together");
          resolve("All functions done together");
        }, (sum + 1) * 1000);
      });
    }
  
    runInterval(num) {
      return new Promise(resolve => {
        const intervalId = setInterval(() => {
          console.log(`${num}s function done`);
        }, num * 1000);
        resolve(intervalId);
      });
    }
  
    clearAllIntervals(intervalIds) {
      intervalIds.forEach(clearInterval);
    }
  }
  
  module.exports = Exam5Service;