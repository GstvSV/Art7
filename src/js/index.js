
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



