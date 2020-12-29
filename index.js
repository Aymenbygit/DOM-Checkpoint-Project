var add = document.querySelector(".fa-plus-square");
var minus = document.querySelector(".fa-minus-square");
var container = document.querySelector(".container");
var qte = document.querySelector('.qte');
var deletebtn = document.querySelector('.deletebtn');
var card = document.querySelector('.card');
var total = document.querySelector('.total');
var price = document.querySelector('.price');
var i = 1;


add.addEventListener("click", () => {
    // var input = document.createElement("input");
    
    qte.innerHTML  = i++;
    total.innerHTML = (qte.innerHTML)*price.innerHTML;
})
minus.addEventListener("click",()=>{
    
    if(qte.innerHTML<0){
        qte.innerHTML = 0;
    }else if(qte.innerHTML>0){
        qte.innerHTML  = i--;
    }
    
    total.innerHTML = (qte.innerHTML)*price.innerHTML;

})
deletebtn.addEventListener("click",()=>{
    card.remove();
})

// function TotalPrice(){
//     var sum = 0;
//     sum = sum + qte.value;
//     total.value = sum;
//     console.log(total)
// }




