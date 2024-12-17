const containsOnlyDigits = (str) => {
    const regExp = /^\d+$/;
    return regExp.test(str);
};

console.log(containsOnlyDigits("52575467534564398"));
console.log(containsOnlyDigits("12afajsdfla45"));
console.log(containsOnlyDigits("jgkfjgdkfjgd"));
console.log(containsOnlyDigits("95848036592398707231325"));


//----------------------------------------------------------------



let secondsPassed = 0;

const startTimer = () => {
    setInterval(() => {
        secondsPassed++;
        console.log(`Прошла секунда`);
    }, 1000);
};
// __________________________________________________________________
startTimer();

const count = () => {
    let i = 1;
    const interval = setInterval(() => {
        console.log(i);
        if (i === 10) {
            clearInterval(interval);
        }
        i++;
    }, 1000);
};

count();


// ___________________________________________________________________________

const block = document.getElementById('colorBlock');

block.addEventListener('click', () => {
    block.classList.toggle('highlight');
});

