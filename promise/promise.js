let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let i = 0;

// function myPromise() {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             resolve(array[i])
//         }, 1000)
//     }).then(res => {
//         console.log(res)
//         i++;
//         if(i == 5) return error()
//         if(i <= 10) return myPromise()
//     })
// }

// function error() {
//     return new Promise((resolve,reject) => {
//         resolve('出错了')
//     })
// }

// myPromise().then(res => {
//     console.log("结尾")
// }).catch(error => {
//     console.log(error)
// })


function eachSeries(tasks, callback) {
    return new Promise((resolve, revoke) => {
        let tasksSet = [];
        for (let key in tasks) {
            tasksSet.push({
                key,
                value: tasks[key]
            });
        }
        let length = tasksSet.length;
        let run = (n) => {
            let task = tasksSet[n];
            callback(task.value, task.key, (error) => {
                console.log("error", error)
                if (error) {
                    revoke(error);
                } else if (n < length - 1) {
                    n++;
                    run(n);
                } else {
                    resolve();
                }
            });
        }
        if (length > 0) {
            run(0);
        } else {
            resolve();
        }
    });
}

function name() {

}
eachSeries([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], (value, key, callback) => {
    console.log(value, key);
    if (key == 5) {
        return callback('出错了');
    }
    setTimeout(callback, 1000);
}).then(() => {
    console.log('done');
}).catch(error => {
    console.error(error);
});




// .then(res => {
//     console.log("结尾")
// }).catch(error => {
//     console.log(error)
// })

// .then(res => {
//     console.log(res)
//     i++;
//     return myPromise(i)
// }).then(res => {
//     console.log(res)
//     i++;
//     return myPromise(i)
// }).then(res => {
//     console.log(res)
//     i++;
//     return myPromise(i)
// }).then(res => {
//     console.log(res)
//     i++;
//     return myPromise(i)
// }).then(res => {
//     console.log(res)
//     i++;
//     return myPromise(i)
// }).then(res => {
//     console.log(res)
//     i++;
//     return myPromise(i)
// }).then(res => {
//     console.log(res)
//     i++;
//     return myPromise(i)
// }).then(res => {
//     console.log(res)
//     i++;
//     return myPromise(i)
// }).then(res => {
//     console.log(res)
//     i++;
//     return myPromise(i)
// }).then(res => {
//     console.log(res)
//     i++;
//     return myPromise(i)
// })