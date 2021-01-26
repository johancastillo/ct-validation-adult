let btnSend = document.getElementById("btn-send")
let btnBack = document.getElementById("btn-back")

let message = document.getElementById('message')

let dayEl = document.getElementById("day")
let mounthEl = document.getElementById("mounth")
let yearEl = document.getElementById("year")

let day = dayEl.value
let mounth = mounthEl.value
let year = yearEl.value

// Calcular edad
function calculateAge(birthday) {
    var birthday_date = new Date(birthday[2], birthday[1] - 1, birthday[0]);
    var ageDifMs = Date.now() - birthday_date.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}


// OnChange
dayEl.addEventListener('change', e => day = e.target.value )
mounthEl.addEventListener('change', e => mounth = e.target.value )
yearEl.addEventListener('change', e => year = e.target.value )


// Event click
btnSend.addEventListener('click', () => {

    let age = calculateAge([day, mounth, year]);
    
    if(age >= 18){
        sessionStorage.setItem('adult', true)
        location.href = "https://compralotodo.com/categoria-producto/licores/"
    }else{
        message.textContent = "No puedes ver el contenido porque no eres mayor de edad."
    }
})

// Back
btnBack.addEventListener('click', () => history.back() )