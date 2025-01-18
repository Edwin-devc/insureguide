document.getElementById('quoteForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    
    try {
        // Send data to backend
        const response = await fetch('/api/quotes', {
            method: 'POST',
            body: formData
        });
        
        const data = await response.json();
        
        // Show success message
        alert('Thank you! Quotes will be sent to your email and WhatsApp shortly.');
        
        // Send WhatsApp message
        sendWhatsAppMessage(formData.get('phone'));
        
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
});

function sendWhatsAppMessage(phone) {
    // Implementation for WhatsApp API integration
}
