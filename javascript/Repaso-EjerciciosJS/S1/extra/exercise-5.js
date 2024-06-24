const products = [
  { name: "Gorra de rodilla", sellCount: 10 },
  { name: "Pantalón de pana", sellCount: 302 },
  { name: "Reloj de papel albal", sellCount: 23 },
  { name: "Inpar de zapatos", sellCount: 6 },
];

let ventasTotales = 0;

for (let i = 0; i < products.length; i++) {
  ventasTotales += products[i].sellCount;
}

const mediaVentas = (totalProductos, ventas) => {
  return ventas / totalProductos;
};

console.log(mediaVentas(products.length, ventasTotales));
