// // document.getElementById("count").innerText = 5
let count = 0
// console.log(count) 

// let myAge = 20
// console.log(myAge)
let inc = document.getElementById("count")

function increment()
{
    count += 1
    inc.textContent = count
}

function save()
{
    let str = document.getElementById("saved")
    let countStr = count + " - "
    str.textContent += countStr
    count = 0
    inc.textContent = 0
}