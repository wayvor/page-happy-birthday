const title = document.querySelector('.title')

'Te Tengo un Regalo'.split('').forEach((char) => {
  const span = document.createElement('span')
  if (char === ' ') {
    span.style.marginRight = '20px'
  } else {
    span.textContent = char
  }
  span.style.animationDelay = `${Math.random() * 3}s` // delay aleatorio entre 0 y 3 segundos
  title.appendChild(span)
})

const stars = document.querySelector('.stars')
for (let i = 0; i < 60; i++) {
  const star = document.createElement('span')
  const size = 1 + Math.random() * 2.5
  star.className = 'star'
  star.style.width = `${size}px`
  star.style.height = `${size}px`
  star.style.top = `${Math.random() * 100}%`
  star.style.left = `${Math.random() * 100}%`
  star.style.animationDuration = `${1.5 + Math.random() * 3}s`
  star.style.animationDelay = `${Math.random() * 3}s`
  stars.appendChild(star)
}

const hearts = document.querySelector('.hearts')
for (let i = 0; i < 18; i++) {
  const heart = document.createElement('span')
  heart.className = 'heart'
  heart.textContent = '♥'
  heart.style.left = `${Math.random() * 100}%`
  heart.style.fontSize = `${10 + Math.random() * 16}px`
  heart.style.animationDuration = `${9 + Math.random() * 8}s`
  heart.style.animationDelay = `${Math.random() * 10}s`
  hearts.appendChild(heart)
}
