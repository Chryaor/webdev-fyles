$(document).ready(function() {
    $('.card-item').hover(
        function() {
            $(this).find('.card-caption').fadeIn();
        }, function() {
            $(this).find('.card-caption').fadeOut();
        }
    );
    setTimeout(function() {
        $('.container-5 .card').eq(1).trigger('click');
    }, 10);
});


document.querySelector('.card').classList.add('selected');

function changeImage(cardElement, imageUrl) {
  // Change the main image
  var mainImage = document.getElementById('mainImage');
  mainImage.src = imageUrl;
  
  // Remove 'selected' class from all cards
  var cards = document.querySelectorAll('.card');
  cards.forEach(card => card.classList.remove('selected'));
  
  // Add 'selected' class to the clicked card
  cardElement.classList.add('selected');
}

function clearForm() {
    var form = document.getElementById('formId');
    form.reset();
    
  }