// ==========================================
// ELEMENT REFERENCES
// ==========================================

const display = document.getElementById("display");
const liveResult = document.getElementById("liveResult");
const historyList = document.getElementById("historyList");
const totalCalculations = document.getElementById("totalCalculations");
const analyticsTotal = document.getElementById("analyticsTotal");
const memoryDisplay = document.getElementById("memoryDisplay");

// ==========================================
// GLOBAL VARIABLES
// ==========================================

let memoryValue = 0;
let calculationCount = 0;
let historyArray = [];

// ==========================================
// DISPLAY FUNCTIONS
// ==========================================

function appendValue(value)
{
    display.value += value;
    updateLiveResult();
}

function clearDisplay()
{
    display.value = "";
    liveResult.innerHTML = "";
}

function deleteLast()
{
    display.value =
        display.value.slice(0, -1);

    updateLiveResult();
}

// ==========================================
// LIVE RESULT
// ==========================================

function updateLiveResult()
{
    try
    {
        if(display.value.trim() !== "")
        {
            let result =
                eval(display.value);

            liveResult.innerHTML =
                "= " + result;
        }
        else
        {
            liveResult.innerHTML = "";
        }
    }
    catch(error)
    {
        liveResult.innerHTML = "";
    }
}

// ==========================================
// CALCULATE
// ==========================================

function calculate()
{
    try
    {
        const expression =
            display.value;

        const answer =
            eval(expression);

        addToHistory(
            expression,
            answer
        );

        display.value = answer;

        liveResult.innerHTML = "";

        calculationCount++;

        updateStatistics();

        saveHistory();
    }
    catch(error)
    {
        display.value = "Error";

        setTimeout(() =>
        {
            display.value = "";
        }, 1500);
    }
}

// ==========================================
// HISTORY FUNCTIONS
// ==========================================

function addToHistory(expression, result)
{
    const historyText =
        expression + " = " + result;

    historyArray.unshift(historyText);

    const li =
        document.createElement("li");

    li.textContent =
        historyText;

    historyList.prepend(li);
}

function clearHistory()
{
    historyArray = [];

    historyList.innerHTML = "";

    saveHistory();
}

// ==========================================
// SAVE HISTORY
// ==========================================

function saveHistory()
{
    localStorage.setItem(
        "calculatorHistory",
        JSON.stringify(historyArray)
    );
}

function loadHistory()
{
    const saved =
        localStorage.getItem(
            "calculatorHistory"
        );

    if(saved)
    {
        historyArray =
            JSON.parse(saved);

        historyArray.forEach(item =>
        {
            const li =
                document.createElement("li");

            li.textContent = item;

            historyList.appendChild(li);
        });
    }
}

// ==========================================
// MEMORY FUNCTIONS
// ==========================================

function memoryAdd()
{
    try
    {
        memoryValue +=
            Number(
                eval(display.value)
            );

        updateMemoryDisplay();
    }
    catch(error){}
}

function memorySubtract()
{
    try
    {
        memoryValue -=
            Number(
                eval(display.value)
            );

        updateMemoryDisplay();
    }
    catch(error){}
}

function memoryRecall()
{
    display.value =
        memoryValue;

    updateLiveResult();
}

function memoryClear()
{
    memoryValue = 0;

    updateMemoryDisplay();
}

function updateMemoryDisplay()
{
    memoryDisplay.textContent =
        memoryValue;
}

// ==========================================
// SCIENTIFIC FUNCTIONS
// ==========================================

function squareNumber()
{
    try
    {
        let value =
            Number(
                eval(display.value)
            );

        display.value =
            value * value;

        updateLiveResult();
    }
    catch(error){}
}

function squareRoot()
{
    try
    {
        let value =
            Number(
                eval(display.value)
            );

        display.value =
            Math.sqrt(value);

        updateLiveResult();
    }
    catch(error){}
}

function calculateSin()
{
    try
    {
        let value =
            Number(
                eval(display.value)
            );

        display.value =
            Math.sin(value);

        updateLiveResult();
    }
    catch(error){}
}

function calculateCos()
{
    try
    {
        let value =
            Number(
                eval(display.value)
            );

        display.value =
            Math.cos(value);

        updateLiveResult();
    }
    catch(error){}
}

function calculateTan()
{
    try
    {
        let value =
            Number(
                eval(display.value)
            );

        display.value =
            Math.tan(value);

        updateLiveResult();
    }
    catch(error){}
}

function calculateLog()
{
    try
    {
        let value =
            Number(
                eval(display.value)
            );

        display.value =
            Math.log10(value);

        updateLiveResult();
    }
    catch(error){}
}

function calculateLn()
{
    try
    {
        let value =
            Number(
                eval(display.value)
            );

        display.value =
            Math.log(value);

        updateLiveResult();
    }
    catch(error){}
}

// ==========================================
// PERCENTAGE
// ==========================================

function calculatePercentage()
{
    try
    {
        let value =
            Number(
                eval(display.value)
            );

        display.value =
            value / 100;

        updateLiveResult();
    }
    catch(error){}
}

// ==========================================
// RANDOM NUMBER
// ==========================================

function generateRandom()
{
    display.value =
        Math.random();

    updateLiveResult();
}

// ==========================================
// COPY RESULT
// ==========================================

function copyResult()
{
    navigator.clipboard
        .writeText(display.value)
        .then(() =>
        {
            alert(
                "Result Copied!"
            );
        });
}

// ==========================================
// STATISTICS
// ==========================================

function updateStatistics()
{
    totalCalculations.textContent =
        calculationCount;

    analyticsTotal.textContent =
        calculationCount;

    localStorage.setItem(
        "totalCalculations",
        calculationCount
    );
}

function loadStatistics()
{
    const count =
        localStorage.getItem(
            "totalCalculations"
        );

    if(count)
    {
        calculationCount =
            Number(count);

        updateStatistics();
    }
}

// ==========================================
// INITIALIZATION
// ==========================================

window.onload = function()
{
    loadHistory();

    loadStatistics();

    updateMemoryDisplay();
};