/*import { Agenda } from "agenda";
import { db } from "../firebase/firebase";
import { ref, set } from "firebase/database"

const agenda = new Agenda({
    db: {
        address: "mongodb+srv://camilochafloque:mamacare12345@mamacare.ygvkaea.mongodb.net/?retryWrites=true&w=majority",
        collection: "notifications"
    },
});

export const schedule = async (data, userId) => {
    const { id, titulo, notas, categoria, fecha, hora, notificationId } = data;
    const date = new Date();
    date.setFullYear(parseInt(fecha.split("-")[0]));
    date.setMonth(parseInt(fecha.split("-")[1]) - 1);
    date.setDate(parseInt(fecha.split("-")[2]));
    date.setHours(parseInt(hora.split(":")[0]));
    date.setMinutes(parseInt(hora.split(":")[1]));
    date.setSeconds(0);
    date.setHours(date.getHours() + 4);

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

    agenda.define("scheduleNotification-" + id, async () => {
        await scheduleNotification(newNotification, userId);
    });
  
    (async function() {
        await agenda.start();
        await agenda.schedule(date, "scheduleNotification-" + id);
    })();

    return { status: 200 };
  }
  
  async function scheduleNotification(newNotification, userId) {
    const notificationsRef = ref(db, "/notificaciones/" + userId + "/" + newNotification.id);
    await set(notificationsRef, newNotification);
  }
  */