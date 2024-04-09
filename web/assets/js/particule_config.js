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
        value: 17, // Taille des particules
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
        direction: "right", // Direction du mouvement (none, top, top-right, right, bottom-right, bottom, bottom-left, left, top-left)
        random: false,
        straight: false,
        out_mode: "v", // Mode de sortie (out, bounce)
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