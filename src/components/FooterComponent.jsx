function FooterComponent(){
    return (
        <div>
          <footer class="bg-dark text-white py-4">
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <h5>Sobre Nosotros</h5>
        <p>Información sobre la empresa, misión y visión.</p>
      </div>
      <div class="col-md-4">
        <h5>Enlaces Rápidos</h5>
        <ul class="list-unstyled">
          <li><a href="#home" class="text-white">Inicio</a></li>
          <li><a href="#services" class="text-white">Servicios</a></li>
          <li><a href="#contact" class="text-white">Contacto</a></li>
        </ul>
      </div>
      <div class="col-md-4">
        <h5>Contacto</h5>
        <p>Teléfono: (123) 456-7890</p>
        <p>Email: contacto@ejemplo.com</p>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col text-center">
        <p class="mb-0">© 2023 Mi Sitio. Todos los derechos reservados.</p>
      </div>
    </div>
  </div>
</footer>
        </div>
    );
}

export default FooterComponent;