import descripciones from './paisesDescripcion.js';


// 0. variables
const boxCuriosidades = document.querySelector("#boxCuriosidades");
const curiosidad = document.querySelector("#curiosidadID");
const titulo = document.querySelector("#tipID");

const paisesNodeList = document.querySelectorAll("#paisG");
const paisesMapa = [...paisesNodeList];

const divFlotante = document.createElement('div');
divFlotante.classList.add("mi-clase");
document.body.appendChild(divFlotante);


let paisObjetivo;
let banderaFuck;

const apiLink = "https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/nama_10_gdp?format=JSON&lang=EN&time=2022";
let listaPaisesApi = [];
let pib = [];

//Fetch para recoger en arrays los datos del PIB de Eurostat
fetch(apiLink).then((response) => response.json().then(cada => {

    listaPaisesApi = Object.entries(cada.dimension.geo.category.index).map(([siglas, id]) => ({ siglas, id }));
    pib = Object.values(cada.value);
    pib = pib.slice(pib.indexOf(15911126.0), (pib.indexOf(8895.7)) + 1);
    
    //Se asigna el pib a la lista de Paises
    for (let j = 0, z = 0; j < listaPaisesApi.length; j++) {
        if (j === 1 || j === 2 || j == 38) {
            listaPaisesApi[j].pib = "?"; //Si no hay datos de PIB en Eurostat de esos paises, se pone "?"
        } else {
            listaPaisesApi[j].pib = pib[z];
            listaPaisesApi[j].pib = listaPaisesApi[j].pib.toLocaleString();
            z++;
        }
    };

    const paisesDescripcion = descripciones(listaPaisesApi); //Se pasa la listaPaisesApi para obtener todos los datos restantes de los paises


    // 1. funciones:
    // 1.1. Definir el color básico de los paises
    paisesMapa.map((cada) => {
        cada.style.fill = "dodgerblue";
    });


    // 2. Correspondencia con el mouse
    // 2.1. Cambiar color y aparecer Curiosidad cuando mouseover
    paisesMapa.map((cada) => cada.addEventListener('mouseover', function (event) {
        cada.style.fill = "blue";
        paisObjetivo = cada.firstElementChild.id; //se recoge el id del pais que está debajo del ratón

        document.addEventListener("mousemove", function (event) {
            let x = event.clientX;
            let y = event.clientY;
            divFlotante.style.left = (x + 10) + "px";
            divFlotante.style.top = (y + 10) + "px";
            if (paisObjetivo === "53" || paisObjetivo === "21" || paisObjetivo === "52" || paisObjetivo === "45" || paisObjetivo === "42" || paisObjetivo === "39" || paisObjetivo === "24" || paisObjetivo === "27" || paisObjetivo === "28" || paisObjetivo === "23" || paisObjetivo === "19" || paisObjetivo === "25" || paisObjetivo === "26" || paisObjetivo === "18" || paisObjetivo === "17" || paisObjetivo === "41" || paisObjetivo === "31" || paisObjetivo === "29" || paisObjetivo === "32" || paisObjetivo === "30" || paisObjetivo === "33" || paisObjetivo === "44") {
                divFlotante.style.left = (x + 10) + "px";
                divFlotante.style.top = (y - 250) + "px";
            } else if (paisObjetivo === "20" || paisObjetivo === "14" || paisObjetivo === "22" || paisObjetivo === "16") {
                divFlotante.style.left = (x - 300) + "px";
                divFlotante.style.top = (y - 250) + "px";
            }

        });

        // 2.2. Cambiar el titulo con el click
        cada.addEventListener("click", function () {
            curiosidad.style.fontSize = "1.1rem";
            boxCuriosidades.style.height = "40vh";
            boxCuriosidades.style.width = "13vw";
            titulo.classList.add("titulo");
            titulo.classList.remove("tituloPequeno");
            titulo.style.fontSize = "2.5rem";
            

            paisesDescripcion.map(pais => {
                if (String(cada.firstElementChild.id) === pais.id){
                    titulo.innerHTML = pais.nombre;
                    curiosidad.innerHTML = pais.curiosidad;
                    boxCuriosidades.style.height = pais.height;
                    titulo.style.fontSize = pais.fontSize;
                    curiosidad.style.fontSize = pais.fontSize2;
            }});
            
        });

        // 2.3. Controlar cuando se salga el ratón
        cada.addEventListener('mouseout', function () {
            paisesMapa.map((cada) => cada.style.fill = "dodgerblue");
            divFlotante.style.display = "none";
        });

        //Diseñar los apartados del divFlotante y rellenar con los datos del país en cuestión
        divFlotante.innerHTML = paisesDescripcion.map((pais) => {

            if (pais.id === paisObjetivo) {
                banderaFuck = pais.banderita;
                return `<p><span class="categoria">País: </span>${pais.nombre}</br>
                        <span class="categoria">Capital: </span>${pais.capital}</br> <span class="categoria">Población: </span>${pais.poblacion}</br> 
                        <span class="categoria">Etnia mayoritaria: </span>${pais.etniaMayoritaria}</br> 
                        <span class="categoria">PIB: </span>${pais.PIB}</br> 
                        <span class="categoria">Año de independencia/constitución: </span>${pais.anioConstitucion}</br>
                        <span class="categoria">idioma/s oficial/es: </span>${pais.idiomaOficial}</br>
                        <span class="categoria">moneda oficial: </span>${pais.monedaActual}</p>`;
            }
        })
        divFlotante.innerHTML = divFlotante.innerHTML.replace(/,/g, '');
        divFlotante.innerHTML = divFlotante.innerHTML + banderaFuck;
        divFlotante.style.display = "block"
        divFlotante.style.opacity = "0";

        //Añadir un poco de retardo para que aparezca suavemente el divFlotante
        setTimeout(() => {
            divFlotante.style.opacity = '1';
        }, 200);
    }))
}));
