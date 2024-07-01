let numbers = [];
let btn = document.getElementById('btn');


btn.addEventListener('click', function () {
    if (numbers.length >= 10) {
        btn.disabled = true;
    }
    let somma = 0;

    let number = document.getElementById('number').value;
    // console.log(number)

    numbers.push(number);

    for (i = 0; i < numbers.length; i++) {

        somma += parseInt(numbers[i]);
        console.log(somma)

        let result = document.getElementById('result');
        result.innerHTML = somma;
    }

})