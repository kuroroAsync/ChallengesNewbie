const Btn_share = document.getElementById('card_share');
const activeShare = document.getElementById('card_share-active')
Btn_share.addEventListener('click', (e) => {
    Btn_share.classList.toggle('card__share-btn-active')
    activeShare.classList.toggle('card__share-active')
});