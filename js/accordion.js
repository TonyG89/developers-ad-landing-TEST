const accordion = () => {
    const title = ["Дизайн портала", "Дизайн адаптивной мобильной версии", "Дизайн десктопной версии", "Пользовательский интерфейс", "Микро UX"]
    const description = ["Дизайн портала — это оформление контента, совокупность всех графических элементов на веб-странице. Основная задача дизайна — познакомить пользователя со страницей. Продуманный дизайн создает нужное впечатление о компании.", ["Мобильная версия сайта удобна для пользователя, потому что сильно упрощена по сравнению с обычной версией. Мобильная версия дает наиболее приоритетную информацию, а также позволяет совершать заказ/покупку с минимумом действий.", "При адаптивной версии вся структура сайта автоматически подстраивается под различную ширину экрана. Для того, чтобы получить рабочий продукт не нужно писать все с нуля — достаточно лишь подправить CSS и HTML.", "Один URL избавляет нас от ненужных редиректов, и надобности пользователю запоминать адрес мобильной версии."], "Десктопную версию сайта просматривают пользователи со стационарных компьютеров.Основная цель: посерфить, углубиться в детали, получить больше информации, сравнить, выбрать, прицениться.", "Цель дизайна пользовательского интерфейса - сделать взаимодействие максимально простым и эффективным, насколько это возможно, с точки зрения достижения целей пользователя.Хороший дизайн пользовательского интерфейса облегчает выполнение поставленной задачи, не привлекая к себе лишнего внимания. ", "Микро - анимация может изменить восприятие продукта, пользовательское поведение и повысить конверсию. Небольшие, преимущественно функциональные анимации поддерживают пользователя: обеспечивают визуальную обратную связь и более понятно отражают происходящие изменения. Микро - анимации способны многое объяснить без слов."]


    for (let i = 0; i < title.length; i++) {
        document.querySelector(".accordion").innerHTML += `<li class="block">
                                                                <button class="btn-accordion">
                                                                    <div class="title"> <div class="status"></div><p class="passive">${title[i]}</p>
                                                                        </div>
                                                                    <div class="arrow"></div>
                                                                </button>
                                                                <p class="description">${ typeof description[i] === "string" ? description[i] : description[i].join('<br/><br/>') }</p>
                                                            </li>`
    }

    const accordionBlocks = document.querySelectorAll(".btn-accordion")





    const descriptionBlocks = document.querySelectorAll("p.description")

    accordionBlocks.forEach(e => {
        e.addEventListener("click", () => {
            const description = e.nextElementSibling
            const status = e.querySelector(".status")
            const title = status.nextElementSibling
            const arrow = e.querySelector(".arrow")
            if (description.style.maxHeight) {
                description.style = null
                status.classList.toggle("acc-active")
                arrow.classList.remove("rotate")
                e.parentElement.style.paddingBottom=""
                title.classList.add("passive")
            } else {
                description.style.maxHeight = description.scrollHeight + "px"
                description.style.marginTop = "30px"
                e.parentElement.style.paddingBottom = "50px"
                status.classList.toggle("acc-active")
                arrow.classList.add("rotate")
                title.classList.remove("passive")
            }
        })
    })
}

export default accordion