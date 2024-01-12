$(document).ready(function () {
  var itemsPerPage = 3;
  var currentIndex = 0;

  $(".icon-group").each(function (index) {
    if (index >= itemsPerPage) {
      $(this).hide();
    }
  });

  function showPage(index) {
    var totalGroups = $(".icon-group").length;

    if (index < 0 || index >= totalGroups) {
      return;
    }

    currentIndex = index;

    var translateX = -index * 100 + "%";
    $("#icon-menu .icon-carousel").css(
      "transform",
      "translateX(" + translateX + ")"
    );

    updatePagination(index);
  }

  function updatePagination(index) {
    $(".dot").removeClass("active");
    $(".dot").eq(index).addClass("active");
  }

  $(".dot").click(function () {
    var dotIndex = $(this).index();
    showPage(dotIndex);
  });

  updatePagination(0);
});

function showName() {
  document.getElementById("initials").style.display = "none";
  document.querySelector(".full-name").style.display = "inline";
}

function hideName() {
  document.getElementById("initials").style.display = "inline";
  document.querySelector(".full-name").style.display = "none";
}

function toggleNav() {
  var x = document.getElementById("navbarRight");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}

$(document).ready(function () {
  $("#navbarName").click(function () {
    window.location.href = "index.html";
  });
});

var isLightMode = false;

document.getElementById("themeButton").addEventListener("click", function () {
  isLightMode = !isLightMode;
  document.body.classList.toggle("light-mode");
  document.querySelector(".navbar").classList.toggle("light-mode");
  document.querySelectorAll(".navbar-button").forEach(function (button) {
    button.classList.toggle("light-mode");
  });
  document.querySelectorAll(".line").forEach(function (line) {
    line.classList.toggle("light-mode");
  });
  this.textContent = isLightMode
    ? "Cambiar a modo oscuro"
    : "Cambiar a modo claro";
});
document.querySelector(".initials").classList.toggle("light-mode-logo");
document.addEventListener("DOMContentLoaded", function () {
  var titulo = "Mis Habilidades.";
  var tituloContainer = document.getElementById("titulo-container");
  tituloContainer.innerHTML = "";

  function agregarLetra(letra, index) {
    setTimeout(function () {
      tituloContainer.innerHTML += letra;
    }, 100 * index);
  }

  for (var i = 0; i < titulo.length; i++) {
    agregarLetra(titulo[i], i);
  }
});
