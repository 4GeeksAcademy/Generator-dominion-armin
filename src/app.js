import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  const pronouns = ['the', 'our'];
  const adjs = ['great', 'big'];
  const nouns = ['jogger', 'racoon'];
  
  const extension = '.com';
  
  for(let i = 0; i<pronouns.length; i++){
      for(let j = 0; j < adjs.length; j++){
          for(let k = 0; k < nouns.length; k++){
              console.log('Los mejores dominios 2025 ', pronouns[i] + adjs[j] + nouns[k] + extension);
          }
      }
  }
};

// Econtre otra solucion con IA y informacion en internet

// Definimos las partes del dominio
// const pronouns = ["the", "our"];
// const adjectives = ["great", "big"];
// const nouns = ["jogger", "racoon"];
// const extension = ".com";

// Generamos las combinaciones posibles
// const generateDomains = () => {
//     let domains = [];

//     // Bucle anidado para combinar todas las palabras
//     for (let pronoun of pronouns) {
//         for (let adj of adjectives) {
//             for (let noun of nouns) {
//                 let domain = `${pronoun}${adj}${noun}${extension}`;
//                 domains.push(domain);
//             }
//         }
//     }

//     return domains;
// };

// // Imprimimos los dominios generados
// const domains = generateDomains();
// domains.forEach(domain => console.log(domain));
