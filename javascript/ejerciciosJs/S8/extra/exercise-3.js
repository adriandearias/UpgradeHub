let orders = []

const orders = fetch('http://localhost:3000/orders')
.then(res => res.json())


console.log(orders);