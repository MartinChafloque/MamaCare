const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp(functions.config().firebase);

exports.changeFraseDelDia = functions.pubsub.schedule("0 0 * * *").timeZone("America/Bogota").onRun(() => {
    const frasesRef = admin.database().ref("/frases");
    const fraseActualRef = admin.database().ref("/frase-del-dia");

    frasesRef.once("value").then((frasesSnapshot) => {
        const frases = frasesSnapshot.val();
        fraseActualRef.once("value").then((fraseSnapshot) => {
            const fraseActual = fraseSnapshot.val();
            let newFrase = null;
            while(true) {
                const randomNumber = Math.floor(Math.random() * Object.values(frases).length);
                newFrase = Object.values(frases).filter((_, idx) => idx === randomNumber);
                if(fraseActual.id !== newFrase.id) break;
            }

            fraseActualRef.set({
                id: newFrase[0].id,
                texto: newFrase[0].texto,
                autor: newFrase[0].autor
            });
        });

    });
});