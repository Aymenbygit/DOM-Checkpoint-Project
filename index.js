var add = document.querySelector(".fa-plus-square");
var minus = document.querySelector(".fa-minus-square");
var container = document.querySelector(".container");
var qte = document.querySelector('.qte');
var deletebtn = document.querySelector('.deletebtn');
var card = document.querySelector('.card');
var total = document.querySelector('.total');
var price = document.querySelector('.price');
var heart = document.querySelector('.fa-heart');
var i = 1;

add.addEventListener("click", () => {
    
    if (qte.value >= 0){
        qte.value = parseInt(qte.value)+1
    }
    
    total.innerHTML = (qte.value)*price.innerHTML;
})
minus.addEventListener("click",()=>{
    
    if(qte.value<0){
        qte.value = 0;
    }else if(qte.value>0){
        qte.value = parseInt(qte.value)-1
    }
    
    total.innerHTML = (qte.value)*price.innerHTML;

})
deletebtn.addEventListener("click",()=>{
    card.remove();
})
heart.addEventListener("click",()=>{
    heart.classList.toggle("mystyle");
})




