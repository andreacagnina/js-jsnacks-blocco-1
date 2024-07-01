let btn = document.getElementById('btn');


btn.addEventListener('click', function () {
    let number = document.getElementById('number').value;
    console.log(number)

    if (number.length == 4) {

        let somma = 0;

        MyElement = number.split("");
        console.log(MyElement)

        for (i = 0; i < MyElement.length; i++) {
            console.log(MyElement[i])
            somma += parseInt(MyElement[i]);
            console.log(somma)

            let result = document.getElementById('result');
            result.innerHTML = somma;
        }

    }

    else {
        let result = document.getElementById('result');
        result.innerHTML = "Devi inserire un numero a 4 cifre!";
    }


})