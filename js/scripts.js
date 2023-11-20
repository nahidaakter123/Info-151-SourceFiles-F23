//alert("Hello Class!");

var mainNav= document.querySelector("#mainNav");
//var signInContainer = document.querySelector("signIn-container");

var burgerBtn=document.querySelector("#burger-container button");
//console.log(burgerBtn);

var CanYouSeeMainNav=false;


function showNav(){
    //console.log("button clicked");

    if(CanYouSeeMainNav === false){
        console.log("show menu");

        mainNav.classList.add("showMainNav");
        //signInContainer.classList.add("showSignIn");
        CanYouSeeMainNav = true;

    }else{
        console.log("hide menu");
        
        mainNav.classList.remove("showMainNav");
        //signInContainer.classList.remove("showSignIn");

        CanYouSeeMainNav = false;
    }
    
}

burgerBtn.addEventListener("click",showNav);

//showNav();