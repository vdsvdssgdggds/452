document.addEventListener('DOMContentLoaded', function() {
    var triggerButton = document.getElementById('triggerText');
    var description = document.getElementById('description');
    var isAnimating = true; // Initial animation state is playing

    triggerButton.addEventListener('click', function() {
        var isVisible = description.classList.contains('visible');
        if (isVisible) {
            description.classList.remove('visible');
            setTimeout(function() { 
                description.classList.add('hidden');
            }, 500);
        } else {
            description.classList.remove('hidden');
            setTimeout(function() { 
                description.classList.add('visible');
            }, 10);
        }

        if (isAnimating) {
            triggerButton.style.animationPlayState = 'paused';  // Stop Animation
            isAnimating = false;
        } else {
            triggerButton.style.animationPlayState = 'running'; // play an animation
            isAnimating = true;
        }
    });
});