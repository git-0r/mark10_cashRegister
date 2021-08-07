const textarea = document.querySelector('.translate-input');
const btn = document.querySelector('.translateBtn');
const output = document.querySelector('.translate-output');
const select = document.querySelector('.selectLanguage');
const yoda = document.querySelector('.yoda');

btn.addEventListener('click', () => {
    const englishText = textarea.value;
    const selectedOption = select.value;
    translateText(englishText, selectedOption);
})


async function translateText(englishText, selectedOption) {
    await fetch(`https://api.funtranslations.com/translate/${selectedOption}.json?text=${englishText}`)
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                output.innerText = data.contents.translated;
                yoda.style.display = 'block';
            } else {
                alert('something went wrong. please try again later.');
                console.log('something went wrong. please try again later.');
            }
        })
}
