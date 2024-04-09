
var inputUrl = document.getElementById("inputUrl");
var buttonGenQR = document.getElementById("genQR");
const sectionDownload = document.getElementById("sectionDownload");

function generateQrCode() {
  // Clear the contents of the #qrcode div
  document.getElementById("qrcode").innerHTML = "";

  var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: inputUrl.value,
    width: 256,
    height: 256,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });

  (async function () {
    await new Promise((resolve) => {
      setTimeout(resolve, 500); // Adjust the delay as needed
    });

    const qrcodeImg = document.querySelector("#qrcode img");
    const qrcodeImgSrc = qrcodeImg.src;
    sectionDownload.innerHTML =
      '<a class="text-decoration-none text-primary fs-3" href="' +
      qrcodeImgSrc +
      '" download="qrcode.png"><i class="fa-solid fa-download fa-beat"></i></a>';
  })();
}

inputUrl.addEventListener("keyup", function (e) {
  generateQrCode();
});

particlesJS("particles-js", {
  particles: {
    number: {
      value: 100, // Nombre de particules
      density: {
        enable: true,
        value_area: 800, // Densité des particules sur l'écran
      },
    },
    color: {
      value: "#000000", // Couleur des particules
    },
    shape: {
      type: "image", // Forme des particules (circle, edge, triangle, polygon, star, image)
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "assets/img/qrcode.png",
        width: 1000,
        height: 1000,
      },
    },
    opacity: {
      value: 0.5, // Opacité des particules
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 15, // Taille des particules
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150, // Distance à laquelle les particules sont liées entre elles
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6, // Vitesse de déplacement des particules
      direction: "none", // Direction du mouvement (none, top, top-right, right, bottom-right, bottom, bottom-left, left, top-left)
      random: false,
      straight: false,
      out_mode: "out", // Mode de sortie (out, bounce)
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse", // Effet au survol (repulse, grab, bubble)
      },
      onclick: {
        enable: true,
        mode: "push", // Effet au clic (push, remove, bubble)
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});
