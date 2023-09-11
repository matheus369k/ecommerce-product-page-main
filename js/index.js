

function openMenu() {
    const menu = document.querySelector('#menu')
    const div = document.getElementById('div')
    const body = document.querySelector('#body')
 
    if (menu.classList.contains('menu') && true){
        menu.classList.remove('menu')
        div.classList.remove('div-menu-open')
        body.classList.remove('body-menu-open')
        
    }else{
        menu.classList.add('menu')
        div.classList.add('div-menu-open')
        body.classList.add('body-menu-open')

    }
}

function numberProduts(click) {
    const plus = document.querySelector('.plus')
    const minus = document.querySelector('.minus')
    const number = document.getElementById('number')
    let valueNumber = Number(number.value)

    number.style.border = "none"

     if (valueNumber < 1){
        number.style.border = "1px solid red"
        number.value = valueNumber + 1
        return
    }

    if (click === 'plus'){number.value = valueNumber + 1}
    
    if(click ==='minus'){number.value = valueNumber - 1}


    return valueNumber

}

function addCard(num) {

    const msgTotal = document.getElementById('total')
    const msgCont = document.getElementById('quantidade')
    const msgLocal = document.querySelector('#msg-comfimation')
    const msgcard = document.querySelector('#card')
    const displayhideBack = document.querySelector('.button-B')
    const displayhideNext = document.querySelector('.button-N')

    let contProdut = numberProduts()

    if (contProdut > 0) {
        var total = 125 * contProdut

        if (msgLocal.classList.contains('msg-off')) {

            msgLocal.classList.replace('msg-off','msg-comfimation')}
            msgcard.classList.replace('carrinho-off','carrinho')
            displayhideBack.classList.add('hide-off')
            displayhideNext.classList.add('hide-off')

            msgCont.innerHTML = `${contProdut}`
            msgTotal.innerHTML = `$${total}.00`
            msgcard.innerHTML = `${contProdut}`

    }
    if(num == '1'){
        window.location.reload()}
}


function remove() {

    const msgLocal = document.querySelector('#msg-comfimation')
    const msgcard = document.querySelector('#card')

    msgcard.classList.replace('carrinho','carrinho-off')
    msgLocal.classList.replace('msg-comfimation','msg-off')
}