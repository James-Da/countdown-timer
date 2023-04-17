// Set the date we're counting down to
let countDownDate = new Date("May 31, 2023 23:10:09").getTime()

let x = setInterval(() => {
  // Find the distance between now and the countdown date
  let now = new Date().getTime()
  let distance = countDownDate - now

  // Calculate days, hours, minutes and seconds remaining
  let days = Math.floor(distance / (1000 * 60 * 60 * 24))
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  let seconds = Math.floor((distance % (1000 * 60)) / 1000)

  if (days < 10) {
    days = "0" + days
  }
  if (hours < 10) {
    hours = "0" + hours
  }
  if (minutes < 10) {
    minutes = "0" + minutes
  }
  if (seconds < 10) {
    seconds = "0" + seconds
  }

  document.getElementById("days").innerHTML = days
  document.getElementById("hours").innerHTML = hours
  document.getElementById("minutes").innerHTML = minutes
  document.getElementById("seconds").innerHTML = seconds
  document.getElementById("seconds").innerText = seconds
}, 1000)
