
//Timer logicxx
function InitTimer(total) {
    console.log('InitTimer running')
    var time = total * 60;
    var timer = setInterval(() => {
        let mins = Math.floor(time / 60);
        let sec = time % 60;
        var s="Time Left: "
        sec = sec < 10 ? '0' + sec : sec;
        document.getElementsByClassName("css-1km43m6-BtnContent e5i1odf0")[0].innerHTML =s+ mins + ':' + sec;
        document.getElementsByClassName("css-1km43m6-BtnContent e5i1odf0")[0].style.fontSize='20px'
        document.getElementsByClassName("css-1km43m6-BtnContent e5i1odf0")[0].style.fontWeight = "600"
        document.getElementsByClassName("css-1km43m6-BtnContent e5i1odf0")[0].style.color = "#D14F68"; 
        
        time--;
        if (time < 0) {
            clearInterval(timer);

        }
    }, 1000);
}
var eazy = 0;
var med = 0
var harrd = 0
let getAccess = setInterval(() => {
    let l1 = document.getElementsByClassName("css-14oi08n");
    console.log(l1.length)
    if (l1.length > 0) {
        clearInterval(getAccess)
        const response = { status: "2" };
        console.log(response)
        InitTimer(15)
    }
    let l2 = document.getElementsByClassName("css-dcmtd5");
    console.log(l2.length)
    if (l2.length > 0) {
        clearInterval(getAccess)
        const response = { status: "2" };
        console.log(response)
        InitTimer(30)
    }
    let l3 = document.getElementsByClassName("css-t42afm");
    console.log(l3.length)
    if (l3.length > 0) {
        clearInterval(getAccess)
        const response = { status: "3" };
        console.log(response)
        InitTimer(60)
    }
}, 1000);

// //Listen for timer

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     if (request.task === "sendLevel") {

//         var eazy = document.getElementsByClassName('css-14oi08n');
//         if (eazy.length > 0) {
//             const response = { status: "1" };
//             console.log(response)
//             // sendResponse(response)
//         }
//         var med = document.getElementsByClassName('css-dcmtd5');
//         if (med.length > 0) {
//             const response = { status: "2" };
//             console.log(response)
//             // sendResponse(response)
//         }
//         var hardd = document.getElementsByClassName('css-t42afm');
//         if (hardd.length > 0) {
//             const response = { status: "3" };
//             console.log(response)
//             // sendResponse(response)
//         }
// //     }
// })




// //Content Script hiding Acceptance Rates according to input


const rate = document.getElementsByClassName("mx-2 py-[11px]")

var showRateId = null;
var hideRateId = null;



//Content Script hiding difficulty levels according to input
const medium = document.getElementsByClassName("text-yellow dark:text-dark-yellow")
const easy = document.getElementsByClassName("text-olive dark:text-dark-olive")
const hard = document.getElementsByClassName("text-pink dark:text-dark-pink")


//Variables to stop intervals
var showId = null;
var hideId = null;
var initshow = null;
var inithide = null;
var diff = null;
chrome.storage.sync.get(['savedDiff'], function (result) {
    console.log('Value currently is ' + result.key);
    if (result.savedDiff === true) {


        if (initshow) clearInterval(initshow);
        if (showId) clearInterval(showId);
        if (hideId) clearInterval(hideId);
        inithide = setInterval(() => {
            Array.from(document.getElementsByClassName("text-yellow dark:text-dark-yellow")).forEach(e => e.style.visibility = "hidden");
            Array.from(document.getElementsByClassName("text-olive dark:text-dark-olive")).forEach(e => e.style.visibility = "hidden");
            Array.from(document.getElementsByClassName("text-pink dark:text-dark-pink")).forEach(e => e.style.visibility = "hidden");
            Array.from(document.getElementsByClassName("css-14oi08n")).forEach(e => e.style.display = "none");
            Array.from(document.getElementsByClassName("css-dcmtd5")).forEach(e => e.style.display = "none");
            Array.from(document.getElementsByClassName("css-t42afm")).forEach(e => e.style.display = "none");
        }, 100);
    }
    else if (request.task === false) {


        if (inithide) clearInterval(inithide);
        if (showId) clearInterval(showId);
        if (hideId) clearInterval(hideId);
        initshow = setInterval(() => {
            Array.from(document.getElementsByClassName("text-yellow dark:text-dark-yellow")).forEach(e => e.style.visibility = "visible");
            Array.from(document.getElementsByClassName("text-olive dark:text-dark-olive")).forEach(e => e.style.visibility = "visible");
            Array.from(document.getElementsByClassName("text-pink dark:text-dark-pink")).forEach(e => e.style.visibility = "visible");
            Array.from(document.getElementsByClassName("css-14oi08n")).forEach(e => e.style.display = "inline");
            Array.from(document.getElementsByClassName("css-dcmtd5")).forEach(e => e.style.display = "inline");
            Array.from(document.getElementsByClassName("css-t42afm")).forEach(e => e.style.display = "inline");
        }, 100);

    }


});




chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {


    console.log(request, sender)
    if (request.task === "hideDiff") {


        if (initshow) clearInterval(initshow);
        if (showId) clearInterval(showId);
        if (inithide) clearInterval(inithide);
        hideId = setInterval(() => {
            Array.from(document.getElementsByClassName("text-yellow dark:text-dark-yellow")).forEach(e => e.style.visibility = "hidden");
            Array.from(document.getElementsByClassName("text-olive dark:text-dark-olive")).forEach(e => e.style.visibility = "hidden");
            Array.from(document.getElementsByClassName("text-pink dark:text-dark-pink")).forEach(e => e.style.visibility = "hidden");
            Array.from(document.getElementsByClassName("css-14oi08n")).forEach(e => e.style.display = "none");
            Array.from(document.getElementsByClassName("css-dcmtd5")).forEach(e => e.style.display = "none");
            Array.from(document.getElementsByClassName("css-t42afm")).forEach(e => e.style.display = "none");
        }, 100);
        const response = { status: "hidden diff level" };
        sendResponse(response);
    }


    else if (request.task === "showDiff") {
        if (hideId) clearInterval(hideId);
        if (initshow) clearInterval(initshow);
        if (inithide) clearInterval(inithide);
        showId = setInterval(() => {
            Array.from(document.getElementsByClassName("text-yellow dark:text-dark-yellow")).forEach(e => e.style.visibility = "visible");
            Array.from(document.getElementsByClassName("text-olive dark:text-dark-olive")).forEach(e => e.style.visibility = "visible");
            Array.from(document.getElementsByClassName("text-pink dark:text-dark-pink")).forEach(e => e.style.visibility = "visible");
            Array.from(document.getElementsByClassName("css-14oi08n")).forEach(e => e.style.display = "inline");
            Array.from(document.getElementsByClassName("css-dcmtd5")).forEach(e => e.style.display = "inline");
            Array.from(document.getElementsByClassName("css-t42afm")).forEach(e => e.style.display = "inline");
        }, 100);
        const response = { status: "visible diff level" };
        sendResponse(response);
    }

})




