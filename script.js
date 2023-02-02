const win = window;
document.addEventListener("DOMContentLoaded", function() {
  if (!annyang) {
    return alert("C mamut, tu navegador no soporta el reconocimiento de voz.");
  }

  if (annyang) {
    annyang.setLanguage("es-CR");
    const comandos = {
      "busca en Google *query": (query) => {
        win.open(`https://www.google.com/search?q=${query}`);
      },
      "busca en YouTube *query": (query) => {
        win.open(`https://www.youtube.com/results?search_query=${query}`);
      },
      "dime la hora": () => {
        win.open(`https://www.google.com/search?q=hora`);
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
      comandos[`abre ${nombre}`] = () => { win.open(url) };
      comandos[`alia abre ${nombre}`] = () => { win.open(url) };
    });

    annyang.addCommands(comandos);
    annyang.start();
  }
});
