const typeAssured = document.getElementById("typeAssured");
const optionBasico = document.getElementById("optionBasico");
const optionIntermedio = document.getElementById("optionIntermedio");
const optionPremium = document.getElementById("optionPremium");

typeAssured.addEventListener("change", function(){
    if (typeAssured.value === "basico") {
        optionBasico.style.display = "flex"
    } else {
        optionBasico.style.display = "none";
    }
})

typeAssured.addEventListener("change", function(){
    if (typeAssured.value === "intermedio") {
        optionIntermedio.style.display = "flex"
    } else {
        optionIntermedio.style.display = "none";
    }
})

typeAssured.addEventListener("change", function(){

    if (typeAssured.value === "premium") {
        optionPremium.style.display = "flex"
    } else {
        optionPremium.style.display = "none"
    }
})

