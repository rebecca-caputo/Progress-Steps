const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++                         // increments currentActive by 1

    if(currentActive > circles.length) {
        currentActive = circles.length
      
    }


    update()

 })

 prev.addEventListener('click', () => {
    currentActive--                       // decrements currentActive by 1

    if(currentActive < 1) {
        currentActive = 1
    }

    update()
 })

 function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }

    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'             // fits the width of the progress bar for each circle index

    if (currentActive === 1) {
        prev.disabled = true
    } else if (currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
 }


