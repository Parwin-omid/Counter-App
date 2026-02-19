const currentNum = document.getElementById('number');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');



let newNum;

// Increase
increaseBtn.addEventListener('click', function(){
    newNum = Number(currentNum.innerHTML) + 1;
currentNum.innerHTML = newNum
})

// Decrease
decreaseBtn.addEventListener('click', function(){
    newNum = Number(currentNum.innerHTML) - 1;
currentNum.innerHTML = newNum
})

// reset
resetBtn.addEventListener('click', function(){
    currentNum.innerHTML = 0
})