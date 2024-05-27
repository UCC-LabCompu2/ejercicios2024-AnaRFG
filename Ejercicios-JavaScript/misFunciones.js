/**
 * Convierte un valor ingresado por el usuario en metros, pulgadas, pies o yardas.
 * @method convertirUnidades
 * @param {string} nombre - Id del elemento en el HTML
 * @param {number} valor - valor ingresado en por el usuario
 */

convertirUnidades = (id,valor) => {
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
    document.getElementById("metro").value = Math.round(valMetro*100)/100;
    document.getElementById("pulgada").value = Math.round(valPulgada*100)/100;
    document.getElementById("pie").value = valPie.toFixed(2);
    document.getElementById("yarda").value = valYarda.toFixed(2);


}
/**
 * Convierte un valor ingresado por el usuario en grados o radianes.
 *  @method convertirGR
 *  @param {number} grados - Id del elemento grados en el HTML
 *  @param {number} radianes - Id del elemento radianes en el HTML
 */
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

/**
 * Convierte un valor ingresado por el usuario en grados o radianes.
 * @method mostrarOcultar
 * @param
 * @param
 */
let mostrarOcultar = (valorMO) => {
    if(valorMO==="val_mostrar"){
        document.getElementById("divMO").style.display = 'block';
    }else if(valorMO==="val_ocultar"){
        document.getElementById("divMO").style.display = 'none';
    }
}
/**
 * Realiza la suma de dos elementos
 * @method sumar -definiir
 * @param {num1} -definiir
 * @param {num2} -definiir
 */
let sumar = () => {
    let num1, num2;
    num1 = Number(document.getElementsByName("sum_num1")[0].value);
    num2 = Number(document.getElementsByName("sum_num2")[0].value)
    document.getElementsByName("sum_total")[0].innerHTML = num1 + num2;
}
 /**
  * permite
  * @method guardarLS
  */

 function guardarLS(){
     const distancia = document.getElementById("distancia").value;
     const unid = document.getElementById("unidades").value;
     localStorage.setItem("distanciaLS", distancia);
     localStorage.setItem("unidadLS", unidad);
 }

/**
 * toma los valores de distancia y unidad del localstorage
 * para mostrarlos en un input
 * @method cargarLS
 */
function cargarLS(){
     const distancia= localStorage.getItem("distanciaLS");
     const unidad = localStorage.getItem("unidadLS");
     document.getElementById("dist").value = `{distancia} ${unidad}`;
 }