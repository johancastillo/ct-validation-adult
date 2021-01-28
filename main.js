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


dayValidation = {
    01: 31,
    02: 29,
    03: 31,
    04: 30,
    05: 31,
    06: 30,
    07: 31,
    08: 31,
    09: 30,
    10: 31,
    11: 30,
    12: 31,
}

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
})

mounthEl.addEventListener('change', e => {
    mounth = e.target.value
})

yearEl.addEventListener('change', e => {
    year = e.target.value
})


// 

// Event click
btnSend.addEventListener('click', () => {

    if(year && day){
        if(day <= dayValidation[mounth] && day >= 1){
            if (year <= anoActual && !isNaN(year) && year !== 0 && year > 1940) {
                let age = calculateAge([day, mounth, year]);
        
                if (age >= 18) {
                    sessionStorage.setItem('adult', true)
                    location.href = "https://compralotodo.com/categoria-producto/licores/"
                } else {
                    message.textContent = "No puedes ver el contenido porque no eres mayor de edad."
                }
            }else{
                message.textContent = "El año no es válido."
            }
        }else{
            message.textContent = "No es un día válido"
        }
    }else{
        message.textContent = "Campos vacíos."
    }
})

// Back
btnBack.addEventListener('click', () => history.back())