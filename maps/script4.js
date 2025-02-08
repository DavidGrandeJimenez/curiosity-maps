// 0. variables
const apiLink2 = "https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/nrg_cb_e?format=JSON&lang=EN&time=2022&nrg_bal=AFC&geo=BE&geo=BG&geo=CZ&geo=DK&geo=DE&geo=EE&geo=IE&geo=EL&geo=ES&geo=FR&geo=HR&geo=IT&geo=CY&geo=LV&geo=LT&geo=LU&geo=HU&geo=MT&geo=NL&geo=AT&geo=PL&geo=PT&geo=RO&geo=SI&geo=SK&geo=FI&geo=SE&geo=IS&geo=LI&geo=NO&geo=CH&geo=UK&geo=BA&geo=ME&geo=MK&geo=AL&geo=RS&geo=TR&geo=XK";

const nodeListUseless = document.querySelectorAll(".pais2");
const paisesMapa = [...nodeListUseless];

const divFlotante = document.createElement('div');
divFlotante.classList.add("mi-clase2");
document.body.appendChild(divFlotante);

let datosJson;

let paisObjetivo;
let listaPaises = [];
let consumicion = Array(42);

//Fetch para recoger en arrays los datos del la consumición eléctrica de Eurostat
const fetching = async () => {
    const conexion = await fetch(apiLink2);

    if (!conexion.ok) {
        throw new Error('Ha ocurrido un error con la API' + conexion.statusText);
    } else {
        datosJson = await conexion.json();

        listaPaises = Object.entries(datosJson.dimension.geo.category.index).map(([siglas, id]) => ({ siglas, id }));
        consumicion = Object.values(datosJson.value);
        listaPaises.map((pais, index) => {
            pais.nombre = Object.values(datosJson.dimension.geo.category.label)[index];

        });

        listaPaises.splice(38, 0, { siglas: "UC", id: 38, nombre: "Ukraine" });
        listaPaises.splice(39, 0, { siglas: "AN", id: 39, nombre: "Andorra" });
        listaPaises.splice(40, 0, { siglas: "GR", id: 40, nombre: "Greenland" });
        listaPaises.splice(41, 0, { siglas: "RU", id: 41, nombre: "Russia" });
        listaPaises.splice(42, 0, { siglas: "BY", id: 42, nombre: "Belarus" });
        listaPaises.splice(43, 0, { siglas: "CH", id: 43, nombre: "Switzeland" });
        listaPaises.splice(44, 0, { siglas: "MV", id: 44, nombre: "Moldova" });
        //Poner consumicion en la listaPaises
        for (let w = 0, z = 0; w < listaPaises.length; w++) {
            if (w === 27 || w === 30 || w === 38 || w === 39 || w === 40 || w === 41 || w === 42 || w === 43 || w == 44) {
                listaPaises[w].consumicion = "No hay datos sobre consumo eléctrico de este país en Eurostat";
            } else {
                listaPaises[w].consumicion = consumicion[z];
                z++;
            }
        };

        // 2. Correspondencia con el mouse
        // 2.1. Cambiar estilos del divFlotante con MouseOver/Out
        paisesMapa.map(cadaUno => {
            cadaUno.addEventListener('mouseover', function (event) {
                paisObjetivo = cadaUno.id;
                document.addEventListener("mousemove", function (event) {
                    // Obtener la posición actual del ratón
                    let x = event.clientX;
                    let y = event.clientY;
                    divFlotante.style.left = (x + 10) + "px";
                    divFlotante.style.top = (y + 10) + "px";
                    if (paisObjetivo === "37" || paisObjetivo === "7" || paisObjetivo === "12" || paisObjetivo === "36" || paisObjetivo === "11" || paisObjetivo === "17" || paisObjetivo === "8") {
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
                        return `<p><span class="categoria"><strong>País: </strong></span>${pais.nombre}</br>
            <span class="categoria"><strong>Consumo eléctrico(Gw/h):</strong> </br></span>${pais.consumicion}</p>`;
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





