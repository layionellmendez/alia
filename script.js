document.addEventListener("DOMContentLoaded", function() {
   
   if (!annyang) {
      return alert("C mamut, tu navegador no soporta el reconocimiento de voz.");
   }
   
   if (annyang) {
      annyang.setLanguage("es-CR");
      var comandos = {
         
         // Buscar en Google
         
         "busca *direccionG1 en Google": direccionG1 => {
            window.open(`https://www.google.com/search?q=${direccionG1}`);
         },
         "abre *direccionG2 en Google": direccionG2 => {
            window.open(`https://www.google.com/search?q=${direccionG2}`);
         },
         "alia abre *direccionG3 en Google": direccionG3 => {
            window.open(`https://www.google.com/search?q=${direccionG3}`);
         },
         "alia busca *direccionG4 en Google": direccionG4 => {
            window.open(`https://www.google.com/search?q=${direccionG4}`);
         },
         "alia abre *direccionG5": direccionG5 => {
            window.open(`https://www.google.com/search?q=${direccionG5}`);
         },
         "alia busca *direccionG6": direccionG6 => {
            window.open(`https://www.google.com/search?q=${direccionG6}`);
         },
         
         // Buscar en YouTube
         
         "busca *direccionYT1 en youtube": direccionYT1 => {
            window.open(`https://www.youtube.com/results?search_query=${direccionYT1}`)
         },
         "abre *direccionYT2 en youtube": direccionYT2 => {
            window.open(`https://www.youtube.com/results?search_query=${direccionYT2}`)
         },
         "alia busca *direccionYT3 en youtube": direccionYT3 => {
            window.open(`https://www.youtube.com/results?search_query=${direccionYT3}`)
         },
         "alia abre *direccionYT4 en youtube": direccionYT4 => {
            window.open(`https://www.youtube.com/results?search_query=${direccionYT4}`)
         }
         
      };
      annyang.addCommands(comandos);
      annyang.start()
   }
 
}, false);
