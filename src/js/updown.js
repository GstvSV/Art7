
const container = document.querySelector(".up");
let control = false;

container.addEventListener("click", () => {
    if(control == false){
        container.style.bottom = "90%";
        container.style.transform = "rotate(0)"
        container.href = "#fim"
        control = true;
    }else{
        container.style.bottom = "30px";
        container.style.transform = "rotate(180deg)"
        container.href = "#inicio"
        control = false;
    }
})