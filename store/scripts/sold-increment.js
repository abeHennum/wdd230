let button = document.getElementById("buy");

// Add an event listener to the button that will execute a function when clicked
button.addEventListener("click", function() {
  let ordercount = localStorage.getItem("site-orders")
      if (ordercount == null){
          ordercount = 0
      }
      else{
          ordercount = parseInt(ordercount)
      }
      ordercount = ordercount + 1
      localStorage.setItem("site-orders",`${ordercount}`)
      return ordercount
});
 


