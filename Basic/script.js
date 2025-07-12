gsap.from('#box', {
    x: 500,
    duration: 1,
    delay:1,
    rotate: 300,
    scale: 0.1,
    borderRadius: "50%",
    backgroundColor: "blue",
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    opacity: 0.5,
})

gsap.from('#box2', {
    x: 500,
    y: 300,
    rotate: 360,
    scale: 0.1,
    duration: 1,
    delay:1,
    backgroundColor: "red",
    borderRadius: "50%",
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    opacity: 0.5,
    stagger: 0.5, 
})

gsap.from('h1', {
    y:30,
    duration: 1,
    delay: 1,
    opacity: 0,
    stagger: 0.5,
});