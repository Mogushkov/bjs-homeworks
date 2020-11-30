//TASK 2
function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
    // Замедление на половину секунды.
    sleep(100); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
  }
  
function compareArrays(arr1, arr2) {
    return arr1.every((n, i) => n === arr2[i]) && arr1.length === arr2.length;
}

function memorize(fn, limit) {
    const memory = [];
    return function (...args) {
        const findRes = memory.find(cell => compareArrays(cell.args, args));
        if (findRes) {
            return findRes.result;
        }
        const newResult = fn(...args);
        if (memory.length === limit) {
            memory.shift();
        }

        memory.push({
            args: args,
            result: newResult
        });
        return newResult;
    }
}

function testCase(func, timer) {
    const exampleArray = [[1, 2, 3], [1, 2], [1, 2, 3], [1, 2], [9, 5, 2, 4]];
    console.time(timer);
    for (let i = 0; i < 100; i++) {
        exampleArray.forEach(item => func(...item));
    }
    console.timeEnd(timer);
}