function quick_add_click(itemNum, price)
{
    alert("quick add");

    defaultBouquetCtr = parseInt(sessionStorage.getItem("defaultBouquetCtr")) + 1;
    sessionStorage.setItem("defaultBouquetCtr", defaultBouquetCtr);

    cartItemNum = "defaultBouquet" + defaultBouquetCtr;

    sessionStorage.setItem(cartItemNum, itemNum);

    if (sessionStorage.getItem("cartTotal") == null) {
        sessionStorage.setItem("cartTotal", 0);
    }
    cartTotal = parseInt(sessionStorage.getItem("cartTotal"));
    cartTotal += parseInt(price);
    sessionStorage.setItem("cartTotal", cartTotal);
    console.log(sessionStorage.getItem("cartTotal"));

    //location.href = window.location.href;
    quickAddToCartSuccess();
}
function image_click(itemNum)
{
    alert("image");
    sessionStorage.setItem("currentShopItem", itemNum);
    location.href = "../pages/shop-item-info.html";
}
function quickAddClickTest () {

   
    /*
    var elementClicked;
    $("quick-add-btn").click(function(){
    elementClicked = true;
    });
    if( elementClicked != true ) {
        alert("element not clicked");
    }else{
        alert("element clicked");
    }*/
}
function addToCart(itemNum, price) {
    //alert("Clicked! " + itemNum + document.cookie);
    var elementClicked;
    $("quick-add-btn").click(function(){
    elementClicked = true;
    });
    if( elementClicked != true ) {
        alert("element not clicked");
    }else{
        alert("element clicked");
    }

    defaultBouquetCtr = parseInt(sessionStorage.getItem("defaultBouquetCtr")) + 1;
    sessionStorage.setItem("defaultBouquetCtr", defaultBouquetCtr);

    cartItemNum = "defaultBouquet" + defaultBouquetCtr;

    sessionStorage.setItem(cartItemNum, itemNum);

    if (sessionStorage.getItem("cartTotal") == null) {
        sessionStorage.setItem("cartTotal", 0);
    }
    cartTotal = parseInt(sessionStorage.getItem("cartTotal"));
    cartTotal += parseInt(price);
    sessionStorage.setItem("cartTotal", cartTotal);
    console.log(sessionStorage.getItem("cartTotal"));

    //location.href = window.location.href;
    quickAddToCartSuccess();

}

function quickAddToCartSuccess() {
    swal("Item added to cart!", {
        buttons: false,
        timer: 1300,
      });
}

function loadItemInfo(itemNum) {
    sessionStorage.setItem('currentShopItem', itemNum);
    location.href = "../pages/shop-item-info.html";
}