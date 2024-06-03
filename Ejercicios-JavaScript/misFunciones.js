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

 /**
  *
  *
  * @method dibujarCirculoCuadrado
  */
function dibujarCirculoCuadrado(){
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.fillstyle = "#289a9a";
    const xmax = canvas.width;
    const ymax = canvas.height;
    const lado = 100;
    const margen = 10;
    ctx.fillRect(0+margen,0, ymax-lado-margen, lado);

    ctx.fillstyle = "rgba(199,154,227,0.5)"
    ctx.arc(xmax/2, ymax/2, 50 , 0, 2*Math.PI);
    ctx.fill();

 }

/**
 * carga la funcio de dibujar en el lienzo canvas cuando el usuario mueve el mouse
 * @method cargarListeners
 */
 function cargarListeners(){
    document.getElementById("lienzo").addEventListener("mousemove", dibujar)
 }

/**
 * completar la funcion --dibuja
 * @method dibujar
 * @param {event} --documentar movimineto del mouse
 */
function dibujar(){
    const canvas = document.getElementById("lienzo");
    const ctx = canvas.getContext("2d");

    let posX = event.clientx;
    let posY = event.clientY;
    console.log(posX, posY);

    canvas.onmousedown = function (){

    }
    convas.o = {

    }

    ctx.fillstyle = "#7c2789";
    if(bandera){
        ctx.fillRect(posX, posY, 5, 5);
    }
}

/**
 * borra todo el contenido del canvas
 * @method LimpiarCanvas
 */
function LimpiarCanvas(){
    const canvas = document.getElementById("lienzo");
    canvas.width = canvas.width;
}

/**
 *
 */
function dibujarCuadriculado() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const anchoMax = canvas.width;
    const alturaMax = canvas.height;
    const paso = 20;

    //dibujo de lineas horizontales
    for (let i = paso; i < alturaMax; ) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(anchoMax, i);
        ctx.strokeLine = "#892487"
        ctx.stroke();
        ctx.closePath();
        //i = i+paso;
        i += paso;
    }

    //dibujo de lineas verticales
    for (let i = paso; i < anchoMax; ) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, alturaMax);
        ctx.strokeLine = "#892487"
        ctx.stroke();
        ctx.closePath();
        //i = i+paso;
        i += paso;
    }

    //dibujar eje X
    ctx.beginPath();
    ctx.moveTo(0, alturaMax/2);
    ctx.lineTo(anchoMax, alturaMax/2);
    ctx.strokeStyle = "#192a90"
    ctx.stroke();
    ctx.closePath();

    //dibujar eje Y
    ctx.beginPath();
    ctx.moveTo(anchoMax/2, 0);
    ctx.lineTo(anchoMax/2, alturaMax);
    ctx.strokeStyle = "#192a90"
    ctx.stroke();
    ctx.closePath();
}

function dibujarImagen(posX, posY){ //terminar
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    console.log(posX, posY);

    canvas.width = canvas.width;
    const img
}





