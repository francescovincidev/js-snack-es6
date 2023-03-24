// Array con le bici
const biciArray = [
    {
        tipo: "FireWheel",
        peso: 28
    },
    {
        tipo: "Summer",
        peso: 25
    },
    {
        tipo: "Cookie",
        peso: 30
    },
    {
        tipo: "AirZero",
        peso: 23
    }
];

let pesoMinore = 999;
let tipoMinore = "";
let biciPiuLeggero = [];

// Prendiamo la bici o le bici più leggere
biciArray.forEach((bici) => {
    let { tipo, peso } = bici;
    if (peso < pesoMinore) {
        pesoMinore = peso;
        tipoMinore = tipo;
        biciPiuLeggero = [{
            peso,
            tipo
        }]

    } else if (peso === pesoMinore) {
        biciPiuLeggero.push(bici);

    }
})

// Se la bici più leggera è una
if (biciPiuLeggero.length === 1) {
    console.log(`La bici ${tipoMinore} è la bici più leggera con ${pesoMinore} kg`);
}

// Se la bici leggere sono di più
if (biciPiuLeggero.length > 1) {
    let biciLeggereLista = "";
    biciPiuLeggero.forEach((biciLeggere) => {
        let { tipo, peso } = biciLeggere;
        biciLeggereLista += tipo + ", ";


    })
    biciLeggereLista = biciLeggereLista.slice(0, -2);
    console.log(`Le bici ${biciLeggereLista} sono le bici più leggera con ${biciPiuLeggero[0].peso} kg`);

}