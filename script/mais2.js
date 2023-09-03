// Select button
var button = document.getElementById('esconde');

// Click Event
button.addEventListener('click', function() {
    // Select card
    var card = document.querySelector('.section2');

    // Add/Remove Class Active
    card.classList.toggle('active');

    if (card.classList.contains('active')) {
        // Change button text if has class active
        return button.textContent = 'Read less';
    }
    
    // Change button text if hasn't class active
    button.textContent = 'Read more';
});