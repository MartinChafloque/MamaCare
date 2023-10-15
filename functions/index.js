const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cron = require("node-cron");
const moment = require("moment-timezone");
require("moment/locale/es");

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

exports.scheduleNotification = functions.https.onRequest((req, res) => {
    const db = admin.database();
    const { data, userId } = req.body;
    const { id, titulo, notas, categoria, fecha, hora, notificationId } = data;
    const date = new Date();
    date.setFullYear(parseInt(fecha.split("-")[0]));
    date.setMonth(parseInt(fecha.split("-")[1]) - 1);
    date.setDate(parseInt(fecha.split("-")[2]));
    date.setHours(parseInt(hora.split(":")[0]));
    date.setMinutes(parseInt(hora.split(":")[1]));
    date.setSeconds(0);
    date.setHours(date.getHours() - 1);

    const scheduledTime = `${date.getMinutes()} ${date.getHours()} ${date.getDate()} ${date.getMonth() + 1} *`;
    const color = categoria.split(" ")[1];
    let background = "";
    if(color === "actividad") {
        background = "#A5D8B4";
    } else if(color === "cita") {
        background = "#D8B4FF";
    } else if(color === "medicamento") {
        background = "#E1AD6F";
    } else {
        background = "#B4D8E7";
    }

    cron.schedule(scheduledTime, () => {
        const newNotification = {
            id: id,
            notificationId: notificationId,
            title: `Notificación de Agenda: ${titulo}`,
            tipo: categoria.split(" ")[1],
            detalles: notas,
            horario: moment(moment(fecha + " " + hora, 'YYYY-MM-DD hh:mm').toDate()).format("dddd, MMMM D YYYY, h:mm a"),
            background: background,
            timestamp: moment().tz("America/Bogota").format('LLL'),
        }
        db.ref("/notificaciones/" + userId + "/" + id).set(newNotification);
    },{ timezone: "America/Bogota" });

    res.status(200).send("Notificación creada.");
})


