Orders.foreach(order =>{
  const tr = document.createElement('tr');
  const trContent = `
    <td>${order.productName}</td>
    <td>${order.productNumber}</td>
    <td>${order.paymentStatus}</td>
    <td class="${order.status}">${order.productName}</td>
  ` 
})