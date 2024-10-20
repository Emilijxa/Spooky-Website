// JavaScript for spooky sound and ghost animation
document.addEventListener('DOMContentLoaded', function() {
    const spookySound = document.getElementById('spooky-sound');
    const ghost1 = document.getElementById('ghost1');
    const ghost2 = document.getElementById('ghost2');
  
    // Play spooky sound when hovering over ghosts
    ghost1.addEventListener('mouseenter', () => {
      spookySound.play();
      spookySound.volume = 0.5; // Adjust the volume if needed
    });
  
    ghost2.addEventListener('mouseenter', () => {
      spookySound.play();
      spookySound.volume = 0.5;
    });
  
    // Stop sound when mouse leaves
    ghost1.addEventListener('mouseleave', () => {
      spookySound.pause();
      spookySound.currentTime = 0; // Reset to start for next hover
    });
  
    ghost2.addEventListener('mouseleave', () => {
      spookySound.pause();
      spookySound.currentTime = 0;
    });
  
    // Animate ghosts left and right
    function animateGhosts() {
      let ghost1Direction = 1;
      let ghost2Direction = -1;
      
      setInterval(() => {
        let ghost1Left = parseInt(window.getComputedStyle(ghost1).left);
        let ghost2Right = parseInt(window.getComputedStyle(ghost2).right);
  
        ghost1.style.left = `${ghost1Left + ghost1Direction * 1}px`;
        ghost2.style.right = `${ghost2Right + ghost2Direction * 1}px`;
  
        // Change direction when reaching the edge
        if (ghost1Left > window.innerWidth - 150 || ghost1Left < 10) {
          ghost1Direction *= -1;
        }
        if (ghost2Right > window.innerWidth - 150 || ghost2Right < 10) {
          ghost2Direction *= -1;
        }
      }, 10);
    }
  
    animateGhosts();
  });
  