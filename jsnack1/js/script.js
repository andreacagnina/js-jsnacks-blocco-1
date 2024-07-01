let btn = document.getElementById('btn');
let vip = ['andrea', 'mario', 'girolamo', 'giacinto', 'filippo', 'osvaldino'];
console.log(vip);

btn.addEventListener('click', function () {

    let name = document.getElementById('name').value.toLowerCase();

    console.log(name);

    // *MOD invece che utilizzare il ciclo FOR ho applicato includes, argomento utilizzato oggi a lezione.

    // for (let i = 0; i < vip.length; i++) {
    //     if (vip[i] == name) {
    //         console.log('Puoi partecipare alla festa');
    //     }

    //     else {
    //         console.log('Non puoi partecipare alla festa');
    //     }
    // }

    let checkName = vip.includes(name);

    if (checkName) {
        console.log('Puoi partecipare alla festa');
    }

    else {
        console.log('Non puoi partecipare alla festa');
    }

})

