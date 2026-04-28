function showSection(sectionID) {
    // Select all sections to hide them 
    const sections = document.querySelectorAll('.content, .homecontent');
    
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the active section 
    const activeSection = document.getElementById(sectionID);
    if (activeSection) {
        activeSection.style.display = 'block';
    }
}

// Requirement: Clear Fields button functionality [cite: 16]
document.getElementById('clrbtn').addEventListener('click', function() {
    const inputs = document.querySelectorAll('.field');
    inputs.forEach(input => input.value = '');
});

//for the insertion success
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('status') === 'success') {
        const toast = document.getElementById('success-toast');
        toast.classList.remove('toast-hidden');
        
        // Hide it automatically after 3 seconds
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => toast.classList.add('toast-hidden'), 500);
        }, 3000);

        // Clean the URL
        window.history.replaceState({}, document.title, window.location.pathname);
    }
}