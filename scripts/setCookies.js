$(document).ready(function(){
    
    //document.cookie="cartCtr="+0;
    if (sessionStorage.getItem("defaultBouquetCtr") == null) {
        sessionStorage.setItem("defaultBouquetCtr", 0);
        console.log("setting defaultBouquetCtr...");
    }
    
    if (sessionStorage.getItem("customBouquetInCartCtr") == null) {
        sessionStorage.setItem("customBouquetInCartCtr", 0);
        console.log("setting customBouquetInCartCtr..." + sessionStorage.getItem("customBouquetInCartCtr"));
    }


});