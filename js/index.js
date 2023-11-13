const MainImg = document.getElementById("main_img")

MainImg.addEventListener("click", ()=>{
    const div = document.createElement("div")
    div.setAttribute("id", "Tumble_container_div")
    div.setAttribute("class", "tumble_container_div")
    const fother = document.querySelector("body")
    fother.appendChild(div)    
        
})
//img.setAttribute("src", `./images/image-product-${index+1}-thumbnail.jpg`)
