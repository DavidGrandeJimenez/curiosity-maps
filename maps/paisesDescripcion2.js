const paisesDescripcion = (idPaisesDefinitivo) => [
    {
        id: "0", nombre: "Islandia", poblacion: "372 520", PIB: `${idPaisesDefinitivo[34].pib} millones de euros`, capital: "Reikiavik", anioConstitucion: 1944, etniaMayoritaria: "Nórdicos", monedaActual: "Corona islandesa", idiomaOficial: "islandés", banderita: `<?xml version="1.0" ?>
    <svg  class="banderita" xmlns="http://www.w3.org/2000/svg"  width="85" height="61.2" viewBox="0 0 25 18">
        <path d="M0 0H25V18H0Z" fill="#02529C"/>
        <path d="M0 9H25M9 0V18" stroke-width="4" stroke="#FFF"/>
        <path d="M0 9H25M9 0V18" stroke-width="2" stroke="#DC1E35"/>
    </svg>`,
        height: "55vh",
        fontSize: "2rem",
        fontSize2: null,
        curiosidad: `Con el idioma más parecido al de los vikingos, Islandia se erige sobre hielo y volcanes como uno de los países más seguros, transparentes, gélidos y con la catedral más surrealista del mundo.</br><img src="/imgs/catedral.webp" alt="catedral luterana Reykiavik" width="inherit" height="120" >`

    },
    {
        id: "1", nombre: "Gran Bretaña", poblacion: "67 330 000", PIB: "2.83 trillones de dólares", capital: "Londres", anioConstitucion: "Numerosas constituciones diferentes en vigor", etniaMayoritaria: "Anglosajones", monedaActual: "Libra esterlina", idiomaOficial: "inglés", banderita: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 30" class="banderita" width="130" height="78">
	<clipPath id="t">
		<path d="M25,15h25v15zv15h-25zh-25v-15zv-15h25z"/>
	</clipPath>
	<path d="M0,0v30h50v-30z" fill="#012169"/>
	<path d="M0,0 50,30M50,0 0,30" stroke="#fff" stroke-width="6"/>
	<path d="M0,0 50,30M50,0 0,30" clip-path="url(#t)" stroke="#C8102E" stroke-width="4"/>
	<path d="M-1 11h22v-12h8v12h22v8h-22v12h-8v-12h-22z" fill="#C8102E" stroke="#FFF" stroke-width="2"/>
</svg>`,
        height: "40vh",
        fontSize: "1.8rem",
        fontSize2: null,
        curiosidad: `Aparte de los chistes sobre el Brexit, ¿sabías que tiene símbolos institucionales como el dragón (Gales), el unicornio (Escocia) y el mandato más corto del mundo de una primera ministra?`
    },
    {
        id: "2", nombre: "Noruega", poblacion: "5 400 000", PIB: `${idPaisesDefinitivo[29].pib} millones de euros`, capital: "Oslo", anioConstitucion: 1814, etniaMayoritaria: "Nórdicos", monedaActual: "Corona noruega", idiomaOficial: "noruego", banderita: `<svg xmlns="http://www.w3.org/2000/svg" class="banderita" width="85" height="61.8" version="1.1" viewBox="0 0 22 16">
	<rect width="22" height="16" fill="#ba0c2f"/>
	<path d="M0,8h22M8,0v16" stroke="#fff" stroke-width="4"/>
	<path d="M0,8h22M8,0v16" stroke="#00205b" stroke-width="2"/>
</svg>`,
        height: "35vh",
        fontSize: "2.3rem",
        curiosidad: `¿Sabes que Noruega tiene el fondo soberano más grande del mundo? <br>Si se repartiese entre todos sus habitantes, cada noruego obtendría 200 mil€ aprox.`
    },
    {
        id: "3", nombre: "Islas Feroe (integradas en Dinamarca)", poblacion: "53 890", PIB: `${idPaisesDefinitivo[3].pib} millones de euros`, capital: "Tórshavn", anioConstitucion: 1948, etniaMayoritaria: "Nórdicos", monedaActual: "Corona feroesa y Corona danesa", idiomaOficial: "feroés", banderita: `
    <svg xmlns="http://www.w3.org/2000/svg" class="banderita2" width="100" height="72.7" viewBox="0 0 22 16">
    <rect fill="#FFF" width="22" height="16"/>
    <g fill="#005EB8">
    <rect x="6" width="4" height="16"/>
    <rect y="6" width="22" height="4"/>
    </g>
    <g fill="#EF3340">
    <rect x="7" width="2" height="16"/>
    <rect y="7" width="22" height="2"/>
    </g>
    </svg>
    `,
        height: null,
        fontSize: "1.8rem",
        curiosidad: `Pertenecen a Dinamarca, pero no a la UE, aunque son la única región del mundo con rotondas submarinas.</br></br><img src="/imgs/rotonda.jpg" alt="rotonda submarina feroesa" width="180" height="90" >`,
    },
    { id: "4", nombre: "Irlanda del Norte (integrado en Reino Unido... por ahora)", poblacion: "1 800 000", PIB: "43 mil millones de dólares", capital: "Belfast", anioConstitucion: 1998, etniaMayoritaria: "Anglo-irlandeses", monedaActual: "Libra esterlina", idiomaOficial: "inglés", banderita: `<img src="/imgs/irlandaNorte.png" class="banderita" alt="bandera Irlanda del Norte no oficial" width="120" height="60" style="margin-top:5vh">`,
    height: "70vh",
    fontSize: "1.3rem",
    fontSize2: "1rem",
    curiosidad: `Irlanda del Norte sigue estando dividida entre a favor y en contra de su pertenencia a Reino Unido, y es que con el Brexit hay más voces internas a favor de hacer referéndums de independencia. (He ahí el "...por ahora" de la descripción) <br><br>
    Pd: La bandera sería la de Reino Unido, pero mola mucho más la bandera de la ex-provincia irlandesa de Últser.` },
    {
        id: "5", nombre: "Irlanda", poblacion: "5 033 000", PIB: `${idPaisesDefinitivo[6].pib} millones de euros`, capital: "Dublín", anioConstitucion: 1937, etniaMayoritaria: "Anglo-irlandeses", monedaActual: "Euro", idiomaOficial: "irlandés", banderita: `<?xml version="1.0" encoding="UTF-8"?>
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="50" class="banderita" viewBox="0 0 1200 600">
       <rect fill="#169b62" width="1200" height="600" />
       <rect fill="#fff" x="400" width="800" height="600" />
       <rect fill="#ff883e" x="800" width="400" height="600" />
    </svg>`,
        height: "50vh",
        fontSize: null,
        fontSize2: null,
        curiosidad: `El país de las liras, los duendes verdes, los alquileres carísimos y de la cerveza negra Guinness es también el principal país donde se asientan las grandes tecnológicas (Google, Amazon, etc). Desde ahí dan los servicios al resto de la UE`
    },
    {
        id: "6", nombre: "Suecia", poblacion: "10 400 000", PIB: `${idPaisesDefinitivo[26].pib} millones de euros`, capital: "Estocolmo", anioConstitucion: 1974, etniaMayoritaria: "Nórdicos", monedaActual: "Corona sueca", idiomaOficial: "sueco", banderita: `<?xml version="1.0" encoding="UTF-8"?><svg class="banderita" width="85" height="53.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 10"><path fill="#006aa7" d="M0,0H16V10H0Z"/><path fill="#fecc00" d="M0,4H5V0H7V4H16V6H7V10H5V6H0Z"/></svg>`,
        height: "50vh",
        fontSize: null, fontSize2: null,
        curiosidad: `De aquí son dos cosas inimaginables: thePirateBay y la comida más desagradable del mundo (Surströmming: arenque fermentado).</br><img src="/imgs/pirate.png" alt="thePirateBay logo" width="100" height="120" >`
    },
    {
        id: "7", nombre: "Finlandia", poblacion: "5 500 000", PIB: `${idPaisesDefinitivo[25].pib} millones de euros`, capital: "Helsinki", anioConstitucion: 2000, etniaMayoritaria: "Suominen/Finlandeses", monedaActual: "Euro", idiomaOficial: "finlandés", banderita: `<svg class="banderita" xmlns="http://www.w3.org/2000/svg" width="100" height="61.1" viewBox="0 0 18 11">
    <rect width="18" height="11" fill="#fff"/>
    <path d="M0,5.5h18M6.5,0v11" stroke="#002F6C" stroke-width="3"/>
    </svg>`,
        height: "45vh",
        fontSize: "2rem", fontSize2: null,
        curiosidad: `La gente del país de los Nokias indestructubles tiene tres activiades favoritas: la equitación sin caballos, escuchar heavy metal y comprar alcohol con menos impuestos en Estonia xD</br></br><img src="/imgs/nokia.png" alt="Nokia logo" width="150" height="45">`
    },
    {
        id: "8", nombre: "Islas Aland (integradas en Finlandia)", poblacion: "30 000", PIB: `Integrado en Finlandia`, capital: "Mariehamn", anioConstitucion: 2009, etniaMayoritaria: "Suominen/Finlandeses y Nórdicos", monedaActual: "Euro", idiomaOficial: "finlandés y sueco", banderita: `<svg xmlns="http://www.w3.org/2000/svg" class="banderita2" width="85" height="55.6"viewBox="0 0 52 34"><path d="M0 0h52v34H0Z" fill="#0064AD"/><path d="M0 17h52M21 0v34" stroke-width="10" stroke="#FFD300"/><path d="M0 17h52M21 0v34" stroke-width="4" stroke="#DA0E15"/></svg>`, height: "48vh",
        fontSize: "1.5rem", fontSize2: null,
        curiosidad: `Recomiendo encarecidamente que te escuches su himno, es simplemento precioso <br><br> <iframe src="https://www.youtube.com/embed/XGKldSW4WrU" frameborder="0" allowfullscreen width="180px" height="100px"></iframe>`},


    {
        id: "9", nombre: "Dinamarca", poblacion: "5 800 000", PIB: `${idPaisesDefinitivo[3].pib} millones de euros`, capital: "Copenhague", anioConstitucion: 1953, etniaMayoritaria: "Nórdicos", monedaActual: "Corona danesa", idiomaOficial: "danés", banderita: `<svg class="banderita" width="85" height="64.3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 28">
    <path fill="#c8102e" d="M0,0H37V28H0Z"/>
    <path stroke="#fff" stroke-width="4" d="M0,14h37M14,0v28"/>
  </svg>`, height: "38vh",
  fontSize: "2rem", fontSize2: null,
  curiosidad: `¿Te imaginas que dentro de una capital hubiese otra ciudad supuestamente independiente donde muchas drogas son legales? Pues ese es el caso de Christiania, en Copenhagen.`},
    {
        id: "10", nombre: "Estonia", poblacion: "1 300 000", PIB: `${idPaisesDefinitivo[5].pib} millones de euros`, capital: "Tallin", anioConstitucion: 1991, etniaMayoritaria: "Bálticos", monedaActual: "Euro", idiomaOficial: "estonio", banderita: `<svg class="banderita" width="100" height="63.6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 990 630">
    <path d="m0 0h990v630h-990z" fill="#0072ce"/>
    <path d="m0 210h990v420h-990z"/>
    <path d="m0 420h990v210h-990z" fill="#fff"/>
  </svg> `,
  height: "30vh",
  fontSize: null, fontSize2: null,
  curiosidad: `Impuesto de sociedades prácticamente nulo en algunos casos. Preguntádselo a vuestro gestor.`},
    {
        id: "11", nombre: "Letonia", poblacion: "1 900 000", PIB: `${idPaisesDefinitivo[13].pib} millones de euros`, capital: "Riga", anioConstitucion: 1991, etniaMayoritaria: "Bálticos", monedaActual: "Euro", idiomaOficial: "letón", banderita: `<svg class="banderita" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" width="100" height="50">
    <path fill="#9D2235" d="M0 0h1200v600H0"/>
    <path fill="#FFF" d="M0 240h1200v120H0"/>
  </svg>`,
  height: "30vh",
  fontSize: null, fontSize2: null,
  curiosidad: `En inglés se llama "Latvia" y en letón "Latvija". No me digas por qué, probablemente movidas del latín, pero en español se dice Letonia.`},
    {
        id: "12", nombre: "Lituania", poblacion: "2 800 000", PIB: `${idPaisesDefinitivo[14].pib} millones de euros`, capital: "Vilna", anioConstitucion: 1991, etniaMayoritaria: "Bálticos", monedaActual: "Euro", idiomaOficial: "lituano", banderita: `<svg class="banderita" xmlns="http://www.w3.org/2000/svg" width="100" height="60">
    <path fill="#c1272d" d="M0 0h100v60H0z"/>
    <path fill="#006a44" d="M0 0h100v40H0z"/>
    <path fill="#fdb913" d="M0 0h100v20H0z"/>
  </svg>
  `, height: "55vh",
  fontSize: "2rem", fontSize2: null,
  curiosidad: `Prácticamente fue el primer país en independizarse de la URSS en 1990, aunque en primera ocasión fue reprimida por esta. </br></br>Curiosamente, actualmente es una gran defensora de la soberanía de Taiwán y apenas comercia directamente con China precisamente, por sus pretensiones con Taiwán.`},
    {
        id: "13", nombre: "Bielorrusia", poblacion: "9 400 000", PIB: "73,78 mil millones de dólares", capital: "Minsk", anioConstitucion: 1994, etniaMayoritaria: "Eslavos este", monedaActual: "Rublo bielorruso", idiomaOficial: "bielorruso y ruso", banderita: `<svg class="banderita" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="50" viewBox="0 0 378 189">
	<title>Flag of Belarus</title>
	<defs>
		<clipPath id="p">
			<path  d="m0 0h200v608h8v284l-8 8H0z"/>
		</clipPath>
	</defs>
	<path fill="#ce1720" d="m0 0h378v189H0z"/>
	<g transform="matrix(.21,0,0,.21,2,0)" clip-path="url(#p)" fill="#fff">
		<g id="b">
			<path id="a" d="m36 0v14h-9v14H16v16H8v13H-8V24H8V6H-8V0zm26 77v15h-8v12h-8V92h-8V77h-8V57h8V42h8V30h8v12h8v15h8v20zm-17-1h10V58H45zM19 183h8v-18h-8zm54 0h8v-18h-8zM-8 305H6v13h6v16h9v15h12v-15h9v-16h8v-13H38v-15h21v10h13v17h11v19h-8v14h-7v13h-6v14h-9v12h-7v11h-9v14H24v-15h-9v-14H8v-9H-8v-23H8v-20H-8z"/>
			<use xlink:href="#a" transform="matrix(-1,0,0,1,200,0)"/>
			<path d="m96 0v32h8V0h32v14h-8v14h-12v16h-8v13H92V44h-8V28H72V14h-8V0zm-2 274v-11h-6v-13h-7v-14h-8v-14h-8v-10h-9v-14H44v14h-9v10h-7v14h-8v14h-6v13H8v17H-8v-44H8v-20H-8v-33H8v14h10v14h10v-14h10v-14h8v-18h-8v-14H28v-14H18v14H8v14H-8v-41H8v-19H-8V77H8v13h8v16h11v13h9v15h7v12h14v-12h7v-15h9v-13h11V90h8V77h16v13h8v16h11v13h9v15h7v12h14v-12h7v-15h9v-13h11V90h8V77h16v28h-16v19h16v41h-16v-14h-10v-14h-10v14h-10v14h-8v18h8v14h10v14h10v-14h10v-14h16v33h-16v20h16v44h-16v-17h-6v-13h-6v-14h-8v-14h-7v-10h-9v-14h-12v14h-9v10h-8v14h-8v14h-7v13h-6v11zm2-167v27h8v-27zm-4 58v-14H82v-14H72v14H62v14h-8v18h8v14h10v14h10v-14h10v-14h16v14h10v14h10v-14h10v-14h8v-18h-8v-14h-10v-14h-10v14h-10v14zm4 46v27h8v-27z"/>
		</g>
		<use xlink:href="#b" transform="matrix(1,0,0,-1,0,900)"/>
		<path d="m-8 408H8v14h7v8h8v14h7v12h-7v14h-8v8H8v14H-8zm216 0v84h-16v-14h-7v-8h-8v-14h-7v-12h7v-14h8v-8h7v-14h-8v-18h8v-14h-16v14h-10v14h-10v-14h-10v-14h-16v33h16v20h-16v44h16v-17h-6v-13h-6v-14h-8v-14h-7v-10h-9v-14h-12v14h-9v10h-8v14h-8v14h-7v13h-6v11zm2-167v27h8v-27zm-4 58v-14H82v-14H72v14H62v14h-8v18h8v14h10v14h10v-14h10v-14h16v14h10v14h10v-14h10v-14h8v-18h-8v-14h-10v-14h-10v14h-10v14zm4 46v27h8v-27z"/>
	</g>
	<path fill="#007c30" d="m44 126h334v63H44z"/>
</svg>
`, height: "40vh",
fontSize: "2rem", fontSize2: null,
curiosidad: `La Rusia de Hacendado. ¿Sabes cuál ha sido una de las mayores empresas de este país? Pues el World of Tanks xD. </br> Spoiler: salió mal. Esa empresa se piró cuando comenzó la movida entre Rusia y Ucrania.`},
    {
        id: "14", nombre: "Rusia", poblacion: "145 000 000", PIB: "2,26 billones de dólares", capital: "Moscú", anioConstitucion: 1993, etniaMayoritaria: "Eslavos orientales", monedaActual: "Rublo ruso", idiomaOficial: "ruso", banderita: `<svg class="banderita" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 6" width="85" height="56.7">
    <rect fill="#fff" width="9" height="3"/>
    <rect fill="#d52b1e" y="3" width="9" height="3"/>
    <rect fill="#0039a6" y="2" width="9" height="2"/>
</svg>`,
        height: "65vh",
        fontSize: null, fontSize2: "1rem",
        curiosidad: `Todos conocen a Rusia: Putin montando en oso a pecho descubierto, Tripaloski, vodka y una supuesta democracia sin opositores. Pero aquí van un par de hechos cortos: la ciudad soviética de Stalingrado cambió su nombre a Volgogadro. Tiene una región dedicada específicamente a judíos. Tienen movidas por unas islas con Japón. El líder de Chechenia (una famosa región musulmana) dice que Alá le da el dinero para sus mansiones`
    },
    {
        id: "15",
        nombre: "Kaliningrado (integrado en Rusia)",
        poblacion: "941.873",
        PIB: "22.5 mil millones de dólares",
        capital: "Kaliningrado",
        anioConstitucion: 1993,
        etniaMayoritaria: "Eslavos orientales",
        monedaActual: "Rublo ruso",
        idiomaOficial: "ruso",
        banderita: `<img src="/imgs/kaliningrado.png" class="banderita2" alt="bandera Kaliningrado" width="85" height="56.7">`,
        height: "45vh",
        fontSize: "1.5rem", fontSize2: null,
        curiosidad: `Sí, nadie pensaría que hubiese un enclave ruso en plena UE y que fuese prácticamente una enorme fortaleza del ejército de Rusia. Pero así es. Consecuencias de la Segunda Guerra Mundial.`
    }
    ,
    {
        id: "16", nombre: "Ucrania", poblacion: "44 400 000", PIB: "150.39 mil millones de dólares", capital: "Kiev", anioConstitucion: 1996, etniaMayoritaria: "Eslavos orientales", monedaActual: "Grivna", idiomaOficial: "ucraniano", banderita: `<svg class="banderita" xmlns="http://www.w3.org/2000/svg" width="85" height="56.7" viewBox="0 0 1200 800">
    <rect width="1200" height="800" fill="#0057B7"/>
    <rect width="1200" height="400" y="400" fill="#FFD700"/>
</svg>,
`, height: "58vh",
fontSize: null, fontSize2: "1rem",
curiosidad: `Sí, ahora a todo el mundo le suena este país. De hecho, el mapa representa este país con las fronteras anteriores a 2014. Y es que, en realidad, la mayoría de la sociedad no es consciente de que las guerras en Ucrania empezaron en 2014 en Donestk y Lugansk (era una guerra civil), y que, supuestamente, Rusia sin dar ni un solo tiro, 'colonizó' la península de Crimea (el triangulito del sur).`},

    { id: "17", nombre: "Moldavia", poblacion: "2 600 000", PIB: "11.35 mil millones de dólares", capital: "Chisinau", anioConstitucion: 1994, etniaMayoritaria: "Rumanos", monedaActual: "Leu moldavo", idiomaOficial: "rumano", banderita: `<img src="/imgs/moldavia.png" class="banderita" alt="bandera Moldavia" width="100" height="50">`,
    height: "52vh",
fontSize: "2rem", fontSize2: "1rem",
curiosidad: `Prácticamente el hermano de Rumanía, Moldavia se clasifica como el país más pobre de toda Europa, industrialmente atrapada en los años 80. Además, en la región 'independiente de facto' de la frontera norte (Transnistria), están todavía socialmente viviendo en la época soviética (aunque en este caso, prácticamente de forma voluntaria)`
 },
    {
        id: "18", nombre: "Rumanía", poblacion: "19 200 000", PIB: `${idPaisesDefinitivo[22].pib} millones de euros`, capital: "Bucarest", anioConstitucion: 1991, etniaMayoritaria: "Rumanos", monedaActual: "Leu rumano", idiomaOficial: "rumano", banderita: `<svg class="banderita" xmlns="http://www.w3.org/2000/svg" width="85" height="56.7" viewBox="0 0 3 2">
    <rect width="3" height="2" x="0" y="0" fill="#002B7F"/>
    <rect width="2" height="2" x="1" y="0" fill="#FCD116"/>
    <rect width="1" height="2" x="2" y="0" fill="#CE1126"/>
</svg>
`, height: "40vh",
fontSize: "2rem", fontSize2: null,
curiosidad: `¿Sabes que curiosamente Rumanía tiene cosas importantes a parte de Transilvania? En efecto, empezando con el hecho de que tb son latinos, pues su idioma es una lenguaje romance, como el español, italiano, etc.`},
    {
        id: "19", nombre: "Bulgaria", poblacion: "6 900 000", PIB: `${idPaisesDefinitivo[1].pib} millones de euros`, capital: "Sofía", anioConstitucion: 1991, etniaMayoritaria: "Eslavos del Sur", monedaActual: "Leva búlgaro", idiomaOficial: "búlgaro", banderita: `<svg class="banderita" xmlns="http://www.w3.org/2000/svg" width="85" height="51" viewBox="0 0 5 3">
    <rect width="5" height="3" fill="#fff"/>
    <rect width="5" height="2" y="1" fill="#00966E"/>
    <rect width="5" height="1" y="2" fill="#D62612"/>
</svg>
`, height: "55vh",
fontSize: "2rem", fontSize2: null,
curiosidad: `Es, de momento, el país más pobre de la EU, aunque curiosamente tiene muchas relaciones sociales (que no políticas) con Turquía, hasta el punto de que hay un partido político específico por la defensa de los derechos de la etnia turca en el país, consiguiendo gobernar en varias ocasiones mediante coaliciones.`},

    {
        id: "20", nombre: "Turquía", poblacion: "82 000 000", PIB: `${idPaisesDefinitivo[37].pib} millones de euros`, capital: "Ankara", anioConstitucion: 1983, etniaMayoritaria: "Turcos", monedaActual: "Lira turca", idiomaOficial: "turco", banderita: `<svg class="banderita" xmlns="http://www.w3.org/2000/svg" width="85" height="56.7" viewBox="0 -30000 90000 60000">
	<path fill="#e30a17" d="m0-30000h90000v60000H0z"/>
	<path fill="#fff" d="m41750 0 13568-4408-8386 11541V-7133l8386 11541zm925 8021a15000 15000 0 1 1 0-16042 12000 12000 0 1 0 0 16042z"/>
</svg>
`, height: "58vh",
fontSize: null, fontSize2: "1rem",
curiosidad: `El heredero del Imperio Otomano y padre del Kebab, vive una de las inflaciones más altas del mundo mientras mantienen un ejército inmenso (el 2º de la OTAN), la principal fabricación de drones bélicos, una cierta tendencia a meterse en guerras defendiendo a países de pueblos túrquicos (como Azerbaiyán), una especie de dictadura y la negación del genocidio armenio.`},
    {
        id: "21", nombre: "Grecia", poblacion: "10 400 000", PIB: `${idPaisesDefinitivo[7].pib} millones de euros`, capital: "Atenas", anioConstitucion: 1975, etniaMayoritaria: "Mediterráneos", monedaActual: "Euro", idiomaOficial: "griego", banderita: `<svg class="banderita" xmlns="http://www.w3.org/2000/svg" width="85" height="56.7" viewBox="0 0 27 18">
    <rect fill="#0D5EAF" width="27" height="18"/>
    <path fill="none" stroke-width="2" stroke="#FFF" d="M5,0V11 M0,5H10 M10,3H27 M10,7H27 M0,11H27 M0,15H27"/>
</svg>
`, height: "50vh",
fontSize: null, fontSize2: "1rem",
curiosidad: `De antigua potencia humanística, científica, cultural e histórica, a ser de los países más endeudados de Europa (180% del PIB) y de cuya monarquía desaparecida proviene la reina emérita de España (la reina Sofía). Pese perteneciendo a la OTAN tb, tiene muchos conflictos navales con Turquía, como la partición de Chipre.`}, {
        id: "22",
        nombre: "Chipre",
        poblacion: "1.2 millones",
        PIB: `${idPaisesDefinitivo[12].pib} millones de euros`,
        capital: "Nicosia",
        anioConstitucion: 1960,
        etniaMayoritaria: "Meditarráneos",
        monedaActual: "Euro",
        idiomaOficial: "griego",
        banderita: `<img src="/imgs/chipre.png" class="banderita" alt="bandera Chipre" width="85" height="56.7">`,
        height: "60vh",
        fontSize: null, fontSize2: "1rem",
        curiosidad: `Sí, el país de la UE dividida de facto por la mitad y donde se produjo el primer 'corralito' económico de la UE. Y es que el país se divide entre Chipre del Sur (el típico, el ortodoxo y de habla griega, reconocido internacionalmente) y Chipre del Norte (solo reconocido por Turquía, pues tiene mayoría turca y en una guerra previa querían conquistar todo Chipre. Recuerda a Corea del Norte, aunque no tan dictatorial)`

    },
    {
        id: "23", nombre: "Macedonia del Norte", poblacion: "2 100 000", PIB: `${idPaisesDefinitivo[34].pib} millones de euros`, capital: "Skopie", anioConstitucion: 1993, etniaMayoritaria: "Eslavos del Sur", monedaActual: "Dinar macedonio", idiomaOficial: "macedonio", banderita: `<svg xmlns="http://www.w3.org/2000/svg" width="85" height="42.5" viewBox="-140 -70 280 140" fill="#f8e92e" class="banderita" style="margin-right:-2vh">
    <path fill="#d82126" d="m-140-70h280V70h-280z"/>
    <path d="m-140 14v-28l280 28v-28zm126-84h28L0-15zM14 70h-28L0 15zM-140-70h42L12.86 7.72zm0 140h42L12.86-7.72zM140-70H98L-12.86 7.72zm0 140H98L-12.86-7.72z"/>
    <circle r="22.5" stroke="#d82126" stroke-width="5"/>
</svg>
`, height: "72vh",
fontSize: "2rem", fontSize2: "1rem",
curiosidad: `A ver, no tiene nada que ver con el postre de frutas varias. Aunque sí con la tierra de origen de Carlomagno. También es gracioso que haya tenido que cambiar constitucionalmente su nombre oficial (añadiendo 'del Norte') para que Grecia permita su entrada en la UE (así se diferencia el nombre del país con una provincia griega), aunque Bulgaria le sigue vetando. Finalmente, es gracioso que su moneda, el dinar, tenga el mismo nombre que muchos países árabes, y tb igual que Serbia.`},

    { id: "24", nombre: "Albania", poblacion: "2 800 000", PIB: `${idPaisesDefinitivo[35].pib} millones de euros`, capital: "Tirana", anioConstitucion: 1992, etniaMayoritaria: "Mediterráneos", monedaActual: "Lek albanés", idiomaOficial: "albanés", banderita: `<img src="/imgs/albania.png" class="banderita" alt="bandera Albania" width="85" height="60.7">`, height: "50vh",
    fontSize: null, fontSize2: null,
    curiosidad: `País muy hermético y que se lleva bastante mal con la mayoría de sus vecinos, aunque bien que comercian con ellos con drogas ilegales. No por nada suenan las mafias albanesas y kosovares y es de los mayores productores de mariguana y demás de Europa.` },

    { id: "25", nombre: "Montenegro", poblacion: "600 000", PIB: `${idPaisesDefinitivo[33].pib} millones de euros`, capital: "Podgorica", anioConstitucion: 2006, etniaMayoritaria: "Eslavos del Sur", monedaActual: "Euro", idiomaOficial: "montenegrino", banderita: `<img src="/imgs/montenegro.png" class="banderita" alt="bandera Montenegro" width="100" height="50">`, height: "35vh",
    fontSize: "1.8rem", fontSize2: null,
    curiosidad: `País pequeño, montañoso y enormemente endeudado con China por inversiones multimillonarias de autopistas que no llegan a ninguna parte :)` },
    {
        id: "26", nombre: "Serbia", poblacion: "7 000 000", PIB: `${idPaisesDefinitivo[36].pib} millones de euros`, capital: "Belgrado", anioConstitucion: 2006, etniaMayoritaria: "Eslavos del Sur", monedaActual: "Dinar serbio", idiomaOficial: "serbio", banderita: `<svg height="75" width="75" version="1.1" class="banderita" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
    viewBox="0 0 512 512" xml:space="preserve">
<circle style="fill:#0052B4;" cx="256" cy="256" r="256"/>
<g>
   <polygon style="fill:#F0F0F0;" points="112.449,155.827 117.975,172.835 135.855,172.835 121.39,183.344 126.915,200.349 
       112.449,189.84 97.982,200.349 103.509,183.344 89.043,172.835 106.922,172.835 	"/>
   <polygon style="fill:#F0F0F0;" points="168.101,139.132 173.627,156.139 191.507,156.139 177.042,166.648 182.567,183.653 
       168.101,173.144 153.635,183.653 159.161,166.648 144.696,156.139 162.576,156.139 	"/>
   <polygon style="fill:#F0F0F0;" points="223.753,122.436 229.279,139.443 247.159,139.443 232.694,149.953 238.219,166.958 
       223.753,156.448 209.287,166.958 214.813,149.953 200.348,139.443 218.228,139.443 	"/>
   <polygon style="fill:#F0F0F0;" points="399.551,155.827 394.025,172.835 376.145,172.835 390.611,183.344 385.085,200.349 
       399.551,189.84 414.018,200.349 408.491,183.344 422.957,172.835 405.077,172.835 	"/>
   <polygon style="fill:#F0F0F0;" points="343.899,139.132 338.373,156.139 320.493,156.139 334.959,166.648 329.433,183.653 
       343.899,173.144 358.365,183.653 352.839,166.648 367.304,156.139 349.424,156.139 	"/>
   <polygon style="fill:#F0F0F0;" points="288.247,122.436 282.721,139.443 264.841,139.443 279.306,149.953 273.781,166.958 
       288.247,156.448 302.713,166.958 297.187,149.953 311.652,139.443 293.772,139.443 	"/>
</g>
<path style="fill:#FFDA44;" d="M300.522,267.13L256,211.478l-22.261,11.13v22.261l-33.391,22.261h-22.261v28.759
   c32.628,13.212,55.652,45.181,55.652,82.546l0,0H256v-22.261l22.261-22.261l22.261,22.261l22.261-22.261v-22.261l22.261-33.391
   L300.522,267.13z"/>
</svg>
`, height: "65vh",
fontSize: null, fontSize2: "1rem",
curiosidad: `Sí, en la descripción no está la bandera del país de Djokovic, si no una que les representa y a la vez no. Y es que la región del sur, la famosa Kosovo, está considerada por algunos países como país independiente y por otros como región serbia con cierta autonomía (de hecho, esta es la posición de España). También es curioso que en la Guerra de Yugoslavia fuese su capital, Belgrado, la única ciudad importante bombardeada por la OTAN`},
    {
        id: "27", nombre: "Bosnia y Herzegovina", poblacion: "3 300 000", PIB: `${idPaisesDefinitivo[32].pib} millones de euros`, capital: "Sarajevo", anioConstitucion: 1995, etniaMayoritaria: "Bosnios", monedaActual: "Marco bosnio", idiomaOficial: "bosnio, croata y serbio", banderita: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="85" height="42.5" style="margin-right:-3vh" viewBox="0 0 16 8" class="banderita">
    <rect width="16" height="8" fill="#002395"/>
    <path d="m4.24,0h8v8z" fill="#fecb00"/>
    <g id="g">
        <path d="M2.353283,0.5248529 2.8,-0.85 3.246717,0.524853 2.077197,-0.324853H3.522803z" fill="#fff" id="s"/>
        <use xlink:href="#s" x="1" y="1"/>
        <use xlink:href="#s" x="2" y="2"/>
    </g>
    <use xlink:href="#g" x="3" y="3"/>
    <use xlink:href="#g" x="6" y="6"/>
</svg>
`, height: "65vh",
fontSize: "1.5rem", fontSize2: "1rem",
curiosidad: `Uno de los países más complejos de Europa: están divididos en 3 provincias (dos dan nombre al país, la tercera es la de mayoría serbia), están divididos tb en tres religiones (católicos, ortodoxos y musulmanes) y tienen 3 presidentes del gobierno que se rotan. Quieren entrar en la EU, pero entre los desequilibrios económicos y las continuas confrontaciones entre las provincias, e incluso su independencia, les resulta prácticamente imposible.`},

    { id: "28", nombre: "Croacia", poblacion: "4 000 000", PIB: `${idPaisesDefinitivo[10].pib} millones de euros`, capital: "Zagreb", anioConstitucion: 1998, etniaMayoritaria: "Eslavos del Sur", monedaActual: "Euro", idiomaOficial: "croata", banderita: `<img src="/imgs/croacia.png" class="banderita" alt="bandera Croacia" width="85" height="42.5">`, height: "30vh",
    fontSize: null, fontSize2: null,
    curiosidad: `El país de Luka Modrić y de 2Cellos es el último país de la UE en aceptar el Euro como moneda de curso legal oficial.` },
    {
        id: "29", nombre: "Eslovenia", poblacion: "2 100 000", PIB: `${idPaisesDefinitivo[23].pib} millones de euros`, capital: "Liubliana", anioConstitucion: 1991, etniaMayoritaria: "Eslavos del Sur", monedaActual: "Euro", idiomaOficial: "esloveno", banderita: `<svg width="85" height="42.5" class="banderita" viewBox="0 0 240 120" fill="#00f" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h240v120H0Z" fill="red"/>
    <path d="M0 0h240v80H0Z"/>
    <path d="M0 0h240v40H0Z" fill="#fff"/>
    <g transform="matrix(.39140688 0 0 .39140688 60 60)">
      <path d="M-37.175342-94.368205a92.195445 92.195445 0 0 1 74.350684 0Q43-12 0-1q-43-11-37.175342-93.368205Z"/>
      <path id="a" d="m0-84.5 1.125 2.551443L3.897114-82.25 2.25-80l1.647114 2.25L1.125-78.051443 0-75.5l-1.125-2.551443-2.772114.301443L-2.25-80l-1.647114-2.25 2.772114.301443" fill="#ff0"/>
      <use xlink:href="#a" x="-10.5" y="-14"/>
      <use xlink:href="#a" x="10.5" y="-14"/>
      <path d="m0-70 9 18 6-8 15 20a10 10 0 0 1-.384761 2.747211A46.400549 46.400549 0 0 1 0-6.090878a46.400549 46.400549 0 0 1-29.615239-31.161911A10 10 0 0 1-30-40l15-20 6 8z" fill="#fff"/>
      <path id="b" d="M-29.615239-37.252789A10 10 0 0 0-15-31.339746a10 10 0 0 1 10 0 10 10 0 0 0 10 0 10 10 0 0 1 10 0 10 10 0 0 0 14.615239-5.913043L30-37.113249v7.320508a10 10 0 0 0-5 1.339746 10 10 0 0 1-10 0 10 10 0 0 0-10 0 10 10 0 0 1-10 0 10 10 0 0 0-10 0 10 10 0 0 1-10 0 10 10 0 0 0-5-1.339746v-7.320508"/>
      <use xlink:href="#b" y="5.7735028"/>
      <path d="M-40-93.066239a92.195445 92.195445 0 0 1 2.824658-1.301966l2.97064 47.448778A49.301041 49.301041 0 0 0 0-3.036262a49.301041 49.301041 0 0 0 34.204702-43.883164l2.97064-47.448778A92.195445 92.195445 0 0 1 40-93.066239L37.099526-46.73819A52.201533 52.201533 0 0 1 0 0a52.201533 52.201533 0 0 1-37.099526-46.738189Z" fill="red"/>
    </g>
  </svg>`,
        height: "55vh",
        fontSize: "1.8rem", fontSize2: null,
        curiosidad: `No confundirlo con Eslovaquia. Básicamente este el país de Melania Trump, la mujer de Donald Trump. También es curioso que en la cruenta Guerra de Yugoslavia fue el primer país en independizarse y sin apenas llegar a las armas, pues el ejército yugoslavo no movío grandes fuerzas armadas por la poca diferencia étnica en el país.`
    },
    {
        id: "30", nombre: "Hungría", poblacion: "9 700 000", PIB: `${idPaisesDefinitivo[16].pib} millones de euros`, capital: "Budapest", anioConstitucion: 2011, etniaMayoritaria: "Magyar", monedaActual: "Florín húngaro", idiomaOficial: "húngaro", banderita: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" class="banderita" width="100" height="50"><path d="M0 0h1200v600H0" fill="#477050"/><path d="M0 0h1200v400H0" fill="#fff"/><path d="M0 0h1200v200H0" fill="#ce2939"/></svg>

    `, height: "65vh",
    fontSize: "2.5rem", fontSize2: "1rem",
    curiosidad: `"El país de Soros y del Goulash se ha convertido durante la última década en el bastión de la extremaderecha y en un quebradero de cabeza para la UE, pues suele vetar muchas reformas, como la ayuda a Ucrania. Mientras tanto, sus continuas reformas judiciales han hecho dudar sobre la separación de poderes en ese país. Al menos sus relativos bajos impuestos han incentivado a que se asienten muchas empresas y no le afecte tanto las crisis económicas. `},
    {
        id: "31", nombre: "Austria", poblacion: "8 900 000", PIB: `${idPaisesDefinitivo[19].pib} millones de euros`, capital: "Viena", anioConstitucion: 1955, etniaMayoritaria: "Germanos", monedaActual: "Euro", idiomaOficial: "alemán", banderita: `<?xml version="1.0" encoding="UTF-8"?>
    <svg xmlns="http://www.w3.org/2000/svg" class="banderita" width="85" height="56.7" viewBox="0 0 900 600">
    <rect fill="#c8102e" width="900" height="600"/>
    <rect fill="#fff" y="200" width="900" height="200"/>
    </svg>`,
        height: "58vh",
        fontSize: null, fontSize2: "1rem",
        curiosidad: `Es gracioso que prácticamente toda la UE esté en la OTAN y justo Austria pase del tema. Además, aparte de Mozart y de la historia de Sonrisas y Lágrimas, Austria contó con uno de los centro intelectuales más importantes del mundo... antes de la Segunda Guerra Mundial. ¿Te suena la Escuela de Viena de Economía, o la Segunda Escuela de Viena de Música, o el Círculo de Viena de Filosofía?`
    },
    {
        id: "32", nombre: "Slovakia", poblacion: "5 400 000", PIB: `${idPaisesDefinitivo[24].pib} millones de euros`, capital: "Bratislava", anioConstitucion: 1992, etniaMayoritaria: "Eslavos centrales", monedaActual: "Euro", idiomaOficial: "eslovaco", banderita: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="85" height="56.7" viewBox="0 0 10800 7200" fill="#ee1c25" class="banderita">
	<defs>
		<clipPath id="c">
			<path id="s" d="m4678 1746c0 0 56 561 56 1683-8 1146-865 1726-1494 2031-629-305-1486-885-1494-2031 0-1122 56-1683 56-1683z"/>
		</clipPath>
	</defs>
	<g transform="scale(1200)">
		<path fill="#fff" d="m0 0h9v6H0z"/>
		<path fill="#0b4ea2" d="m0 2h9v4H0z"/>
		<path d="m0 4h9v2H0z"/>
	</g>
	<use xlink:href="#s"/>
	<path fill="#fff" d="m3113 4800V3397c-475 0-610 42-752 85a2323 2323 0 0 0 0-431c142 43 277 85 752 85v-390c-150 0-357 6-595 87a2323 2323 0 0 0 0-432c238 80 445 86 595 86 0-113-35-356-79-557a2323 2323 0 0 0 412 0c-44 201-79 444-79 557 150 0 357-6 595-86a2323 2323 0 0 0 0 432c-238-81-445-87-595-87v390c475 0 610-42 752-85a2323 2323 0 0 0 0 431c-142-43-277-85-752-85v1403z"/>
	<path clip-path="url(#c)" fill="#0b4ea2" d="m2463 5903a507 867 0 1 1 319-1541 584 1084 0 0 1 916 0 507 867 0 1 1 319 1541z"/>
	<use xlink:href="#s" fill="none" stroke="#fff" stroke-width="108"/>
</svg>`,
        height: "60vh",
        fontSize: "2.2rem", fontSize2: "1rem",
        curiosidad: `Hasta te pongo el nombre en inglés para que no lo confundas con Eslovenia. Y sí, no es lo mismo que Checoslovaquia, pues ese antiguo país fue dividido entre República Checa y Slovakia después de la Guerra Fría. Es cierto que entre ellos hoy en día hay bastantes relaciones comerciales y sociales, incluso hay bastante población que está a favor de la reunificación. Solo el tiempo lo dirá.`
    },
    {
        id: "33", nombre: "República Checa o Chequia", poblacion: "10 700 000", PIB: `${idPaisesDefinitivo[2].pib} millones de euros`, capital: "Praga", anioConstitucion: 1992, etniaMayoritaria: "Eslavos centrales", monedaActual: "Corona checa", idiomaOficial: "checo", banderita: `<?xml version="1.0" encoding="UTF-8"?>
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" class="banderita" width="65" height="43.3" viewBox="0 0 900 600" style="margin-top:4vh">
        <rect width="900" height="600" fill="#d7141a"/>
        <rect width="900" height="300" fill="#fff"/>
        <path d="M 450,300 0,0 V 600 z" fill="#11457e"/>
    </svg>`,
        height: "70vh",
        fontSize: "1.5rem", fontSize2: null,
        curiosidad: `En efecto, la República Checa también se llama oficialmente Chequia. Y además tiene más cosas a resaltar que la ciudad de Praga. Por ejemplo, es el país más ateo de Europa, fue el país que más rápido y mejor cambío al capitalismo en los años 90 y es de lo países más críticos con Rusia en este siglo, llegando a vender armas a Ucrania ya desde 2014.`
    },
    {
        id: "34", nombre: "Polonia", poblacion: "38 300 000", PIB: `${idPaisesDefinitivo[20].pib} millones de euros`, capital: "Varsovia", anioConstitucion: 1997, etniaMayoritaria: "Eslavos centrales", monedaActual: "Złoty", idiomaOficial: "polaco", banderita: `<?xml version="1.0"?>
    <svg xmlns="http://www.w3.org/2000/svg" class="banderita" width="85" height="53.1" viewBox="0 0 8 5">
    <rect width="8" height="5" fill="#dc143c"/>
    <rect width="8" height="2.5" fill="#fff"/>
    </svg>`,
        height: "45vh",
        fontSize: null, fontSize2: null,
        curiosidad: `Nada que ver con los catalanes. Idioma muy distinto del español. Mucho alcohol. Velocidad máxima en autovía de 140 km/h (la más alta de Europa junto con Bulgaria, por detrás de la 'Autobahn' alemana). Curiosamente no paran de decir 'Kurva'.`
    },
    {
        id: "35", nombre: "Alemania", poblacion: "83 200 000", PIB: `${idPaisesDefinitivo[4].pib} millones de euros`, capital: "Berlín", anioConstitucion: 1990, etniaMayoritaria: "Germanos", monedaActual: "Euro", idiomaOficial: "alemán", banderita: `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <svg xmlns="http://www.w3.org/2000/svg" class="banderita" width="85" height="51" viewBox="0 0 5 3">
        <desc>Flag of Germany</desc>
        <rect id="black_stripe" width="5" height="3" y="0" x="0" fill="#000"/>
        <rect id="red_stripe" width="5" height="2" y="1" x="0" fill="#D00"/>
        <rect id="gold_stripe" width="5" height="1" y="2" x="0" fill="#FFCE00"/>
    </svg>`,
        height: "72vh",
        fontSize: "2rem", fontSize2: "1.1rem",
        curiosidad: `Sí, además de las salchichas, los cochazos, el Octoberfest y el grupo de heavy metal Ramstein, hay que destacar que en este año 2024 se ha convertido en la tercera economía mundial al desbancar a Japón, aunque no está pasando por su mejor momento. Se ve que su mala suerte eterna en Eurovisión le ha contagiado a otras situaciones, como decidir acabar con las centrales nucleares y quemar carbón en su lugar (+ contaminante).`
    },
    {
        id: "36", nombre: "Paises Bajos", poblacion: "17 400 000", PIB: `${idPaisesDefinitivo[18].pib} millones de euros`, capital: "Ámsterdam", anioConstitucion: 1815, etniaMayoritaria: "Germanos", monedaActual: "Euro", idiomaOficial: "neerlandés", banderita: `<svg xmlns="http://www.w3.org/2000/svg" class="banderita" width="85" height="56.7" viewBox="0 0 9 6">
    <rect fill="#21468B"	width="9" height="6"/>
    <rect fill="#FFF" width="9" height="4"/>
    <rect fill="#AE1C28"	width="9" height="2"/>
    </svg>`,
        height: "70vh",
        fontSize: "1.5rem", fontSize2: "1rem",
        curiosidad: `A ver, Holanda es parte de Países Bajos, pero Países Bajos no es Holanda. Holanda es solo una provincia más. ¿Te imaginas que a España lo llamasen Murcia? Yo tampoco. </br> Pero no solo hay mucha legalidad con drogas y hierbas en este país, sino que también son de los principales productores de verduras en la UE, ¡¡y no tiene apenas tierras para cultivar!! Y es que con investigación e inversión, han desarrollado granjas inteligentes y carreras específicas para ello. Resumen: granjeros ingenieros.`
    },
    {
        id: "37", nombre: "Bélgica", poblacion: "11 600 000", PIB: `${idPaisesDefinitivo[0].pib} millones de euros`, capital: "Bruselas", anioConstitucion: 1831, etniaMayoritaria: "Germanos (flamencos) y franceses", monedaActual: "Euro", idiomaOficial: "neerlandés, francés y alemán", banderita: `<svg xmlns="http://www.w3.org/2000/svg"  class="banderita" style="margin-right:10vh" width="85" height="73.7" viewBox="0 0 900 780"><path fill="#ef3340" d="M0 0h900v780H0z"/><path fill="#fdda25" d="M0 0h600v780H0z"/><path d="M0 0h300v780H0z"/></svg>
    `, height: "60vh",
    fontSize: null, fontSize2: null,
    curiosidad: `De país capital de la EU a estar muy dividido entre el norte (Flandes) y el sur (básicamente franceses), hasta el punto de querer la independencia del norte. Normal, quien quiere estar en un territorio donde la gastronomía más característica sean las patatas fritas, pudiendo elegir la mayor variedad de cervezas del mundo.`},

    { id: "38", nombre: "Luxemburgo", poblacion: "600 000", PIB: `${idPaisesDefinitivo[15].pib} millones de euros`, capital: "Luxemburgo", anioConstitucion: 1868, etniaMayoritaria: "Mucho francés", monedaActual: "Euro", idiomaOficial: "luxemburgués (francés)", banderita:`<svg xmlns="http://www.w3.org/2000/svg" width="85"
    height="51" class="banderita" viewBox="0,0 5,3"><path fill="#ef3340" d="M0,0H5V1H0Z"/><path fill="#fff" d="M0,1H5V2H0Z"/><path fill="#00a3e0" d="M0,2H5V3H0Z"/></svg>`,
     height: "40vh",
    fontSize: "1.8rem", fontSize2: null,
    curiosidad: `Resumen: un puñado de franceses todavía más elitistas. Hasta el punto que tienen un rey para un país enano. ¿Te imaginas que un territorio algo más pequeño que Extremadura tuviese una realeza exclusiva? Pues eso.` },
    {
        id: "39", nombre: "Francia", poblacion: "67 100 000", PIB: `${idPaisesDefinitivo[9].pib} millones de euros`, capital: "París", anioConstitucion: 1958, etniaMayoritaria: "Franceses", monedaActual: "Euro", idiomaOficial: "francés", banderita: `<?xml version="1.0" standalone="no"?>
    <svg
        width="85"
        height="56.7"
        xmlns="http://www.w3.org/2000/svg"
        class="banderita"
        viewBox="0 0 900 600">
        <polygon fill="#078930" points="0,0 900,0 900,600" />
        <polygon fill="#FCDD09" points="0,0  900,600  0,600" />
        <polygon fill="#DA121A" id="pentagram" transform="translate(450,300) scale(100) rotate(0)" points="0,-1
           0.587785252292473129168705954639072768597652,0.809016994374947424102293417182819058860155
           -0.951056516295153572116439333379382143405699,-0.309016994374947424102293417182819058860155
           0.951056516295153572116439333379382143405699,-0.309016994374947424102293417182819058860155
           -0.587785252292473129168705954639072768597652,0.809016994374947424102293417182819058860155" />
    
    </svg>`,
        height: "45vh",
        fontSize: null, fontSize2: "1rem",
        curiosidad: `Solo te digo que la bandera de la descripción es realmente francesa. Y es que la Guayana Francesa (al lado de Surinam y encima de Brasil) es una provincia de Francia, pero tal cual, no es una colonia. En su momento en el referéndum de independencia votaron a favor de seguir en Francia.`
    },
    { id: "40", nombre: "Córcega (integrado en Francia)", poblacion: "300 000", height: null,
    fontSize: null, fontSize2: null,
    curiosidad: ``},
    {
        id: "41", nombre: "Suiza", poblacion: "8 600 000", PIB: `${idPaisesDefinitivo[30].pib} millones de euros`, capital: "Berna", anioConstitucion: 1999, etniaMayoritaria: "De todo", monedaActual: "franco suizo", idiomaOficial: "alemán, francés, italiano y romanche", banderita: `<?xml version="1.0"?>
    <svg width="85" height="85" class="banderita"  viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path d="m0 0h32v32h-32z" fill="#f00"/>
    <path d="m13 6h6v7h7v6h-7v7h-6v-7h-7v-6h7z" fill="#fff"/>
    </svg>`,
        height: "55vh",
        fontSize: null, fontSize2: "1rem",
        curiosidad: `A ver, Suiza no es, según la UE, un paraíso fiscal. Y hay que decir que hay cosas muy guapas que tiene, además de muchísima pasta: Cada año cambian de presidente, para las principales reformas sociales hacen referéndums en la población, tienen impuestos bajos (pero no nulos) y hay hasta 4 idiomas oficiales (aunque su dialecto del alemán no lo entiende nadie).`
    },
    {
        id: "42", nombre: "Italia", poblacion: "60 400 000", PIB: `${idPaisesDefinitivo[11].pib} millones de euros`, capital: "Roma", anioConstitucion: 1948, etniaMayoritaria: "Mediterráneos", monedaActual: "Euro", idiomaOficial: "italiano", banderita: `<?xml version="1.0" encoding="UTF-8"?>
    <svg xmlns="http://www.w3.org/2000/svg" class="banderita" width="85" height="56.7" viewBox="0 0 3 2">
    <rect width="3" height="2" fill="#009246"/>
    <rect width="2" height="2" x="1" fill="#fff"/>
    <rect width="1" height="2" x="2" fill="#ce2b37"/>
    </svg>`,
        height: "60vh",
        fontSize: null, fontSize2: "1.1em",
        curiosidad: `Como buen país mediterráneo perteneciente a lso PIGS, Italia cuenta con una deuda pública bastante considerable y una enorme diferencia entre el norte y el sur. De hecho, hay regiones como Lombardía (provincia donde está Milán) que quiere independizarse de Italia para adherirse a Austria.`
    },
    { id: "43", nombre: "Cerdeña (integrado en Italia)", poblacion: "1 600 000", height: null,
    fontSize: null, fontSize2: null,
    curiosidad: `Pizza, pasta, mafias y mover mucho las manos. Pero muy majetes. También es de los países más endeudados de Europa, con un 140%. Y como suele ocurrir, el contraste cultural y económico entre el norte y el sur propicia que haya muchos choques. Incluso una región del norte, Trentino-Alto Adigio, prefiere independizarse de Italia y unirse a Austria.`},
    {
        id: "44",
        nombre: "Sicilia (integrado en Italia)",
        poblacion: "5.098.644",
        PIB: "171.9 mil millones de dólares",
        capital: "Palermo",
        anioConstitucion: 1948,
        etniaMayoritaria: "Mediterráneos",
        monedaActual: "Euro",
        idiomaOficial: "italiano",
        banderita: `<img src="/imgs/sicilia.png" class="banderita2" alt="bandera Sicilia" width="85" height="55.3">`, height: "28vh",
        fontSize: "1.5rem", fontSize2: null,
        curiosidad: `Sicilia, Palermo, Siracusa, Arquímedes, mafias, etc etc. ¿Pero has visto qué guapa está su bandera?` 
    }
    ,
    { id: "45", nombre: "España", poblacion: "47 300 000", PIB: `${idPaisesDefinitivo[8].pib} millones de euros`, capital: "Madrid", anioConstitucion: 1978, etniaMayoritaria: "Mediterráneos", monedaActual: "Euro", idiomaOficial: "español", banderita: `<img src="/imgs/espanita.png" class="banderita" alt="bandera Espanita" width="85" height="56.7">`, height: "40vh",
    fontSize: null, fontSize2: null,
    curiosidad: `¡¡Viva el vino, el aceite y el himno sin letra!! </br></br> Viva la diversidad, la alta deuda y un sistema de pensiones que ni él mismo sabe cómo se va a sostener.` },

    { id: "52", nombre: "Portugal", poblacion: "10 300 000", PIB: `${idPaisesDefinitivo[21].pib} millones de euros`, capital: "Lisboa", anioConstitucion: 1976, etniaMayoritaria: "Mediterráneos", monedaActual: "Euro", idiomaOficial: "portugués", banderita: `<img src="/imgs/portugal.png" class="banderita" alt="bandera Portugal" width="85" height="56.7">`, height: "55vh",
    fontSize: "2rem", fontSize2: "1rem",
    curiosidad: `El vecino menor de España, aunque le dio mil vueltas en las estrategias coloniales, pues hasta los año 70 seguía teniendo puertos y un comercio muy intensivo entre ellos. Por ejemplo, mucho hablar de Hong Kong que pasó de Reino Unido a China, ¿pero conoces el caso de Macao? Es exactamente igual, pero en vez de haber empresas y represión china, hay muchos casinos.` },
    {
        id: "53",
        nombre: "Madeira (integrado en Portugal)",
        poblacion: "300 000",
        PIB: "Integrado en Portugal",
        capital: "Funchal",
        anioConstitucion: 1976,
        etniaMayoritaria: "Mediterráneos",
        monedaActual: "Euro",
        idiomaOficial: "portugués",
        banderita: `<svg xmlns="http://www.w3.org/2000/svg" class="banderita2" width="85" height="56.7" viewBox="0 0 180 120">
        <path fill="#263E78" d="m0,0h180v129H0"/> 
        <path fill="#FFD700" d="m60,0h60v129H60"/> 
        <path fill="#DA291C" d="m90,48 12-12H78m0,48h24l-12-12m12-12
        12,12V48m-48,0v24l12-12m-6,6h36V54H72m12-12v36h12V42"/>
        <path stroke="#FFF" stroke-width="4" d="m90,42v36m18-18H72"/>
        </svg>`,
        height: "40vh",
        fontSize: "1.5rem", fontSize2: null,
        curiosidad: `El lugar de nacimiento de El Bicho (Cristiano Ronaldo SUUUU), es tb famoso por su paisaje, bajos impuestos y una bandera muy guapa.`
    },
    {
        id: "54",
        nombre: "Gotland (integrado en Suecia)",
        poblacion: "60 000",
        PIB: "Integrado en Suecia",
        capital: "Visby",
        anioConstitucion: 1974,
        etniaMayoritaria: "Nórdicos",
        monedaActual: "Corona sueca",
        idiomaOficial: "sueco",
        banderita: `<img src="/imgs/Gotland.svg" class="banderita2" alt="bandera Gotland" width="85" height="85">`,
        height: "40vh",
        fontSize: "1.5rem", fontSize2: null,
        curiosidad: `Qué chulo que la bandera sea una oveja, que haya más ovejas que personas en esta isla sueca (la más grande del Mar Báltico), y que hasta sea una raza de oveja autóctona y única de esta región de Europa.`
    },
    
    {
        id: "100",
        nombre: "Groenlandia (integrado en Dinamarca)",
        poblacion: "60 000",
        PIB: "Integrado en Dinamarca",
        capital: "Nuuk",
        anioConstitucion: 1953,
        etniaMayoritaria: "Inuits",
        monedaActual: "Corona danesa",
        idiomaOficial: "groenlandés y danés",
        banderita: `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_Greenland.svg/1920px-Flag_of_Greenland.svg.png" class="banderita2" alt="bandera Groenlandia" width="120" height="85">`,
        height: "45vh",
        fontSize: "1.5rem", fontSize2: null,
        curiosidad: `Es flipante que la isla más grande del mundo pertenezca a un país tan pequeño como es Dinamarca. Pero poco se habla de lo chula que está la bandera, porque representa el sol siendo reflejado en el hielo.`
    }

];

export default paisesDescripcion;
