const tipoMonedas = ['Ars', 'Real', 'Bs', 'Uyu', 'Py', 'Clp'];

for(let index = 0 ; index < tipoMonedas.length; index++){
    console.log(tipoMonedas[index]);
}

console.log(tipoMonedas.join("/"))

console.log(tipoMonedas.includes('usd'))