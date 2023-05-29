// Import and register all your controllers from the importmap under controllers/*

import { application } from "controllers/application"

// Eager load all controllers defined in the import map under controllers/**/*_controller
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
eagerLoadControllersFrom("controllers", application)

// Lazy load controllers as they appear in the DOM (remember not to preload controllers in import map!)
// import { lazyLoadControllersFrom } from "@hotwired/stimulus-loading"
// lazyLoadControllersFrom("controllers", application)


document.addEventListener("DOMContentLoaded", function() {
    var pageNext = document.querySelector(".page.next");
    var pagePrev = document.querySelector(".page.prev");

 
    function cambiarTextoEnlace(elemento, nuevoTexto) {
      if (elemento) {
        var link = elemento.querySelector("a");
        if (link) {
          link.textContent = nuevoTexto;
        }
      }
    }

    cambiarTextoEnlace(pageNext, "Siguiente");

    cambiarTextoEnlace(pagePrev, "Anterior");
  });
