function addToCart(itemNum, price) {
    //alert("Clicked! " + itemNum + document.cookie);

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

}

function loadItemInfo(itemNum) {
    sessionStorage.setItem('currentShopItem', itemNum);
    location.href = "../pages/shop-item-info.html";
}