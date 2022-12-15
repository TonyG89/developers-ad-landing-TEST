const burger = ()=>{
    document.querySelector(".burger").addEventListener("click", () => {
        document.querySelector(".nav-list").classList.toggle("none")
    })
    
    document.querySelectorAll(".list-item").forEach(e => {
        e.addEventListener("click", () => {
            document.querySelector(".nav-list").classList.add("none")
        })
    })
}

export default burger