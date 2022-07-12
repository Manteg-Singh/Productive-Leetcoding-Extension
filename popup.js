//Asking for level of question from content Script
let easy = 15;
let medium = 30;
let hard = 60;


// let queryOption = { active: true, currentWindow: true };
// chrome.tabs.query(queryOption, (tabs) => {
//     chrome.tabs.sendMessage(tabs[0].id, { task: "sendLevel" }, function (response) {
//         if (response.status === "1") {
//             console.log('level:',response.status);
//             final = easy;
//         }
//         if (response.status === "2") {
//             console.log('level:',response.status);
//             final = medium;
//         }
//         if (response.status === "3") {
//             console.log('level:',response.status);
//             final = hard;
//         }

//     })


// });



//For hiding/Showing Acceptance Rates
var acc = document.getElementById('acceptance')


// Restores checkbox state using the preferences stored in chrome.storage.sync
chrome.storage.sync.get(['savedAccept'], function (result) {
    console.log('Value currently is ' + result.key);
    acc.checked = result.savedAccept;
});


let queryOptions = { active: true, currentWindow: true };
chrome.tabs.query(queryOptions, (tabs) => {
    if (acc.checked) {
        console.log(tabs[0].id);
        chrome.scripting.insertCSS({
            target: { tabId: tabs[0].id },
            files: ["/inject/AcceptanceHide.css"]
        });
    }
    else {

        chrome.scripting.removeCSS({
            target: { tabId: tabs[0].id },
            files: ["/inject/AcceptanceHide.css"]
        });
    }
});



acc.addEventListener('change', () => {
    chrome.storage.sync.set({ savedAccept: acc.checked }, function () {
        console.log('Value is set to ' + acc.checked);
    });
    let queryOptions = { active: true, currentWindow: true };
    chrome.tabs.query(queryOptions, (tabs) => {
        if (acc.checked) {
            console.log(tabs[0].id);

            // chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
            chrome.scripting.insertCSS({
                target: { tabId: tabs[0].id },
                files: ["/inject/AcceptanceHide.css"]
            });
            // });
        }
        else {
            // chrome.tabs.sendMessage(tabs[0].id, { task: "showAccept" }, function (response) {
            //     console.log(response.status);
            // })
            chrome.scripting.removeCSS({
                target: { tabId: tabs[0].id },
                files: ["/inject/AcceptanceHide.css"]
            });
        }
    });
})


//For hiding/Showing difficulty levels
var diff = document.getElementById('difficulty')



// Restores checkbox state using the preferences stored in chrome.storage.sync
chrome.storage.sync.get(['savedDiff'], function (result) {
    console.log('Value currently is ' + result.key);
    diff.checked = result.savedDiff;
});
diff.addEventListener('change', () => {
    chrome.storage.sync.set({ savedDiff: diff.checked }, function () {
        console.log('Value is set to ' + diff.checked);
    });

    let queryOptions = { active: true, currentWindow: true };
    chrome.tabs.query(queryOptions, (tabs) => {
        if (diff.checked) {
            console.log(tabs[0].id);
            chrome.tabs.sendMessage(tabs[0].id, { task: "hideDiff" }, function (response) {
                console.log(response.status);
            })
        }
        else {
            chrome.tabs.sendMessage(tabs[0].id, { task: "showDiff" }, function (response) {
                console.log(response.status);
            })
        }
    });
})






