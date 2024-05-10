let count = 0
let inc = document.getElementById("count")

function increment() {
    count += 1
    inc.textContent = count
}

function save() {
    let str = document.getElementById("saved")
    let countStr = count + " - "
    str.textContent += countStr
    count = 0
    inc.textContent = 0
}