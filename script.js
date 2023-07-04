// Adding an event listener that triggers when the HTML document is fully loaded
document.addEventListener('DOMContentLoaded', (event) => {

    // Selecting the sky div from the DOM
    let sky = document.querySelector('.sky');

    // Function to create a new div (representing a star) of a given size
    function createDiv(size) {
      
      // Creating a new div and adding the 'circle' class
      let circle = document.createElement('div');
      circle.classList.add('circle');
      
      // Creating a random number between 1 and 5
      let randRange5 = Math.floor(Math.random() * 5) + 1;
      
      // Adding the class blink_n (where n is a random number between 1 and 5) to the div
      circle.classList.add(`blink_${randRange5}`);
      
      // Setting the div's width and height to a random value within the specified range
      let widthAndHeight = random(size, 'px');
      circle.style.height = circle.style.width = widthAndHeight;
      
      // Setting the div's position to a random point within the window
      circle.style.left = random(window.innerWidth, 'px');
      circle.style.top = random(window.innerHeight, 'px');
      
      // Appending the div to the sky div
      sky.appendChild(circle);
    }

    // Function to paint stars
    function paintStars(stars, size) {

      // Removing all existing stars
      while (sky.firstChild) {
        sky.removeChild(sky.firstChild);
      }

      // Creating the specified number of stars
      for (let i = 0; i < stars; i++) {
        createDiv(size);
      }
    }

    // Function to generate a random number within a specified range
    function random(range, unit) {
      let randNum = Math.floor(Math.random() * range) + 1;
      return `${randNum}${unit}`;
    }

    // Function to handle window resize events
    function handleResize() {
        // Recreating stars every time the window is resized
        paintStars(1000, 1);
    }

    // Adding an event listener to the window resize event
    window.addEventListener('resize', handleResize);

    // Initially painting the stars when the page loads
    handleResize();
});