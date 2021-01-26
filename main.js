let btnSend = document.getElementById("btn-send")
let btnBack = document.getElementById("btn-back")

let message = document.getElementById('message')

let day = document.getElementById("day")
let mounth = document.getElementById("mounth")
let year = document.getElementById("year")

// Calcular edad
function calculateAge(birthday) {
    var birthday_date = new Date(birthday[2], birthday[1] - 1, birthday[0]);
    var ageDifMs = Date.now() - birthday_date.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}



// Event click
btnSend.addEventListener('click', () => {
    day = day.value
    mounth = mounth.value
    year = year.value

    let age = calculateAge([day, mounth, year]);
    
    if(age >= 18){
        sessionStorage.setItem('adult', true)
        location.href = "https://compralotodo.com/categoria-producto/licores/"
    }else{
        message.textContent = "No puedes ver el contenido porque no eres mayor de edad."
    }
})