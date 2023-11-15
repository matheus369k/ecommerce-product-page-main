//Codigo responsavel por mostrar a imagem do produto com foco ao clicar na imagem, removendo uma class responsavel, por da ( display:none; ) a div .
document.getElementById("main_img").addEventListener("click", ()=>{

    if (document.querySelector(".hider_div") && window.innerWidth > 768)
    {
        
        document.querySelector(".container_thumbnail_div_selected").classList.remove("hider_div")
    }

    
    // A função inicia na linha 384!
    CloseOpenBoxStore("closed")

    // A função inicia na linha 182!
    verification()

    return
})


// Tendo a função oposta do codigo anterio, sendo para adicionar a class e escondela ao clicar no X em cima no topo com a imagem em foco do produto.
document.getElementById("close").addEventListener("click", ()=> {

    document.querySelector(".container_thumbnail_div_selected").classList.add("hider_div")

    // A função inicia na linha 182!
    verification()

    return
})


// codigo responsavel por criar a interação com a imagem trocando ela de acordo, com a interação do cliente com a pagina
const imgMain = document.getElementById("main_img")

const divImgMain = document.querySelector(".product_img_selected")

const ulDivThumb = document.getElementById("ul_div_thumb")

const ulThumb = document.getElementById("ul_thumb")


document.querySelector(".container_next_pre").childNodes.forEach((btn, index) => {

    btn.addEventListener("click", () => {
        
        const NumberImgThumb = imgMain.attributes.src.value.split("-")[2][0]

        // A função inicia na linha 80!
        SwitchImgMain(index, NumberImgThumb)

        // A função inicia na linha 129!
        SwitchStyleSelected()
        
        // A função inicia na linha 384!
        CloseOpenBoxStore("closed")

        return
    })
})


// Codigo responsavel por temporizar o tempo para trocar automatiocamente a imagen do produto da pagina.
setInterval(() => {

    const NumberImgThumb = imgMain.attributes.src.value.split("-")[2][0]
    
    // A função inicia na linha 105!
    AutoSlide(NumberImgThumb)

    
    // A função inicia na linha 129!
    SwitchStyleSelected()

}, 10000)


// função responsavel por trocar a imagem em foco ao clicar no icone de seta que, apontam para direita ou para esquerda.
function SwitchImgMain(index, NumberImgThumb) {

    if (index === 1 && NumberImgThumb > 1) 
    {

        imgMain.src = `./images/image-product-${Number(NumberImgThumb) -1}.jpg`

        divImgMain.src = `./images/image-product-${Number(NumberImgThumb) - 1}.jpg`

    }
    else if (index === 3 && NumberImgThumb < 4) 
    {

        imgMain.src = `./images/image-product-${Number(NumberImgThumb) + 1}.jpg`

        divImgMain.src = `./images/image-product-${Number(NumberImgThumb) + 1}.jpg`

    }

    return
}


// Função responsavel por trocar as imagens da pagina de acordo com a atual, sempre segindo para frente.
function AutoSlide(NumberImgThumb) { 

    if (NumberImgThumb>3) 
    {

        imgMain.src = `./images/image-product-${1}.jpg`

        divImgMain.src = `./images/image-product-${1}.jpg`

    }
    else
    {

        imgMain.src = `./images/image-product-${Number(NumberImgThumb) + 1}.jpg`

        divImgMain.src = `./images/image-product-${Number(NumberImgThumb) + 1}.jpg`

    }

    return
}


// Função responsavel por adicionar o style de selecionado thumb que e uma pequena imagem abaixo representando a imagem atual 
function SwitchStyleSelected() {

    const removeSelected = document.querySelectorAll(".tumble_selected")

    removeSelected[0].classList.remove("tumble_selected")

    removeSelected[1].classList.remove("tumble_selected")

    var position = 0

    switch (Number(imgMain.attributes.src.value.split("-")[2][0])) 
    {

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

    return
}


// A função inicia na linha 182!
verification()


// função responsavel por verificar se a div para focar a imagem do produto esta ativa, enviado o caminha da imagem na focada ou focada, tornado a função na linha 202 funcional para mais de um container.
function verification() {

    if (!document.querySelector(".hider_div"))
    {

        AddStyleSwitchImgSeleceted(document.getElementById("ul_div_thumb"))

    } 
    else 
    {

        AddStyleSwitchImgSeleceted(document.getElementById("ul_thumb"))

    }

    return
}


// Função responsavel por mudar a imagem principal ao clicar na imagem abaxio que representa a imagem que vai aparecer, tanta na imagem focada ou não.
function AddStyleSwitchImgSeleceted(verification) {

    verification.childNodes.forEach((thumbImg, index) => {

        thumbImg.addEventListener("click", () => {

            const removeSelected = document.querySelectorAll(".tumble_selected")

            removeSelected[0].classList.remove("tumble_selected")

            removeSelected[1].classList.remove("tumble_selected")


            ulDivThumb.childNodes[index].classList.add("tumble_selected")

            ulThumb.getElementById("ul_thumb").childNodes[index].classList.add("tumble_selected")

            imgMain.src = `./images/image-product-${thumbImg.childNodes[1].attributes.src.value.split("-")[2][0]}.jpg`

            divImgMain.src = `./images/image-product-${thumbImg.childNodes[1].attributes.src.value.split("-")[2][0]}.jpg`

            // A função inicia na linha 384!
            CloseOpenBoxStore("closed")

            return
        })
    })
}


// Codigo responsavel por criar um laço entre os botões reponsavel por alterar a quantidade de produtos escolhidos.
document.querySelectorAll(".minus_plus").forEach((btn, index) => {

    // A função inicia na linha 384!
    CloseOpenBoxStore("closed")

    // A função inicia na linha 246!
    AddRemoverValueInput(btn, index)

    return
})


// function responsavel por adicionar ou remorer a quatidade de produtos a serem comprados.
function AddRemoverValueInput(btn, index) {

    const input = document.getElementById("input")

    btn.addEventListener("click", () => {

        if (index === 1) 
        {

            input.value = Number(input.value) + 1

        }
        else if (input.value > 1) 
        {

            input.value = Number(input.value) - 1

        }

        return
    })
}


// Codigo responsavel por detectar o clique no icone de carrinho de compras
document.querySelector("#icon_cart").addEventListener("click", ()=>{

    // A função inicia na linha 384!
    CloseOpenBoxStore()

    return
})


// Codigo responsavel por adicinar o produto ao carrinho criando uma li a cada item ou conjunto comprado(s). 
document.getElementById("submitbtn").addEventListener("click", ()=>{
    
    const input = document.getElementById("input").value

    const fother = document.getElementById("cart")

    const idelete = fother.childNodes.length


    const li = document.createElement("li")

    li.setAttribute("class", "li")

    li.setAttribute("id", `deleta-${idelete}`)

    fother.appendChild(li)

    
    const img = document.createElement("img")

    img.setAttribute("class", "option_img")

    img.setAttribute("src", "./images/image-product-1-thumbnail.jpg")



    const p = document.createElement("p")

    const textP = document.createTextNode(`Fall Limited Edition Sneakers $125.00 x${input}`)


    const span = document.createElement("span")

    const textSpan = document.createTextNode(` $${Number(input) * 125}.00`)


    p.appendChild(textP)

    span.appendChild(textSpan)


    const i = document.createElement("i")

    i.setAttribute("class", "delete")


    li.appendChild(i)

    p.appendChild(span)

    li.appendChild(p)

    li.appendChild(img)


    // A função inicia na linha 351!
    countproductboy(fother)


    // A função inicia na linha 384!
    CloseOpenBoxStore("open")

    // A função inicia na linha 404!
    deleteItem(fother)

    return
})


// Função responsavel por adicionar icone vermelho acima do carrinho com a quantidade de produtos ou conjunto de produtos comprados.
function countproductboy(fother) {

    const fotherCartStore = document.querySelector("#cart_boy_container")
    
    if (!document.querySelector(".icon_cart_buy"))
    {

        const span = document.createElement("span")

        span.setAttribute("class", "icon_cart_buy")

        fotherCartStore.insertBefore(span, document.getElementById("icon_cart"))

    }

    if ((fother.childNodes.length) > 0) 
    {

        document.querySelector(".icon_cart_buy").innerHTML = `${(fother.childNodes.length)}`

    }
    else
    {

        fotherCartStore.removeChild(document.querySelector(".icon_cart_buy"))
        
        // A função inicia na linha 384!
        CloseOpenBoxStore("closed")

    }

    return
}


// Funçõa responsavel por fexar a aba do carrinho ao clicar em outra função da pagina que não tenha relação direta com ela. 
function CloseOpenBoxStore(open="") {

    if ((document.querySelector(".cart_container").classList.contains("hider_cart") || open==="open") && open!=="closed" ) 
    {

        document.querySelector(".cart_container").classList.remove("hider_cart")

    }
    else 
    {

        document.querySelector(".cart_container").classList.add("hider_cart")

    }

    return
}


// Função responsavel por deletar items ou conjunto adicionados ao carrinho.
function deleteItem(fother) {

    document.querySelectorAll(".delete").forEach(deleta => {

        deleta.addEventListener("click", () => {

            const idDeletar = deleta.parentNode.attributes.id.value

            if (document.getElementById(`${idDeletar}`))
            {

                document.getElementById("cart").removeChild(document.getElementById(`${idDeletar}`))

                // A função inicia na linha 350!
                countproductboy(fother)

            }

            return
        })
    })
}


const menubtn = document.getElementById("menubtn")

menubtn.addEventListener("click", ()=>{
    const srcMenu = menubtn.attributes.src.value.split("-")
    const nav = document.querySelector(".menu")
    const divMenu = document.createElement("div")
    divMenu.setAttribute("class", "menu_container")
    const fotherMenu = menubtn.parentNode

    console.log(srcMenu[1][0]);

    if (srcMenu[1][0] === "m") 
    {
        fotherMenu.appendChild(divMenu)

        nav.classList.add("open_display")

        menubtn.src=`${srcMenu[0]}-close.svg`
    }
    else
    {
        menubtn.src=`${srcMenu[0]}-menu.svg`

        nav.classList.remove("open_display")

        fotherMenu.removeChild(document.querySelector(".menu_container"))
    }
})
