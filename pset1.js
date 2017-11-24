//Problem Set - 1

let product_cost = 0 ;
let product_ctgry = "";
let product_name = "";


const targetButton = document.getElementById("add_to_bag");

function getProductTitle(titleTag){
	var nameTag = document.getElementsByClassName(titleTag);
	var nameRecvd = nameTag[0].innerText;
	return nameRecvd;
}


function getPrice(className){
 
  var priceTag = document.getElementsByClassName(className);
  // console.log(priceTag);
  var price = priceTag[0].innerText;
  return price;
 
}

function getCategory(prod_id){

  var prod = prod_id.split(" ");
  var catg = prod[prod.length-1];
  return catg;

}

targetButton.addEventListener("click", function(){
    
    product_cost = getPrice("price");
    product_name = getProductTitle("pb-product-title");
    product_ctgry = getCategory(product_name);
    
    //CONSOLE OUTPUT 
    console.log("Category : " + product_ctgry)
    console.log("Name : " + product_name);
    console.log("Price (INR) : " + product_cost);
    //------------------------
}); 
