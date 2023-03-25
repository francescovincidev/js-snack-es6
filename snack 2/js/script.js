let arraySquadre = [
    {
        nome: "Inter",
        punti: 0,
        falliSubiti: 0
    },
    {
        nome: "Milan",
        punti: 0,
        falliSubiti: 0
    },
    {
        nome: "Napoli",
        punti: 0,
        falliSubiti: 0
    },
    {
        nome: "Juventus",
        punti: 0,
        falliSubiti: 0
    },
    {
        nome: "Roma",
        punti: 0,
        falliSubiti: 0
    },
    {
        nome: "Lazio",
        punti: 0,
        falliSubiti: 0
    }
];

let arrayFalli = [];

arraySquadre.forEach(element => {

    // Attribuiamo valori random a punti e falli
    element.punti = Math.floor(Math.random() * 60) + 1 ;
    element.falliSubiti = Math.floor(Math.random() * 30) + 1;
    
    // aggiungiamo gli oggetti con valore nome e falliSubiti al nuovo array
    arrayFalli = arraySquadre.map(({nome, falliSubiti}) => ({nome, falliSubiti}));
    
    
});


console.log(arraySquadre);
console.log(arrayFalli);


