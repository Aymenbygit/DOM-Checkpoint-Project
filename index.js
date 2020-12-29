var add = document.querySelectorAll(".fa-plus-square");
var minus = document.querySelectorAll(".fa-minus-square");
var container = document.querySelectorAll(".container");
var qte = document.querySelectorAll('.qte');
var deletebtn = document.querySelectorAll('.deletebtn');
var card = document.querySelectorAll('.card');
var total = document.querySelector('.total');
var price = document.querySelector('.price');
var heart = document.querySelectorAll('.fa-heart');


/*function plus*/

Array.from(add).map(add => {
    add.addEventListener("click", () => {
        
        if (qte.value >= 0){
            qte.value = parseInt(qte.value)+1
        }
        
        total.innerHTML = (qte.value)*(price.innerHTML);
    })
})

// minus.addEventListener("click",()=>{
    
//     if(qte.value<0){
//         qte.value = 0;
//     }else if(qte.value>0){
//         qte.value = parseInt(qte.value)-1
//     }
    
//     total.innerHTML = (qte.value)*price.innerHTML;

// })


// heart.addEventListener("click",()=>{
//     heart.classList.toggle("mystyle");

//     // if( heart.classList.toggle === "far fa-heart mystyle"){
//     //     var row = document.createElement("span");
//     //     row.innerHTML = 'Item added'
//     // }
// })


Array.from(deletebtn).map(deletebtn => {
    deletebtn.addEventListener("click",()=>{
    deletebtn.parentElement.parentElement.remove();
})
})