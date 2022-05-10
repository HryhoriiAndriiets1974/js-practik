console.log('Module 9.1');
// ---- clock -----
const refs = {
  dateTime: document.querySelector('#date-time'),
  startStop: document.querySelector('#start-stop'),
};

let timerId = 0;

const showClock = () => {
  refs.dateTime.textContent = moment().format('YYYY MMM DD HH:mm:ss');
};

const startClock = () => {
  timerId = setInterval(showClock, 1000);
  refs.startStop.textContent = 'Stop';
  showClock();
};

const stopClock = () => {
  clearInterval(timerId);
  refs.startStop.textContent = 'Start';
  timerId = 0;
};

const handleButtonClick = () => {
  if (timerId) {
    stopClock();
  } else {
    startClock();
  }
};

refs.startStop.addEventListener('click', handleButtonClick);
