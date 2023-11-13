//alert("Hello Class!");

var mainNav= document.querySelector("#mainNav");

var burgerBtn=document.querySelector("#burger-container button");
console.log(burgerBtn);

var CanYouSeeMainNav=false;


function showNav(){
    //console.log("button clicked");

    if(CanYouSeeMainNav === false){
        console.log("show menu");

        mainNav.classList.add("showMainNav");
        CanYouSeeMainNav = true;
    }else{
        console.log("hide menu");
        
        mainNav.classList.remove("showMainNav");
        CanYouSeeMainNav = false;
    }
    
}

burgerBtn.addEventListener("click",showNav);

//showNav();