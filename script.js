// let hrs = document.getElementById("hrs");
// let min = document.getElementById("min");
// let sec = document.getElementById("sec");


// setInterval(() => {

//     let currentTime = new Date();

// hrs.innerHTML = currentTime.getHours();
// min.innerHTML = currentTime.getMintues();
// sec.innerHTML = currentTime.getSeconds();
// },1000)






// by chat cgpt correction

// Selecting elements by their IDs
let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

// Using setInterval to update the time every second
setInterval(() => {
    // Creating a new Date object to get the current time
    let currentTime = new Date();

    // Updating the innerHTML of elements with current hours, minutes, and seconds
    hrs.innerHTML = currentTime.getHours();
    min.innerHTML = currentTime.getMinutes();
    sec.innerHTML = currentTime.getSeconds();
}, 1000);


