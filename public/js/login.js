const loginHandler = async (event) => {
    event.preventDefault();

    // Collect values from login form
    const email = document.querySelector('#log-in-email').value.trim();
    const password = document.querySelector('#log-in-password').value.trim();

    if (email && password) {
        // Send POST request
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json '},
        });

        if (response.ok) {
            // If successful, redirect to the dashboard
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};