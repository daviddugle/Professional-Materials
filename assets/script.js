//mobile menu
var burgerList =document.getElementById("nav-links");

$("#burger").on("click",function(){
    burgerList.classList.toggle("is-active");
});


// modal pop out

var modBG =document.querySelector("#modal-back");
var modal = document.querySelector(".modal");

$("#cont-info").on("click", function(){
    modal.classList.add("is-active");    
});
$(modBG).on("click", function(){
    modal.classList.remove("is-active");
});