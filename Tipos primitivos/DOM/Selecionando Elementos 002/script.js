const p = document.querySelectorAll("p");

p.forEach((eLement, index) =>{
    eLement.style.color = "#FFF";
    eLement.style.padding = "20px";
    if(index === 0){
        eLement.style.background = "blue";
    }
    if(index === 1){
        eLement.style.background = "red";
    }
});