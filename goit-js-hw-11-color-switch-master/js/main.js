const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]'),
};

let isActive = false;
let switchInterval;

const startSwitch = () => {
    if(isActive) {
        return;
    };
    switchInterval = setInterval(() => {
        isActive = true;

        const randomColor = randomIntegerFromInterval(0, colors.length - 1);

        refs.body.style.backgroundColor = colors[randomColor];
    }, 1000);
};

const stopSwitch = () => {
    clearInterval(switchInterval);
    isActive = false;
};

refs.startBtn.addEventListener('click', startSwitch);
refs.stopBtn.addEventListener('click', stopSwitch);
 





