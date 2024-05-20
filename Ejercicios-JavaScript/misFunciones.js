/**
 * Convierte un valor ingresado por el usuario en metros, pulgadas, pies o yardas.
 * @method convertirUnidades
 * @param {string} nombre - Id del elemento en el HTML
 * @param {number} valor - valor ingresado en por el usuario
 */

cambiarUnidades = (id,valor) => {
    let valMetro, valPulgada, valPie, valYarda;
    if(isNaN(valor)) {
        alert("El valor ingresado no es un numero");
        valMetro="";
        valPulgada="";
        valPie="";
        valYarda="";
    }else if(nombre=="metro"){
        valMetro =valor;
       valPulgada = valor*39.3701;
        valPie = valor* 3.28084;
        valYarda = valor*1.0936133333333;
    }else if(nombre=="pulgada"){
        valPulgada =valor;
        valMetro = valor*0.0254 ;
        valPie = valor*0.0833333;
        valYarda = valor*0.0277778;
    }else if(nombre=="pie"){
        valPie = valor;
        valMetro = valor*0.3048;
       valPulgada = valor*12;
        valYarda = valor*0.333333;
    }else if(nombre=="yarda"){
        valYarda = valor;
        valMetro = valor*0.9144;
        valPulgada = valor*36;
        valPie = valor*3;
    }
    document.getElementById("metro").value = valMetro;
    document.getElementById("pulgada").value = valPulgada;
    document.getElementById("pie").value = valPie;
    document.getElementById("yarda").value = valYarda;

}

function convertirGR(id) {
    if(id==="grados"){
        let grad= document.getElementById("grados").value;
        let rad= grad*Math.PI/180;
        document.getElementById("radianes").value=rad;
    }else if(id==="radianes"){
        let rad=document.getElementById("radianes").value;
        let grad= rad*180/Math.PI;
        document.getElementById("grados").value=grad;
    }

}

function mostrarOcultar = (valorMO) => {
    if(valorMO==="val_mostrar"){
        document.getElementById("divMO").style.display = 'block';
    }else if(valorMO==="val_ocultar"){
        document.getElementById("divMO").style.display = 'none';
    }
}