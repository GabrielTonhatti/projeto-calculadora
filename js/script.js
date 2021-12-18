const clear = document.querySelector('.clear');
const resultado = document.getElementById('resultado');
const nodeList = document.querySelectorAll('.botao');
const valorFinal = document.querySelector('.total');
const del = document.getElementsByClassName('botao-delete');
const ultimoCalculo = document.getElementById('calculo');
const negativoPositivo = document.querySelector('.negativo-positivo');
const valorInnerText = [];
const teclado = document.body;
let num = 0;
let num2 = '';
let num3 = 0;
let digito = '';
let total = 0;
let operadores = ['+', '-'];

function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
}

function isFloat(element) {
    for (let i = 0; i < element.length; i++) {
        if (element[i] === '.') {
            return true;
        }
    }
}

function calc() {

    if (digito.indexOf("%") !== -1) {

        console.log(digito.indexOf("%"));

        let porcentagem;
        let num4;

        if (digito.indexOf("*") !== -1) {

            console.log("digito: ", digito);
            console.log('teste: ', digito.substring(digito.indexOf("*") + 1, digito.indexOf("%")));
            porcentagem = parseFloat(digito.substring(0, digito.indexOf('*')));
            num4 = parseFloat(digito.substring(digito.indexOf("*") + 1, digito.indexOf("%")));


            console.log("num4:", num4);
            console.log("porcentagem:", porcentagem);

            digito = `${porcentagem} * (${num4} / 100)`;

            console.log(digito);

        } else if (digito.indexOf("/") !== -1) {
            console.log("digito: ", digito);
            console.log('teste: ', digito.substring(digito.indexOf("/") + 1, digito.indexOf("%")));
            porcentagem = parseFloat(digito.substring(0, digito.indexOf('/')));
            num4 = parseFloat(digito.substring(digito.indexOf("/") + 1, digito.indexOf("%")));


            console.log("num4:", num4);
            console.log("porcentagem:", porcentagem);

            digito = `${porcentagem} / (${num4} / 100)`;

            console.log(digito);
        }

        for (let j = 0; j < operadores.length; j++) {

            if (digito.indexOf(operadores[j]) !== -1) {
                porcentagem = parseFloat(digito.substring(0, digito.indexOf(operadores[j])));
                num4 = parseFloat(digito.substring(digito.indexOf(operadores[j]) + 1, digito.indexOf("%")));

                console.log("De: ", digito.indexOf(operadores[j]) + 1);
                console.log("até: ", digito.indexOf("%") - 1);
                console.log("Tamanho", digito.substring(digito.indexOf(operadores[j]) + 1, digito.indexOf("%")));
                console.log(num4);
                console.log(porcentagem);

                digito = digito.replace(num4 + "%", `(${porcentagem} * (${num4} / 100))`);

                console.log(digito);
                break;
            }
        }
    }

    ultimoCalculo.textContent = digito;
    total = digito;
    total = eval(total);
    digito = total;
    resultado.textContent = total;
    console.log(resultado);
}

console.log(nodeList);

nodeList.forEach(item => {
    valorInnerText.push(item.innerText);
});

console.log(valorInnerText);

clear.addEventListener('click', function () {
    digito = '';
    ultimoCalculo.textContent = '';
}, false);

for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].addEventListener('click', function () {
        if (!isNaN(valorInnerText[i])) {
            num = valorInnerText[i];
            num2 += num;
            digito += `${num}`;
            if (isFloat(num2)) {
                num3 = parseFloat(num2);
            } else {
                num3 = parseInt(num2);
            }
        }

        if (hasClass(nodeList[i], 'porcentagem')) {
            digito += `% `;
        } else if (hasClass(nodeList[i], 'divisao')) {
            digito += `/`;
        } else if (hasClass(nodeList[i], 'multi')) {
            digito += `*`;
        } else if (hasClass(nodeList[i], 'sub')) {
            digito += `-`;
        } else if (hasClass(nodeList[i], 'soma')) {
            digito += `+`;
        } else if (hasClass(nodeList[i], 'virgula')) {
            digito += `.`;
        }

        if (hasClass(nodeList[i], 'parenteses')) {
            if (digito.indexOf('(') === -1) {
                digito += '(';
            } else if (digito.indexOf(')') === -1) {
                digito += ')';
            }
        }

        resultado.textContent = digito;
        console.log("Digito: ", digito);
        console.log("Num: ", num);
        console.log("Num2: ", num2);

    }, false);
}

teclado.addEventListener('keydown', function (event) {
    const key = event.key;
    const code = event.keyCode;

    for (let i = 0; i < valorInnerText.length; i++) {
        if (key === valorInnerText[i] && key !== "=" && key !== ",") {
            digito += `${valorInnerText[i]}`;
        }
    }

    if (code === 8) {
        digito += "";
        digito = digito.slice(0, (digito.length - 1));
    }

    if (code === 46) {
        digito = '';
    }

    if (code === 111 || code === 191) {
        digito += `/`;
    }

    if (code === 106) {
        digito += `*`;
    }

    if (code === 56) {
        digito += `*`;
    }

    if (code === 13) {
        calc();
    }

    if (code === 57) {
        digito += `(`;
    }

    if (code === 48) {
        digito += `)`;
    }

    if (code === 188 || code === 190 || code === 108) {
        digito += `.`;
    }

    console.log(digito);
    console.log(event.keyCode);

    resultado.textContent = digito;

}, false);

valorFinal.addEventListener('click', calc, false);

del[0].addEventListener('click', function () {
    console.log(digito);
    digito += "";
    digito = digito.slice(0, (digito.length - 1));
    resultado.textContent = digito;
    console.log(digito)
}, false);

negativoPositivo.addEventListener('click', () => {

    if (digito.indexOf('-') !== -1) {
        digito = digito.substring(1);
    } else {
        digito = '-' + digito;
    }

    resultado.textContent = digito;

}, false);

console.log(del);