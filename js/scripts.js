/* =============
    Navigation
============= */

var mainNav= document.querySelector("#mainNav");
var signInContainer = document.querySelector("#signIn-container");
var burgerBtn=document.querySelector("#burger-container button");

var burgerBars=document.querySelector("#burger-bars");
var burgerX=document.querySelector("#burger-x");



var CanYouSeeMainNav=false;


function showNav(){
    //console.log("button clicked");

    if(CanYouSeeMainNav === false){
        console.log("show menu");

        mainNav.classList.add("showMainNav");
        signInContainer.classList.add("showSignIn");
        CanYouSeeMainNav = true;

        burgerBars.classList.add("hide-burger-bars");

        burgerX.classList.remove("hide-burger-x");


    }else{
        console.log("hide menu");
        
        mainNav.classList.remove("showMainNav");
        signInContainer.classList.remove("showSignIn");

        burgerBars.classList.remove("hide-burger-bars");

        burgerX.classList.add("hide-burger-x");




        CanYouSeeMainNav = false;
    }
    
}

burgerBtn.addEventListener("click",showNav);



/* =============
    Sign Up  
============= */
var signUpBtn= document.querySelector("#sign-up-btn");
var signUpContainer = document.querySelector("#sign-up-container")
var cancelSignInModalBtn = document.querySelector("#cancel-sign-in-modal-btn")

function showSignUpModal(){
    //console.log("show modal now");
    signUpContainer.classList.add("show-signUp-container");  
    mainNav.classList.remove("showMainNav");
    signInContainer.classList.remove("showSignIn");
    
}
function hideSignUpModal(){
    signUpContainer.classList.remove("show-signUp-container");

}

signUpBtn.addEventListener("click",showSignUpModal);
cancelSignInModalBtn.addEventListener("click", hideSignUpModal);