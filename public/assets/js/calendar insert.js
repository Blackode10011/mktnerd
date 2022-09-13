let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

let currentDate = new Date()
let currentDay = currentDate.getDate()
let monthNumber = currentDate.getMonth()
let currentYear = currentDate.getFullYear()
console.log(currentDay, monthNumber, currentYear)

let dates = document.getElementById("dates-insert")
let month = document.getElementById("monthString")
let year = document.getElementById("yearString")

let prev = document.getElementById("prev")
let next = document.getElementById("next")

prev.addEventListener('click', () => lastMonth());
next.addEventListener('click', () => nextMonth());

month.textContent = monthNames[monthNumber]
year.textContent = currentYear.toString();

// console.log(monthNames[monthNumber])

$("#day").text(currentDay)
// console.log(isLeap(2020))

// Now getting days into calendar

writeMonth(monthNumber);

function writeMonth(month){
for(let i = 1; i <= getTotalDays(month); i++){
    if (currentDate == i) {
   dates.innerHTML += `<li><span class="active">`+i+`</span></li>`
    } else {
        
    }
    if (currentDate !== i) {
        dates.innerHTML += ` <li>`+i+`</li>`
    } else {
        
    }
   
   // console.log(i)
    // TODOS: I need to find a way to insert days per 7 digits themselves
}
}
function getTotalDays(month){

if(month === -1) month = 11;
if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 ||
month == 11) {
    return 31;
} else if (month == 3 || month == 5 || month == 8 || month == 10 ) {
    return 30
;} else {
    return isLeap() ? 29:28;
}

}
function isLeap(/*year*/){ // 2018 is not 366 days
/*if*/ return ((currentYear % 100 !== 0) && (currentYear % 4 === 0) || (currentYear % 400 === 0)) //{
// return true;
// }
// return false;
}
function startDay(){
let start = new Date(currentYear, monthNumber, 1)
return ((start.getDay()-1) === -1) ? 6 : start.getDay()-1;
}

function lastMonth(){
if(monthNumber !== 0){
    monthNumber--;
} else{
monthNumber = 11;
currentYear--;
}

setNewDate();
console.log('last')
}

function nextMonth(){
    if(monthNumber !== 11){
    monthNumber++;
} else{
monthNumber = 0;
currentYear++;
}
setNewDate();
console.log('next')
}

function setNewDate(){
currentDate.setFullYear(currentYear,monthNumber,currentDay);
month.textContent = monthNames[monthNumber];
year.textContent = currentYear.toString();
}
