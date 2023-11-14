document.getElementById("main_img").addEventListener("click", ()=>{
    if (document.querySelector(".hider_div") && window.innerWidth > 768) 
    {
        document.querySelector(".container_thumbnail_div_selected").classList.remove("hider_div")
    }
    verification()
})

document.getElementById("close").addEventListener("click", ()=> {
    document.querySelector(".container_thumbnail_div_selected").classList.add("hider_div")
    verification()
})

document.querySelector(".container_next_pre").childNodes.forEach((btn, index) => {
    btn.addEventListener("click", () => {

        const imgMain = document.getElementById("main_img")
        const divImgMain = document.querySelector(".product_img_selected")
        const NumberImgThumb = imgMain.attributes.src.value[23]
        const ulDivThumb = document.getElementById("ul_div_thumb")
        const ulThumb = document.getElementById("ul_thumb")


        SwitchImgMain(index, NumberImgThumb, imgMain, divImgMain)

        SwitchStyleSelected(imgMain, ulDivThumb, ulThumb)

    })
})

function SwitchImgMain(index, NumberImgThumb, imgMain, divImgMain) {
    if (index === 1 && NumberImgThumb > 1) {
        imgMain.src = `./images/image-product-${Number(NumberImgThumb) - 1}.jpg`
        divImgMain.src = `./images/image-product-${Number(NumberImgThumb) - 1}.jpg`
    }
    else if (index === 3 && NumberImgThumb < 4) {
        imgMain.src = `./images/image-product-${Number(NumberImgThumb) + 1}.jpg`
        divImgMain.src = `./images/image-product-${Number(NumberImgThumb) + 1}.jpg`
    }
}

function SwitchStyleSelected(imgMain, ulDivThumb, ulThumb) {
    const removeSelected = document.querySelectorAll(".tumble_selected")

    removeSelected[0].classList.remove("tumble_selected")
    removeSelected[1].classList.remove("tumble_selected")

    var position = 0
    switch (Number(imgMain.attributes.src.value[23])) {
        case 1:
            position = 1
            break
        case 2:
            position = 3
            break
        case 3:
            position = 5
            break
        case 4:
            position = 7
            break
    }

    ulDivThumb.childNodes[position].classList.add("tumble_selected")
    ulThumb.childNodes[position].classList.add("tumble_selected")
}

function verification() {
    if (!document.querySelector(".hider_div")) 
    {
        AddStyleSwitchImgSeleceted(document.getElementById("ul_div_thumb"))
    } 
    else 
    {
        AddStyleSwitchImgSeleceted(document.getElementById("ul_thumb"))
    }
}

function AddStyleSwitchImgSeleceted(verification) {
    verification.childNodes.forEach((thumbImg, index) => {
        thumbImg.addEventListener("click", () => {
            const imgMain = document.getElementById("main_img")
            const divImgMain = document.querySelector(".product_img_selected")
            const removeSelected = document.querySelectorAll(".tumble_selected")

            removeSelected[0].classList.remove("tumble_selected")
            removeSelected[1].classList.remove("tumble_selected")


            document.getElementById("ul_div_thumb").childNodes[index].classList.add("tumble_selected")
            document.getElementById("ul_thumb").childNodes[index].classList.add("tumble_selected")
            imgMain.src = `./images/image-product-${thumbImg.childNodes[1].src[43]}.jpg`
            divImgMain.src = `./images/image-product-${thumbImg.childNodes[1].src[43]}.jpg`
        })
    })
}

document.querySelectorAll(".minus_plus").forEach((btn, index) => {

    AddRemoverValueInput(btn, index)
})

function AddRemoverValueInput(btn, index) {
    const input = document.getElementById("input")

    btn.addEventListener("click", () => {

        if (index === 1) {
            input.value = Number(input.value) + 1
        }

        else if (input.value > 1) 
        {
            input.value = Number(input.value) - 1
        }
    })
}

document.querySelector("#icon_cart").addEventListener("click", ()=>{
    if (document.querySelector(".card_container").classList.contains("hider_cart")) 
    {
        document.querySelector(".card_container").classList.remove("hider_cart")
    }
    else 
    {
        document.querySelector(".card_container").classList.add("hider_cart")
    }
})

//function at desenveleped....
document.getElementById("submitbtn").addEventListener("click", ()=>{
    
    const input = document.getElementById("input").value

    const option = document.createElement("option")
    option.setAttribute("class", "option")
    const fother = document.getElementById("cart")
    fother.appendChild(option)

    
    const img = document.createElement("img")
    img.setAttribute("class", "option_img")
    img.setAttribute("src", "./images/image-product-1-thumbnail.jpg")

    const p = document.createElement("p")
    const text = document.createTextNode(`Fall Limited Edition Sneakers $125.00 x ${input} = ${Number(input) * 125}.00`)
    p.appendChild(text)

    const i = document.createElement("i")
    i.setAttribute("class", "delete")

    //option.appendChild(i)
    //option.appendChild(p)
    option.appendChild(img)
})
