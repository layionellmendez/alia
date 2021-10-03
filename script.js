document.addEventListener("DOMContentLoaded", function() {
   
   if (!annyang) {
      return alert("C mamut, tu navegador no soporta el reconocimiento de voz.");
   }
   
   if (annyang) {
      annyang.setLanguage("es-CR");
      var comandos = {
         "busca *direccionG1 en google": direccionG1 => {
            window.open(`https://www.google.com/search?q=${direccionG1}`);
         },
         "abre *direccionG2 en google": direccionG2 => {
            window.open(`https://www.google.com/search?q=${direccionG2}`);
         },
         
      };
      annyang.addCommands(comandos);
      annyang.start()
   }
 
}, false);
