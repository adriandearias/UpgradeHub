//Segun la siguiente lista, ordena los elementos en base a la propiedad .order.

const list = [
    {name: "La tulipán", gender: "pop", order: 3},
    {name: "Calle falsa 123", gender: "rap", order: 2},
    {name: "Z balvin", gender: "reggeaton", order: 4},
    {name: "Neng de castefa", gender: "pop", order: 1}
]

let orderedByOrder = list.slice()
orderedByOrder.sort(function(itemA,itemB){
    return itemA.order - itemB.order
});

console.log('orderedByOrder:');
console.log(orderedByOrder);


