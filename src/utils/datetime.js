const monthsPicker = [
    {label: "Enero", value: "01"},
    {label: "Febero", value: "02"},
    {label: "Marzo", value: "03"},
    {label: "Abril", value: "04"},
    {label: "Mayo", value: "05"},
    {label: "Junio", value: "06"},
    {label: "Julio", value: "07"},
    {label: "Agosto", value: "08"},
    {label: "Septiembre", value: "09"},
    {label: "Octubre", value: "10"},
    {label: "Noviembre", value: "11"},
    {label: "Diciembre", value: "12"},
]

const yearsPicker = [
    {label: "2023", value: "2023"},
    {label: "2024", value: "2024"},
    {label: "2025", value: "2025"},
    {label: "2026", value: "2026"},
    {label: "2027", value: "2027"},
    {label: "2028", value: "2028"},
    {label: "2029", value: "2029"},
    {label: "2030", value: "2030"},
]

const minutesPicker = Array.apply(null, Array(60)).map(function (x, i) { return {label: i < 10 ? "0" + i : "" + i, value: i < 10 ? "0" + i : "" + i} });
const hoursPicker = Array.apply(null, Array(24)).map(function (x, i) { return {label: i, value: i < 10 ? "0" + i : "" + i} });

const getTodaysDate = () => {
    const todaysDate = new Date();
    const year = todaysDate.getFullYear();
    const month = (todaysDate.getMonth() + 1) < 10 ? "0" + (todaysDate.getMonth() + 1) : "" + (todaysDate.getMonth() + 1);
    const day = todaysDate.getDate() < 10 ? "0" + todaysDate.getDate() : "" + todaysDate.getDate();
    const hours = todaysDate.getHours() < 10 ? "0" + todaysDate.getHours() : "" + todaysDate.getHours();
    const minutes = todaysDate.getMinutes() < 10 ? "0" + todaysDate.getMinutes() : "" + todaysDate.getMinutes();
 
    const todaysDateStr = year + "-" + month + "-" + day + " " + hours + ":" + minutes;
    return todaysDateStr;
}

const getToday = () => {
    const todaysDate = new Date();
    const year = todaysDate.getFullYear();
    const month = (todaysDate.getMonth() + 1) < 10 ? "0" + (todaysDate.getMonth() + 1) : "" + (todaysDate.getMonth() + 1);
    const day = todaysDate.getDate() < 10 ? "0" + todaysDate.getDate() : "" + todaysDate.getDate();
 
    const todaysDateStr = year + "-" + month + "-" + day;
    return todaysDateStr;
}



export {
    monthsPicker,
    yearsPicker,
    minutesPicker,
    hoursPicker,
    getToday,
    getTodaysDate
}
