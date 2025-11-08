document.addEventListener("DOMContentLoaded", function () {
  const botones = document.querySelectorAll(".menu-carta");
  const contenedor = document.getElementById("contenido-dinamico");
  const body = document.body;
  const bodyId = body.id;
  const fondo2 = document.querySelector(".imaginario-fondo2");

  // ====== 🔹 CAMBIO DE FONDOS ======

  // Fondo del body (capa inferior)
  const fondosBody = {
    imaginario: "url('../img/MUNDO-IMAGINARIO/imaginario-fondo-1.png')",
    identitario: "url('../img/MUNDO-IDENTITARIO/FONDO.png')",
    emocional: "url('../img/fondos/fondo-emocional.jpg')",
    anexo: "url('../img/fondos/fondo-anexo.jpg')",
  };

  // Fondo del div superior (.imaginario-fondo2)
  const fondosFondo2 = {
    imaginario: "url('../img/MUNDO-IMAGINARIO/imaginario-fondo-2-camino.png')",
    identitario: "url('../img/MUNDO-IDENTITARIO/FONDO-CAMINO.png')",
    emocional: "url('../img/fondos/fondo2-emocional.png')",
    anexo: "url('../img/fondos/fondo2-anexo.png')",
  };

  // Cambiar fondo del body si existe
  if (fondosBody[bodyId]) {
    body.style.backgroundImage = fondosBody[bodyId];
  }

  // Cambiar fondo del div superior si existe
  if (fondo2 && fondosFondo2[bodyId]) {
    fondo2.style.backgroundImage = fondosFondo2[bodyId];
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

                    <!-- LOGO FINAL -->
                    <div class="row text-center my-auto">
                        <div class="col gx-3 gy-3">
                            <img src="../img/MUNDO-IMAGINARIO/PINOCHO/LOGO-pinocho.png" alt="Logo Pinocho" class="img-fluid">
                        </div>
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
                            <p>Donde pasa Jupilove, florecen los buenos
                                sentimientos y todo vuelve a brillar.</p>
                        </div>
                    </div>

                    <!-- LOGO FINAL -->
                    <div class="row text-center my-auto">
                        <div class="col gx-3 gy-3">
                            <img src="../img/MUNDO-IMAGINARIO/JIPILOVE/JIPILOVE-6.png" alt="Logo JIPILOVE" class="img-fluid">
                        </div>
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

                    <!-- LOGO FINAL -->
                    <div class="row text-center my-3">
                        <div class="col">
                            <img src="../img/MUNDO-IMAGINARIO/ARIKA/ARIKA-13.png" alt="Logo ARIKA" class="img-fluid">
                        </div>
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

                    <!-- LOGO FINAL -->
                    <div class="row text-center my-3">
                        <div class="col">
                            <img src="../img/MUNDO-IMAGINARIO/SOMBRILLA-AZUL/SOMBRILLA-AZUL-4.png" alt="Logo sombrilla azul"
                                class="img-fluid">
                        </div>
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

                    <!-- LOGO FINAL -->
                    <div class="row text-center my-4">
                        <div class="col">
                            <img src="../img/MUNDO-IMAGINARIO/CUIDAMOS-TANTO/CUIDAMOS-TANTO-7.png" alt="Logo Cuidamos Tanto"
                                class="img-fluid">
                        </div>
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




                    </div>



    `



  };

  // ====== 🔹 EVENTOS DE LOS BOTONES ======

  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      // Cambiar estado activo
      botones.forEach((b) => b.classList.remove("activo"));
      boton.classList.add("activo");

      // Cargar contenido
      const proyecto = boton.getAttribute("data-proyecto");
      contenedor.innerHTML =
        contenido[proyecto] || "<p>Contenido no disponible.</p>";
    });
  });
});