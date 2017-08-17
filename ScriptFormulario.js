// JavaScript source code
// JavaScript source code


var todosLosAlumnos = [];

alert ("El programa esta funcionando");

//defino la clase alumno
function Alumno(nombre, dni, edad, sexo, turno)
{
    this.nombre= nombre;
    this.dni=dni;
    this.edad=edad;
    this.sexo=sexo;
    this.turno = turno;

    //var toString = this.nombre + ", " + this.dni + ", " + this.edad + ", " +this.sexo + ", " + ", " + this.turno;
}

var a = new Alumno("Juan", 34587912, 27, 1, 3);
var b = new Alumno("Pedro", 40156984, 31, 0, 2);
var c = new Alumno("Mar", 1654784, 18, 1, 3);


var prueva = "todo ok";


todosLosAlumnos[0] = a;
todosLosAlumnos[1] = b;
todosLosAlumnos[2] = c;

function Promedio()
{
    var ac = 0;
    var c = 0;
    for (var i = 0; i < todosLosAlumnos.length; i++) {

        ac += todosLosAlumnos[i].edad;
        c++;


    }
    var promedio = ac / c;
    return promedio;
}


var registros = new Array();


function Inicio() {

    document.getElementById("btnAceptar").onclick = function () {

        var nombre = document.getElementById("txtNombre").value;
        var dni = document.getElementById("txtDni").value;
        var edad = document.getElementById("txtEdad").value;
        var sexo = document.getElementsByName("sexo");// aca al meter varios item en una variable lo combierte en arreglo
        var turno = document.getElementById("turno").value;

        var sex = 0;
        for (var i = 0; i < sexo.length; i++) {

            if (sexo[i].checked) {
                sex = sexo[i].value;
                break;
            }
        }

        var a = new Alumno(nombre, dni, edad, sex, turno)

        todosLosAlumnos.push(a);

        agregarTabla(a);


    }
}



    

    function agregarTabla(Alu) {

        var tablas = document.getElementById("tablaAlumnos");

        if (tablas.innerHTML == "")
            tablas.innerHTML = "<tr><th>Nombre</th><th>Dni</th><th>Edad</th><th>Sexo</th><th>Turno</th></tr>";

        var fila = tablas.insertRow();
        var celdaNombre = fila.insertCell();
        var celdaEdad = fila.insertCell();
        var celdaDni = fila.insertCell();
        var celdaSexo = fila.insertCell();
        var celdaTurno = fila.insertCell();

        celdaNombre.innerText = Alu.nombre;
        celdaEdad.innerText = Alu.edad;
        celdaDni.innerText = Alu.dni;
        celdaSexo.innerText = Alu.sexo;
        celdaTurno.innerText = Alu.turno;








        //for (var i = 0; i < registros; i++) {

        /*
            htmlTabla += "<tr> <td>" + registros[i].nombre + "</td> <td>" + registros[i].dni + "</td>";
            

        }

        tablas.innerHTML += htmlTabla;
        */


    




}