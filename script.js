//"use strict";

//promise

function promiseCb(resolve, reject) {
  //resolve('sucess result');
  reject(new Error("err"));
}

const promise = new Promise(promiseCb);

promise.then((data) => console.log(data)).catch((err) => console.log(err));

// promise - Schroedinger's cat

const schredCat = new Promise((resolve, reject) => {
  if (Math.random() < 0.5) {
    resolve("cat is alive");
  } else {
    reject(new Error("cat isn't alive "));
  }
})
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//Промісифікація

function delay(ms) {
  const executor = function (res, rej) {
    if (typeof ms !== "number") {
      rej(new TypeError("ms is NaN"));
    }
    if (ms < 0 || !Number.isInteger(ms)) {
      rej(new RangeError("ms must be positive integer"));
    }

    setTimeout(res, ms);
  };

  return new Promise(executor);
}

delay(1000)
  .then(() => console.log("over"))
  .catch((err) => console.log(err));
