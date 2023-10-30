const typeAssured = document.getElementById("typeAssured");
const optionBasico = document.getElementById("optionBasico");
const optionIntermedio = document.getElementById("optionIntermedio");
const optionPremium = document.getElementById("optionPremium");
const btnSubmit = document.getElementById("submit");

typeAssured.addEventListener("change", function () {
    optionBasico.style.display = typeAssured.value === "basico" ? "flex" : "none";
    optionIntermedio.style.display = typeAssured.value === "intermedio" ? "flex" : "none";
    optionPremium.style.display = typeAssured.value === "premium" ? "flex" : "none";
});

function send (e){
    e.preventDefault()
    Swal.fire({
        title: 'Done',
        icon: 'success',
        text: 'Form send!',
        confirmButtonText: 'Back'
    })
}

btnSubmit.addEventListener("click", send )
