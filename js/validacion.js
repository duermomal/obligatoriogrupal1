function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

const validar = document.getElementById("regBtn");

validar.addEventListener("click", () => {    
   let campos_form = document.getElementsByClassName("form-control");
   for(let campo of campos_form){
       if(campo.value.length === 0){//campos vacios
           showAlertError();
       }
   }

});

