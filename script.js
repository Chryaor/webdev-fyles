$(document).ready(function () {
    $('.card-item').hover(
        function () {
            $(this).find('.card-caption').fadeIn();
        }, function () {
            $(this).find('.card-caption').fadeOut();
        }
    );
    setTimeout(function () {
        $('.container-5 .card').eq(1).trigger('click');
    }, 10);
});


document.querySelector('.card').classList.add('selected');

function changeImage(cardElement, imageUrl) {
    var mainImage = document.getElementById('mainImage');
    mainImage.src = imageUrl;

    // Remove selected class from all cards
    var cards = document.querySelectorAll('.card');
    cards.forEach(card => card.classList.remove('selected'));

    // Add selected class to the clicked card
    cardElement.classList.add('selected');
}

function clearForm() {
    var form = document.getElementById('formId');
    form.reset();
}

function hide(){
    $('#contactUsModal').modal('hide');
    setTimeout(hide,3000);
}

document.addEventListener("DOMContentLoaded", function() {
    const indicators = document.querySelectorAll(".card-indicator img");
    const row = document.querySelector(".container .row");

    // Initialize event listeners for each indicator
    indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", function() {
            // Set all indicators to default (assets/images/2.svg)
            indicators.forEach((img, idx) => {
                img.src = "assets/images/2.svg";
            });
            // Set the clicked indicator to selected (assets/images/1.svg)
            indicator.src = "assets/images/1.svg";
            // Move the row of cards to the left
            const offset = index * -100; // Adjust as needed based on your layout
            row.style.transform = `translateX(${offset}%)`;
        });
    });
});
