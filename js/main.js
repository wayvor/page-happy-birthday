function createHearts(count) {
  const container = document.querySelector('.hearts')

  for (let i = 0; i < count; i++) {
    const heart = document.createElement('span')
    heart.className = 'heart'
    heart.textContent = '♥'
    heart.style.left = `${Math.random() * 100}%`
    heart.style.fontSize = `${12 + Math.random() * 18}px`
    heart.style.animationDuration = `${8 + Math.random() * 8}s`
    heart.style.animationDelay = `${Math.random() * 10}s`
    container.appendChild(heart)
  }
}

onload = () => {
  setTimeout(() => {
    document.body.classList.remove('not-loaded')

    const titles = 'Feliz Cumpleaños'.split('')
    const titleElement = document.getElementById('title')
    let index = 0

    function appendTitle() {
      if (index < titles.length) {
        titleElement.textContent += titles[index]
        index++
        setTimeout(appendTitle, 300) // 300ms entre letras
      } else {
        document.body.classList.add('title-done')
      }
    }

    appendTitle()
    createHearts(24)
  }, 1000)
}
