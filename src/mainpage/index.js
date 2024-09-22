$(document).ready(function() {

    $('.upload-btn').hover(
        function() { $(this).css('background-color', '#ffd700'); },
        function() { $(this).css('background-color', 'white'); }
    );
    $('.sign-up').hover(
        function() { $(this).css('background-color', '#ffd700'); },
        function() { $(this).css('background-color', 'white'); }
    );

    $('.sign-up-1').hover(
        function() { $(this).css('background-color', '#ffd700'); },
        function() { $(this).css('background-color', 'white'); }
    );


    // for loading the upload page when we are in the main page

    $('#upload-1').click(function(event) 
{
    // Prevent the default action of the anchor tag (if it's an <a> tag)
    event.preventDefault();

    // Load the upload.html page
    window.location.href = '../upload/upload.html';
});


$('#about-1').click(function(event) 
{
    // Prevent the default action of the anchor tag (if it's an <a> tag)
    event.preventDefault();

    // Load the upload.html page
    window.location.href = '../about/about.html';
});





   
    // Show loader when the page starts loading
    $('#loader').show();

    // Simulate content loading
    setTimeout(function() {
        // Add fade-out class to the loader after content is loaded
        $('#loader').addClass('fade-out');

        // Optionally hide the loader completely after fade-out is complete
        setTimeout(function() {
            $('#loader').hide();
        }, 1000); // Match the duration of the fade-out transition
    }, 1000); // Adjust this delay as needed

});













// $('#home').click(function(event) 
// {
//     // Prevent the default action of the anchor tag (if it's an <a> tag)
//     event.preventDefault();

//     // Load the index.html page
//     window.location.href = 'index.html';
// });

// $('#upload').click(function() {
//     // Remove 'active' class from all elements
//     event.preventDefault();

//     // Load the index.html page
//     window.location.href = 'upload.html';

// });



// $('#about').click(function() {
//     // Remove 'active' class from all elements
//     $('#upload, #home').removeClass("active");

//     // Add 'active' class to the clicked element
//     $('#about').addClass("active");
// });


// Hover effect
$('.home, .upload, .about').hover(
    function() {
        $(this).addClass("active");
    }, 
    function() {
        $(this).removeClass("active");
    }
);



$('#home-1').click(function(event) {
    // Prevent the default action of the anchor tag (if it's an <a> tag)
    event.preventDefault();

    $(".dropdown-content-1").slideToggle();
});

document.addEventListener('DOMContentLoaded', () => {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    function toggleDropdown() {
        dropdownMenu.classList.toggle('show');
        dropdownToggle.setAttribute('aria-expanded', dropdownMenu.classList.contains('show'));
    }

    dropdownToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleDropdown();
    });

    document.addEventListener('click', (e) => {
        if (!dropdownMenu.contains(e.target) && !dropdownToggle.contains(e.target)) {
            dropdownMenu.classList.remove('show');
            dropdownToggle.setAttribute('aria-expanded', 'false');
        }
    });

    dropdownMenu.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            dropdownMenu.classList.remove('show');
            dropdownToggle.setAttribute('aria-expanded', 'false');
            dropdownToggle.focus();
        }
    });

    const menuItems = dropdownMenu.querySelectorAll('.dropdown-item');
    menuItems.forEach((item, index) => {
        item.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                menuItems[(index + 1) % menuItems.length].focus();
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                menuItems[(index - 1 + menuItems.length) % menuItems.length].focus();
            }
        });
    });
});