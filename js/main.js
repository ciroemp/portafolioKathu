document.addEventListener("DOMContentLoaded", function () {
    // ==========================================
    // 1. LÓGICA DE TU MENÚ Y FONDOS (Tu código original)
    // ==========================================
    const botones = document.querySelectorAll(".menu-carta");
    const contenedor = document.getElementById("contenido-dinamico");
    const body = document.body;
    const bodyId = body.id;
    
    // Elementos a cambiar fondo
    const elementoFondoMenu = document.querySelectorAll(".fondo-menu-cartas");
    const fondo2 = document.querySelector(".imaginario-fondo2"); 

    // Definición de fondos
    const fondosBody = {
        imaginario: "url('../img/MUNDO-IMAGINARIO/imaginario-fondo-1.png')",
        identitario: "url('../img/MUNDO-IDENTITARIO/FONDO.png')",
        conectados: "url('../img/MUNDO-CONECTADOS/FONDO.png')",
        envolvente: "url('../img/MUNDO-ENVOLVENTE/FONDO.png')",
    };

    const fondosFondo2 = {
        imaginario: "url('../img/MUNDO-IMAGINARIO/imaginario-fondo-2-camino.png')",
        identitario: "url('../img/MUNDO-IDENTITARIO/FONDO-CAMINO.png')",
        conectados: "url('../img/MUNDO-CONECTADOS/FONDO-CAMINO.png')",
        envolvente: "url('../img/MUNDO-ENVOLVENTE/FONDO-CAMINO.png')",
    };

    const fondosMenuCartas = {
        imaginario: "url('../img/TARJETA.png')",
        conectados: "url('../img/MUNDO-CONECTADOS/CARTA-GRANDE.png')",
        identitario: "url('../img/TARJETA.png')",
        envolvente: "url('../img/MUNDO-CONECTADOS/CARTA-GRANDE.png')"
    };

    // Aplicar fondos iniciales
    if (fondosBody[bodyId]) body.style.backgroundImage = fondosBody[bodyId];
    if (fondo2 && fondosFondo2[bodyId]) fondo2.style.backgroundImage = fondosFondo2[bodyId];
    
    if (elementoFondoMenu.length > 0 && fondosMenuCartas[bodyId]) {
        elementoFondoMenu.forEach(elem => elem.style.backgroundImage = fondosMenuCartas[bodyId]);
    }

    // ====== 🔹 CONTENIDO DINÁMICO ======

    // Contenidos personalizados por proyecto
    const contenido = {
        pinocho: `
      <div id="pinocho" class="container pt-3">
                    <div class="row d-flex g-3">
                        <!-- Imagen grande -->
                        <div class="col-md-4 fondo-tarjeta text-center">
                            <img src="../img/MUNDO-IMAGINARIO/PINOCHO/IMG-GRANDE-PINOCHO.png" alt="imagen pinocho" class="img-fluid">
                        </div>

                        <!-- Texto -->
                        <div class="col-md-6 pt-4">
                            <h1>PINOCHO</h1>
                            <p>Una reinterpretación oscura del clásico. Los hilos ya no sostienen, sino que revelan el
                                peso del control y la identidad.</p>
                            <div class="container d-flex align-items-end justify-content-start p-0">
                                <div class="p-0">
                                    <img src="../img/PS.png" alt="logo PhotoShop" class="img-fluid" style="max-width: 60px;">
                                </div>
                            </div>
                        </div>

                        <!-- Espacio vacío -->
                        <div class="col-md-2 d-none d-lg-block"></div>
                    </div>

                    <!-- PRIMER CONTENEDOR -->
                    <div class="row mt-5 d-flex">
                        <div class="col">
                            <img src="../img/MUNDO-IMAGINARIO/PINOCHO/PINOCHO-1.png" alt="boceto" class="img-fluid b-ra">
                        </div>
                    </div>

                    <!-- SEGUNDO CONTENEDOR -->
                    <div class="row my-auto d-flex">
                        <div class="col-md-6 gx-3 gy-3">
                            <img src="../img/MUNDO-IMAGINARIO/PINOCHO/PINOCHO-2.png" class="img-fluid b-ra" alt="pinocho">
                        </div>
                        <div class="col-md-6 gx-3 gy-3 d-flex flex-column justify-content-between">
                            <img src="../img/MUNDO-IMAGINARIO/PINOCHO/PINOCHO-3.png" class="img-fluid b-ra mb-4" alt="">
                            <img src="../img/MUNDO-IMAGINARIO/PINOCHO/PINOCHO-4.png" class="img-fluid b-ra" alt="">
                        </div>
                    </div>

                    <!-- TERCER CONTENEDOR -->
                    <div class="row my-auto d-flex">
                        <div class="col-md-6 gx-3 gy-3">
                            <img src="../img/MUNDO-IMAGINARIO/PINOCHO/PINOCHO-5.png" class="img-fluid b-ra" alt="Libro Pinocho">
                        </div>
                        <div class="col-md-6 gx-3 gy-3">
                            <img src="../img/MUNDO-IMAGINARIO/PINOCHO/PINOCHO-6.png" class="img-fluid b-ra" alt="Bolso Pinocho">
                        </div>
                    </div>

                    <!-- TEXTO -->
                    <div class="row my-auto mx-auto gy-3">
                        <div class="col p-4 b-ra" style="background-color: rgb(58,57,55);">
                            <p>En esta reinterpretación oscura del clásico, Pinocho ya no es solo un muñeco de madera
                                que sueña con ser humano. Detrás de los hilos que lo sostienen se esconde un relato
                                inquietante sobre el control, la manipulación y los rincones más extraños de la mente.
                                Las páginas revelan un mundo donde lo infantil se mezcla con lo perturbador, y la línea
                                entre la fantasía y la locura se vuelve cada vez más delgada.
                            </p>
                            <p>Este no es un cuento para dormir… es un relato para despertar.</p>
                        </div>
                    </div>
                                
                    <!-- FECLA QUE ENVIA A SECCION CARTAS-->
                    <div class="mt-5">
                        <a href="#cartas"><img src="../img/FLECHA.png" alt="flecha" class="sombra b-ra"></a>

                        <p class="text-center">Volver arriba</p>
                    </div>

                </div>
    `,
        jipilove: `      
                <div id="jipilove" class="container pt-3">
                    <div class="row d-flex g-3">
                        <!-- Imagen grande -->
                        <div class="col-md-4 fondo-tarjeta text-center">
                            <img src="../img/MUNDO-IMAGINARIO/JIPILOVE/IMG-GRANDE-JIPILOVE.png" alt="imagen JIPILOVE" class="img-fluid">
                        </div>

                        <!-- Texto -->
                        <div class="col-md-6 pt-4">
                            <h1>JIPILOVE</h1>
                            <p>Una niña con un don natural: sanar con plantas y música. Su historia florece entre
                                serenidad y empatía.</p>
                            <div class="container d-flex align-items-end justify-content-start p-0">
                                <div class="p-0 d-flex g-3">
                                    <div class="container ps-0">
                                        <img src="../img/PS.png" alt="logo PhotoShop" class="img-fluid"
                                            style="max-width: 60px;">
                                    </div>
                                    <div class="container ps-0">
                                        <img src="../img/AI-ADOBE.png" alt="logo Ilustrator" class="img-fluid"
                                            style="max-width: 60px;">

                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Espacio vacío -->
                        <div class="col-md-2 d-none d-lg-block"></div>
                    </div>

                    <!-- PRIMER CONTENEDOR -->
                    <div class="row d-flex mt-5">
                        <div class="col d-flex justify-content-center">
                            <img src="../img/MUNDO-IMAGINARIO/JIPILOVE/JIPILOVE---1.png" alt="modelo imagen" class="img-fluid b-ra">
                        </div>
                    </div>

                    <!-- SEGUNDO CONTENEDOR -->
                    <div class="row my-auto d-flex">
                        <div class="col gx-3 gy-3">
                            <img src="../img/MUNDO-IMAGINARIO/JIPILOVE/JIPILOVE-2.png" class="img-fluid b-ra" alt="diseno jipilove">
                        </div>
                        <div class="col gx-3 gy-3">
                            <img src="../img/MUNDO-IMAGINARIO/JIPILOVE/JIPILOVE-3.png" class="img-fluid b-ra" alt="diseno jipilove">
                        </div>
                    </div>

                    <!-- TERCER CONTENEDOR -->
                    <div class="row my-auto d-flex">
                        <div class="col-md-6 gx-3 gy-3">
                            <img src="../img/MUNDO-IMAGINARIO/JIPILOVE/JIPILOVE-4.png" class="img-fluid b-ra" alt="diseno jipilove">
                        </div>
                        <div class="col-md-6 gx-3 gy-3">
                            <img src="../img/MUNDO-IMAGINARIO/JIPILOVE/JIPILOVE-5.png" class="img-fluid b-ra" alt="modelo jipilove">
                        </div>
                    </div>

                    <!-- TEXTO -->
                    <div class="row my-auto mx-auto gy-3">
                        <div class="col p-4 b-ra" style="background-color: rgb(226,11,119);">
                            <p>Jipilove nació del color y la música. Su energía fluye en ondas florales que sanan
                                corazones y llenan el aire de calma. Con su pandereta en forma de flor, convierte cada
                                sonido en una vibración luminosa que transforma tristeza en alegría. Su poder es el
                                amor: radiante, libre y contagioso. 

                            </p>
                            <p>Donde pasa Jipilove, florecen los buenos
                                sentimientos y todo vuelve a brillar.</p>
                        </div>
                    </div>

                    <!-- FECLA QUE ENVIA A SECCION CARTAS-->
                    <div class="mt-5">
                        <a href="#cartas"><img src="../img/FLECHA.png" alt="flecha" class="sombra b-ra"></a>

                        <p class="text-center">Volver arriba</p>
                    </div>
                </div>
    `,
        arika: `
      <div id="arika" class="container pt-3">
                    <div class="row d-flex g-3">
                        <!-- Imagen grande -->
                        <div class="col-md-4 fondo-tarjeta text-center">
                            <img src="../img/MUNDO-IMAGINARIO/ARIKA/IMG-GRANDE-ARIKA.png" alt="imagen" class="img-fluid">
                        </div>

                        <!-- Texto -->
                        <div class="col-md-6 pt-4">
                            <h1>ARIKA</h1>
                            <p>Nace del valor de compartir. Dos borreguitos Aries (mi hermano y yo) representan con
                                humor y ternura cómo aprendimos que compartir también es amar.</p>
                            <div class="container d-flex align-items-end justify-content-start p-0">
                                <div class="p-0">
                                    <img src="../img/AI-ADOBE.png" alt="logo Ilustrator" class="img-fluid"
                                        style="max-width: 60px;">
                                </div>
                            </div>
                        </div>

                        <!-- Espacio vacío -->
                        <div class="col-md-2 d-none d-lg-block"></div>
                    </div>

                    <!-- PRIMER CONTENEDOR -->
                    <div class="row mt-5 d-flex">
                        <div class="col">
                            <img src="../img/MUNDO-IMAGINARIO/ARIKA/ARIKA-1.png" alt="boceto" class="img-fluid b-ra">
                        </div>
                    </div>

                    <!-- SEGUNDO CONTENEDOR -->
                    <div class="row my-auto d-flex">
                        <div class="col-md-6 gx-3 gy-3">
                            <img src="../img/MUNDO-IMAGINARIO/ARIKA/ARIKA-2.png" class="img-fluid b-ra" alt="diseno arika">
                        </div>
                        <div class="col-md-6 gx-3 gy-3">
                            <img src="../img/MUNDO-IMAGINARIO/ARIKA/ARIKA-3.png" class="img-fluid b-ra" alt="diseno arika">
                        </div>
                    </div>

                    <!-- TERCER CONTENEDOR -->
                    <div class="row my-auto d-flex">
                        <div class="col-md-6 gx-3 gy-3">
                            <img src="../img/MUNDO-IMAGINARIO/ARIKA/ARIKA-4.png" class="img-fluid b-ra" alt="diseno arika">
                        </div>
                        <div class="col-md-6 gx-3 gy-3">
                            <img src="../img/MUNDO-IMAGINARIO/ARIKA/ARIKA-5.png" class="img-fluid b-ra" alt="diseno arika">
                        </div>
                    </div>

                    <!-- CUARTO CONTENEDOR -->
                    <div class="row my-auto d-flex">
                        <div class="col-md-6 gx-3 gy-3">
                            <img src="../img/MUNDO-IMAGINARIO/ARIKA/ARIKA-6.png" class="img-fluid b-ra" alt="diseno arika">
                        </div>
                        <div class="col-md-6 gx-3 gy-3">
                            <img src="../img/MUNDO-IMAGINARIO/ARIKA/ARIKA-7.png" class="img-fluid b-ra" alt="diseno arika">
                        </div>
                    </div>

                    <!-- QUINTO CONTENEDOR -->
                    <div class="row my-auto d-flex">
                        <div class="col gx-3 gy-3">
                            <img src="../img/MUNDO-IMAGINARIO/ARIKA/ARIKA-8.png" alt="diseno arika" class="img-fluid b-ra">
                        </div>
                    </div>

                    <!-- SEXTO CONTENEDOR -->
                    <div class="row my-auto d-flex">
                        <div class="col-md-6 gx-3 gy-3">
                            <img src="../img/MUNDO-IMAGINARIO/ARIKA/ARIKA-9.png" class="img-fluid b-ra" alt="diseno arika">
                        </div>
                        <div class="col-md-6 gx-3 gy-3">
                            <img src="../img/MUNDO-IMAGINARIO/ARIKA/ARIKA-10.png" class="img-fluid b-ra" alt="diseno arika">
                        </div>
                    </div>

                    <!-- SEPTIMO CONTENEDOR -->
                    <div class="row my-auto d-flex">
                        <div class="col-md-6 gx-3 gy-3">
                            <img src="../img/MUNDO-IMAGINARIO/ARIKA/ARIKA-11.png" class="img-fluid b-ra" alt="diseno arika">
                        </div>
                        <div class="col-md-6 gx-3 gy-3">
                            <img src="../img/MUNDO-IMAGINARIO/ARIKA/ARIKA-12.png" class="img-fluid b-ra" alt="diseno arika">
                        </div>
                    </div>

                    <!-- TEXTO -->
                    <div class="row my-auto mx-auto gy-3">
                        <div class="col p-4 b-ra" style="background-color: rgb(255,255,255);">
                            <p id="arikaP">Esta historia nace del valor de compartir, algo que me costó aprender de niña. Los
                                protagonistas, dos borreguitos Aries, representan a mi hermano y a mí, y reviven
                                nuestras experiencias de infancia con humor y ternura. Con un estilo kawaii y un toque
                                fantasioso, “Arika” combina nuestros nombres y refleja una lección simple pero profunda:
                                compartir también es una forma de amar.</p>
                        </div>
                    </div>

                    <!-- FECLA QUE ENVIA A SECCION CARTAS-->
                    <div class="mt-5">
                        <a href="#cartas"><img src="../img/FLECHA.png" alt="flecha" class="sombra b-ra"></a>

                        <p class="text-center">Volver arriba</p>
                    </div>
                </div>
    `,
        sombrillaAzul: `
    <div id="sombrillaAzul" class="container pt-3">
                    <div class="row d-flex g-3">
                        <!-- Imagen grande -->
                        <div class="col-lg-4 fondo-tarjeta text-center">
                            <img src="../img/MUNDO-IMAGINARIO/SOMBRILLA-AZUL/IMG-GRANDE-SOMBRERO-AZUL.png" alt="imagen sandalia"
                                class="img-fluid">
                        </div>

                        <!-- Texto -->
                        <div class="col-lg-6 pt-4">
                            <h1>SOMBRILLA AZUL</h1>
                            <p>Es un pañuelo playero que celebra la identidad costera salvadoreña, combinando blanco y
                                azul con ilustraciones de la vida en la playa: minutas, palmeras, huacales y chanclas.
                            </p>
                            <div class="container d-flex align-items-end justify-content-start p-0">
                                <div class="p-0 d-flex g-3">
                                    <div class="container ps-0">
                                        <img src="../img/PS.png" alt="logo PhotoShop" class="img-fluid"
                                            style="max-width: 60px;">
                                    </div>
                                    <div class="container ps-0">
                                        <img src="../img/AI-ADOBE.png" alt="logo Ilustrator" class="img-fluid"
                                            style="max-width: 60px;">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Espacio vacío -->
                        <div class="col-lg-2 d-none d-lg-block"></div>
                    </div>

                    <!-- PRIMER CONTENEDOR -->
                    <div class="row d-flex mt-5">
                        <div class="col-lg-6 gx-3 gy-3">
                            <img src="../img/MUNDO-IMAGINARIO/SOMBRILLA-AZUL/SOMBRILLA-AZUL-1.png" class="img-fluid b-ra2"
                                alt="diseno sombrilla azul">
                        </div>
                        <div class="col-lg-6 gx-4 gy-3">
                            <img src="../img/MUNDO-IMAGINARIO/SOMBRILLA-AZUL/SOMBRILLA-AZUL-2.png" class="img-fluid b-ra2"
                                alt="diseno sombrilla azul">
                        </div>
                    </div>

                    <!-- SEGUNDO CONTENEDOR -->
                    <div class="row d-flex">
                        <div class="gx-3 gy-3">
                            <img src="../img/MUNDO-IMAGINARIO/SOMBRILLA-AZUL/SOMBRILLA-AZUL-3.png" alt="modelo imagen"
                                class="img-fluid b-ra2">
                        </div>
                    </div>

                    <!-- TEXTO -->
                    <div class="row d-flex mt-3 mx-auto">
                        <div class="col p-4 b-ra" style="background-color: rgb(32,68,150);">
                            <p>Pañuelo playero inspirado en la identidad costera salvadoreña. Su diseño combina los
                                colores blanco y azul de la bandera de El Salvador con ilustraciones emblemáticas como
                                minutas, palmeras con cocos, hielera, niño en traje de baño, sombrilla playera, huacal,
                                pelota de fútbol y chancla.                             </p>
                            <p>Es un accesorio versátil que celebra la cultura popular y la
                                calidez de las playas salvadoreñas.</p>
                        </div>
                    </div>

                    <!-- FECLA QUE ENVIA A SECCION CARTAS-->
                    <div class="mt-5">
                        <a href="#cartas"><img src="../img/FLECHA.png" alt="flecha" class="sombra b-ra"></a>

                        <p class="text-center">Volver arriba</p>
                    </div>
                </div>
    `,
        cuidamosTanto: `
    <div id="cuidamosTanto" class="container pt-3">
                    <div class="row d-flex g-3">
                        <!-- Imagen grande -->
                        <div class="col-lg-4 fondo-tarjeta text-center">
                            <img src="../img/MUNDO-IMAGINARIO/CUIDAMOS-TANTO/IMG-GRANDE-CUIDAMOS-TANTO.png" alt="imagen corazon"
                                class="img-fluid">
                        </div>

                        <!-- Texto -->
                        <div class="col-lg-6 pt-4">
                            <h1>CUIDAMOS TANTO</h1>
                            <p>representa cómo al proteger el corazón del dolor, a veces también lo encerramos,
                                impidiendo que sane.
                            </p>
                            <div class="container d-flex align-items-end justify-content-start p-0">
                                <div class="p-0 d-flex g-3">
                                    <div class="container ps-0">
                                        <img src="../img/PS.png" alt="logo PhotoShop" class="img-fluid"
                                            style="max-width: 60px;">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Espacio vacío -->
                        <div class="col-lg-2 d-none d-lg-block"></div>
                    </div>
                    <!-- PRIMER CONTENEDOR -->
                    <div class="row d-flex mt-5">
                        <div class="col-lg-6 gx-3 gy-3">
                            <img src="../img/MUNDO-IMAGINARIO/CUIDAMOS-TANTO/CUIDAMOS-TANTO-1.png" class="img-fluid b-ra2"
                                alt="diseno cuidamosTanto">
                        </div>
                        <div class="col-lg-6 gx-4 gy-3">
                            <img src="../img/MUNDO-IMAGINARIO/CUIDAMOS-TANTO/CUIDAMOS-TANTO-2.png" class="img-fluid b-ra2"
                                alt="diseno CUIDAMOS-TANTO">
                        </div>
                    </div>

                    <!-- SEGUNDO CONTENEDOR -->
                    <div class="row d-flex">
                        <div class="col-lg-6 gx-3 gy-3">
                            <img src="../img/MUNDO-IMAGINARIO/CUIDAMOS-TANTO/CUIDAMOS-TANTO-3.png" class="img-fluid b-ra2"
                                alt="diseno CUIDAMOS-TANTO">
                        </div>
                        <div class="col-lg-6 gx-3 gy-3">
                            <img src="../img/MUNDO-IMAGINARIO/CUIDAMOS-TANTO/CUIDAMOS-TANTO-4.png" class="img-fluid b-ra2"
                                alt="diseno CUIDAMOS-TANTO">
                        </div>
                    </div>

                    <!-- TERCER CONTENEDOR -->
                    <div class="row d-flex">
                        <div class="col-lg-6 gx-3 gy-3">
                            <img src="../img/MUNDO-IMAGINARIO/CUIDAMOS-TANTO/CUIDAMOS-TANTO-5.png" class="img-fluid b-ra2"
                                alt="diseno CUIDAMOS-TANTO">
                        </div>
                        <div class="col-lg-6 gx-4 gy-3">
                            <img src="../img/MUNDO-IMAGINARIO/CUIDAMOS-TANTO/CUIDAMOS-TANTO-6.png" class="img-fluid b-ra2"
                                alt="diseno CUIDAMOS-TANTO">
                        </div>
                    </div>

                    <!-- TEXTO -->
                    <div class="row my-3 mx-0">
                        <div class="col p-4 b-ra" style="background-color: rgb(226,11,119);">
                            <p>Un corazón que esta cerrado por un candado. Lo protege tanto, que nadie puede alcanzarlo.
                                Pero dentro, también guardan las palabras que dolieron y nunca se soltaron. Esta
                                ilustración representa esa contradicción: el deseo de cuidar y el miedo de abrirse, el
                                equilibrio entre protegerse y dejar entrar la luz. </p>
                            
                        </div>
                    </div>

                    <!-- FECLA QUE ENVIA A SECCION CARTAS-->
                    <div class="mt-5">
                        <a href="#cartas"><img src="../img/FLECHA.png" alt="flecha" class="sombra b-ra"></a>

                        <p class="text-center">Volver arriba</p>
                    </div>
                </div>

    `,
        escarabajo: `
    <div id="escarabajo" class="container pt-3">
                    <div class="row d-flex g-3">
                        <!-- Imagen grande -->
                        <div class="col-lg-4 fondo-tarjeta text-center">
                            <img src="../img/MUNDO-IMAGINARIO/UNIVERSOS-ANEXOS/IMG-GRANDE-ESCARABAJO.png" alt="imagen escarabajo"
                                class="img-fluid">
                        </div>

                        <!-- Texto -->
                        <div class="col-lg-6 pt-4">
                            <h1>UNIVERSO ANEXOS</h1>
                            <p>Todo universo necesita su anexo: un espacio donde las ideas germinan antes de tomar
                                forma.
                            </p>
                            <div class="container d-flex align-items-end justify-content-start p-0">
                                <div class="p-0 d-flex g-3">
                                    <div class="container ps-0">
                                        <img src="../img/PS.png" alt="logo PhotoShop" class="img-fluid"
                                            style="max-width: 60px;">
                                    </div>
                                    <div class="container ps-0">
                                        <img src="../img/AI-ADOBE.png" alt="logo Ilustrator" class="img-fluid"
                                            style="max-width: 60px;">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Espacio vacío -->
                        <div class="col-lg-2 d-none d-lg-block"></div>
                    </div>

                    <!-- PRIMER CONTENEDOR -->
                    <div class="row mt-5 d-flex">
                        <div class="container g-3">
                            <img src="../img/MUNDO-IMAGINARIO/UNIVERSOS-ANEXOS/UNIVERSOS-ANEXOS-1.png" alt="modelo imagen"
                                class="img-fluid b-ra">
                        </div>
                    </div>

                    <!-- SEGUNDO CONTENEDOR -->
                    <div class="row my-auto d-flex">
                        <div class="col-lg-6 gx-3 gy-3">
                            <img src="../img/MUNDO-IMAGINARIO/UNIVERSOS-ANEXOS/UNIVERSOS-ANEXOS-2.png" class="img-fluid b-ra"
                                alt="diseno mundos anexos">
                        </div>
                        <div class="col-lg-6 gx-3 gy-3">
                            <img src="../img/MUNDO-IMAGINARIO/UNIVERSOS-ANEXOS/UNIVERSOS-ANEXOS-3.png" class="img-fluid b-ra"
                                alt="diseno">
                        </div>
                    </div>

                    <!-- TERCERO CONTENEDOR -->
                    <div class="row my-auto d-flex">
                        <div class="col-lg-6 gx-3 gy-3">
                            <img src="../img/MUNDO-IMAGINARIO/UNIVERSOS-ANEXOS/UNIVERSOS-ANEXOS-4.png" class="img-fluid b-ra"
                                alt="diseno mundos anexos">
                        </div>
                        <div class="col-lg-6 gx-3 gy-3">
                            <img src="../img/MUNDO-IMAGINARIO/UNIVERSOS-ANEXOS/UNIVERSOS-ANEXOS-5.png" class="img-fluid b-ra"
                                alt="diseno">
                        </div>
                    </div>

                    <!-- CUARTO CONTENEDOR -->
                    <div class="row my-auto d-flex">
                        <div class="col-lg-6 gx-3 gy-3">
                            <img src="../img/MUNDO-IMAGINARIO/UNIVERSOS-ANEXOS/UNIVERSOS-ANEXOS-6.png" class="img-fluid b-ra"
                                alt="diseno mundos anexos">
                        </div>
                        <div class="col-lg-6 gx-3 gy-3">
                            <img src="../img/MUNDO-IMAGINARIO/UNIVERSOS-ANEXOS/UNIVERSOS-ANEXOS-7.png" class="img-fluid b-ra"
                                alt="diseno">
                        </div>
                    </div>

                    <!-- TEXTO -->
                    <div class="row my-auto mx-auto gy-3">
                        <div class="col p-4 b-ra" style="background-color: rgb(63,45,98);">
                            <p>Una dimensión paralela al tablero principal. Aquí se guardan los experimentos, las
                                exploraciones y las semillas visuales que nutren los mundos de Entre Mundos. Cada
                                ilustración es un fragmento emocional, una historia que vibra entre serenidad, empatía y
                                magia natural. </p>

                        </div>
                    </div>

                    <!-- FECLA QUE ENVIA A SECCION CARTAS-->
                    <div class="mt-5">
                        <a href="#cartas"><img src="../img/FLECHA.png" alt="flecha" class="sombra b-ra"></a>

                        <p class="text-center">Volver arriba</p>
                    </div>

                </div>

    
    `,
        muscleMunch: `
    <div id="muscleMunch" class="container pt-3">
                        <div class="row d-flex g-3">
                            <!-- Imagen grande -->
                            <div class="col-lg-4 fondo-tarjeta text-center">
                                <img src="../img/MUNDO-IDENTITARIO/IMG-GRANDE-MUSCLE-MUNCH.png" alt="imagen sandalia"
                                    class="img-fluid">
                            </div>

                            <!-- Texto -->
                            <div class="col-lg-6 pt-4">
                                <h1>MUSCLE MUNCH</h1>
                                <p>Es una marca de suplementos deportivos creada para quienes viven el entrenamiento con
                                    pasión.</p>
                                <div class="container d-flex align-items-end justify-content-start p-0">
                                    <div class="p-0 d-flex g-3">
                                        <div class="container ps-0">
                                            <img src="../img/PS.png" alt="logo PhotoShop" class="img-fluid"
                                                style="max-width: 60px;">
                                        </div>
                                        <div class="container ps-0">
                                            <img src="../img/AI-ADOBE.png" alt="logo Ilustrator" class="img-fluid"
                                                style="max-width: 60px;">
                                        </div>
                                        <div class="container ps-0">
                                            <img src="../img/AI.png" alt="logo Inteligencia Artificial"
                                                class="img-fluid" style="max-width: 60px;">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Espacio vacío -->
                            <div class="col-lg-2 d-none d-lg-block"></div>
                        </div>

                        <!-- PRIMER CONTENEDOR -->
                        <div class="row d-flex mt-5">
                            <div class="gx-3 gy-3">
                                <img src="../img/MUNDO-IDENTITARIO/MUSCLE MUNCH/MUSCLE-MUNCH-1.png" alt="modelo imagen"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>

                        <!-- SEGUNDO CONTENEDOR -->
                        <div class="row d-flex">
                            <div class="gx-3 gy-3">
                                <img src="../img/MUNDO-IDENTITARIO/MUSCLE MUNCH/MUSCLE-MUNCH-2.png" alt="modelo imagen"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>

                        <!-- TERCERO CONTENEDOR -->
                        <div class="row d-flex">
                            <div class="col-lg-4 gx-3 gy-3">
                                <div class="row">
                                    <img src="../img/MUNDO-IDENTITARIO/MUSCLE MUNCH/MUSCLE-MUNCH-3.png"
                                        class="img-fluid b-ra2" alt="diseno sombrilla azul">
                                </div>
                                <div class="row mx-auto">
                                    <div class="mt-3 py-5 b-ra text-center" style="background-color: #000000;">
                                        <h6>#000000</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 gx-3 gy-3">
                                <div class="row">
                                    <img src="../img/MUNDO-IDENTITARIO/MUSCLE MUNCH/MUSCLE-MUNCH-4.png"
                                        class="img-fluid b-ra2" alt="diseno sombrilla azul">
                                </div>
                                <div class="row mx-auto">
                                    <div class="mt-3 py-5 b-ra text-center" style="background-color: #BC1F1E;">
                                        <h6>#BC1F1E</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 gx-3 gy-3">
                                <div class="row">
                                    <img src="../img/MUNDO-IDENTITARIO/MUSCLE MUNCH/MUSCLE-MUNCH-5.png"
                                        class="img-fluid b-ra2" alt="diseno sombrilla azul">
                                </div>
                                <div class="row mx-auto">
                                    <div class="mt-3 py-5 b-ra text-center"
                                        style="background-color: #FFFFFF; color: black;">
                                        <h6>#FFFFFF</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- TEXTO -->
                        <div class="row d-flex mt-3 mx-auto">
                            <div class="col p-4 b-ra" style="background-color: #000000;">
                                <p>Su promesa es simple pero poderosa: “Tu aliado en cada rep.”
                                    Representa disciplina, energía y progreso constante, acompañando a cada persona en
                                    su
                                    camino de superación física y mental. Con una estética fuerte, moderna y directa,
                                    MUSCLE
                                    MUNCH fusiona el poder del rendimiento con la motivación de comunidad fitness.</p>
                            </div>
                        </div>

                        <!-- FECLA QUE ENVIA A SECCION CARTAS-->
                    <div class="mt-5">
                        <a href="#cartas"><img src="../img/FLECHA.png" alt="flecha" class="sombra b-ra"></a>

                        <p class="text-center">Volver arriba</p>
                    </div>

                    </div>

    `,
        atractiva: ` 
    <div id="atractiva" class="container pt-3">
                        <div class="row d-flex g-3">
                            <!-- Imagen grande -->
                            <div class="col-lg-4 fondo-tarjeta text-center">
                                <img src="../img/MUNDO-IDENTITARIO/IMG-GRANDE-ATRACTIVA.png" alt="imagen atractiva"
                                    class="img-fluid">
                            </div>

                            <!-- Texto -->
                            <div class="col-lg-6 pt-4">
                                <h1>ATRACTIVA</h1>
                                <p>Es Marca de ropa femenina hecha con amor en El Salvador. Cada prenda está pensada para resaltar la belleza natural y la confianza de la mujer salvadoreña.</p>
                                <div class="container d-flex align-items-end justify-content-start p-0">
                                    <div class="p-0 d-flex g-3">
                                        <div class="container ps-0">
                                            <img src="../img/PS.png" alt="logo PhotoShop" class="img-fluid"
                                                style="max-width: 60px;">
                                        </div>
                                        <div class="container ps-0">
                                            <img src="../img/AI-ADOBE.png" alt="logo Ilustrator" class="img-fluid"
                                                style="max-width: 60px;">
                                        </div>
                                        <div class="container ps-0">
                                            <img src="../img/AI.png" alt="logo Inteligencia Artificial"
                                                class="img-fluid" style="max-width: 60px;">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Espacio vacío -->
                            <div class="col-lg-2 d-none d-lg-block"></div>
                        </div>

                        <!-- PRIMER CONTENEDOR -->
                        <div class="row d-flex mt-5">
                            <div class="gx-3 gy-3">
                                <img src="../img/MUNDO-IDENTITARIO/ATRACTIVA/ATRACTIVA-1.png" alt="modelo imagen"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>

                        <!-- SEGUNDO CONTENEDOR -->
                        <div class="row d-flex">
                            <div class="gx-3 gy-3">
                                <img src="../img/MUNDO-IDENTITARIO/ATRACTIVA/ATRACTIVA-2.png" alt="modelo imagen"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>

                        <!-- TERCERO CONTENEDOR -->
                        <div class="row d-flex">
                            <div class="col-lg-4 gx-3 gy-3">
                                <div class="row">
                                    <img src="../img/MUNDO-IDENTITARIO/ATRACTIVA/ATRACTIVA-3.png"
                                        class="img-fluid b-ra2" alt="Modelo atractiva">
                                </div>
                                <div class="row mx-auto">
                                    <div class="mt-3 py-5 b-ra text-center" style="background-color: rgb(0, 46, 117);">
                                        <h6>#002E75</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 gx-3 gy-3">
                                <div class="row">
                                    <img src="../img/MUNDO-IDENTITARIO/ATRACTIVA/ATRACTIVA-4.png"
                                        class="img-fluid b-ra2" alt="diseno sombrilla azul">
                                </div>
                                <div class="row mx-auto">
                                    <div class="mt-3 py-5 b-ra text-center" style="background-color: rgb(50, 130, 196);">
                                        <h6>#3282C4</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 gx-3 gy-3">
                                <div class="row">
                                    <img src="../img/MUNDO-IDENTITARIO/ATRACTIVA/ATRACTIVA-5.png"
                                        class="img-fluid b-ra2" alt="diseno sombrilla azul">
                                </div>
                                <div class="row mx-auto">
                                    <div class="mt-3 py-5 b-ra text-center"
                                        style="background-color: rgb(248, 184, 22); color: black;">
                                        <h6>#F8B816</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- TEXTO -->
                        <div class="row d-flex mt-3 mx-auto">
                            <div class="col p-4 b-ra" style="background-color:  rgb(0, 46, 117);">
                                <p>Nace del deseo de que cada mujer salvadoreña pueda verse y sentirse bien consigo misma. Más que una marca de ropa, es una invitación a reconectarse con la feminidad, la autoestima y la expresión personal. Las prendas están elaboradas en satín, un material que simboliza delicadeza, luminosidad y movimiento, reflejando la fuerza suave que caracteriza a la mujer. Cada pieza es confeccionada con detalle y cariño, bajo el lema “hecho con amor”, que representa tanto el proceso artesanal como el propósito emocional detrás de la marca.</p>
                            </div>
                        </div>

                        <!-- FECLA QUE ENVIA A SECCION CARTAS-->
                    <div class="mt-5">
                        <a href="#cartas"><img src="../img/FLECHA.png" alt="flecha" class="sombra b-ra"></a>

                        <p class="text-center">Volver arriba</p>
                    </div>
                    </div>
    
    `,
        marti: ` 
        <div id="marti" class="container pt-3">
                        <div class="row d-flex g-3">
                            <!-- Imagen grande -->
                            <div class="col-lg-4 fondo-tarjeta text-center">
                                <img src="../img/MUNDO-IDENTITARIO/IMG-GRANDE-MARTI.png" alt="imagen atractiva"
                                    class="img-fluid">
                            </div>

                            <!-- Texto -->
                            <div class="col-lg-6 pt-4">
                                <h1>MARTÍ</h1>
                                <p>Es una marca de joyería contemporánea para mujeres y hombres que valoran la elegancia con propósito.</p>
                                <div class="container d-flex align-items-end justify-content-start p-0">
                                    <div class="p-0 d-flex g-3">
                                        <div class="container ps-0">
                                            <img src="../img/PS.png" alt="logo PhotoShop" class="img-fluid"
                                                style="max-width: 60px;">
                                        </div>
                                        <div class="container ps-0">
                                            <img src="../img/AI-ADOBE.png" alt="logo Ilustrator" class="img-fluid"
                                                style="max-width: 60px;">
                                        </div>
                                        <div class="container ps-0">
                                            <img src="../img/AI.png" alt="logo Inteligencia Artificial"
                                                class="img-fluid" style="max-width: 60px;">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Espacio vacío -->
                            <div class="col-lg-2 d-none d-lg-block"></div>
                        </div>

                        <!-- PRIMER CONTENEDOR -->
                        <div class="row d-flex mt-5">
                            <div class="gx-3 gy-3">
                                <img src="../img/MUNDO-IDENTITARIO/MARTI/MARTI-1.png" alt="modelo imagen"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>

                        <!-- SEGUNDO CONTENEDOR -->
                        <div class="row d-flex">
                            <div class="gx-3 gy-3">
                                <img src="../img/MUNDO-IDENTITARIO/MARTI/MARTI-2.png" alt="modelo imagen"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>

                        <!-- TERCERO CONTENEDOR -->
                        <div class="row d-flex">
                            <div class="col-lg-4 gx-3 gy-3">
                                <div class="row">
                                    <img src="../img/MUNDO-IDENTITARIO/MARTI/MARTI-3.png"
                                        class="img-fluid b-ra2" alt="Modelo">
                                </div>
                                <div class="row mx-auto">
                                    <div class="mt-3 py-5 b-ra text-center" style="background-color: rgb(0, 83, 70);">
                                        <h6>#005346</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 gx-3 gy-3">
                                <div class="row">
                                    <img src="../img/MUNDO-IDENTITARIO/MARTI/MARTI-4.png"
                                        class="img-fluid b-ra2" alt="diseno">
                                </div>
                                <div class="row mx-auto">
                                    <div class="mt-3 py-5 b-ra text-center" style="background-color: #FFFFFF; color: black;">
                                        <h6>#FFFFFF</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 gx-3 gy-3">
                                <div class="row">
                                    <img src="../img/MUNDO-IDENTITARIO/MARTI/MARTI-5.png"
                                        class="img-fluid b-ra2" alt="diseno">
                                </div>
                                <div class="row mx-auto">
                                    <div class="mt-3 py-5 b-ra text-center"
                                        style="background-color: rgb(227, 189, 134);">
                                        <h6>#E3BD86</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- TEXTO -->
                        <div class="row d-flex mt-3 mx-auto">
                            <div class="col p-4 b-ra" style="background-color:  rgb(0, 83, 70);">
                                <p>Nace como una marca de joyería inclusiva y versátil, diseñada para acompañar tanto la fuerza masculina como la sutileza femenina. Su esencia se basa en la brillantez interior: cada pieza busca resaltar la personalidad de quien la lleva, sin opacar, sino potenciando su presencia natural. Su lema, “Tan brillante como tú”, expresa la idea de que cada persona posee su propio brillo interior, y que las joyas son solo el reflejo de esa luz. La marca fusiona minimalismo, sofisticación y equilibrio entre lo clásico y lo moderno, creando piezas que celebran la autenticidad y la confianza personal.</p>
                            </div>
                        </div>

                        <!-- FECLA QUE ENVIA A SECCION CARTAS-->
                    <div class="mt-5">
                        <a href="#cartas"><img src="../img/FLECHA.png" alt="flecha" class="sombra b-ra"></a>

                        <p class="text-center">Volver arriba</p>
                    </div>
                    </div>
    `,
        airevo: `
                <div id="airevo" class="container pt-3">
                        <div class="row d-flex g-3">
                            <!-- Imagen grande -->
                            <div class="col-lg-4 fondo-tarjeta text-center">
                                <img src="../img/MUNDO-IDENTITARIO/IMG-GRANDE-AIREVO.png" alt="imagen atractiva"
                                    class="img-fluid">
                            </div>

                            <!-- Texto -->
                            <div class="col-lg-6 pt-4">
                                <h1>AIREVO</h1>
                                <p>Marca de viajes que simboliza libertad, movimiento y elegancia.</p>
                                <div class="container d-flex align-items-end justify-content-start p-0">
                                    <div class="p-0 d-flex g-3">
                                        <div class="container ps-0">
                                            <img src="../img/PS.png" alt="logo PhotoShop" class="img-fluid"
                                                style="max-width: 60px;">
                                        </div>
                                        <div class="container ps-0">
                                            <img src="../img/AI-ADOBE.png" alt="logo Ilustrator" class="img-fluid"
                                                style="max-width: 60px;">
                                        </div>
                                        <div class="container ps-0">
                                            <img src="../img/AI.png" alt="logo Inteligencia Artificial"
                                                class="img-fluid" style="max-width: 60px;">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Espacio vacío -->
                            <div class="col-lg-2 d-none d-lg-block"></div>
                        </div>

                        <!-- PRIMER CONTENEDOR -->
                        <div class="row d-flex mt-5">
                            <div class="gx-3 gy-3">
                                <img src="../img/MUNDO-IDENTITARIO/AIREVO/AIREVO-1.png" alt="imagen airevo"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>

                        <!-- SEGUNDO CONTENEDOR -->
                        <div class="row d-flex">
                            <div class="gx-3 gy-3">
                                <img src="../img/MUNDO-IDENTITARIO/AIREVO/AIREVO-2.png" alt="modelo imagen"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>

                        <!-- TERCERO CONTENEDOR -->
                        <div class="row d-flex">
                            <div class="col-lg-4 gx-3 gy-3">
                                <div class="row">
                                    <img src="../img/MUNDO-IDENTITARIO/AIREVO/AIREVO-3.png"
                                        class="img-fluid b-ra2" alt="Modelo atractiva">
                                </div>
                                <div class="row mx-auto">
                                    <div class="mt-3 py-5 b-ra text-center" style="background-color: #ffffff;  color: black;">
                                        <h6>#FFFFFF</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 gx-3 gy-3">
                                <div class="row">
                                    <img src="../img/MUNDO-IDENTITARIO/AIREVO/AIREVO-4.png"
                                        class="img-fluid b-ra2" alt="diseno sombrilla azul">
                                </div>
                                <div class="row mx-auto">
                                    <div class="mt-3 py-5 b-ra text-center" style="background-color: #00253E;">
                                        <h6>#00253E</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 gx-3 gy-3">
                                <div class="row">
                                    <img src="../img/MUNDO-IDENTITARIO/AIREVO/AIREVO-5.png"
                                        class="img-fluid b-ra2" alt="diseno sombrilla azul">
                                </div>
                                <div class="row mx-auto">
                                    <div class="mt-3 py-5 b-ra text-center"
                                        style="background-color: #B31227;">
                                        <h6>#B31227</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- TEXTO -->
                        <div class="row d-flex mt-3 mx-auto">
                            <div class="col p-4 b-ra" style="background-color:  rgb(0, 37, 62);">
                                <p>Su nombre combina aire” y “evolución”, representando el deseo de avanzar, descubrir y volar hacia nuevas experiencias. El diseño parte del símbolo del ave, elegida por su asociación con el cielo y el sentido de exploración. La marca busca transmitir fuerza, ligereza y confianza, fusionando elementos visuales que evocan el vuelo, el movimiento y la energía de viajar. La tipografía Sans Serif refuerza el estilo moderno y minimalista, aportando claridad y profesionalismo al conjunto visual. El resultado es una marca que inspira movimiento, aventura y elegancia: un símbolo del viaje como transformación.  </p>
                            </div>
                        </div>

                        <!-- FECLA QUE ENVIA A SECCION CARTAS-->
                    <div class="mt-5">
                        <a href="#cartas"><img src="../img/FLECHA.png" alt="flecha" class="sombra b-ra"></a>

                        <p class="text-center">Volver arriba</p>
                    </div>
                    </div>
            
    `,
        marisco: `
                <div id="marisco" class="container pt-3">
                        <div class="row d-flex g-3">
                            <!-- Imagen grande -->
                            <div class="col-lg-4 fondo-tarjeta d-flex text-center align-items-center">
                                <img src="../img/MUNDO-IDENTITARIO/IMG-GRANDE-MARISCO.png" alt="imagen marisco"
                                    class="img-fluid">
                            </div>

                            <!-- Texto -->
                            <div class="col-lg-6 pt-4">
                                <h1>MARISCO</h1>
                                <p>El proyecto marisco surge de una conexión personal con la playa y los sabores del mar.</p>
                                <div class="container d-flex align-items-end justify-content-start p-0">
                                    <div class="p-0 d-flex g-3">
                                        <div class="container ps-0">
                                            <img src="../img/PS.png" alt="logo PhotoShop" class="img-fluid"
                                                style="max-width: 60px;">
                                        </div>
                                        <div class="container ps-0">
                                            <img src="../img/AI-ADOBE.png" alt="logo Ilustrator" class="img-fluid"
                                                style="max-width: 60px;">
                                        </div>
                                        <div class="container ps-0">
                                            <img src="../img/AI.png" alt="logo Inteligencia Artificial"
                                                class="img-fluid" style="max-width: 60px;">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Espacio vacío -->
                            <div class="col-lg-2 d-none d-lg-block"></div>
                        </div>

                        <!-- PRIMER CONTENEDOR -->
                        <div class="row d-flex mt-5">
                            <div class="gx-3 gy-3">
                                <img src="../img/MUNDO-IDENTITARIO/MARISCO/MARISCO-1.png" alt="imagen airevo"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>

                        <!-- SEGUNDO CONTENEDOR -->
                        <div class="row d-flex">
                            <div class="gx-3 gy-3">
                                <img src="../img/MUNDO-IDENTITARIO/MARISCO/MARISCO-2.png" alt="modelo imagen"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>

                        <!-- TERCERO CONTENEDOR -->
                        <div class="row d-flex">
                            <div class="col-lg-4 gx-3 gy-3">
                                <div class="row">
                                    <img src="../img/MUNDO-IDENTITARIO/MARISCO/MARISCO-3.png"
                                        class="img-fluid b-ra2" alt="Modelo atractiva">
                                </div>
                                
                            </div>
                            <div class="col-lg-4 gx-3 gy-3">
                                <div class="row">
                                    <img src="../img/MUNDO-IDENTITARIO/MARISCO/MARISCO-4.png"
                                        class="img-fluid b-ra2" alt="diseno sombrilla azul">
                                </div>
                                
                            </div>
                            <div class="col-lg-4 gx-3 gy-3">
                                <div class="row">
                                    <img src="../img/MUNDO-IDENTITARIO/MARISCO/MARISCO-5.png"
                                        class="img-fluid b-ra2" alt="diseno sombrilla azul">
                                </div>                                
                            </div>
                        </div>

                        <div class="row d-flex">
                            <div class="col-lg-3 col-6 gx-3 gy-1">                    
                                <div class="row mx-auto">
                                    <div class="mt-3 py-5 b-ra text-center" style="background-color: #D7BF9A;  color: black;">
                                        <h6>#D7BF9A</h6>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-lg-3 col-6 gx-3 gy-1"> 
                                <div class="row mx-auto">
                                    <div class="mt-3 py-5 b-ra text-center" style="background-color: #EC851F;">
                                        <h6>#EC851F</h6>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 col-6 gx-3 gy-1"> 
                                <div class="row mx-auto">
                                    <div class="mt-3 py-5 b-ra text-center"
                                        style="background-color: #8CCCDF;">
                                        <h6>#8CCCDF</h6>
                                    </div>
                                </div>
                            </div>      
                            <div class="col-lg-3 col-6 gx-3 gy-1"> 
                                <div class="row mx-auto">
                                    <div class="mt-3 py-5 b-ra text-center"
                                        style="background-color: #0E6C8C;">
                                        <h6>#0E6C8C</h6>
                                    </div>
                                </div>
                            </div>      
                        </div>

                        <!-- TEXTO -->
                        <div class="row d-flex mt-3 mx-auto">
                            <div class="col p-4 b-ra" style="background-color: #0E6C8C;">
                                <p>MARisco: darle a la ciudad un sabor a mar.” Un rincón playero en el corazón de la ciudad, donde el azul del océano y el aroma del mar se encuentran con la frescura, la energía y el sabor tropical. La marca utiliza una paleta de colores fríos, dominada por los azules del océano, equilibrados con un naranja cálido que transmite energía y sabor. El logotipo integra de forma visual la palabra “MAR” y “isco”, reforzando su identidad: el mar como esencia y los mariscos como producto principal.

                                    El espacio —una casa de cristal rústica en el corazón de la ciudad— invita a disfrutar una pausa entre el ritmo urbano, evocando el sonido de las olas, la brisa y la frescura del mar.</p>
                             </div>
                        </div>

                        <!-- PENULTIMO CONTENEDOR -->
                        <div class="row d-flex">
                            <div class="gx-3 gy-3">
                                <img src="../img/MUNDO-IDENTITARIO/MARISCO/MARISCO-6.png" alt="imagen airevo"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>

                        <!-- ULTIMO CONTENEDOR -->
                        <div class="row d-flex">
                            <div class="gx-3 gy-3">
                                <img src="../img/MUNDO-IDENTITARIO/MARISCO/MARISCO-7.png" alt="imagen airevo"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>

                        <!-- FECLA QUE ENVIA A SECCION CARTAS-->
                    <div class="mt-5">
                        <a href="#cartas"><img src="../img/FLECHA.png" alt="flecha" class="sombra b-ra"></a>

                        <p class="text-center">Volver arriba</p>
                    </div>
                    </div>    
    `,
    clarita: `
    <div id="clarita" class="container pt-3">
                        <div class="row d-flex g-3">
                            <!-- Imagen grande -->
                            <div class="col-lg-4 fondo-tarjeta d-flex text-center align-items-center">
                                <img src="../img/MUNDO-IDENTITARIO/IMG-GRANDE-CLARITA.png" alt="imagen clarita"
                                    class="img-fluid">
                            </div>

                            <!-- Texto -->
                            <div class="col-lg-6 pt-4">
                                <h1>PUPUSERIA CLARITA</h1>
                                <p>Una marca familiar que une generaciones a través del sabor, el amor y la tradición.</p>
                                <div class="container d-flex align-items-end justify-content-start p-0">
                                    <div class="p-0 d-flex g-3">
                                        <div class="container ps-0">
                                            <img src="../img/PS.png" alt="logo PhotoShop" class="img-fluid"
                                                style="max-width: 60px;">
                                        </div>
                                        <div class="container ps-0">
                                            <img src="../img/AI-ADOBE.png" alt="logo Ilustrator" class="img-fluid"
                                                style="max-width: 60px;">
                                        </div>
                                        <div class="container ps-0">
                                            <img src="../img/AI.png" alt="logo Inteligencia Artificial"
                                                class="img-fluid" style="max-width: 60px;">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Espacio vacío -->
                            <div class="col-lg-2 d-none d-lg-block"></div>
                        </div>

                        <!-- PRIMER CONTENEDOR -->
                        <div class="row d-flex mt-5">
                            <div class="gx-3 gy-3">
                                <img src="../img/MUNDO-IDENTITARIO/CLARITA/PUPUSERIA-CLARITA-1.png" alt="imagen clarita"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>

                        <!-- SEGUNDO CONTENEDOR -->
                        <div class="row d-flex">
                            <div class="gx-3 gy-3">
                                <img src="../img/MUNDO-IDENTITARIO/CLARITA/PUPUSERIA-CLARITA-2.png" alt="modelo imagen"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>

                        <!-- TERCERO CONTENEDOR -->
                        <div class="row d-flex">
                            <div class="col-lg-4 gx-3 gy-3">
                                <div class="row">
                                    <img src="../img/MUNDO-IDENTITARIO/CLARITA/PUPUSERIA-CLARITA-3.png"
                                        class="img-fluid b-ra2" alt="Modelo clarita">
                                </div>
                                <div class="row mx-auto">
                                    <div class="mt-3 py-5 b-ra text-center" style="background-color: #000;">
                                        <h6>#000000</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 gx-3 gy-3">
                                <div class="row">
                                    <img src="../img/MUNDO-IDENTITARIO/CLARITA/PUPUSERIA-CLARITA-4.png"
                                        class="img-fluid b-ra2" alt="clarita">
                                </div>
                                <div class="row mx-auto">
                                    <div class="mt-3 py-5 b-ra text-center" style="background-color: #F1EBE3; color: #000;">
                                        <h6>#F1EBE3</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 gx-3 gy-3">
                                <div class="row">
                                    <img src="../img/MUNDO-IDENTITARIO/CLARITA/PUPUSERIA-CLARITA-5.png"
                                        class="img-fluid b-ra2" alt="diseno sombrilla azul">
                                </div>
                                <div class="row mx-auto">
                                    <div class="mt-3 py-5 b-ra text-center"
                                        style="background-color: #DC1818;">
                                        <h6>#DC1818</h6>
                                    </div>
                                </div>
                            </div>

                        <!-- TEXTO -->
                        <div class="row d-flex mt-3 mx-auto">
                            <div class="col p-4 b-ra" style="background-color: #DC1818;">
                                <p>Pupusería Clarita celebra la tradición familiar y el amor por lo hecho a mano. Nacida del legado de la bisabuela Clarita y transmitida de generación en generación, la marca representa el sabor auténtico de las pupusas salvadoreñas y la calidez del hogar. Su estética vintage y alegre rinde homenaje a las pupuserías de antaño, rescatando la esencia del barrio, la cercanía y el valor de lo simple.
Cada detalle —del personaje sonriente al lema “Hechas con amor”— expresa el orgullo de una familia que sigue cocinando con historia.</p>
                             </div>
                        </div>

                        <!-- PENULTIMO CONTENEDOR -->
                        <div class="row d-flex">
                            <div class="gx-3 gy-3">
                                <img src="../img/MUNDO-IDENTITARIO/CLARITA/PUPUSERIA-CLARITA-6.png" alt="imagen airevo"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>

                        <!-- ULTIMO CONTENEDOR -->
                        <div class="row d-flex">
                            <div class="gx-3 gy-3">
                                <img src="../img/MUNDO-IDENTITARIO/CLARITA/PUPUSERIA-CLARITA-7.png" alt="imagen airevo"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>

                        <!-- FECLA QUE ENVIA A SECCION CARTAS-->
                    <div class="mt-5">
                        <a href="#cartas"><img src="../img/FLECHA.png" alt="flecha" class="sombra b-ra"></a>

                        <p class="text-center">Volver arriba</p>
                    </div>
                    </div> 
    `,
    kaprichos: `<div id="kaprichos" class="container pt-3">
                        <div class="row d-flex g-3">
                            <!-- Imagen grande -->
                            <div class="col-lg-4 fondo-tarjeta d-flex text-center align-items-center">
                                <img src="../img/MUNDO-CONECTADOS/CARTA-GRANDE-KAPRICHOS.png" alt="logo Kaprichos"
                                    class="img-fluid">
                            </div>

                            <!-- Texto -->
                            <div class="col-lg-6 pt-4">
                                <h1>KAPRICHOS</h1>
                                <p>Es una floristería salvadoreña, especializada en regalos auténticos.</p>
                                <div class="container d-flex align-items-end justify-content-start p-0">
                                    <div class="p-0 d-flex g-3">
                                        <div class="container ps-0">
                                            <img src="../img/PS.png" alt="logo PhotoShop" class="img-fluid"
                                                style="max-width: 60px;">
                                        </div>
                                        <div class="container ps-0">
                                            <img src="../img/AI-ADOBE.png" alt="logo Ilustrator" class="img-fluid"
                                                style="max-width: 60px;">
                                        </div>
                                        <div class="container ps-0">
                                            <img src="../img/AI.png" alt="logo Inteligencia Artificial"
                                                class="img-fluid" style="max-width: 60px;">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Espacio vacío -->
                            <div class="col-lg-2 d-none d-lg-block"></div>
                        </div>

                        <!-- PRIMER CONTENEDOR -->
                        <div class="row d-flex mt-5">
                            <div class="gx-3 gy-3">
                                <img src="../img/MUNDO-CONECTADOS/KAPRICHOS/KAPRICHOS-1.png" alt="imagen"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>

                        <!-- SEGUNDO CONTENEDOR -->
                        <div class="row d-flex">
                            <div class="col-6 gx-3 gy-3">
                                <img src="../img/MUNDO-CONECTADOS/KAPRICHOS/KAPRICHOS-2.png" alt="modelo imagen"
                                    class="img-fluid b-ra2">
                            </div>
                            <div class="col-6 gx-3 gy-3">
                                <img src="../img/MUNDO-CONECTADOS/KAPRICHOS/KAPRICHOS-3.png" alt="modelo imagen"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>

                        <!-- TERCER CONTENEDOR -->
                        <div class="row d-flex">
                            <div class="col-6 gx-3 gy-3">
                                <img src="../img/MUNDO-CONECTADOS/KAPRICHOS/KAPRICHOS-4.png" alt="modelo imagen"
                                    class="img-fluid b-ra2">
                            </div>
                            <div class="col-6 gx-3 gy-3">
                                <img src="../img/MUNDO-CONECTADOS/KAPRICHOS/KAPRICHOS-5.png" alt="modelo imagen"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>
                       
                        <!-- TEXTO -->
                        <div class="row d-flex mt-3 mx-auto">
                            <div class="col p-4 b-ra" style="background-color: #F4BC4B;">
                                <p>Floristería ubicada en la Avenida Olímpica, San Salvador, con envíos a todo el país y un catálogo variado de flores y arreglos. La marca busca fidelizar a sus clientes e incorporar a un público joven, ya que se ha perdido la costumbre de regalar flores. Por ello, se desarrolló una campaña en redes sociales y medios tradicionales enfocada en el Día de las Madres. Además, se brindó información sobre el cuidado de las flores para prolongar su duración y generar identificación de los consumidores con los distintos tipos de flores.</p>
                             </div>
                        </div>

                        <!-- PENULTIMO CONTENEDOR -->
                         <!-- TERCERO CONTENEDOR -->
                        <div class="row d-flex">
                            <div class="col-lg-4 gx-3 gy-3">
                                <div class="row">
                                    <img src="../img/MUNDO-CONECTADOS/KAPRICHOS/KAPRICHOS-6.png"
                                        class="img-fluid b-ra2" alt="Modelo atractiva">
                                </div>
                                
                            </div>
                            <div class="col-lg-4 gx-3 gy-3">
                                <div class="row">
                                    <img src="../img/MUNDO-CONECTADOS/KAPRICHOS/KAPRICHOS-7.png"
                                        class="img-fluid b-ra2" alt="diseno sombrilla azul">
                                </div>
                                
                            </div>
                            <div class="col-lg-4 gx-3 gy-3">
                                <div class="row">
                                    <img src="../img/MUNDO-CONECTADOS/KAPRICHOS/KAPRICHOS-8.png"
                                        class="img-fluid b-ra2" alt="diseno sombrilla azul">
                                </div>                                
                            </div>
                        </div>

                        <!-- ULTIMO CONTENEDOR -->
                        <div class="row d-flex">
                            <div class="col-lg-4 gx-3 gy-3">
                                <div class="row">
                                    <img src="../img/MUNDO-CONECTADOS/KAPRICHOS/KAPRICHOS-9.png"
                                        class="img-fluid b-ra2" alt="Modelo atractiva">
                                </div>
                                
                            </div>
                            <div class="col-lg-4 gx-3 gy-3">
                                <div class="row">
                                    <img src="../img/MUNDO-CONECTADOS/KAPRICHOS/KAPRICHOS-10.png"
                                        class="img-fluid b-ra2" alt="diseno sombrilla azul">
                                </div>
                                
                            </div>
                            <div class="col-lg-4 gx-3 gy-3">
                                <div class="row">
                                    <img src="../img/MUNDO-CONECTADOS/KAPRICHOS/KAPRICHOS-11.png"
                                        class="img-fluid b-ra2" alt="diseno sombrilla azul">
                                </div>                                
                            </div>
                        </div>

                        <!-- FECLA QUE ENVIA A SECCION CARTAS-->
                    <div class="mt-5">
                        <a href="#cartas"><img src="../img/FLECHA.png" alt="flecha" class="sombra b-ra"></a>

                        <p class="text-center">Volver arriba</p>
                    </div>
                    </div> 
    `,
    actoHistoricos: `<div id="actos-historicos" class="container pt-3">
                        <div class="row d-flex g-3">
                            <!-- Imagen grande -->
                            <div class="col-lg-4 fondo-tarjeta d-flex text-center align-items-center">
                                <img src="../img/MUNDO-CONECTADOS/CARTA-GRANDE-ACTOHORICOS-AA.png" alt="logo"
                                    class="img-fluid">
                            </div>

                            <!-- Texto -->
                            <div class="col-lg-6 pt-4">
                                <h1>ACTOHÓRICOS ANÓNIMOS (A.A)</h1>
                                <p>La campaña transmite energía, humor negro y humanidad, conectando con el público joven y amante del teatro independiente.</p>
                                <div class="container d-flex align-items-end justify-content-start p-0">
                                    <div class="p-0 d-flex g-3">
                                        <div class="container ps-0">
                                            <img src="../img/PS.png" alt="logo PhotoShop" class="img-fluid"
                                                style="max-width: 60px;">
                                        </div>
                                        <div class="container ps-0">
                                            <img src="../img/AI-ADOBE.png" alt="logo Ilustrator" class="img-fluid"
                                                style="max-width: 60px;">
                                        </div>
                                        <div class="container ps-0">
                                            <img src="../img/AI.png" alt="logo Inteligencia Artificial"
                                                class="img-fluid" style="max-width: 60px;">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Espacio vacío -->
                            <div class="col-lg-2 d-none d-lg-block"></div>
                        </div>

                        <!-- PRIMER CONTENEDOR -->
                        <div class="row d-flex mt-5">
                            <div class="gx-3 gy-3">
                                <img src="../img/MUNDO-CONECTADOS/ACTOHORICOS-AA/ACTOHORICOS-1.png" alt="imagen"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>

                        <!-- SEGUNDO CONTENEDOR -->
                        <div class="row d-flex">
                            <div class="gx-3 gy-3">
                                <img src="../img/MUNDO-CONECTADOS/ACTOHORICOS-AA/ACTOHORICOS-2.png" alt="imagen"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>

                        <!-- TERCER CONTENEDOR -->
                        <div class="row d-flex">
                            <div class="col-6 gx-3 gy-3">
                                <img src="../img/MUNDO-CONECTADOS/ACTOHORICOS-AA/ACTOHORICOS-3.png" alt="modelo imagen"
                                    class="img-fluid b-ra2">
                            </div>
                            <div class="col-6 gx-3 gy-3">
                                <img src="../img/MUNDO-CONECTADOS/ACTOHORICOS-AA/ACTOHORICOS-4.png" alt="modelo imagen"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>

                        <!-- CUARTO CONTENEDOR -->
                        <div class="row d-flex">
                            <div class="col-3 gx-3 gy-3">
                                <img src="../img/MUNDO-CONECTADOS/ACTOHORICOS-AA/ACTOHORICOS-5.png" alt="modelo imagen"
                                    class="img-fluid b-ra2">
                            </div>
                            <div class="col-3 gx-3 gy-3">
                                <img src="../img/MUNDO-CONECTADOS/ACTOHORICOS-AA/ACTOHORICOS-6.png" alt="modelo imagen"
                                    class="img-fluid b-ra2">
                            </div>
                            <div class="col-3 gx-3 gy-3">
                                <img src="../img/MUNDO-CONECTADOS/ACTOHORICOS-AA/ACTOHORICOS-7.png" alt="modelo imagen"
                                    class="img-fluid b-ra2">
                            </div>
                            <div class="col-3 gx-3 gy-3">
                                <img src="../img/MUNDO-CONECTADOS/ACTOHORICOS-AA/ACTOHORICOS-8.png" alt="modelo imagen"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>
                       
                        <!-- TEXTO -->
                        <div class="row d-flex mt-3 mx-auto">
                            <div class="col p-4 b-ra" style="background-color: #202020;">
                                <p>Estos diseños promocionan la obra “Actohóricos Anónimos (A.A.)”, una propuesta de teatro absurdo y ácido dirigida por César Pineda en el Teatro Nacional de El Salvador.</p>
                                <p>La campaña busca reflejar el tono intenso, crítico y emocional de la obra mediante una estética teatral contemporánea que combina drama clásico con una identidad moderna. El concepto visual se basa en el contraste rojo y negro, una tipografía expresiva y fotografía en blanco y negro con acentos rojos, resaltando las emociones extremas de los personajes y el espíritu provocador del montaje.</p>
                             </div>
                        </div>

                       <!-- PENULTIMO CONTENEDOR -->
                        <div class="row d-flex">
                            <div class="gx-3 gy-3">
                                <img src="../img/MUNDO-CONECTADOS/ACTOHORICOS-AA/ACTOHORICOS-9.png" alt="imagen airevo"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>

                        <!-- ULTIMO CONTENEDOR -->
                        <div class="row d-flex">
                            <div class="gx-3 gy-3">
                                <img src="../img/MUNDO-CONECTADOS/ACTOHORICOS-AA/ACTOHORICOS-10.png" alt="imagen airevo"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>


                        <!-- FECLA QUE ENVIA A SECCION CARTAS-->
                    <div class="mt-5">
                        <a href="#cartas"><img src="../img/FLECHA.png" alt="flecha" class="sombra b-ra"></a>

                        <p class="text-center">Volver arriba</p>
                    </div>
                    </div> 
    `,
    empiColor: `<div id="empi-color" class="container pt-3">
                        <div class="row d-flex g-3">
                            <!-- Imagen grande -->
                            <div class="col-lg-4 fondo-tarjeta d-flex text-center align-items-center">
                                <img src="../img/MUNDO-CONECTADOS/CARTA-GRANDE-EMPICOLOR.png" alt="logo EMPICOLOR"
                                    class="img-fluid">
                            </div>                  
                            <!-- Texto -->
                            <div class="col-lg-6 pt-4">
                                <h1>EMPICOLOR</h1>
                                <p>Es un emprendimiento que innova con las empiñadas, que son snack típicos de El Salvador. Se creo logotipo, línea gráfica, fotografías y post para redes sociales.</p>
                                <div class="container d-flex align-items-end justify-content-start p-0">
                                    <div class="p-0 d-flex g-3">
                                        <div class="container ps-0">
                                            <img src="../img/PS.png" alt="logo PhotoShop" class="img-fluid"
                                                style="max-width: 60px;">
                                        </div>
                                        <div class="container ps-0">
                                            <img src="../img/AI-ADOBE.png" alt="logo Ilustrator" class="img-fluid"
                                                style="max-width: 60px;">
                                        </div>
                                        <div class="container ps-0">
                                            <img src="../img/AI.png" alt="logo Inteligencia Artificial"
                                                class="img-fluid" style="max-width: 60px;">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Espacio vacío -->
                            <div class="col-lg-2 d-none d-lg-block"></div>
                        </div>

                        <!-- PRIMER CONTENEDOR -->
                        <div class="row d-flex mt-5">
                            <div class="gx-3 gy-3">
                                <img src="../img/MUNDO-CONECTADOS/EMPICOLOR/EMPICOLOR-1.png" alt="imagen"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>

                       
                       <!-- SEGUNDO CONTENEDOR -->
                        <div class="row d-flex">
                            <div class="col-6 gx-3 gy-3">
                                <img src="../img/MUNDO-CONECTADOS/EMPICOLOR/EMPICOLOR-2.png" alt="modelo imagen"
                                    class="img-fluid b-ra2">
                            </div>
                            <div class="col-6 gx-3 gy-3">
                                <img src="../img/MUNDO-CONECTADOS/EMPICOLOR/EMPICOLOR-3.png" alt="modelo imagen"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>

                       <!-- TERCER CONTENEDOR -->
                        <div class="row d-flex">
                            <div class="col-3 gx-3 gy-3">
                                <img src="../img/MUNDO-CONECTADOS/EMPICOLOR/EMPICOLOR-4.png" alt="modelo imagen"
                                    class="img-fluid b-ra2">
                            </div>
                            <div class="col-3 gx-3 gy-3">
                                <img src="../img/MUNDO-CONECTADOS/EMPICOLOR/EMPICOLOR-5.png" alt="modelo imagen"
                                    class="img-fluid b-ra2">
                            </div>
                            <div class="col-3 gx-3 gy-3">
                                <img src="../img/MUNDO-CONECTADOS/EMPICOLOR/EMPICOLOR-6.png" alt="modelo imagen"
                                    class="img-fluid b-ra2">
                            </div>
                            <div class="col-3 gx-3 gy-3">
                                <img src="../img/MUNDO-CONECTADOS/EMPICOLOR/EMPICOLOR-7.png" alt="modelo imagen"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>

                        <!-- ULTIMO CONTENEDOR -->
                        <div class="row d-flex">
                            <div class="gx-3 gy-3">
                                <img src="../img/MUNDO-CONECTADOS/EMPICOLOR/EMPICOLOR-8.png" alt="imagen airevo"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>
                       
                        <!-- TEXTO -->
                        <div class="row d-flex mt-3 mx-auto">
                            <div class="col p-4 b-ra" style="background-color: #70D0D3;">
                                <p>Se crearon posts para redes sociales, una paleta vibrante de rosas, amarillos y morados, fotografía de producto y una línea gráfica moderna y divertida que resalta el color, la textura y la esencia artesanal de las empiñadas.</p>
                             </div>
                        </div>

                        <!-- FECLA QUE ENVIA A SECCION CARTAS-->
                    <div class="mt-5">
                        <a href="#cartas"><img src="../img/FLECHA.png" alt="flecha" class="sombra b-ra"></a>

                        <p class="text-center">Volver arriba</p>
                    </div>
                    </div> 
    `,
    noCrear: `<div id="empi-color" class="container pt-3">
                        <div class="row d-flex g-3">
                            <!-- Imagen grande -->
                            <div class="col-lg-4 fondo-tarjeta d-flex text-center align-items-center">
                                <img src="../img/MUNDO-CONECTADOS/CARTA-GRANDE-NO-CREAR.png" alt="logo NO CREAR"
                                    class="img-fluid">
                            </div>                  
                            <!-- Texto -->
                            <div class="col-lg-6 pt-4">
                                <h1>NO CREAR</h1>
                                <p>Es una pausa visual en medio del ruido. Un recordatorio de que crear no siempre es producir, sino permitirte sentir, explorar y fallar sin miedo.</p>
                                <div class="container d-flex align-items-end justify-content-start p-0">
                                    <div class="p-0 d-flex g-3">
                                        <div class="container ps-0">
                                            <img src="../img/PS.png" alt="logo PhotoShop" class="img-fluid"
                                                style="max-width: 60px;">
                                        </div>
                                        <div class="container ps-0">
                                            <img src="../img/AI-ADOBE.png" alt="logo Ilustrator" class="img-fluid"
                                                style="max-width: 60px;">
                                        </div>
                                        <div class="container ps-0">
                                            <img src="../img/AI.png" alt="logo Inteligencia Artificial"
                                                class="img-fluid" style="max-width: 60px;">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Espacio vacío -->
                            <div class="col-lg-2 d-none d-lg-block"></div>
                        </div>

                        <!-- PRIMER CONTENEDOR -->
                        <div class="row d-flex mt-5">
                            <div class="gx-3 gy-3">
                                <img src="../img/MUNDO-CONECTADOS/NO-CREAR/NO-CREAR-1.png" alt="imagen"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>        

                       <!-- SEGUNDO CONTENEDOR -->
                        <div class="row d-flex">
                            <div class="col-4 gx-3 gy-3">
                                <img src="../img/MUNDO-CONECTADOS/NO-CREAR/NO-CREAR-2.png" alt="modelo imagen"
                                    class="img-fluid b-ra2">
                            </div>
                            <div class="col-4 gx-3 gy-3">
                                <img src="../img/MUNDO-CONECTADOS/NO-CREAR/NO-CREAR-3.png" alt="modelo imagen"
                                    class="img-fluid b-ra2">
                            </div>
                            <div class="col-4 gx-3 gy-3">
                                <img src="../img/MUNDO-CONECTADOS/NO-CREAR/NO-CREAR-4.png" alt="modelo imagen"
                                    class="img-fluid b-ra2">
                            </div>                            
                        </div>

                        <!-- TERCER CONTENEDOR -->
                        <div class="row d-flex">
                            <div class="col-4 gx-3 gy-3">
                                <img src="../img/MUNDO-CONECTADOS/NO-CREAR/NO-CREAR-5.png" alt="modelo imagen"
                                    class="img-fluid b-ra2">
                            </div>
                            <div class="col-4 gx-3 gy-3">
                                <img src="../img/MUNDO-CONECTADOS/NO-CREAR/NO-CREAR-6.png" alt="modelo imagen"
                                    class="img-fluid b-ra2">
                            </div>
                            <div class="col-4 gx-3 gy-3">
                                <img src="../img/MUNDO-CONECTADOS/NO-CREAR/NO-CREAR-7.png" alt="modelo imagen"
                                    class="img-fluid b-ra2">
                            </div>                            
                        </div>
                       
                        <!-- CUARTO CONTENEDOR -->
                        <div class="row d-flex">
                            <div class="col-4 gx-3 gy-3">
                                <img src="../img/MUNDO-CONECTADOS/NO-CREAR/NO-CREAR-8.png" alt="modelo imagen"
                                    class="img-fluid b-ra2">
                            </div>
                            <div class="col-4 gx-3 gy-3">
                                <img src="../img/MUNDO-CONECTADOS/NO-CREAR/NO-CREAR-9.png" alt="modelo imagen"
                                    class="img-fluid b-ra2">
                            </div>
                            <div class="col-4 gx-3 gy-3">
                                <img src="../img/MUNDO-CONECTADOS/NO-CREAR/NO-CREAR-10.png" alt="modelo imagen"
                                    class="img-fluid b-ra2">
                            </div>
                         
                        </div>


                        <!-- TEXTO -->
                        <div class="row d-flex mt-3 mx-auto">
                            <div class="col p-4 b-ra" style="background-color: #7F03B0;">
                                <p>Creatividad sin bloqueos es una campaña visual y reflexiva que invita a los creativos a reconectar con el verdadero sentido de crear: disfrutar el proceso, aceptar los errores y reconocer que la creatividad no depende de la productividad, sino del bienestar y la conexión interior. La serie utiliza frases cotidianas, tipografía lúdica y colores vibrantes para romper con la rigidez del “deber ser” creativo. Con una estética pop, optimista y algo retro, cada pieza se convierte en un recordatorio visual de que crear no es una exigencia, es un proceso vital y humano.</p>
                             </div>
                        </div>

                        <!-- FECLA QUE ENVIA A SECCION CARTAS-->
                    <div class="mt-5">
                        <a href="#cartas"><img src="../img/FLECHA.png" alt="flecha" class="sombra b-ra"></a>

                        <p class="text-center">Volver arriba</p>
                    </div>
                    </div> 
    `,
    pClarita: `
    
    <div id="clarita" class="container pt-3">
                        <div class="row d-flex g-3">
                            <!-- Imagen grande -->
                            <div class="col-lg-4 fondo-tarjeta d-flex text-center align-items-center">
                                <img src="../img/MUNDO-IDENTITARIO/IMG-GRANDE-CLARITA.png" alt="imagen clarita"
                                    class="img-fluid">
                            </div>

                            <!-- Texto -->
                            <div class="col-lg-6 pt-4">
                                <h1>PUPUSERIA CLARITA</h1>
                                <p>Empaque está pensado para pedidos para llevar y reforzar la presencia de marca de forma atractiva y funcional.</p>
                                <div class="container d-flex align-items-end justify-content-start p-0">
                                    <div class="p-0 d-flex g-3">
                                        <div class="container ps-0">
                                            <img src="../img/PS.png" alt="logo PhotoShop" class="img-fluid"
                                                style="max-width: 60px;">
                                        </div>
                                        <div class="container ps-0">
                                            <img src="../img/AI-ADOBE.png" alt="logo Ilustrator" class="img-fluid"
                                                style="max-width: 60px;">
                                        </div>
                                        <div class="container ps-0">
                                            <img src="../img/AI.png" alt="logo Inteligencia Artificial"
                                                class="img-fluid" style="max-width: 60px;">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Espacio vacío -->
                            <div class="col-lg-2 d-none d-lg-block"></div>
                        </div>

                        <!-- PRIMER CONTENEDOR -->
                        <div class="row d-flex mt-5">
                            <div class="gx-3 gy-3">
                                <img src="../img/MUNDO-ENVOLVENTE/PUPUSERIA-CLARITA/pupuseria-1.png" alt="imagen clarita"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>

                        <!-- SEGUNDO CONTENEDOR -->
                        <div class="row d-flex">
                            <div class="gx-3 gy-3">
                                <img src="../img/MUNDO-ENVOLVENTE/PUPUSERIA-CLARITA/pupuseria-2.png" alt="modelo imagen"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>

                        <!-- TEXTO -->
                        <div class="row d-flex mt-3 mx-auto">
                            <div class="col p-4 b-ra" style="background-color: #DC1818;">
                                <p>Diseñé un empaque tipo caja con asa para Pupusería Clarita, siguiendo la identidad visual retro de la marca. Utilicé el rojo vibrante, el patrón de cuadros blancos y la mascota “Clarita” para mantener coherencia con sus piezas de redes. El proyecto incluye el dieline (plantilla troquelada) con distribución estratégica del logo, frases y gráficos, y un render 3D del empaque armado para mostrar su volumen real y cómo se ven los elementos aplicados. El empaque está pensado para pedidos para llevar, mejorar la experiencia del cliente y reforzar la presencia de marca de forma atractiva y funcional.</p>
                             </div>
                        </div>

                        <!-- TERCERO CONTENEDOR -->
                        <div class="row d-flex">
                            <div class="gx-3 gy-3">
                                <img src="../img/MUNDO-ENVOLVENTE/PUPUSERIA-CLARITA/pupuseria-3.png" alt="modelo imagen"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>

                                          
                        

                        <!-- ULTIMO CONTENEDOR -->
                        <div class="row d-flex">
                            <div class="col-6 gx-3 gy-3">
                                <img src="../img/MUNDO-ENVOLVENTE/PUPUSERIA-CLARITA/pupuseria-4.png" alt="imagen airevo"
                                    class="img-fluid b-ra2">
                            </div>
                            <div class="col-6 gx-3 gy-3">
                                <img src="../img/MUNDO-ENVOLVENTE/PUPUSERIA-CLARITA/pupuseria-5.png" alt="imagen airevo"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>

                        

                        <!-- FECLA QUE ENVIA A SECCION CARTAS-->
                    <div class="mt-5">
                        <a href="#cartas"><img src="../img/FLECHA.png" alt="flecha" class="sombra b-ra"></a>

                        <p class="text-center">Volver arriba</p>
                    </div>
                    </div> 
    `,

    stitch: ` <div id="stitch" class="container pt-3">
                        <div class="row d-flex g-3">
                            <!-- Imagen grande -->
                            <div class="col-lg-4 fondo-tarjeta d-flex text-center align-items-center">
                                <img src="../img/MUNDO-ENVOLVENTE/CARTA-STITCH.png" alt="logo mundo stitch"
                                    class="img-fluid">
                            </div>

                            <!-- Texto -->
                            <div class="col-lg-6 pt-4">
                                <h1>STITCH</h1>
                                <p>Inspirado en el espíritu caótico y adorable de Stitch. Se refuerza la idea de que cada fragmento roto tiene potencial transformador.</p>
                                <div class="container d-flex align-items-end justify-content-start p-0">
                                    <div class="p-0 d-flex g-3">
                                        <div class="container ps-0">
                                            <img src="../img/PS.png" alt="logo PhotoShop" class="img-fluid"
                                                style="max-width: 60px;">
                                        </div>
                                        <div class="container ps-0">
                                            <img src="../img/AI-ADOBE.png" alt="logo Ilustrator" class="img-fluid"
                                                style="max-width: 60px;">
                                        </div>
                                        <div class="container ps-0">
                                            <img src="../img/AI.png" alt="logo Inteligencia Artificial"
                                                class="img-fluid" style="max-width: 60px;">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Espacio vacío -->
                            <div class="col-lg-2 d-none d-lg-block"></div>
                        </div>

                        <!-- PRIMER CONTENEDOR -->
                        <div class="row d-flex mt-5">
                            <div class="gx-3 gy-3">
                                <img src="../img/MUNDO-ENVOLVENTE/STITCH/STITCH-1.png" alt="imagen1 stitch"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>

                        <!-- SEGUNDO CONTENEDOR -->                         
                        <div class="row d-flex">
                            <div class="col-6 gx-3 gy-3">
                                <img src="../img/MUNDO-ENVOLVENTE/STITCH/STITCH-2.png" alt="imagen airevo"
                                    class="img-fluid b-ra2">
                            </div>
                            <div class="col-6 gx-3 gy-3">
                                <img src="../img/MUNDO-ENVOLVENTE/STITCH/STITCH-3.png" alt="imagen airevo"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>

                        <!-- TERCERO CONTENEDOR -->
                        <div class="row d-flex">
                            <div class="gx-3 gy-3">
                                <img src="../img/MUNDO-ENVOLVENTE/STITCH/STITCH-4.png" alt="modelo imagen"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>

                        <!-- TERCERO CONTENEDOR -->
                        <div class="row d-flex">
                            <div class="gx-3 gy-3">
                                <img src="../img/MUNDO-ENVOLVENTE/STITCH/STITCH-5.png" alt="modelo imagen"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>

                        <!-- TEXTO -->
                        <div class="row d-flex mt-3 mx-auto">
                            <div class="col p-4 b-ra" style="background-color: #1346BC;">
                                <p>Explosión de color. Imperfección hermosa. Este mosaico de vidrio es para quienes se animan a crear desde lo roto, lo salvaje y lo distinto. Ideal para arte decorativo, marcos, espejos, mesas o lo que tu lado más creativo quiera transformar.</p> 
                                <p>El empaque está basado en la idea del caos creativo —“Del caos nace la magia”—, con una explosión de color y un enfoque en la imperfección como belleza. El mosaico de vidrio inspirado en Stitch simboliza resiliencia, inclusión y creatividad, combinando piezas que “no nacieron para encajar, pero juntas crean algo hermoso”.</p>                       
                             </div>
                        </div>


                        <!-- FECLA QUE ENVIA A SECCION CARTAS-->
                    <div class="mt-5">
                        <a href="#cartas"><img src="../img/FLECHA.png" alt="flecha" class="sombra b-ra"></a>

                        <p class="text-center">Volver arriba</p>
                    </div>
                    </div> 
    `,

    elPoder: `
    <div id="elPoder" class="container pt-3">
                        <div class="row d-flex g-3">
                            <!-- Imagen grande -->
                            <div class="col-lg-4 fondo-tarjeta d-flex text-center align-items-center">
                                <img src="../img/MUNDO-ENVOLVENTE/CARTA-EL-PODER-DE-TRES.png" alt="logo el poder de tres"
                                    class="img-fluid">
                            </div>

                            <!-- Texto -->
                            <div class="col-lg-6 pt-4">
                                <h1>EL PODER DE TRES</h1>
                                <p>Es un pack artesanal de salsas salvadoreñas que celebra la diversidad del picante y la identidad local.</p> 
                                <div class="container d-flex align-items-end justify-content-start p-0">
                                    <div class="p-0 d-flex g-3">
                                        <div class="container ps-0">
                                            <img src="../img/PS.png" alt="logo PhotoShop" class="img-fluid"
                                                style="max-width: 60px;">
                                        </div>
                                        <div class="container ps-0">
                                            <img src="../img/AI-ADOBE.png" alt="logo Ilustrator" class="img-fluid"
                                                style="max-width: 60px;">
                                        </div>
                                        <div class="container ps-0">
                                            <img src="../img/AI.png" alt="logo Inteligencia Artificial"
                                                class="img-fluid" style="max-width: 60px;">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Espacio vacío -->
                            <div class="col-lg-2 d-none d-lg-block"></div>
                        </div>

                        <!-- PRIMER CONTENEDOR -->
                        <div class="row d-flex mt-5">
                            <div class="gx-3 gy-3">
                                <img src="../img/MUNDO-ENVOLVENTE/EL-PODER-DE-TRES/EL-PODER-DE-TRES-1.png" alt="imagen1 stitch"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>

                        <!-- SEGUNDO CONTENEDOR -->                         
                        <div class="row d-flex">
                            <div class="gx-3 gy-3">
                                <img src="../img/MUNDO-ENVOLVENTE/EL-PODER-DE-TRES/EL-PODER-DE-TRES-2.png" alt="imagen1 stitch"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>
                        
                        <!-- TERCERO CONTENEDOR -->
                        <div class="row d-flex">
                            <div class="gx-3 gy-3">
                                <img src="../img/MUNDO-ENVOLVENTE/EL-PODER-DE-TRES/EL-PODER-DE-TRES-3.png" alt="imagen airevo"
                                    class="img-fluid b-ra2">
                            </div>                            
                        </div>

                        <!-- CUARTO CONTENEDOR -->
                        <div class="row d-flex">
                            <div class="gx-3 gy-3">
                                <img src="../img/MUNDO-ENVOLVENTE/EL-PODER-DE-TRES/EL-PODER-DE-TRES-4.png" alt="modelo imagen"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>

                        <!-- TEXTO -->
                        <div class="row d-flex mt-3 mx-auto">
                            <div class="col p-4 b-ra" style="background-color: #AB1816;">
                                <p>Inspirado en los tres chiles —rojo, verde y amarillo— el concepto une sabores, colores y niveles de intensidad para representar un ritual culinario compartido.
                                Cada salsa encarna una personalidad: Rojo: Fuerte, ahumado, apasionado. Verde: Fresco, equilibrado, versátil. Amarillo: Cítrico, amable, sin picor. Tagline: “Una chispa para cada momento. Mensaje emocional: Tres sabores. Tres niveles. Un solo ritual: disfrutar. Este concepto se formo de la experiencia personal, al ir a restaurantes mexicanos.</p> 
                             </div>
                        </div>

                        <!-- PENULTIMO CONTENEDOR -->
                        <div class="row d-flex">
                            <div class="gx-3 gy-3">
                                <img src="../img/MUNDO-ENVOLVENTE/EL-PODER-DE-TRES/EL-PODER-DE-TRES-5.png" alt="imagen airevo"
                                    class="img-fluid b-ra2">
                            </div>                            
                        </div>

                        <!-- ULTIMO CONTENEDOR -->
                        <div class="row d-flex">
                            <div class="gx-3 gy-3">
                                <img src="../img/MUNDO-ENVOLVENTE/EL-PODER-DE-TRES/EL-PODER-DE-TRES-6.png" alt="modelo imagen"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>


                        <!-- FECLA QUE ENVIA A SECCION CARTAS-->
                    <div class="mt-5">
                        <a href="#cartas"><img src="../img/FLECHA.png" alt="flecha" class="sombra b-ra"></a>

                        <p class="text-center">Volver arriba</p>
                    </div>
                    </div> 
    `,

    cclarita: `<div id="clarita-c" class="container pt-3">
                        <div class="row d-flex g-3">
                            <!-- Imagen grande -->
                            <div class="col-lg-4 fondo-tarjeta d-flex text-center align-items-center">
                                <img src="../img/MUNDO-IDENTITARIO/IMG-GRANDE-CLARITA.png" alt="imagen clarita"
                                    class="img-fluid">
                            </div>                  
                            <!-- Texto -->
                            <div class="col-lg-6 pt-4">
                                <h1>PUPUSERIA CLARITA</h1>
                                <p>Los diseños se hicieron con una estética retro-vintage, inspirada en la gráfica popular de mediados del siglo XX.</p>
                                <div class="container d-flex align-items-end justify-content-start p-0">
                                    <div class="p-0 d-flex g-3">
                                        <div class="container ps-0">
                                            <img src="../img/PS.png" alt="logo PhotoShop" class="img-fluid"
                                                style="max-width: 60px;">
                                        </div>
                                        <div class="container ps-0">
                                            <img src="../img/AI-ADOBE.png" alt="logo Ilustrator" class="img-fluid"
                                                style="max-width: 60px;">
                                        </div>
                                        <div class="container ps-0">
                                            <img src="../img/AI.png" alt="logo Inteligencia Artificial"
                                                class="img-fluid" style="max-width: 60px;">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Espacio vacío -->
                            <div class="col-lg-2 d-none d-lg-block"></div>
                        </div>

                        <!-- PRIMER CONTENEDOR -->
                        <div class="row d-flex mt-5">
                            <div class="gx-3 gy-3">
                                <img src="../img/MUNDO-CONECTADOS/PUPUSERIA-CLARITA/PUPUSAERIA-1.png" alt="imagen"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>

                       
                       <!-- SEGUNDO CONTENEDOR -->
                        <div class="row d-flex">
                            <div class="col-6 gx-3 gy-3">
                                <img src="../img/MUNDO-CONECTADOS/PUPUSERIA-CLARITA/PUPUSAERIA-2.png" alt="modelo imagen"
                                    class="img-fluid b-ra2">
                            </div>
                            <div class="col-6 gx-3 gy-3">
                                <img src="../img/MUNDO-CONECTADOS/PUPUSERIA-CLARITA/PUPUSAERIA-3.png" alt="modelo imagen"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>

                       <!-- TERCER CONTENEDOR -->
                        <div class="row d-flex">
                            <div class="col-6 gx-3 gy-3">
                                <img src="../img/MUNDO-CONECTADOS/PUPUSERIA-CLARITA/PUPUSAERIA-4.png" alt="modelo imagen"
                                    class="img-fluid b-ra2">
                            </div>
                            <div class="col-6 gx-3 gy-3">
                                <img src="../img/MUNDO-CONECTADOS/PUPUSERIA-CLARITA/PUPUSAERIA-5.png" alt="modelo imagen"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>
                       
                        <!-- TEXTO -->
                        <div class="row d-flex mt-3 mx-auto">
                            <div class="col p-4 b-ra" style="background-color: #F1EBE3;">
                                <p style="color: #000;  text-shadow: none;">Los elementos fueron creados con una estética retro-vintage, usando un rojo vibrante, tipografías gruesas y cursivas, y un patrón de cuadros blancos tipo diner. La mascota Clarita, un frasco caricaturizado con espátula, se usa como ícono principal para dar personalidad y tradición. Cada pieza sigue la misma estructura:</p>
                                <p style="color: #000;  text-shadow: none;">Logo arriba, manteniendo la identidad clásica. Frase principal potente (“Hechas con amor”, “En Clarita no hay secretos”). Foto de pupusas reales, mostrando textura y abundancia. Mascota Clarita acompañando el mensaje. Información secundaria (precios, dirección, teléfono) cuando aplica. La paleta se mantiene constante: rojo, blanco y negro, creando una campaña sólida, reconocible y tradicional. Los diseños se adaptan a diferentes formatos (feed, stories, mupies, banners) sin perder coherencia. El tono de comunicación es cálido, nostálgico y auténtico, resaltando que las pupusas son 100% originales y hechas con amor.</p>
                             </div>
                        </div>

                         <!-- ULTIMO CONTENEDOR -->
                        <div class="row d-flex">
                            <div class="gx-3 gy-3">
                                <img src="../img/MUNDO-CONECTADOS/PUPUSERIA-CLARITA/PUPUSAERIA-6.png" alt="modelo imagen"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>

                        <!-- FECLA QUE ENVIA A SECCION CARTAS-->
                        <div class="mt-5">
                             <a href="#cartas"><img src="../img/FLECHA.png" alt="flecha" class="sombra b-ra"></a>

                                <p class="text-center">Volver arriba</p>
                         </div>
                    </div> 
    `,
    sunshine: `<div id="elPoder" class="container pt-3">
                        <div class="row d-flex g-3">
                            <!-- Imagen grande -->
                            <div class="col-lg-4 fondo-tarjeta d-flex text-center align-items-center">
                                <img src="../img/MUNDO-ENVOLVENTE/CARTA-sunshine.png" alt="logo el poder de tres"
                                    class="img-fluid">
                            </div>

                            <!-- Texto -->
                            <div class="col-lg-6 pt-4">
                                <h1>SUNSHINE FT BAD BUNNY</h1>
                                <p>Este proyecto se inspira en el álbum YHLQMDLG de Bad Bunny, el cual aborda emociones relacionadas con la tristeza y el desamor desde un lenguaje cercano y cotidiano</p> 
                                <div class="container d-flex align-items-end justify-content-start p-0">
                                    <div class="p-0 d-flex g-3">
                                        <div class="container ps-0">
                                            <img src="../img/PS.png" alt="logo PhotoShop" class="img-fluid"
                                                style="max-width: 60px;">
                                        </div>
                                        <div class="container ps-0">
                                            <img src="../img/AI-ADOBE.png" alt="logo Ilustrator" class="img-fluid"
                                                style="max-width: 60px;">
                                        </div>
                                        <div class="container ps-0">
                                            <img src="../img/AI.png" alt="logo Inteligencia Artificial"
                                                class="img-fluid" style="max-width: 60px;">
                                        </div>
                                        <div class="container ps-0">
                                            <img src="../img/LR.png" alt="logo LR"
                                                class="img-fluid" style="max-width: 60px;">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Espacio vacío -->
                            <div class="col-lg-2 d-none d-lg-block"></div>
                        </div>

                        <!-- PRIMER CONTENEDOR -->
                        <div class="row d-flex mt-5">
                            <div class="gx-3 gy-3">
                                <img src="../img/MUNDO-ENVOLVENTE/SUNSHINE-BADBUNNY/BAD-BUNNY-1.png" alt="imagen1 stitch"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>

                        <!-- SEGUNDO CONTENEDOR -->                         
                        <div class="row d-flex">
                            <div class="gx-3 gy-3">
                                <img src="../img/MUNDO-ENVOLVENTE/SUNSHINE-BADBUNNY/BAD-BUNNY-2.png" alt="imagen1 stitch"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>

                        <!-- TEXTO -->
                        <div class="row d-flex mt-3 mx-auto">
                            <div class="col p-4 b-ra" style="background-color: #97D7F7;">
                                <p>El concepto de este trabajo se basa en el álbum YHLQMDLG (Yo Hago Lo Que Me Da la Gana) de Bad Bunny. La idea central del álbum gira en torno a qué hacer cuando estás triste o te han roto el corazón; la respuesta es escucharlo a él. A lo largo de las canciones, Bad Bunny expresa cómo se siente y lo que uno piensa en esos momentos, utilizando un lenguaje cotidiano, similar al que usamos cuando hablamos con amigos.</p> 
                             </div>
                        </div>

                        <!-- IV CONTENEDOR -->
                        <div class="row d-flex">
                            <div class="col-6 gx-3 gy-3">
                                <img src="../img/MUNDO-ENVOLVENTE/SUNSHINE-BADBUNNY/BAD-BUNNY-3.png" alt="imagen airevo"
                                    class="img-fluid b-ra2">
                            </div>
                            <div class="col-6 gx-3 gy-3">
                                <img src="../img/MUNDO-ENVOLVENTE/SUNSHINE-BADBUNNY/BAD-BUNNY-4.png" alt="imagen airevo"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>

                        <!-- V CONTENEDOR -->                         
                        <div class="row d-flex">
                            <div class="gx-3 gy-3">
                                <img src="../img/MUNDO-ENVOLVENTE/SUNSHINE-BADBUNNY/BAD-BUNNY-5.png" alt="imagen1 stitch"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>

                        <!-- TEXTO -->
                        <div class="row d-flex mt-3 mx-auto">
                            <div class="col p-4 b-ra" style="background-color: #9064AE;">
                                <p>A partir de este concepto pensé en el maquillaje, porque su música nos hace sentir bien por dentro y el maquillaje nos ayuda a vernos mejor por fuera. Para el empaque y el envase utilicé una paleta de colores en tonos pasteles que simulan estar rotos, reflejando la dualidad entre vulnerabilidad y fortaleza. En la paleta de sombras empleé colores vibrantes, inspirados en el uso característico de tonos llamativos en la estética de Bad Bunny, que transmiten energía y motivación. También incluí algunos tonos pasteles para generar contraste. Finalmente, incorporé el logo distintivo de Bad Bunny, el conejo, como elemento representativo del artista y su identidad visual.</p> 
                             </div>
                        </div>

                        <!-- V CONTENEDOR -->                         
                        <div class="row d-flex">
                            <div class="gx-3 gy-3">
                                <img src="../img/MUNDO-ENVOLVENTE/SUNSHINE-BADBUNNY/BAD-BUNNY-6.png" alt="imagen1 stitch"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>

                        <!-- V CONTENEDOR -->                         
                        <div class="row d-flex">
                            <div class="gx-3 gy-3">
                                <img src="../img/MUNDO-ENVOLVENTE/SUNSHINE-BADBUNNY/BAD-BUNNY-7.png" alt="imagen1 stitch"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>

    `,

    crearte: `<div id="crearte" class="container pt-3">
                        <div class="row d-flex g-3">
                            <!-- Imagen grande -->
                            <div class="col-lg-4 fondo-tarjeta d-flex text-center align-items-center">
                                <img src="../img/MUNDO-ENVOLVENTE/CARTA-sunshine.png" alt="logo el poder de tres"
                                    class="img-fluid">
                            </div>

                            <!-- Texto -->
                            <div class="col-lg-6 pt-4">
                                <h1>SUNSHINE FT BAD BUNNY</h1>
                                <p>Este proyecto se inspira en el álbum YHLQMDLG de Bad Bunny, el cual aborda emociones relacionadas con la tristeza y el desamor desde un lenguaje cercano y cotidiano</p> 
                                <div class="container d-flex align-items-end justify-content-start p-0">
                                    <div class="p-0 d-flex g-3">
                                        <div class="container ps-0">
                                            <img src="../img/PS.png" alt="logo PhotoShop" class="img-fluid"
                                                style="max-width: 60px;">
                                        </div>
                                        <div class="container ps-0">
                                            <img src="../img/AI-ADOBE.png" alt="logo Ilustrator" class="img-fluid"
                                                style="max-width: 60px;">
                                        </div>
                                        <div class="container ps-0">
                                            <img src="../img/AI.png" alt="logo Inteligencia Artificial"
                                                class="img-fluid" style="max-width: 60px;">
                                        </div>
                                        <div class="container ps-0">
                                            <img src="../img/LR.png" alt="logo LR"
                                                class="img-fluid" style="max-width: 60px;">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Espacio vacío -->
                            <div class="col-lg-2 d-none d-lg-block"></div>
                        </div>

                        <!-- PRIMER CONTENEDOR -->
                        <div class="row d-flex mt-5">
                            <div class="gx-3 gy-3">
                                <img src="../img/MUNDO-ENVOLVENTE/SUNSHINE-BADBUNNY/BAD-BUNNY-1.png" alt="imagen1 stitch"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>

                        <!-- SEGUNDO CONTENEDOR -->                         
                        <div class="row d-flex">
                            <div class="gx-3 gy-3">
                                <img src="../img/MUNDO-ENVOLVENTE/SUNSHINE-BADBUNNY/BAD-BUNNY-2.png" alt="imagen1 stitch"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>

                        <!-- TEXTO -->
                        <div class="row d-flex mt-3 mx-auto">
                            <div class="col p-4 b-ra" style="background-color: #97D7F7;">
                                <p>El concepto de este trabajo se basa en el álbum YHLQMDLG (Yo Hago Lo Que Me Da la Gana) de Bad Bunny. La idea central del álbum gira en torno a qué hacer cuando estás triste o te han roto el corazón; la respuesta es escucharlo a él. A lo largo de las canciones, Bad Bunny expresa cómo se siente y lo que uno piensa en esos momentos, utilizando un lenguaje cotidiano, similar al que usamos cuando hablamos con amigos.</p> 
                             </div>
                        </div>

                        <!-- IV CONTENEDOR -->
                        <div class="row d-flex">
                            <div class="col-6 gx-3 gy-3">
                                <img src="../img/MUNDO-ENVOLVENTE/SUNSHINE-BADBUNNY/BAD-BUNNY-3.png" alt="imagen airevo"
                                    class="img-fluid b-ra2">
                            </div>
                            <div class="col-6 gx-3 gy-3">
                                <img src="../img/MUNDO-ENVOLVENTE/SUNSHINE-BADBUNNY/BAD-BUNNY-4.png" alt="imagen airevo"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>

                        <!-- V CONTENEDOR -->                         
                        <div class="row d-flex">
                            <div class="gx-3 gy-3">
                                <img src="../img/MUNDO-ENVOLVENTE/SUNSHINE-BADBUNNY/BAD-BUNNY-5.png" alt="imagen1 stitch"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>

                        <!-- TEXTO -->
                        <div class="row d-flex mt-3 mx-auto">
                            <div class="col p-4 b-ra" style="background-color: #9064AE;">
                                <p>A partir de este concepto pensé en el maquillaje, porque su música nos hace sentir bien por dentro y el maquillaje nos ayuda a vernos mejor por fuera. Para el empaque y el envase utilicé una paleta de colores en tonos pasteles que simulan estar rotos, reflejando la dualidad entre vulnerabilidad y fortaleza. En la paleta de sombras empleé colores vibrantes, inspirados en el uso característico de tonos llamativos en la estética de Bad Bunny, que transmiten energía y motivación. También incluí algunos tonos pasteles para generar contraste. Finalmente, incorporé el logo distintivo de Bad Bunny, el conejo, como elemento representativo del artista y su identidad visual.</p> 
                             </div>
                        </div>

                        <!-- V CONTENEDOR -->                         
                        <div class="row d-flex">
                            <div class="gx-3 gy-3">
                                <img src="../img/MUNDO-ENVOLVENTE/SUNSHINE-BADBUNNY/BAD-BUNNY-6.png" alt="imagen1 stitch"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>

                        <!-- V CONTENEDOR -->                         
                        <div class="row d-flex">
                            <div class="gx-3 gy-3">
                                <img src="../img/MUNDO-ENVOLVENTE/SUNSHINE-BADBUNNY/BAD-BUNNY-7.png" alt="imagen1 stitch"
                                    class="img-fluid b-ra2">
                            </div>
                        </div>

    `



    };

    // ====== 🔹 EVENTOS DE LOS BOTONES ======
// Eventos Click de Botones
    botones.forEach((boton) => {
        boton.addEventListener("click", () => {
            botones.forEach((b) => b.classList.remove("activo"));
            boton.classList.add("activo");
            
            // Cargar contenido
            const proyecto = boton.getAttribute("data-proyecto");
            // Nota: Aquí uso 'window.contenido' si definiste la variable fuera, 
            // o asegúrate de pegar tu objeto 'contenido' dentro de este archivo.
            
            // Para este ejemplo, usaré el objeto 'contenido' que definimos arriba.
            // Si copiaste tu código anterior, asegúrate de que la variable 'contenido' esté accesible.
            if(typeof contenido !== 'undefined' && contenido[proyecto]){
                 contenedor.innerHTML = contenido[proyecto];
            } else {
                 // Fallback por si no copiaste el objeto contenido gigante
                 console.log("Falta el objeto contenido para: " + proyecto);
            }
        });
    });
});

// ==========================================
// 3. LÓGICA DE CARGA (Aquí está la magia para arreglar la animación)
// ==========================================

// Usamos 'load' en lugar de 'DOMContentLoaded' porque 'load' espera a las IMÁGENES.
window.addEventListener("load", function () {
    const loader = document.getElementById("pantalla-carga");
    const sitio = document.getElementById("sitio-web"); // O el body si no usaste el wrapper

    if (loader) {
        // 1. Desvanecer el loader
        loader.style.opacity = "0";

        // 2. Esperar a que termine la transición css (0.5s) y borrarlo
        setTimeout(function () {
            loader.style.display = "none";
            
            // 3. Mostrar el sitio web suavemente
            if(sitio) {
                sitio.style.opacity = "1";
            }

            // 4. ACTIVAR ANIMACIONES CSS
            // Si tus animaciones usan una librería como Animate.css o WOW.js,
            // este es el momento de inicializarlas para que no se vean cortadas.
            // Ejemplo: document.body.classList.remove('cargando');
            
        }, 500); // 500ms coincide con la transición CSS
    }
});