document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle('animated', entry.isIntersecting)
        })
    })
    const hiddenElements = document.querySelectorAll(".transition")
    hiddenElements.forEach((el) => observer.observe(el))

    const images_path = "/img/logo/svg/bg/"
    const bg = ["black", "blue", "gray", "green", "pink", "purple", "red", "white"]

    const logo = document.querySelector(".logo")
    logo.addEventListener("click", () => {
        const random_bg = bg[Math.floor(Math.random() * bg.length)]
        const random_n = Math.floor(Math.random() * 7) + 1
        logo.src = images_path + random_bg + "/" + random_n + ".svg"
        eye.className = `btn btn-light btn-sm eye bg-mnws-${random_bg}`
    })

    const eye = document.querySelector(".eye")
    let temp_face = ""
    eye.addEventListener("mouseover", () => {
        temp_face = logo.src
        color = Array.from(logo.src.matchAll(/(\w*)\/(?:\d{1,2}|logo)\.svg/g), m => m[1])
        logo.src = images_path + color + "/eye.svg"
    })
    eye.addEventListener("mouseout", () => {
        logo.src = temp_face
    })
})

