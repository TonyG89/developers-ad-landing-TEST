const cards = () => {
    const forWhom = ["для оптовых покупок", "для парикмахеров", "для кондитеров", "для флористов", "для визажистов", "для художников"]

    const cardListEl = document.querySelector(".cards-list")

    const arrows = document.querySelector("#portfolio .arrows")

    const prevExample = document.querySelector("#portfolio .left")
    const nextExample = document.querySelector("#portfolio .right")

    const render = (elem, pic = 1) => {
        elem.forEach((card, index) => {
            cardListEl.innerHTML += `
        <li class="card-item" style="background: url(./img/cards/${index + pic}.png) no-repeat">
        <div class="card-content">    
        <h3>Онлайн-магазин</h3>
        <p class="text">${card}</p>
        </div>
        </li>
        `
        })
    }

    if (document.body.clientWidth < 1195) {
        arrows.classList.remove("none")
        const forWhomLeft = forWhom.slice(0, Math.ceil(forWhom.length / 2))
        const forWhomRight = forWhom.slice(Math.ceil(forWhom.length / 2))

        render(forWhomLeft)

        prevExample.addEventListener("click", () => {
            nextExample.removeAttribute("disabled")
            prevExample.setAttribute("disabled", "")
            cardListEl.innerHTML = ''
            render(forWhomLeft)
        })

        nextExample.addEventListener("click", () => {
            prevExample.removeAttribute("disabled")
            nextExample.setAttribute("disabled", "")
            cardListEl.innerHTML = ''
            render(forWhomRight, Math.ceil(forWhom.length / 2) + 1)
        })

    } else {
        render(forWhom)
    }

}

export default cards