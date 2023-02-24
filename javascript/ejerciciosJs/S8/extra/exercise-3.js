const body = document.querySelector('body');
const divContent = document.createElement('div');
body.appendChild(divContent);

async function getOrders(){
    const res = await fetch(`http://localhost:3000/orders`)
    const json = await res.json()   
    return json
}

async function getProducts(){
    const res = await fetch(`http://localhost:3000/products`)
    const json = await res.json()   
    return json
}

const getProductId = (order) => {
    for (const product of order.products) {
        return product.id
    }
}

const getProductQuantity = (order) => {
    for (const product of order.products) {
        return product.quantity
    }
}

const drawOrders = (arrayOrders, arrayProducts) => {
    for (const order of arrayOrders) {
        console.log(order.id, order.date);
        const divOrder = document.createElement('div');
        const span = document.createElement('span');
        divContent.appendChild(divOrder);
        divOrder.appendChild(span);

        const productId = getProductId(order);
        const productQuantity = getProductQuantity(order);

        console.log('hola',productQuantity);

        span.innerHTML = `ID: ${order.id} - Fecha: ${order.date} - Cantidad: ${productQuantity}`;
    }
}


window.addEventListener("DOMContentLoaded", async () => {
    console.log("DOM fully loaded and parsed");
    const arrayOrders = await getOrders();
    const arrayProducts = await getProducts();

    //Sort orders desc. by date
    arrayOrders.sort((a,b) => {
        var dateA = new Date(a.date);
        var dateB = new Date(b.date);
        return dateA + dateB
    })
    drawOrders(arrayOrders, arrayProducts)
});
