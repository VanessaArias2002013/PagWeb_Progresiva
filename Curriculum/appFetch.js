//Json de github
let jsonUrl = 'https://raw.githubusercontent.com/VanessaArias2002013/vaneJson/main/Archivo.json';
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("/service-worker.js");
}

//funcion para cargar el json, no visual.
function cargarJson (){
    fetch(jsonUrl)
    .then(respuesta =>respuesta.json()) //indicamos el formato en que se desea optener.
    .then(datos =>mostrarDatos(datos))//mostramos informacion.
    .catch(error => console.log(error)) 
};
cargarJson();

//Funcion para ver el consola
function consolaJson (){
    fetch(jsonUrl)
    .then(res =>res.json()) //indicamos el formato en que se desea optener.
    .then(dato =>console.log(dato))//mostramos informacion.
    .catch(error => console.log(error)) //capturar por si hay un error
};
consolaJson();//llamamos la funcion


curriculum = `
<center>
<h1>CURRICULUM VITAE</h1>
</center>
<center>
<table border=1 bgcolor=#FFFFFF>
    <tr>
        <td><b>NOMBRES Y APELLIDOS:
        <td>{nombre}
        <td><img src="Foto.jpg" width="120" height="141">

    </tr>
    </tr>
    <td><b>FECHA DE NACIMIENTO:
    <td colspan>{nacimiento}
        </tr>
        <tr>
            <td><b>PERFIL:
            <td colspan="2">{perfil}
        </tr>
        <tr>
            <td colspan="3" bgcolor="#C0C0C0">
                <center>DATOS PERSONALES</center>
        </tr>
        <tr>
            <td><b>TELEFONO:
            <td colspan="2">{numTelefono}
        </tr>
        <tr>
            <td><b>DIRECCIÓN:
            <td colspan="2">{direccion}
        </tr>
        <tr>
            <td><b>CORREO ELECTRONICO:
            <td colspan="2">{correo}
        </tr>
        <tr>
            <td colspan="3" bgcolor="#C0C0C0">
                <center>ESTUDIOS REALIZADOS</center>
        </tr>
        <tr>
            <td><b>TITULO:
            <td colspan="2"> {titulo}
        </tr>
        <tr>
            <td><b>PREPARATORIA:
            <td colspan="2">{preparatoria}
        </tr>
        <tr>
            <td><b>FECHA DE INICIALIZACIÓN:
            <td colspan="2">{fechaIni}
        </tr>
        <tr>
            <td><b>FECHA DE FINALIZACIÓN:
            <td colspan="2">{fechaFin}
        </tr>
        <tr>
            <td><b>LENGUAJES DE PROGRAMACIÓN:
            <td colspan="2">{lenguaje}
        </tr>
        <tr>
            <td><b>BASE DE DATOS:
            <td colspan="2">{db}
        </tr>
        <tr>
            <td colspan="3" bgcolor="#C0C0C0">
                <center>EXPERIENCIA LABORAL</center>
        </tr>
        <tr>
            <td><b>CARGO:
            <td colspan="2">{cargo}
        </tr>
        <tr>

            <td><b>FUNCIONES:
            <td colspan="2">{funciones}

        </tr>
        <tr>
            <td><b>TIEMPO LABORANDO:
            <td colspan="2"> {tiempoLab}
        </tr>
        <table>
</center>
`
//mostrar datos
function mostrarDatos(datos){
    //variables. Entrando al json
    let Nombre = datos.nombreyApellidos;
    let Nacimiento = datos.fechaNacimiento;
    let Perfil = datos.Perfil;
    let Numero = datos.datosPersonales[0].telefono;
    let Direccion = datos.datosPersonales[0].dirección;
    let Correo = datos.datosPersonales[0].correoElectronico;
    let Estudios = datos.estudiosRealizados[0].titulo;
    let Prepa = datos.estudiosRealizados[0].preparatoria;
    let FechaInicio = datos.estudiosRealizados[0].fechaIngreso;
    let FechaFinal = datos.estudiosRealizados[0].fechaFinalizacion;
    let lenguajes = datos.lenguajesDeProgramación;
    let Basedatos = datos.baseDedatos;
    let Experiencia = datos.ExperienciaLaboral[0].cargo;
    let Funciones = datos.ExperienciaLaboral[0].Funciones;
    let tiempo = datos.ExperienciaLaboral[0].tiempoLaborando;
    

  
    //optener el contenido de curricuum y almacenarlo en una variable llamada "Mihtml".
    let Mihtml = curriculum;
    
    //Remplazar los corchetes
    Mihtml=Mihtml.replace("{nombre}", Nombre);
    Mihtml=Mihtml.replace("{nacimiento}", Nacimiento);
    Mihtml=Mihtml.replace("{perfil}", Perfil);
    Mihtml=Mihtml.replace("{numTelefono}", Numero);
    Mihtml=Mihtml.replace("{direccion}", Direccion);
    Mihtml=Mihtml.replace("{correo}", Correo);
    Mihtml=Mihtml.replace("{titulo}", Estudios);
    Mihtml=Mihtml.replace("{preparatoria}", Prepa);
    Mihtml=Mihtml.replace("{fechaIni}", FechaInicio);
    Mihtml=Mihtml.replace("{fechaFin}", FechaFinal);
    Mihtml=Mihtml.replace("{lenguaje}", lenguajes);
    Mihtml=Mihtml.replace("{db}", Basedatos);
    Mihtml=Mihtml.replace("{cargo}", Experiencia);
    Mihtml=Mihtml.replace("{funciones}", Funciones);
    Mihtml=Mihtml.replace("{tiempoLab}", tiempo);
    
    
   




    document.getElementById('contenido').innerHTML +=Mihtml;

}