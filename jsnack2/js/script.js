let numbers = [];
let btn = document.getElementById('btn')


btn.addEventListener('click', function () {

    let number = document.getElementById('number').value;
    console.log(number)

    if (number % 2 !== 0) {
        console.log('dispari')
        numbers.push(number);
    }

    console.log(numbers)
})