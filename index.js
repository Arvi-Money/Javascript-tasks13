const button = document.querySelectorAll('.btn');
const card = document.querySelectorAll('.card');


function deleteCard(card) {
    const cards = document.querySelector('.cards');
    cards.removeChild(card);  
}


button.forEach(btn => {
    btn.addEventListener("click", function () {
        const card  = this.parentNode;
        if(confirm('Are you sure?')){
            deleteCard(card);
        }
 
    })
});