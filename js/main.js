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
    const name = document.getElementById("nombre")
    const apellido = document.getElementById("apellido")
    const dni = document.getElementById("dni")
    const email = document.getElementById("email")
    const telefono = document.getElementById("telefono")
    if (name.value==="" || apellido.value==="" || dni.value==="" || email.value==="" || telefono.value==="" || typeAssured.value==="") {
        Swal.fire({
            icon: 'info',
            title: 'Por favor, completar el formulario',
            toast: true,
            position: "center",
            timer: 1500,
            showConfirmButton: false,
            timerProgressBar: true,
        })
    } else {
        Swal.fire({
            title: 'Genial!',
            icon: 'success',
            text: 'Formulario enviado... Gracias!',
            confirmButtonText: 'Volver',
            timer: 2000,
            showConfirmButton: false,
        })
        e.preventDefault()
        name.value = "" 
        apellido.value = "" 
        dni.value = "" 
        email.value = ""
        telefono.value = ""
        typeAssured.value = ""
        optionBasico.style.display="none"
        optionIntermedio.style.display="none"
        optionPremium.style.display="none"
    }
}

btnSubmit.addEventListener("click", send)
