// Set the date we're counting down to
let countDownDate = new Date("Oct 31, 2019 0:0:0").getTime();

// Update the count down every 1 second
let countdown = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = two_digits(Math.floor(distance / (1000 * 60 * 60 * 24)));
  var hours = two_digits(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  var minutes = two_digits(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
  var seconds = two_digits(Math.floor((distance % (1000 * 60)) / 1000));

  // Display the result in the element with id="demo"
  document.getElementsByClassName("timer")[0].innerHTML = `${days}:${hours}:${minutes}:${seconds}`;
}, 1000);

function two_digits(number) {
    return number.toString().length != 1 ? number.toString() : '0' + number.toString()
}