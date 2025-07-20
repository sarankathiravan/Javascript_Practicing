let num = [8, 9, 6, 3, 2, 1];

for (let i = 0; i < num.length - 1; i++) {
    for (let j = 0; j < num.length - i - 1; j++) {
        if (num[j] > num[j + 1]) {
            let temp = num[j];
            num[j] = num[j + 1];
            num[j + 1] = temp;
        }
    }
}
console.log("Sorted array:", num);
