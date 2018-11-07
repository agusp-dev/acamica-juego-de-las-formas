
var colores = ["naranja", "rosa", "verde"];
var figuras = ["rombo", "cuadrado", "triangulo", "circulo", "corazon", "pica", "diamante", "trebol"]; 

var contRombo = 0;
var contCuadrado = 0;
var contTriangulo = 0;
var contCirculo = 0;
var contCorazon = 0;
var contPica = 0;
var contDiamante = 0;
var contTrebol = 0;
var cantTotal = 0;

function crearRombo(color) {
    var div = document.createElement('div');
    div.className = "rombo " + color;
    return div;
}

function crearCuadrado(color) {
    var div = document.createElement('div');
    div.className = "cuadrado " + color;
    return div;
}

function crearTriangulo(color) {
    var div = document.createElement('div');
    div.className = "triangulo " + color;
    return div;
}

function crearCirculo(color) {
    var div = document.createElement('div');
    div.className = "circulo " + color;
    return div;
}

function crearCorazon(color) {
    var div = document.createElement('div');
    div.className = "corazon " + color;
    var span1 = document.createElement('span');
    span1.className = "lateral-uno"
    var span2 = document.createElement('span');
    span2.className = "centro"
    var span3 = document.createElement('span');
    span3.className = "lateral-dos"
    div.appendChild(span1);
    div.appendChild(span2);
    div.appendChild(span3);
    return div;
}

function crearPica(color) {
    var div = document.createElement('div');
    div.className = "pica " + color;
    var span1 = document.createElement('span');
    span1.className = "lateral-uno"
    var span2 = document.createElement('span');
    span2.className = "centro"
    var span3 = document.createElement('span');
    span3.className = "lateral-dos"
    var span4 = document.createElement('span');
    span4.className = "base"
    div.appendChild(span1);
    div.appendChild(span2);
    div.appendChild(span3);
    div.appendChild(span4);
    return div;
}

function crearDiamante(color) {
    var div = document.createElement('div');
    div.className = "diamante " + color;
    var span1 = document.createElement('span');
    span1.className = "tope"
    var span2 = document.createElement('span');
    span2.className = "base"
    div.appendChild(span1);
    div.appendChild(span2);
    return div;
}

function crearTrebol(color) {
    var div = document.createElement('div');
    div.className = "trebol " + color;
    var span1 = document.createElement('span');
    span1.className = "hoja-uno"
    var span2 = document.createElement('span');
    span2.className = "hoja-dos"
    var span3 = document.createElement('span');
    span3.className = "hoja-tres"
    var span4 = document.createElement('span');
    span4.className = "centro"
    var span5 = document.createElement('span');
    span5.className = "base"
    div.appendChild(span1);
    div.appendChild(span2);
    div.appendChild(span3);
    div.appendChild(span4);
    return div;
}

function agregarInfo(informacion) {
    var div = document.createElement('div');
    div.className = "info";
    var divInfo = document.createTextNode(informacion);
    div.appendChild(divInfo);

    var elementoContenedor = document.getElementById('contenedor');
    elementoContenedor.appendChild(div);
}

function cargarFormas() {
    var forma = prompt("Ingresa la forma a dibujar:", "");
    if (forma == null) {
        return;
    }

    forma = forma.toLowerCase();

    if (!existeFigura(forma)) {
        alert("Las formas posibles son: \n\nRombo\nCuadrado\nTriangulo\nCirculo\nCorazon\nPica\nDiamante\nTrebol");
        return;
    }

    var color = prompt("Ingresa su color:", "");
    if (color == null) {
        return;
    }

    color = color.toLowerCase();

    if (!existeColor(color)) {
        alert("Los colores posibles son: \n\naranja\nrosa\nverde");
        return;
    }

    var nodo;

    switch (forma) {
        case 'rombo':
            contRombo++;
            nodo = crearRombo(color);
            break;
        case 'cuadrado':
            contCuadrado++;
            nodo = crearCuadrado(color);
            break;
        case 'triangulo':
            contTriangulo++;
            nodo = crearTriangulo(color);
            break;
        case 'circulo':
            contCirculo++;
            nodo = crearCirculo(color);
            break;
        case 'corazon':
            contCorazon++;
            nodo = crearCorazon(color);
            break;
        case 'pica':
            contPica++;
            nodo = crearPica(color);
            break;
        case 'diamante':
            contDiamante++;
            nodo = crearDiamante(color);
            break;
        case 'trebol':
            contTrebol++;
            nodo = crearTrebol(color);
            break;
        default:
            nodo = null;
    }

    if (nodo != null) {
        cantTotal++;
        var columnaDestino = document.getElementById("columna-" + color);
        columnaDestino.appendChild(nodo);
    }
  }

  function existeFigura(figura) {
    var index = 0;
    while (index < figuras.length) {
        if (figura == figuras[index]) {
            return true;
        }
        index++;
    }
    return false;
  }

  function existeColor(color) {
    var index = 0;
    while (index < colores.length) {
        if (color == colores[index]) {
            return true;
        }
        index++;
    }
    return false;
  }

  function procesarInfo() {

    agregarInfo(contRombo);
    agregarInfo(contCuadrado);
    agregarInfo(contTriangulo);
    agregarInfo(contCirculo);
    agregarInfo(contCorazon);
    agregarInfo(contPica);
    agregarInfo(contDiamante);
    agregarInfo(contTrebol);

    var botonProcesarInfo = document.getElementById('procesar-info');
    botonProcesarInfo.classList.add('ocultar');
  }