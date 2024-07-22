let orders = getNumberOfOrders()
let ordersSpan = document.getElementById("orders")
ordersSpan.innerText = orders


function getNumberOfOrders(){
    let ordercount = localStorage.getItem("site-orders")
        if (ordercount == null){
            ordercount = 0
        }
        else{
            ordercount = parseInt(ordercount)
        }
        // ordercount = ordercount + 1
        localStorage.setItem("site-orders",`${ordercount}`)
        return ordercount
}

