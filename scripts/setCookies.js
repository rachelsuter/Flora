$(document).ready(function(){
    
    //document.cookie="cartCtr="+0;
    if (sessionStorage.getItem("defaultBouquetCtr") == null) {
        sessionStorage.setItem("defaultBouquetCtr", 0);
        console.log("setting defaultBouquetCtr...");
    }

});