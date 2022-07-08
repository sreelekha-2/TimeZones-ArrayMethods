console.log('Hello!');

let date = document.getElementById('date');
let time = document.getElementById('time');

let usDate = document.getElementById('usDate');
let usTime = document.getElementById('usTime');

let japanDate = document.getElementById('japanDate');
let japanTime = document.getElementById('japanTime');

function showTime() {
  //displaying date
  date.textContent = new Date().toLocaleDateString('en-US', {
    timeZone: 'Asia/Kolkata',
  });
  usDate.textContent = new Date().toLocaleDateString('en-US', {
    timeZone: 'America/Los_Angeles',
  });
  japanDate.textContent = new Date().toLocaleDateString('en-US', {
    timeZone: 'Asia/Tokyo',
  });

  //displaying time
  time.textContent = new Date().toLocaleTimeString('en-US', {
    timeZone: 'Asia/Kolkata',
  });
  usTime.textContent = new Date().toLocaleTimeString('en-US', {
    timeZone: 'America/Los_Angeles',
  });
  japanTime.textContent = new Date().toLocaleTimeString('en-US', {
    timeZone: 'Asia/Tokyo',
  });
}

setInterval(showTime, 1000);
