//============//Displays Current Date And Time//==========//
document.write("<h3>Displays current Date and Time:</h3>")
console.log("Displays current Date and Time:")
let currentDate = new Date();
document.write(currentDate)
console.log(currentDate)

//===========//The-current-Month-in-Words://==========//
document.write("<h3>The current Month in Words:</h3>")
console.log("The current Month in Words:")
var month = currentDate.getMonth()
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
document.write("Current Month: " + months[month])
console.log("Current Month: " + months[month])

//========//First-3-letters-of-the-current-day//==========//
document.write("<h3>First 3 letters of the current day:</h3>")
console.log("First 3 letters of the current day:")
let day = currentDate.getDay();
var today = "Today is"
let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
document.write(days[day])
console.log(days[day])

//===//Displays a message “It’s Fun day” if its Saturday or Sunday today.//==//
document.write("<h3>Displays a message “It’s Fun day” if its Saturday or Sunday today.</h3>")
console.log("Displays a message “It’s Fun day” if its Saturday or Sunday today.")
if(day == days[0] || day == days[6]){
    document.write("It's Fun day!")
    console.log("It's Fun day!")
}
else{
    document.write("It's Working day")
    console.log("It's Working day")
}
//============//Message-Last-Days-Of-Month//============//
document.write("<h3>Message Last Days Of Month:</h3>")
console.log("Message Last Days Of Month:")
let date = currentDate.getDate()
console.log(date)
if(date <= 16){
    document.write("“First fifteen days of the month”")
    console.log("“First fifteen days of the month”")
}else{
    document.write("“Last days of the month”.")
    console.log("“Last days of the month”.")
}
//======//Determines-the-minutes-since-midnight,-Jan.-1,-1970//======//
document.write("<h3>Determines the minutes since midnight, Jan. 1, 1970:</h3>")
console.log("Determines the minutes since midnight, Jan. 1, 1970:")
let currentTime = new Date()
document.write("Current Date : "+currentTime)
console.log("Current Date : "+currentTime)
let todayDate = new Date()
var milliseconds1970 = todayDate.getTime()
var minutes1970 = milliseconds1970/1000/60
document.write("<br/>Elapsed milliseconds since january,1 1970: "+milliseconds1970)
document.write("<br/>Elapsed minutes since january,1 1970: "+minutes1970)
console.log("Elapsed milliseconds since january,1 1970: "+milliseconds1970)
console.log("Elapsed minutes since january,1 1970: "+minutes1970)

//===//Tests-whether-it's-before-noon-and-alert-“Its-AM”-else-“its-PM”.//==//
document.write("<h3>Tests whether it's before noon and alert “Its AM” else “its PM”.</h3>")
console.log("Tests whether it's before noon and alert “Its AM” else “its PM”.")
var time = new Date()
var newTime = time.getHours()
if(newTime <=12){
    document.write("It's AM")
    console.log("It's AM")
}else{
    document.write("It's PM")
    console.log("It's PM")
}
//=============//Last-day-of-the-last-month-of-2023//===============//
document.write("<h3>Last day of the last month of 2023.</h3>")
console.log("Last day of the last month of 2023.")
let laterDate = new Date("December 31 2023")
document.write('Later Date: '+laterDate)
console.log('Later Date: '+laterDate)

//===========//The-starting-date-of-this-Ramadan//==========//
document.write("<h3>The starting date of this Ramadan 2015:</h3>")
console.log("The starting date of this Ramadan 2015:")
let ramadan = new Date(2015, 5, 18)
// let ramadan = new Date(2023, 3, 22)
let newDate = new Date()
let startingRamadan = newDate - ramadan;
let daysPassed = Math.floor(startingRamadan / (1000 * 60 * 60 * 24))
console.log(daysPassed)
alert("1st Ramadan in 2015 was on June 18, 2015. " + daysPassed + " days have passed since then.");

//===========//The-reference-date-and-the-beginning-of-2015.//=========//
document.write("<h3>The reference date and the beginning of 2015:</h3>")
console.log("The reference date and the beginning of 2015:")
var reference = new Date('2023 11 7')
var beginning = new Date('2015 12 5')
var difference = reference - beginning
var secondsElapes = Math.floor(difference / 1000)
document.write("On reference date "+reference+', '+secondsElapes+" Seconds had passed since begining 2015")
console.log("On reference date "+reference+', '+secondsElapes+" Seconds had passed since begining 2015")
console.log(secondsElapes)

//=========//The-current-date-and-time-Extract-the-hours//=========//
document.write("<h3>The current date and time Extract the hours:</h3>")
console.log("The current date and time Extract the hours:")
let nowToday = new Date()
document.write(nowToday)
console.log(nowToday)
let currentHour = nowToday.getHours()
nowToday.setHours(currentHour + 1)
document.write("<br/>1 hour ago, it was "+nowToday)
console.log("1 hour ago, it was "+nowToday)

//==========//Date-reset-to-100-years-back://=========//
document.write("<h3>Date reset to 100 years back:</h3>")
console.log("Date reset to 100 years back:")
alert(`reset to 100 years back?`)
var current = new Date()
document.write("Current date: "+current)
console.log("Current date: "+current)
current.setFullYear(current.getFullYear()-100)
document.write('<br/>100 years back, it was '+current)
console.log('100 years back, it was '+current)

//=========//User-about-his-age-and-Calculate-birth-year//==========//
document.write("<h3>user about his age and Calculate birth year:</h3>")
console.log("user about his age and Calculate birth year:")
let userAge = Number(prompt(`What is Your Age?`))
document.write("Your Age is: "+userAge)
console.log("Your Age is: "+userAge)
let birthDay = new Date()
birthDay.setFullYear(birthDay.getFullYear()-userAge)
let birthYear = birthDay.getFullYear()
document.write("<br/>Your Birth year is: "+birthYear)
console.log("Your Birth year is: "+birthYear)

//=========//Generate-your-K-Electric//=======//
document.write("<h3>Generate your K-Electric:</h3>")
console.log("Generate your K-Electric:")
document.write(`<h1>K-Electric Bill</h1>`)
console.log(`K-Electric Bill`)
let customerName = 'ABC Customer'
let monthes = ['January','Febuary','March','April','May','June','July','August','September','October','December'] 
var month = new Date()
let currentMonth = month.getMonth()
document.write('Month: '+monthes[currentMonth])
console.log('Month: '+monthes[currentMonth])
var units = 410;
let perUnit = 16;
document.write('<br/>Numbers of Units: '+units)
console.log('Numbers of Units: '+units)
document.write('<br/>Charges per unit: '+perUnit)
console.log('Charges per unit: '+perUnit)
let withinDueDate = units * perUnit
document.write('<br/><br/>Net Amount Payable(Within Due Date): '+withinDueDate)
console.log('Net Amount Payable(Within Due Date): '+withinDueDate)
var letPaymentCharges = 350
document.write('<br/>Let Payment Surcharge: '+letPaymentCharges)
console.log('Let Payment Surcharge: '+letPaymentCharges)
let afterDueDate = letPaymentCharges + withinDueDate
document.write('<br/>Net Amount Payable(After Due Date): '+afterDueDate)
console.log('Gross Amount Payable(After Due Date): '+afterDueDate)

//===========================//E-N-D//===========================//