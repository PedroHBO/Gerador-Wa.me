var input = require('fs').readFileSync('numeroContato', 'utf8');
var line = input.split("");
var arr = [];
var newArr = [];
for (var i = 0; i < line.length; i++) {
    arr[i] = parseInt(line[i]);
    if (!isNaN(arr[i])) {
        newArr[i] = arr[i].toString();
    }
}
const tel = newArr.join("");

const user = 'Pedro Henrique';
 now = new Date
if (now.getHours() >= 7 && now.getHours() < 12) {
    console.log('//wa.me/+55' + tel + `?text=Bom%20dia,%20meu%20nome%20é%20${user},%20sou%20do%20setor%20de%20TI,%20recebi%20sua%20solicitação%20no%20fluig`);
}
else if (now.getHours() >= 12 && now.getHours() < 18) {
    console.log('//wa.me/+55' + tel + `?text=Boa%20tarde,%20meu%20nome%20é%20${user},%20sou%20do%20setor%20de%20TI,%20recebi%20sua%20solicitação%20no%20fluig`);
}
else{
    console.log('//wa.me/+55' + tel + `?text=Boa%20noite,%20meu%20nome%20é%20${user},%20sou%20do%20setor%20de%20TI,%20recebi%20sua%20solicitação%20no%20fluig`);
}


