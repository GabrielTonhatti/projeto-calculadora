const clear = document.querySelector('.clear');
const resultado = document.getElementById('resultado');
const nodeList = document.querySelectorAll('li');
const nodeListNums = document.querySelectorAll('.numeros');
const valorFinal = document.querySelector('.total');
let num = 0;
let digito = '';
let total = 0;

console.log(nodeList);
console.log(nodeListNums);

clear.addEventListener('click', function () {
    digito = '';
}, false);

function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
}

for (let i = 0; i < nodeList.length; i++) {
    console.log(hasClass(nodeList[i], 'clear'));

    nodeList[i].addEventListener('click', function () {
        if (hasClass(nodeList[i], 'clear')) {
            digito = '';
        } else if (hasClass(nodeList[i], 'num1')) {
            num = 1;
            digito += `${num}`;
            total = num;
        } else if (hasClass(nodeList[i], 'num2')) {
            num = 2;
            digito += `${num}`;
            total = num;
        } else if (hasClass(nodeList[i], 'num3')) {
            num = 3;
            digito += `${num}`;
            total = num;
        } else if (hasClass(nodeList[i], 'num4')) {
            num = 4;
            digito += `${num}`;
            total = num;
        } else if (hasClass(nodeList[i], 'num5')) {
            num = 5;
            digito += `${num}`;
            total = num;
        } else if (hasClass(nodeList[i], 'num6')) {
            num = 6;
            digito += `${num}`;
            total = num;
        } else if (hasClass(nodeList[i], 'num7')) {
            num = 7;
            digito += `${num}`;
            total = num;
        } else if (hasClass(nodeList[i], 'num8')) {
            num = 8;
            digito += `${num}`;
            total = num;
        } else if (hasClass(nodeList[i], 'num9')) {
            num = 9;
            digito += `${num}`;
            total = num;
        } else if (hasClass(nodeList[i], 'zero')) {
            num = 0;
            digito += `${num}`;
            total = num;
        } else if (hasClass(nodeList[i], 'soma')) {
            digito += ` + `;
            total += num;
        } else if (hasClass(nodeList[i], 'sub')) {
            digito += ` - `;
            total -= num;
        } else if (hasClass(nodeList[i], 'multi')) {
            digito += ` X `;
            total *= num;
        } else if (hasClass(nodeList[i], 'divisao')) {
            digito += ` / `;
            total = num;
        } else if (hasClass(nodeList[i], 'porcentagem')) {
            digito += ` % `;
            total = num;
        } else if (hasClass(nodeList[i], 'parenteses')) {
            digito += ` ( ) `;
            total = num;
        } else if (hasClass(nodeList[i], 'virgula')) {
            digito += `.`;
        }

        resultado.textContent = digito;
        console.log(total);

    }, false);
}
valorFinal.addEventListener('click', function () {
    resultado.textContent = total;
}, false)