const slider = document.querySelector('.main__slider')
const rev1 = document.querySelector('.rev1')
const rev2 = document.querySelector('.rev2')
const rev3 = document.querySelector('.rev3')
let i = 0
rev1.classList.remove('rev1')

slider.addEventListener('click', () => {
    i++
    if (i >= 3) {
        i = 0
    }

    if (i == 0) {
        rev1.classList.remove('rev1')
        rev3.classList.add('rev3')
        slider.classList.remove('next2')
        slider.classList.remove('next1')
    } else if (i == 1) {
        rev1.classList.add('rev1')
        rev2.classList.remove('rev2')
        slider.classList.add('next1')
        slider.classList.remove('next2')
    } else {
        rev3.classList.remove('rev3')
        rev2.classList.add('rev2')
        slider.classList.add('next2')
        slider.classList.remove('next1')
    }
})