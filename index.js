




function menuMove(){
    const ham = document.querySelector(".ham");
    const hamPartes = document.querySelectorAll(".ham div");
    const menu = document.querySelector(".menu");
    let status = false;

    ham.addEventListener("click", () => {
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

function showDetails(){
    const details = document.querySelector(".details");
    const detailsContainer = document.querySelector(".details-container");
    const detailsTexto = document.querySelector(".details-texto");
    let cont = 0;


    details.addEventListener("click", () =>{
        
        if(cont % 2 ===0){
            details.innerHTML = "- detalhes";   
            detailsTexto.style.opacity = 1;
            detailsContainer.style.borderLeft = "2px solid var(--corSecundaria)";
        }else{
            details.innerHTML = "+ detalhes";
            detailsTexto.style.opacity = 0;
            detailsContainer.style.borderLeft = "none";
        }
        cont++;
    })
}



showDetails();
menuMove();


