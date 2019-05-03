$(document).foundation();

const headerSecondary = document.querySelector('.header-secondary');
if(headerSecondary) headerSecondary.classList.add('animated', 'heartBeat', 'delay-1s');

const portfolio = document.querySelector('.portfolio');
if(portfolio) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.classList.add('animated', 'swing', 'delay-1s'))
}