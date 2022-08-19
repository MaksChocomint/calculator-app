let result = document.getElementById("result")
const historyList = new Array()
// numbers 
function number1() {
    result.innerText == "0" ? result.innerText = 1 : result.innerText += 1
}

function number2() {
    result.innerText == "0" ? result.innerText = 2 : result.innerText += 2
}

function number3() {
    result.innerText == "0" ? result.innerText = 3 : result.innerText += 3
}

function number4() {
    result.innerText == "0" ? result.innerText = 4 : result.innerText += 4
}

function number5() {
    result.innerText == "0" ? result.innerText = 5 : result.innerText += 5
}

function number6() {
    result.innerText == "0" ? result.innerText = 6 : result.innerText += 6
}

function number7() {
    result.innerText == "0" ? result.innerText = 7 : result.innerText += 7
}

function number8() {
    result.innerText == "0" ? result.innerText = 8 : result.innerText += 8
}

function number9() {
    result.innerText == "0" ? result.innerText = 9 : result.innerText += 9
}

function number0() {
    result.innerText == "0" ? result.innerText = "0" : result.innerText += "0"
}

//clear
function clearing() {
    result.innerText = "0"
}

//comma
function comma() {
    if (result.innerText.slice(-1) != '.') {
        result.innerText += "."
    }
}

//math
function add() {
    if (result.innerText.slice(-1) != '+') {
        result.innerText += "+"
    }
}

function subtract() {
    if (result.innerText.slice(-1) != '-') {
        result.innerText += "-"
    }
}

function multiply() {
    if (result.innerText.slice(-1) != '*') {
        result.innerText += "*"
    }
}

function divide() {
    if (result.innerText.slice(-1) != '/') {
        result.innerText += "/"
    }
}

function  sqr() {
    result.innerText += "**2"
}

function sqrt() {
    result.innerText += "**0.5"
}

function fraction() {
    result.innerText = "1/" + result.innerText
}

//equal
function bgRed() {
    document.getElementById("result").style.background = "red"
}
function bgGreen() {
    document.getElementById("result").style.background = "lightgreen"
}
function bgDefault() {
    document.getElementById("result").style.background = "aliceblue"
}
function equal() {
    var startResult = result.innerText
    var equalInfo = result.innerText + " = " + eval(result.innerText)
    var someInfo = result.innerText + " = " + result.innerText
    if (equalInfo != someInfo) {
        historyList.push(equalInfo)    
    }
    result.innerText = eval(result.innerText)
    var endResult = result.innerText
    if (startResult == endResult) {
        bgRed()
        setTimeout(bgDefault, 500)
    } else {
        bgGreen()
        setTimeout(bgDefault, 500)
    }
    console.log(startResult, endResult)
}

//other math
function pi() {
    result.innerText == "0" ? result.innerText = Math.PI : result.innerText += Math.PI
}

function exponent() {
    if (result.innerText.slice(-2, -1) != '**') {
        result.innerText += "**"
    }
}

function leftHook() {
    if (result.innerText == "0") {
        result.innerText = "("
    } else {
        result.innerText += "("
    }
}

function rightHook() {
    if (result.innerText == "0") {
        result.innerText = ")"
    } else {
        result.innerText += ")"
    }
}

//cancel
function cancel() {
    result.innerText.length > 1 ? result.innerText = result.innerText.slice("0", result.innerText.length - 1) : result.innerText = "0"
}

//history
function history() {
    clearHistory()
    var historyElement = document.getElementById("history-block")
    var historyRemove = document.createElement("button")
    historyRemove.setAttribute("class", "history-tag")
    var historyRemoveText = document.createTextNode("❌ close")
    historyRemove.appendChild(historyRemoveText)
    historyRemove.setAttribute("onclick", "clearHistory()")
    historyElement.appendChild(historyRemove)
    for (let i = 0; i < historyList.length; i++) {
        var historyTag = document.createElement("p")
        historyTag.setAttribute("class", "history-tag")
        var brElement = document.createElement("br")
        brElement.setAttribute("class", "history-tag")
        var historyText = document.createTextNode(historyList[i])
        historyTag.appendChild(historyText)
        historyElement.appendChild(brElement)
        historyElement.appendChild(historyTag)
    }
}

function clearHistory() {
    const elementsOfHistoryRemover = document.querySelectorAll(".history-tag")
    elementsOfHistoryRemover.forEach(element => {
        element.remove()
    })
}


