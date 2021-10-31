//iniatialize the variables
const btnMenu = document.querySelector("#btnMenu");
const btnOrders = document.querySelector("#btnOrders");

//initialize common functions
const togButtons = () => {
    btnMenu.classList.toggle("btn-primary");
    btnMenu.classList.toggle("btn-secondary");

    btnOrders.classList.toggle("btn-primary");
    btnOrders.classList.toggle("btn-secondary");
}

btnMenu.addEventListener("click", function(){
    togButtons();
});

btnOrders.addEventListener("click", function(){
    togButtons();
});
