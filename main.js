let total = 0;
let quantity = 1;
const invoiceList = document.getElementById('invoice-list');
const totalElement = document.getElementById('total');

function generateInvoice(productName, price) {
    if (price > 0) {
        // Tambahkan item ke daftar faktur dan perbarui total
        const listItem = document.createElement(`li`);
        listItem.textContent = `${productName} : Rp. ${price} x ${quantity}`;
        invoiceList.appendChild(listItem);
      
        total += price * quantity;
      
        totalElement.textContent = `Total: Rp. ${total}`;
      }

      
    console.log(generateInvoice);   
  
}
    
  


    

