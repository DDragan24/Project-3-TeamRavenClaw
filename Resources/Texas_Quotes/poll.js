// Initialize counts for Yes and No
let yesCount = 0;
let noCount = 0;

// Get the elements
const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');
const yesCountElement = document.getElementById('yesCount');
const noCountElement = document.getElementById('noCount');

// Add event listeners to the buttons
yesButton.addEventListener('click', () => {
    yesCount++;
    yesCountElement.textContent = yesCount;
});

noButton.addEventListener('click', () => {
    noCount++;
    noCountElement.textContent = noCount;
});