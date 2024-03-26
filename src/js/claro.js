
const rootStyles = getComputedStyle(document.documentElement);


const corQuaternaria = rootStyles.getPropertyValue('--corQuaternaria');
const corTerciaria = rootStyles.getPropertyValue('--corTerciaria');
const corSecundaria = rootStyles.getPropertyValue('--corSecundaria');
const corPrimaria = rootStyles.getPropertyValue('--corPrimaria');
const corDarkAlfa = rootStyles.getPropertyValue('--corDarkAlfa');
const corLightAlfa = rootStyles.getPropertyValue('--corLightAlfa');

const sol = document.querySelector(".claro");
const lua = document.querySelector(".escuro"); 
const colorContainer = document.querySelector(".troca-container");

let dark = true;

colorContainer.addEventListener("click", () => {
    if(dark){
        lua.style.transform = "translateX(30px)";
        document.documentElement.style.setProperty('--corPrimaria', '#ffffff');
        document.documentElement.style.setProperty('--corSecundaria', '#2c3e50');
        document.documentElement.style.setProperty('--corTerciaria', '#00ffd9');
        document.documentElement.style.setProperty('--corQuaternaria', '#2c2c2c');
        document.documentElement.style.setProperty('--corDarkAlfa', 'rgb(255, 255, 255, .8)');
        document.documentElement.style.setProperty('--corLightAlfa', ' rgb(44, 44, 44, .2);');
        dark = false;
    }else{
        lua.style.transform = "translateX(10px)";
        document.documentElement.style.setProperty('--corPrimaria', '#2c2c2c');
        document.documentElement.style.setProperty('--corSecundaria', '#00ffd9');
        document.documentElement.style.setProperty('--corTerciaria', '#2c3e50');
        document.documentElement.style.setProperty('--corQuaternaria', '#ffffff');
        document.documentElement.style.setProperty('--corDarkAlfa', 'rgb(44, 44, 44, .8)');
        document.documentElement.style.setProperty('--corLightAlfa', ' rgb(255, 255, 255, .2);');
        dark = true;
    }
});
