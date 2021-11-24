function itemInfoAddToCart(itemNum, price) {

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
    addToCartSuccess();
}

function addToCartSuccess() {
    swal("Item added to cart!", {
        buttons: false,
        timer: 1300,
    });
}