//Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .includes de javascript.
const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
const contieneCamiseta = []
for (const product of products) {
    if (product.includes('Camiseta')) {
        contieneCamiseta.push(product)
        console.log(product);
    }
}
//Muestro el array que he creado para almacenar las que contienen camisetas
console.log(contieneCamiseta);

