let btn = document.getElementById('btn');


btn.addEventListener('click', function () {
    let somma = 0;

    let number = document.getElementById('number').value;
    console.log(number)

    MyElement = number.split("");
    console.log(MyElement)

    for (i = 0; i < MyElement.length; i++) {
        // console.log(MyElement[i])
        somma += parseInt(MyElement[i]);
        console.log(somma)

        let result = document.getElementById('result');
        result.innerHTML = somma;
    }


})