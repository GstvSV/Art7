
function menuMove(){
    const nav = document.querySelector(".nav");
    const ham = document.querySelector(".ham");
    const hamPartes = document.querySelectorAll(".ham div");
    const menu = document.querySelector(".menu");
    let status = false;

    nav.addEventListener("click", () => {
        if(status === false){
            hamPartes[0].style.transform = "translateY(5px) rotate(45deg)";
            hamPartes[1].style.opacity = 0;
            hamPartes[1].style.display = "none";
            hamPartes[2].style.transform = "translateY(-2px) rotate(-45deg)";
            menu.style.transform = "translateX(0)";
            status = true;
            
        }else if(status === true){
            hamPartes[0].style.transform = "translateY(0) rotate(0)";
            hamPartes[1].style.opacity = 1;
            hamPartes[1].style.display = "block";
            hamPartes[2].style.transform = "translateY(0) rotate(0)";
            menu.style.transform = "translateX(-100%)"
            status = false;
        }
    })
}

menuMove();