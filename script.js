// Handle window resize and reload if dimensions change significantly
let previousWidth = window.innerWidth;
let previousHeight = window.innerHeight;
let resizeTimeout;

function handleResize() {
    const currentWidth = window.innerWidth;
    const currentHeight = window.innerHeight;

    // Check if window size changed significantly (more than 50px)
    if (Math.abs(currentWidth - previousWidth) > 50 || 
        Math.abs(currentHeight - previousHeight) > 50) {
        
        // Update previous dimensions
        previousWidth = currentWidth;
        previousHeight = currentHeight;

        // Reload the page with a slight delay to avoid multiple reloads
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Only reload if we have iframe and its aspect ratio needs adjustment
            reloadIframe();
        }, 500); // Wait 500ms after resize stops before reloading
    }
}

function reloadIframe() {
    const iframe = document.querySelector('iframe');
    if (iframe) {
        // Reload iframe by setting src to itself
        const src = iframe.src;
        iframe.src = src;
    }
}

// Add resize listener
window.addEventListener('resize', handleResize);

// Initial fade-in animation
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    if (container) {
        container.style.opacity = '0';
        container.style.animation = 'fadeIn 0.6s ease-in forwards';
    }
});

// Ensure the layout adjusts properly on load
window.addEventListener('load', function() {
    // Trigger any necessary layout recalculations
    const dashboardWrapper = document.querySelector('.dashboard-wrapper');
    if (dashboardWrapper) {
        dashboardWrapper.style.minHeight = 'auto';
    }
});
