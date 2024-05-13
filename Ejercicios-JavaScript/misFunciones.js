/**
 * Convierte un valor ingresado por el usuario en metros, pulgadas, pies o yardas.
 * @method convertirUnidades
 * @param {string} nombre - Id del elemento en el HTML
 * @param {number} valor - valor ingresado en por el usuario
 */
function convertirUnidades(nombre, valor){
    if(isNaN(valor)) {
        alert("El valor ingresado no es un numero");
        document.getElementById("metro").value = "";
        document.getElementById("pulgada").value = "";
        document.getElementById("pie").value = "";
        document.getElementById("yarda").value = "";
    }else if(nombre=="metro"){
        document.getElementById("pulgada").value = valor*39.3701;
        document.getElementById("pie").value = valor* 3.28084;
        document.getElementById("yarda").value = valor*1.0936133333333;
    }else if(nombre=="pulgada"){
        document.getElementById("metro").value = valor*0.0254 ;
        document.getElementById("pie").value = valor*0.0833333;
        document.getElementById("yarda").value = valor*0.0277778;
    }else if(nombre=="pie"){
        document.getElementById("metro").value = valor*0.3048;
        document.getElementById("pulgada").value = valor*12;
        document.getElementById("yarda").value = valor*0.333333;
    }else if(nombre=="yarda"){
        document.getElementById("metro").value = valor*0.9144;
        document.getElementById("pulgada").value = valor*36;
        document.getElementById("pie").value = valor*3;
    }
}
