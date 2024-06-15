// 0. variables
const apiLink2 = "https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/nrg_cb_e?format=JSON&lang=EN&time=2022";

const nodeListUseless = document.querySelectorAll("#paisG2");
const paisesMapa = [...nodeListUseless];

const divFlotante = document.createElement('div');
divFlotante.classList.add("mi-clase2");
document.body.appendChild(divFlotante);

let datosJson;

let paisObjetivo;
let listaPaises = [];
let consumicion;

//Fetch para recoger en arrays los datos del la consumición eléctrica de Eurostat
const fetching = async () => {
    const conexion = await fetch(apiLink2);

    if (!conexion.ok) {
        throw new Error('Ha ocurrido un error con la API' + conexion.statusText);
    } else {
        datosJson = await conexion.json();

        listaPaises = Object.entries(datosJson.dimension.geo.category.index).map(([siglas, id]) => ({ siglas, id }));

        consumicion = Object.values(datosJson.value).slice(1069, 1109);
        delete consumicion[29]; //omitir a Liechtenstein

        listaPaises.map((pais, index) => {
            pais.nombre = Object.values(datosJson.dimension.geo.category.label)[index];
        })
        //Poner consumicion en la listaPaises
        for (let w = 0, z = 0; w < listaPaises.length; w++) {
            if (w === 41 || w === 32 || w === 29 || w === 30) {
                listaPaises[w].consumicion = "No hay datos sobre consumo eléctrico de este país en Eurostat";
            } else {
                if (z == 29) {
                    listaPaises[w].consumicion = consumicion[z + 1];
                    z = z + 2;
                }
                else {
                    listaPaises[w].consumicion = consumicion[z];
                    z++;
                }
            }
        };

        // 2. Correspondencia con el mouse
        // 2.1. Cambiar estilos del divFlotante con MouseOver/Out
        paisesMapa.map(cadaUno => {
            cadaUno.addEventListener('mouseover', function (event) {
                paisObjetivo = cadaUno.firstElementChild.id;
                document.addEventListener("mousemove", function (event) {
                    // Obtener la posición actual del ratón
                    let x = event.clientX;
                    let y = event.clientY;
                    divFlotante.style.left = (x + 10) + "px";
                    divFlotante.style.top = (y + 10) + "px";
                    if (paisObjetivo === "9" || paisObjetivo === "10" || paisObjetivo === "13" || paisObjetivo === "14" || paisObjetivo === "23" || paisObjetivo === "36" || paisObjetivo === "37" || paisObjetivo === "38" || paisObjetivo === "40" || paisObjetivo === "51") {
                        divFlotante.style.left = (x + 20) + "px";
                        divFlotante.style.top = (y - 130) + "px";
                    }

                });
                cadaUno.addEventListener('mouseout', function () {
                    divFlotante.style.display = "none";
                });

                //2.3. función para enseñar y diseñar el contenido del divFlotante
                divFlotante.innerHTML = listaPaises.map((pais) => {

                    if (paisObjetivo === String(pais.id)) {
                        return `<p><span class="categoria">País: </span>${pais.nombre}</br>
            <span class="categoria">Consumo eléctrico en Gigavatios/hora (Gw/h): </br></span>${pais.consumicion}.</p>`;
                    }
                    divFlotante.style.display = "block";
                    divFlotante.style.opacity = "0";
                });

                //Controlar los datos de los paises del mapa sin datos de Eurostat
                switch (paisObjetivo) {
                    case "51":
                        divFlotante.innerHTML = `<p><span class="categoria">País: </span>Rusia</br><span class="categoria">Consumo eléctrico en Gigavatios/hora (Gw/h): </br></span>No hay datos del consumo eléctrico de este país en Eurostat</p>`;

                        break;
                    case "50":
                        divFlotante.innerHTML = `<p><span class="categoria">País: </span>Bielorrusia</br><span class="categoria">Consumo eléctrico en Gigavatios/hora (Gw/h): </br></span>No hay datos del consumo eléctrico de este país en Eurostat</p>`
                        break;
                    case "53":
                        divFlotante.innerHTML = `<p><span class="categoria">País: </span>Ucrania</br><span class="categoria">Consumo eléctrico en Gigavatios/hora (Gw/h): </br></span>No hay datos del consumo eléctrico de este país en Eurostat</p>`
                        break;
                    case "54":
                        divFlotante.innerHTML = `<p><span class="categoria">País: </span>Suiza</br><span class="categoria">Consumo eléctrico en Gigavatios/hora (Gw/h): </br></span>No hay datos del consumo eléctrico de este país en Eurostat</p>`
                        break;
                }divFlotante.innerHTML = divFlotante.innerHTML.replace(/,+,/g, '');

                //Añadir un poco de retardo para que aparezca suavemente el divFlotante
                setTimeout(() => {
                    divFlotante.style.opacity = '1';
                }, 200);

            })
        })

    }
};

fetching();





