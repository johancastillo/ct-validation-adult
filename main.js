let btnSend = document.getElementById("btn-send")
let btnBack = document.getElementById("btn-back")

let message = document.getElementById('message')

let dayEl = document.getElementById("day")
let mounthEl = document.getElementById("mounth")
let yearEl = document.getElementById("year")

let day = parseInt(dayEl.value)
let mounth = parseInt(mounthEl.value)
let year = parseInt(yearEl.value)
var anoActual = (new Date()).getFullYear();

let fecha


// Calcular edad
function calculateAge(birthday) {
    var birthday_date = new Date(birthday[2], birthday[1] - 1, birthday[0]);
    var ageDifMs = Date.now() - birthday_date.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}


// OnChange
dayEl.addEventListener('change', e => {
    day = e.target.value
    
    // Validar si la feche es real
    fecha = new Date(year, (mounth -1), day)
})

mounthEl.addEventListener('change', e => {
    mounth = e.target.value
    // Validar si la feche es real
    fecha = new Date(year, (mounth -1), day)
})

yearEl.addEventListener('change', e => {
    year = e.target.value
    // Validar si la feche es real
    fecha = new Date(year, (mounth -1), day)
})


// Event click
btnSend.addEventListener('click', () => {

    if(!(year > anoActual) && !isNaN(year) && year != false && year == 0){
        if (year && day) {
            let age = calculateAge([day, mounth, year]);
    
            if (age >= 18) {
                sessionStorage.setItem('adult', true)
                location.href = "https://compralotodo.com/categoria-producto/licores/"
            } else {
                message.textContent = "No puedes ver el contenido porque no eres mayor de edad."
            }
        }else{
            message.textContent = "Campos vacíos"
        }
    }else{
        message.textContent = "El año no es válido."
    }
})

// Back
btnBack.addEventListener('click', () => history.back())