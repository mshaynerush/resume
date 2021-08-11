
document.addEventListener("DOMContentLoaded", function() {

    let cont = document.getElementById('contact');
    let contImg = document.getElementById('contact-img')
    let contactCard = document.getElementById("contactCard");
    let cls = document.getElementById("contactClose");
    cont.addEventListener('click', ShowCard);
    contImg.addEventListener('click', ShowCard);
    cls.addEventListener('click', HideCard);


    function ShowCard(){
        console.log("Click");
        contactCard.classList.add("show");
        contactCard.classList.remove("hidden");
    }

    function HideCard(){
        contactCard.classList.add("hidden");
        contactCard.classList.remove("show");
    }
});