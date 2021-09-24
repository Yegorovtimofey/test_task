let screenWidth = window.screen.width
console.log(screenWidth)

if (screenWidth < 768) {


    let cards_tag = document.querySelectorAll('div.bestsellers__card')
    for (let card  of cards_tag) {
        let menuDiv = document.createElement('button')
        menuDiv.className = 'mob__menu-img'
        let likeDiv = document.createElement('button')
        likeDiv.className = 'mob__like-img'
        card.prepend(menuDiv, likeDiv)
    }



    let menuButton = document.querySelectorAll('button.menu__button')
    for (let menu of menuButton) {
        menu.remove()
    }

    let likeButton = document.querySelectorAll('button.card__like-button')
    for (let like of likeButton) {
        like.remove()
    }


}

// удалить классы .card__like-button .menu__button из card__to-cart__container
// и добавить их в card__img , там отпозиционировать их absolute.

