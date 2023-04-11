const screen1 = document.querySelector('.screen1')

const screen2 = document.querySelector('.screen2')

const btnCookie = document.querySelector('#btnCookie')

const btnReset = document.querySelector('#btnReset')

btnCookie.addEventListener('click', sortPhrase)
btnReset.addEventListener('click', sortPhrase)

document.addEventListener('keydown', function (event) {
  if (event.key == 'Enter' && screen2.classList.contains('hide')) {
    sortPhrase()
  } else if (event.key == 'Enter' && screen1.classList.contains('hide')) {
    sortPhrase()
  }
})

function sortPhrase() {
  toggleScreen()

  let phrasesOfCookies = Math.round(Math.random() * 10)

  switch (phrasesOfCookies) {
    case 0:
      screen2.querySelector('p').innerText =
        'Believe in yourself and your dreams will come true.'
      break
    case 1:
      screen2.querySelector('p').innerText =
        'Your future looks bright. Keep following your path.'
      break
    case 2:
      screen2.querySelector('p').innerText =
        'The greatest riches are those that cannot be bought.'
      break
    case 3:
      screen2.querySelector('p').innerText =
        'Your kindness will open many doors in the future.'
      break
    case 4:
      screen2.querySelector('p').innerText =
        'The best things in life are yet to come.'
      break
    case 5:
      screen2.querySelector('p').innerText =
        'A journey of a thousand miles begins with a single step.'
      break
    case 6:
      screen2.querySelector('p').innerText =
        'Happiness is not something ready-made. It comes from your own actions.'
      break
    case 7:
      screen2.querySelector('p').innerText =
        "You have a heart of gold. Don't let anyone change that."
      break
    case 8:
      screen2.querySelector('p').innerText =
        'Success comes to those who persevere.'
      break
    case 9:
      screen2.querySelector('p').innerText =
        'You are a person of great character and integrity. Keep up the good work!'
      break
    default:
      break
  }
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}
/*
function openCookie(e) {

} */
