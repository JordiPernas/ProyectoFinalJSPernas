const nombreForm = document.querySelector('#nombre');
const apellidoForm = document.querySelector('#apellido');
const edadForm = document.querySelector('#edad');
const btn = document.querySelector('#btn');
const montoForm = document.querySelector('#monto')
const cuotasForm = document.querySelector('#cuotas')
const resultadoForm = document.querySelector('#resultados');
const tipoDeCredito = document.querySelector('#tiposDeCredito')




const boton = document.getElementById('btnTipos');

btnTipos.addEventListener('click', () => {
    fetch('../index.json')
    .then((response) => response.json())
    .then((data) => {

        const items = document.getElementById('data');
        const info = data

        data.forEach(item => {
            const contenedor = document.createElement('article');

            contenedor.innerHTML = `
            <p class="nombres">${item.nombre}</p>
            <p class="intereses">${item.interes}</p>
            `

            items.appendChild(contenedor);
        })
    })
    .catch(e => console.log(e));
});



const getMessage = (title, text, icon, btn) => {

    Swal.fire({
        title,
        text,
        icon,
        confirmButtonText: btn  
    });
}

btn.addEventListener('click', () => {

    const credito =  document.createElement('article');
    credito.classname = "creditos";
    
    credito.innerHTML = `
    <div class="resultadoCredito">
    <p>${nombreForm.value} ${apellidoForm.value} con ${edadForm.value} años </p>
    <p>Le comunicamos que eligio el plan ${tipoDeCredito.value}</p> 
    <p>El cual le quedo un monto de ${montoForm.value} en ${cuotasForm.value} cuotas.</p>
    </div>`

    montoForm.value > 10000   
    ? getMessage ('Perfecto!','Ya le damos su cotizacion, muchas gracias','success','aceptar')
    : getMessage ('algo salio mal','Tienes que elegir mas de 10000$','error','aceptar'); 

    resultadoForm.appendChild(credito);

    nombreForm.value = "";
    apellidoForm.value = "";
    edadForm.value = "";
    montoForm.value= "";
    cuotasForm.value= "";
    tipoDeCredito.value= "";
    
});


function iniciarMap(){
    var coord = {lat:-34.6086491 ,lng: -58.4189902};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 19,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}



