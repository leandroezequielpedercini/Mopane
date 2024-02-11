
// header //
const cabezal = document.getElementById("cabezal-index-HTML")
cabezal.innerHTML = '<img src="/img/cabaña1/1-heder/Puerto Mopane.png" alt="Puerto Mopane" class="puerto-mopane-cabañas" > <img src="/img/cabaña1/1-heder/facebook.png" alt="Facebook" class="facebook" > <img src="/img/cabaña1/1-heder/instagram.png" alt="Instagram" class="instagram" > <img src="/img/cabaña1/1-heder/whatsapp.png" alt="Whatsapp" class="whatsapp" > <img src="/img/cabaña1/1-heder/movil.png" class="movil" > <img src="/img/cabaña1/1-heder/mail.png" class="e-mail" > '  

// Links //
const links = document.getElementById("links")
links.innerHTML = `<a href="" class="nuestroLugar-HTML">Nuestro lugar</a>`
/* <a href="las-cabañas.html" class="lasCabañas-HTML">Las cabañas</a> <a href="ubicacion.html" class="ubicacion-HTML">Ubicacion</a><a href="contacto.html" class="contacto-HTML">Contacto</a>' */

// carrusel //
const carrusel = document.getElementById("carrusel")
carrusel.innerHTML = `
<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="10000">
        <img src="/img/cabaña1/2-carrusel/1.jpeg" class="d-block w-100" alt="Cartel de Puerto Mopane">
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img src="/img/cabaña1/2-carrusel/2.jpeg" class="d-block w-100" alt="Paisaje de las cabañas">
      </div>
      <div class="carousel-item">
        <img src="/img/cabaña1/2-carrusel/3.jpeg" class="d-block w-100" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>`
    
    //  Parrafo con imagen //
const imgparrafo = document.getElementById("img-parrafo")
imgparrafo.innerHTML = '<p class="Parrafo-con-imagen "> Un lugar para disfrutar...!</p> <img src="/img/cabaña1/3-foto-chica/Pino1.png" alt="Pino" class="pino"> '

// Parrafo solo //
const parrafo = document.getElementById("parrafo")
parrafo.innerHTML = '<h2 class="h2-parrafo-puerto-mopane">Puerto Mopane :</h2>  <div><p class="p1-parrafo">En la exclusiva localidad de MONTE HERMOSO dentro de 5 ha. de inigualable tranquilidad, se conjugan las vistas agrestes de los médanos blancos junto al extenso y frondoso bosque del pintoresco barrio residencial “Las Dunas” .</p> </div> <div><p class="p2-parrafo">Ubicado en un lugar privilegiado, a 700 mts. de la playa y a 5 minutos del centro de la ciudad, se encuentra <h5>PUERTO MOPANE.</h3></div> <div><p class="p3-parrafo" >Descubra un atardecer inolvidable, o bien, un amanecer donde sólo reina la paz y la tranquilidad.</p> </div> <div><p class="p4-parrafo">Queremos que disfrute junto a nosotros de este lugar … de su amplia piscina y sus recreaciones como la cancha de voley y fútbol para niños y así poder transmitirles la alegría y armonía que todo esto significa.</p></div> <div><p class="p5-parrafo">Paseos, cabalgatas, pesca y diversión nocturna para chicos y grandes junto a sus extensas playas ÚNICAS con el sol saliendo y poniéndose sobre el mar hacen de MONTE HERMOSO una ciudad privilegiada y de PUERTO MOPANE” el lugar ideal para el descanso de su familia.</p>  </div>   <div><h4 class="h4-parrafo">Nuestra mayor publicidad es la recomendación de aquellos que han estado con nosotros.  Gracias por elegirnos! </h4></div> '

// Imagen-atardecer //
const imagenatardecer = document.getElementById("imagen-atardecer")
imagenatardecer.innerHTML = `<img src="/img/cabaña1/4-portada-baja/Atardecer.JPEG  " class="imagen-atardecer alt="Atardecer">`


const pieDePagina = document.getElementById("pie-de-pagina")
pieDePagina.innerHTML = `<p class="diseñado-Por">Diseñado por :</p> <p class="autor-Del-Sitio"> Leandro Ezequiel Pedercíni:</p> <p class="creacion" >Creaciòn del sitio web :</p> <p class="año-Del-Sitio"> 2023 :</p>`