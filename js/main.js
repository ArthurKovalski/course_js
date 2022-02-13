const vocabulary = {
    button: {
        en: 'click me',
        ru: 'nazhme menya'
    }
}

let currentLanguage = 'en'


const container = document.querySelector('.container');
container.classList.add('container__styles');

const block = document.createElement('div');
block.classList.add('block');
container.append(block);

const button = document.createElement('button');
button.classList.add('button');
button.textContent = vocabulary.button[currentLanguage]
block.addEventListener('click', () => {
    console.log('click')
})

document.body.append(button);



button.addEventListener('click', () => {
    currentLanguage = 'ru'
 
})

document.body.addEventListener('click', (event) => {
    const target = event.target;
    if(target.classList.contains('button')){
        button.textContent = vocabulary.button[currentLanguage]
    }
})