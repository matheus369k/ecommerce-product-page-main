

function openMenu() {

    const menu = document.querySelector('#menu')
    const div = document.getElementById('div')
    const body = document.querySelector('#body')
    const msgOff = document.getElementById('msg-comfimation')

    if ( menu.classList.contains('menu') && true ) {
        menu.classList.remove('menu')
        div.classList.remove('div-menu-open')
        body.classList.remove('body-menu-open')
        messageOff()
        
    } else {
        menu.classList.add('menu')
        div.classList.add('div-menu-open')
        body.classList.add('body-menu-open')
    }

    if ( msgOff.classList.contains('msg-comfimation') ) {
        msgOff.classList.replace('msg-comfimation','msg-off')
    }
    return
}

function numberProduts(click) {

    const number = document.getElementById('number')
    let valueNumber = Number(number.value)

    number.style.color = "black"

    if ( valueNumber < 1 ) {
        number.style.color = "red"
        number.value = 1
        return
    }

    if ( valueNumber > 99 ) {
        number.style.color = "red"
        number.value = 98
        return
    }

    if ( click === 'plus' ) {number.value = valueNumber + 1 }
    if ( click ==='minus' ) {number.value = valueNumber - 1 }


    return valueNumber

}

function addCard(num) {

    const msg = document.getElementById('message')
    const msgLocal = document.querySelector('#msg-comfimation')
    const msgcard = document.getElementById('card')
    const msgTotal = document.getElementById('total')


    let contProdut = numberProduts()

    if ( contProdut > 0 ) {
        var total = 125 * contProdut

        if ( msgLocal.classList.contains('msg-off') ) {
            msgLocal.classList.replace('msg-off','msg-comfimation')
        }
        msgcard.classList.replace('carrinho-off','carrinho')
        document.querySelector('.button-B').classList.add('hide-off')
        document.querySelector('.button-N').classList.add('hide-off')
        document.querySelector('.delete').style.display = 'block'
        document.getElementById('mini-img').style.display = 'block'
        document.querySelector('.button-checkout').style.display = 'block'
        document.getElementById('msg-vazio').innerHTML = ''

        msg.innerHTML = ` Fall Limited Edition Sneakers $125.00  X${contProdut}`
        msgTotal.innerHTML = `$${total}.00`
        msgcard.innerHTML = `${contProdut}`

    }
    if ( num == '1' ) {
        window.location.reload() 
    }
    return
}


function remove() {

    const msgcard = document.querySelector('#card')

    document.querySelector('.button-checkout').style.display = 'none'
    document.getElementById('total').innerHTML = ``
    document.getElementById('message').innerHTML = ``
    document.getElementById('msg-vazio').innerHTML = 'Your card is empty'
    document.querySelector('.delete').style.display = 'none'
    document.getElementById('mini-img').style.display = 'none'
    document.getElementById('number').value = 1

    msgcard.classList.replace('carrinho','carrinho-off')


    return
}

function slide(entevalue) {

    const slideImg = document.getElementById('slide-img')
    const slideImgView = document.getElementById('view-slide-img')
    const slideTumbleActive = document.querySelector('.tamble-select')
    const slideTumbleActiveView = document.querySelector('.view-tamble-select')

    if ( slideTumbleActive != null || slideTumbleActiveView != null ) {
        slideTumbleActive.classList.remove('tamble-select')
        slideTumbleActiveView.classList.remove('view-tamble-select')
    }

    if ( isNaN(entevalue) ) { 

        const local = slideImg.attributes.src.value
        var newLocal = Number( local[ Number( local.length ) - 5 ] )

        if ( entevalue === 'next' && newLocal < 4 ) { newLocal = newLocal + 1 }
        if ( entevalue === 'previous' && newLocal > 1 ) { newLocal = newLocal - 1 }

    } else {var newLocal = entevalue}

    document.getElementById(`${newLocal}`).classList.add('tamble-select')
    document.getElementById(`${newLocal + 4}`).classList.add('view-tamble-select')

    slideImg.src = `./images/image-product-${newLocal}.jpg`
    slideImgView.src = `./images/image-product-${newLocal}.jpg`


    return
}

function viewImagem() {
   
    if ( window.innerWidth >= 1024 ) {
        const closed = document.getElementById('div')
        const msgLocal = document.querySelector('#msg-comfimation')

        if (closed.classList.contains('div-menu-open')) {
            closed.classList.remove('div-menu-open')

        }else{
            closed.classList.add('div-menu-open')
            msgLocal.classList.replace('msg-comfimation','msg-off')
        }
    }
    return
}

function messageOff() {
    const msgoff = document.getElementById('msg-comfimation')
    const cart = document.getElementById('card')

    if ( msgoff.classList.contains('msg-off') ) {
        msgoff.classList.replace('msg-off','msg-comfimation')
    } else {
        msgoff.classList.replace('msg-comfimation','msg-off')
        document.querySelector('.button-B').classList.remove('hide-off')
        document.querySelector('.button-N').classList.remove('hide-off')
    }

    if ( cart.classList.contains('carrinho') ) {
        addCard( num )
    } else { 
        remove() 
    }
    return
}
