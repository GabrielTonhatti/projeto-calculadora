const clear = document.querySelector('.clear');
const resultado = document.getElementById('resultado');
const nodeList = document.querySelectorAll('li');
const valorFinal = document.querySelector('.total');
const valorInnerText = [];
let num = 0;
let num2 = '';
let num3 = 0;
let digito = '';
let total = 0;
let operadores = ['+', '-', '/'];

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

console.log(nodeList);

nodeList.forEach(item => {
    valorInnerText.push(item.innerText);
});

console.log(valorInnerText);

clear.addEventListener('click', function () {
    digito = '';
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
            digito += ` / `;
        } else if (hasClass(nodeList[i], 'multi')) {
            digito += ` X `;
        } else if (hasClass(nodeList[i], 'sub')) {
            digito += ` - `;
        } else if (hasClass(nodeList[i], 'soma')) {
            digito += ` + `;
        } else if (hasClass(nodeList[i], 'virgula')) {
            digito += `.`;
        }

        if(hasClass(nodeList[i], 'parenteses')) {
            if(digito.indexOf('(') === -1) {
                digito += ' (';
            } else if(digito.indexOf(')') === -1) {
                digito  += ') ';
            }
        }

        resultado.textContent = digito;
        console.log("Digito: ", digito);
        console.log("Num: ", num);
        console.log("Num2: ", num2);

    }, false);
}

valorFinal.addEventListener('click', function () {

    if (digito.indexOf("%") !== -1) {
        
        console.log(digito.indexOf("%"));

        for (let j = 0; j < operadores.length; j++) {

            let porcentagem;
            let num4;

            if(digito.indexOf("X") !== -1) {

                porcentagem = parseFloat(digito.substring(0, digito.indexOf('X') - 1));
                num4 = parseFloat(digito.substring(digito.indexOf("X") + 1, digito.indexOf("%")));

                console.log(num4);
                console.log(porcentagem);

                digito = `${porcentagem} * (${num4} / 100)`;

                console.log(digito);

            }else if (digito.indexOf(operadores[j]) !== -1) {
                porcentagem = parseFloat(digito.substring(0, digito.indexOf(operadores[j]) - 1));
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

    total = digito.replace('X', '*');
    total = eval(total);
    resultado.textContent = total;
    digito = total;
    console.log(resultado);
}, false);
