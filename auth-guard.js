// auth-guard.js
// This script enforces authentication on protected pages.
// It checks if a user is logged in via localStorage and redirects to auth.html if not.

document.addEventListener('DOMContentLoaded', () => {
    // Check if the current user exists in localStorage
    const currentUser = localStorage.getItem('currentUser');
    
    // If no user is found, redirect to auth.html
    if (!currentUser) {
        // Store the attempted URL so we can maybe redirect back later (optional enhancement)
        sessionStorage.setItem('redirectUrl', window.location.href);
        
        // Redirect to authentication page
        window.location.href = 'auth.html';
    }
});
