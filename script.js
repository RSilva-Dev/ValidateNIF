function validatenif(nif) {

    let IsValid = false;
    let Comparador = 0;
    let validationMessage = document.getElementById("validation");

    if (/^[123568]|^[4][5]|^[7][01279]|^[9][0189]/.test(nif) && /^[0-9]{9}$/.test(nif)) {
        IsValid = true;
    }
    
    let TotalValue =
        nif[0] * 9 +
        nif[1] * 8 +
        nif[2] * 7 + 
        nif[3] * 6 + 
        nif[4] * 5 + 
        nif[5] * 4 + 
        nif[6] * 3 + 
        nif[7] * 2;
    	
    let Division = TotalValue / 11;
    let Rest = TotalValue - parseInt(Division) * 11

    if (Rest == 1 || Rest == 0) {
        Comparador = 0
    } else {
        Comparador = 11 - Rest;
    }

    if (Comparador != nif[8]) {
        IsValid = false;
        validationMessage.innerHTML = "Number is invalid!";
        validationMessage.classList.add("invalid");
        validationMessage.classList.remove("valid");
    } else {
        IsValid = true;
        validationMessage.innerHTML = "Number is valid!";
        validationMessage.classList.add("valid");
        validationMessage.classList.remove("invalid");
    }

    if (nif == "") {
        validationMessage.innerHTML = "";
        validationMessage.classList.remove("invalid", "valid");
    }
}