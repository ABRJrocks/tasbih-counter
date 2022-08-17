let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    if (count == 0) {
        alert("Can't save 0 as a Tasbih")
    }
    else {
        let countStr = count + " - "
        saveEl.textContent += countStr
        countEl.textContent = 0
        count = 0
    }
}

function reset() {
    saveEl.textContent = "Previous entries: "
    countEl.textContent = 0
    count = 0
}
