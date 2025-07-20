let menuOpen = document.querySelector('.nav i')
let close = document.querySelector('.menu i')
let tl = gsap.timeline()

tl.to('.menu', {
    right: 0,
    duration: 0.5,
})

tl.from('.menu h3', {
    x: 150,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3,
})
tl.from('.menu i', {
    opacity: 0,
})

tl.pause()


menuOpen.addEventListener('click', () => {
    tl.play()
})

close.addEventListener('click', () => {
    tl.reverse()
})
