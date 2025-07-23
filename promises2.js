const myPromise = new Promise((resolve, reject) => {
   
        const success = true;
        if (success) {
            resolve("Promise passed");
        } else {
            reject("Promise Rejected");
        }
    }, );


myPromise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });