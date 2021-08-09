const tableCells = document.querySelectorAll('.number-of-notes');
const table = document.querySelector('table');


const inputAmount = document.querySelector('#bill-amount');
const inputCash = document.querySelector('#cash-received');

const btnNext = document.querySelector('.btn-next');
const btnCheck = document.querySelector('.btn-check');

const errorMsg = document.querySelector('.error-msg');

// Validate bill amount and show next input if correct

btnNext.addEventListener('click', () => {

    const billAmount = Number(inputAmount.value);
    console.log(billAmount);

    if (billAmount < 1) {
        errorMsg.innerText = 'Please enter valid bill amount.';
        showError();

    } else {
        hideError();
        btnNext.style.display = 'none';
        document.querySelector('.cash-received').style.display = 'flex';
    }
})


btnCheck.addEventListener('click', () => {

    reset();
    const billAmount = Number(inputAmount.value);
    const cashReceived = Number(inputCash.value);
    const change = cashReceived - billAmount;

    if (billAmount < 1 || cashReceived < 1) {

        errorMsg.innerText = 'Please enter valid bill amount or cash received';
        showError();

    }
    else if (cashReceived < billAmount) {

        errorMsg.innerText = 'Cash is less than bill amount.';
        showError();

    }
    else if (billAmount === cashReceived || change < 1) {

        errorMsg.innerText = 'No amount should be returned.';
        showError();

    }
    else if (change > 0) {

        calculateChange(change);
        table.style.display = 'table'

    }
})

// Show error msg
function showError() {
    errorMsg.style.display = 'block';
}
// Hide error msg
function hideError() {
    errorMsg.style.display = 'none';
}

// Reset table cells and error msg on clicking check button

function reset() {
    tableCells.forEach(cell => {
        cell.innerText = '';
    });
    errorMsg.style.display = 'none';
}

//  Calculate number of notes to be returned
function calculateChange(change) {

    const notes = [2000, 500, 100, 20, 10, 5, 1];

    if (change > 0) {

        for (let i = 0; i < notes.length; i++) {

            if (change >= notes[i]) {
                let notesCount = Math.floor(change / notes[i]);

                tableCells[i].innerText = notesCount;

                change -= notes[i] * notesCount;

                calculateChange(change);
                break;
            }
        }
    }
}