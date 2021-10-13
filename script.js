// Cerebro creado por Layionell Stwart Méndez Jiménez

document.addEventListener("DOMContentLoaded", function() {
   if (!annyang) {
      return alert("C mamut, tu navegador no soporta el reconocimiento de voz.");
   }
   
   if (annyang) {
      annyang.setLanguage("es-CR");
      var comandos = {
         
         /*
         
         
         "": () => {
           window.open(``);
         },
           
           
         */
         
         // Buscar en Google
            
         "busca *direccionG1": direccionG1 => {
            window.open(`https://www.google.com/search?q=${direccionG1}`);
         },
         "alia busca *direccionG2": direccionG2 => {
            window.open(`https://www.google.com/search?q=${direccionG2}`);
         },
         
         
         
         // Buscar en YouTube
         
         "abre *direccionYT1 en youtube": direccionYT1 => {
            window.open(`https://www.youtube.com/results?search_query=${direccionYT1}`);
         },
         "alia abre *direccionYT2 en youtube": direccionYT2 => {
            window.open(`https://www.youtube.com/results?search_query=${direccionYT2}`);
         },
         
         // Links Predeterminados
         
         "abre youtube": () => {
           window.open(`https://www.youtube.com/`);
         },
         "alia abre youtube": () => {
           window.open(`https://www.youtube.com/`);
         },
         

         "abre google": () => {
           window.open(`https://www.google.com/`);
         },
         "alia abre google": () => {
           window.open(`https://www.google.com/`);
         },
         
         
         "abre facebook": () => {
           window.open(`https://www.facebook.com/`);
         },
         "alia abre facebook": () => {
           window.open(`https://www.facebook.com/`);
         },
         
         
         "abre twitter": () => {
           window.open(`https://www.twitter.com/`);
         },
         "alia abre twitter": () => {
           window.open(`https://www.twitter.com/`);
         },
         
         
         "abre pinterest": () => {
           window.open(`https://www.pinterest.com/`);
         },
         "alia abre pinterest": () => {
           window.open(`https://www.pinterest.com/`);
         },
         
         "abre instagram": () => {
           window.open(`https://www.instagram.com/`);
         },
         "alia abre instagram": () => {
           window.open(`https://www.instagram.com/`);
         },
         
         "abre wikipedia": () => {
           window.open(`https://www.wikipedia.com/`);
         },
         "alia abre wikipedia": () => {
           window.open(`https://www.wikipedia.com/`);
         },
         
         
         "abre codepen": () => {
           window.open(`https://codepen.io/`);
         },
         "alia abre codepen": () => {
           window.open(`https://codepen.io/`);
         },
         
         "dime la hora": () => {
           window.open(`https://www.google.com/search?q=hora&rlz=1CATATK_enCR966&sxsrf=AOaemvIfIzlgNOctKrlsYIJ6Tm3PmIzomg%3A1634138306612&ei=wvhmYfruJJSDwbkPubGckAI&ved=0ahUKEwj6153K18fzAhWUQTABHbkYByIQ4dUDCA4&uact=5&oq=hora&gs_lcp=Cgdnd3Mtd2l6EAMyBwgAELEDEEMyBAgAEEMyBAgAEEMyCAgAEIAEELEDMgUIABCABDIICAAQgAQQsQMyBQgAEIAEMggIABCABBCxAzIICAAQgAQQsQMyBQgAEIAEOgcIIxDqAhAnOgQIIxAnOggILhCxAxCDAToLCC4QgAQQsQMQgwE6CwgAEIAEELEDEIMBOgoILhDHARCjAhBDOgoIABCxAxCDARBDSgQIQRgAUOs6WJxDYPVGaAFwAngAgAH8AYgBpAaSAQUwLjIuMpgBAKABAbABCsABAQ&sclient=gws-wiz/`);
         },
         "alia dime la hora": () => {
           window.open(`https://www.google.com/search?q=hora&rlz=1CATATK_enCR966&sxsrf=AOaemvIfIzlgNOctKrlsYIJ6Tm3PmIzomg%3A1634138306612&ei=wvhmYfruJJSDwbkPubGckAI&ved=0ahUKEwj6153K18fzAhWUQTABHbkYByIQ4dUDCA4&uact=5&oq=hora&gs_lcp=Cgdnd3Mtd2l6EAMyBwgAELEDEEMyBAgAEEMyBAgAEEMyCAgAEIAEELEDMgUIABCABDIICAAQgAQQsQMyBQgAEIAEMggIABCABBCxAzIICAAQgAQQsQMyBQgAEIAEOgcIIxDqAhAnOgQIIxAnOggILhCxAxCDAToLCC4QgAQQsQMQgwE6CwgAEIAEELEDEIMBOgoILhDHARCjAhBDOgoIABCxAxCDARBDSgQIQRgAUOs6WJxDYPVGaAFwAngAgAH8AYgBpAaSAQUwLjIuMpgBAKABAbABCsABAQ&sclient=gws-wiz/`);
         },
      }
         
   };
      annyang.addCommands(comandos);
      annyang.start()
 
});
