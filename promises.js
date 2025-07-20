
// Simple example of a JavaScript Promise

// Create a promise that resolves after 2 seconds
const myPromise = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation using setTimeout
    setTimeout(() => {
        const success = true; // Change to false to see rejection
        if (success) {
            resolve('Promise resolved!'); // Success case
        } else {
            reject('Promise rejected!'); // Failure case
        }
    }, 2000);
});

// Using the promise
myPromise
    .then((message) => {
        // This runs if the promise is resolved
        console.log(message);
    })
    .catch((error) => {
        // This runs if the promise is rejected
        console.log(error);
    });
