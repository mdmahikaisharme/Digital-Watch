// Variable
let hour = document.getElementById("up_hour");
let min = document.getElementById("up_min");
let sec = document.getElementById("up_sec");
let main_down = document.getElementById("main_down")


// Function
const updateTime = () => {
    let time = new Date();
    hour.innerText = time.getHours()
    min.innerText = time.getMinutes()
    sec.innerText = time.getSeconds()
    main_down.style.width = ((time.getSeconds() /60) *100) +'%'
};
// Updating
setInterval(updateTime, 1000);