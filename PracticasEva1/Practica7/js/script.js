
let dni = prompt("Introduzca su DNI:");


if(dni === 0){
    alert("Ha introducido 0.");
} else if (dni.length == 9) {
    for(let i = 0; i < 8; i++){
        if(!isNaN(dni.charAt(i))) {
            dni = false;
        }
    }
}