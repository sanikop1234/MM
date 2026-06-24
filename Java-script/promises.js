let myPromise  = new Promise((resolve, reject) => {
    let app = "BMS";
    if(app === 'BMS') {
        resolve();
    } else {
        reject(new Error("result not found"));
        
    }
});
myPromise
.then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Open Book my show");
            resolve();
        }, 2000)
    });
})
.then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Select the Movie - 3s");
        }, 3000)
    });
})
.then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("select seat - 5s");
        }, 5000)
    });
})
.then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Book the tickets -1s");
        }, 1000)
    });
})

.catch((e) =>  {
    console.log("Error:", e.message);
}) 

.finally(() => {
    console.log("close App");
})

