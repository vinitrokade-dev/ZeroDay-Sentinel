document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send this data to a server
        console.log('Contact form submitted:', { 
            firstName, 
            lastName, 
            email, 
            phone, 
            subject, 
            message 
        });
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
    
    // Phone number formatting
    const phoneInput = document.getElementById('phone');
    
    phoneInput.addEventListener('input', function(e) {
        // Format phone number as (XXX) XXX-XXXX
        const cleaned = ('' + e.target.value).replace(/\D/g, '');
        const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
        
        if (match) {
            e.target.value = !match[2] ? match[1] : 
                            '(' + match[1] + ') ' + match[2] + 
                            (match[3] ? '-' + match[3] : '');
        }
    });
});