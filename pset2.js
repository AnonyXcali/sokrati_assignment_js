//Problem Set - 2
//object for the assignment :

var obj = { "total_price": total_price , 
            "items" : [
 				
 			]} ;


var total_item_price = 0;
var total_price = 0;
var item_qty = 0;
var item_name = "";
var unit_price = 0;
var cart = document.getElementsByClassName("pb-cart-item-add");
var total_cart = document.getElementsByClassName("pb-cart-summery-wrapper");
var re = /([,])/g;
var trash = document.getElementsByClassName("fa-trash");
var btnrmv = document.getElementsByClassName("btn-remove2");
var delUrl = "https://www.pipabella.com/checkout/cart/delete/id/506737/form_key/dd8caaef7d9c9a1c/uenc/aHR0cHM6Ly93d3cucGlwYWJlbGxhLmNvbS9jaGVja291dC9pY2FydC91cGRhdGVTaG9wcGluZ0NhcnQv"
var trashUrl = "";
var updtButton = document.getElementsByClassName("button-qty-update");


function priceUpdate(){
	total_price = total_cart[0].children[0].children[0].lastElementChild.lastElementChild.lastElementChild.lastElementChild.lastElementChild.lastElementChild.innerText;
	obj.total_price = Number((total_price.substr(1,total_price.length-1)).replace(re,""));
}


function unitPrice(qty,qtyPrice){
	return qtyPrice/qty;
}


//delete


for (var i = 0 ; i < trash.length-2; i++) {
   trash[i].addEventListener('click',function(){
   setTimeout(function(){
    alert("Item Deleted | Updated List in Console");
    makeTheObject();
    console.log(obj);
   }, 4000);
   });
}


//updateCart
var addBtn = document.getElementsByClassName("listing-add-to-bag-btn");
for(var i=0;i<addBtn.length-1;i++){
addBtn[i].addEventListener("click",function(){
    alert("Item Added | Updated List in Console");
   setTimeout(function(){
    makeTheObject();
    console.log(obj);
   }, 7000);
},false);
}


//

for (var i = 0 ; i < updtButton.length; i++) {
   updtButton[i].addEventListener('click',function(){
   	alert("Item Updated | Updated List In Console");
   setTimeout(function(){
    makeTheObject();
    console.log(obj);
   }, 3000);
    });
}


function makeTheObject(){
   
  priceUpdate();
    
	for(var i = 0; i <cart.length-1 ; i++){
    item_name = (cart[i].children[1].children[0].innerText).split("\n")[0];
    total_item_price = Number(((cart[i].children[1].children[0].innerText).split("\n")[1]).split(" ")[1]);
    item_qty = Number((cart[i].children[1].children[2].children[0].innerText).split(" ")[1]);
    unit_price = unitPrice(item_qty,total_item_price);
    

	obj.items[i] = { "product_name" : item_name ,
					"product_qty" :  item_qty,
                     "unit_price" :  unit_price,
                     "line_item_total" : total_item_price	  }

}
}




window.addEventListener("load",function(){

makeTheObject();
console.log(obj);

});



