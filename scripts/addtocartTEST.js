function addToCart(itemNum) {
    //alert("Clicked! " + itemNum + document.cookie);

    defaultBouquetCtr = parseInt(sessionStorage.getItem("defaultBouquetCtr")) + 1;
    sessionStorage.setItem("defaultBouquetCtr", defaultBouquetCtr);

    cartItemNum = "defaultBouquet" + defaultBouquetCtr;

    sessionStorage.setItem(cartItemNum, itemNum);

    //location.href = window.location.href;

}

function loadItemInfo(itemNum) {
    sessionStorage.setItem('currentShopItem', itemNum);
    location.href = "../pages/shop-item-info.html";
}