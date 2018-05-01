document.addEventListener("DOMContentLoaded", function() {


    let buttons = document.querySelectorAll('button');
    let count = document.querySelector('#count');
    let clean = document.querySelector('.clean');
    let result = document.querySelector('.result');
    let sum = 0;

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            count.value += this.dataset.val
        });
    }
    clean.addEventListener('click',function () {
        count.value = '';
    })
    result.addEventListener('click', function () {
        sum = eval(count.value);
        count.value = sum
    })


});