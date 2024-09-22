$(document).ready(function() {
        $('.submit-button').hover(
            function() { $(this).css('background-color', 'white'); },
            function() { $(this).css('background-color', '#ffa45c'); }
        );

        $('.toggle-button').hover(
            function() { $(this).css('background-color', '#ffd700'); },
            function() { $(this).css('background-color', 'white'); }
        );

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

        $('#loginForm').submit(function(event) {
            event.preventDefault(); // Prevent form from submitting
        
            // Get user input values
            const loginName = $('#loginName').val();
            const loginPassword = $('#loginPassword').val(); // Corrected the selector
        
            // Check if the input matches the predefined ID and password
            if (loginName === 'anubhab370@gmail.com' && loginPassword === 'Ani@123') {
                // Redirect to index.html if login is successful
                window.location.href = './src/mainpage/index.html';
            } else {
                // Show error message if login fails
                if (!$('#loginError').length) {
                    // Add error message only if it doesn't already exist
                    $('<p id="loginError" style="color: red;">Invalid ID or password.</p>').insertBefore('#loginForm .form-footer');
                }
            }
        });



        const $loginForm = $('#loginForm');
        const $signupForm = $('#signupForm');
        const $toggleButton = $('#toggleButton');
        const $showSignup = $('#showSignup');
        const $showLogin = $('#showLogin');
    
        function showSignupForm() {
            $loginForm.addClass('hidden');
            $signupForm.removeClass('hidden');
            $toggleButton.text('← Log in');
        }
    
        function showLoginForm() {
            $signupForm.addClass('hidden');
            $loginForm.removeClass('hidden');
            $toggleButton.text('Sign up →');
        }
    
        $toggleButton.on('click', function() {
            if ($loginForm.hasClass('hidden')) {
                showLoginForm();
            } else {
                showSignupForm();
            }
        });
    
        $showSignup.on('click', function(e) {
            e.preventDefault();
            showSignupForm();
        });
    
        $showLogin.on('click', function(e) {
            e.preventDefault();
            showLoginForm();
        });
    });

