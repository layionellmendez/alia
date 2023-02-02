const win = window;
document.addEventListener("DOMContentLoaded", function() {
  if (!annyang) {
    return new Notification("C mamut, tu navegador no soporta el reconocimiento de voz.");
  }

  if (annyang) {
    annyang.setLanguage("es-CR");
    const comandos = {
      "busca en Google *query": (query) => {
        win.open(`https://www.google.com/search?q=${query}`);
        new Notification(`Buscando "${query}" en Google`);
      },
      "busca en YouTube *query": (query) => {
        win.open(`https://www.youtube.com/results?search_query=${query}`);
        new Notification(`Buscando "${query}" en YouTube`);
      },
      "dime la hora": () => {
        win.open(`https://www.google.com/search?q=hora`);
        new Notification("Abriendo hora actual");
      },
    };

    const linksPredeterminados = [
      {nombre: "youtube", url: "https://www.youtube.com/"},
      {nombre: "google", url: "https://www.google.com/"},
      {nombre: "facebook", url: "https://www.facebook.com/"},
      {nombre: "twitter", url: "https://www.twitter.com/"},
      {nombre: "pinterest", url: "https://www.pinterest.com/"},
      {nombre: "instagram", url: "https://www.instagram.com/"},
      {nombre: "wikipedia", url: "https://www.wikipedia.com/"},
      {nombre: "codepen", url: "https://codepen.io/"},
    ];

    linksPredeterminados.forEach(({nombre, url}) => {
      comandos[`abre ${nombre}`] = () => {
        win.open(url);
        new Notification(`Abriendo ${nombre}`);
      };
      comandos[`alia abre ${nombre}`] = () => {
        win.open(url);
        new Notification(`Abriendo ${nombre}`);
      };
    });

    annyang.addCommands(comandos);
    annyang.start();
  }
});


    annyang.addCommands(comandos);
    annyang.start();
  
});
