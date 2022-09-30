let isDni1 = true;
let isDni2 = false;
let caracter = "TRWAGMYFPDXBNJZSQVHLCKE";
do {
    var dni = prompt("Introduzca su DNI:");
    if(dni === "0"){
        alert("Ha introducido 0.");
    } else if (dni.length == 9) {
        for(let i = 0; i < 8; i++){
            if(isNaN(dni.charAt(i))){
                isDni1 = false;
            }
        }
        for(let i = 0; i < caracter.length; i++){
            if(dni.charAt(8).toUpperCase == caracter.charAt(i).toUpperCase){
                isDni2 = true;
            }
        }
    } else {
        isDni1 = false;
        isDni2 = false;
    }
} while (isDni1 == false || isDni2 == false);
if((isDni1 == true) && (isDni2 == true)){
    alert("Su dni ("+ dni +") es correcto.");
}