var mainNav=document.querySelector("#mainNav"),burgerBtn=document.querySelector("#burger-container button"),CanYouSeeMainNav=!1;function showNav(){!1===CanYouSeeMainNav?(console.log("show menu"),mainNav.classList.add("showMainNav"),CanYouSeeMainNav=!0):(console.log("hide menu"),mainNav.classList.remove("showMainNav"),CanYouSeeMainNav=!1)}burgerBtn.addEventListener("click",showNav);