const slider = () => {
    const arraySlides = [
        {
            title: "Анализ",
            text: "Для того, чтобы онлайн-магазин приносил выгоду, перед его запуском необходимо провести анализ других предложений рынка, оценить конкурентов и найти наиболее удобное решение. ",
            img: "1"
        },
        {
            title: "Визуальное решение",
            text: "Разработка дизайна ключевых страниц магазина – главная, каталог, информационные разделы, раздел корзины, товаров. Для нас главное – передать настроение бренда, сделать удобный для пользователя сайт. ",
            img: "2"
        },
        {
            title: "Техническая реализация",
            text: "После утверждения дизайн-макета наступает следующий этап – верстка. Это трудоемкий процесс: программисты должны все тщательно прописать, чтобы не допустить технических ошибок.",
            img: "3"
        },
        {
            title: "Наполнение контентом ",
            text: "Создание и публикация текстов, а также видео материала. Хороший контент и качественные фотографии привлекают больше посетителей и помогают клиенту лучше ознакомиться с ассортиментом. ",
            img: "4"
        },
        {
            title: "Тестирование",
            text: "Составление плана тестирования для определения ошибок. Проверка работы сайта и визуального восприятия для улучшения сайта. Также используются чек-листы для четкого определения ошибок и их устранения.",
            img: "5"
        }
    ]

    const sliderEl = document.querySelector(".slider")
    let offset = 0;
    
    
    arraySlides.forEach((slide, index) => {
        sliderEl.innerHTML += `
        <div class="box">
        <div class="text">
        <h3>${index + 1}. ${slide.title}</h3>
        <p>${slide.text}</p>
        </div>
        <div class="img"><img src="./img/slides/${slide.img}.svg"
        alt="slider-img"></div>
        </div>
        `
    })
    
    let box = document.querySelector(".box").scrollWidth + 29

    const prevBtn = document.querySelector(".left")
    const nextBtn = document.querySelector(".right")
    
    sliderEl.style.right = "0px"
    prevBtn.setAttribute("disabled", "")


    prevBtn.addEventListener("click", () => {
        nextBtn.removeAttribute("disabled")
        if (offset !== 0) {
            offset -= box
            sliderEl.style.right = offset + "px"
        }
        if (offset == 0) {
            prevBtn.setAttribute("disabled", "")
        }
    })

    nextBtn.addEventListener("click", () => {
        prevBtn.removeAttribute("disabled")
        if (offset !== box * (arraySlides.length - 1)) {
            offset += box
            sliderEl.style.right = offset + "px"
        }
        if (offset == box * (arraySlides.length - 1)) {
            nextBtn.setAttribute("disabled", "")
        }
    })

}

export default slider