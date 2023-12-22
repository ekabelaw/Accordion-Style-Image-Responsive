document.addEventListener('DOMContentLoaded', function () {
  // Wait for the DOM to be fully loaded

  // Get all the panel-container elements
  const panelContainers = document.querySelectorAll('.panel-container');

  // Add a click event listener to each panel-container
  panelContainers.forEach(function (panelContainer) {
    panelContainer.addEventListener('click', function () {
      // Toggle 'active' class for the clicked panel-container
      panelContainer.classList.toggle('active');

      // Close other panel-containers
      panelContainers.forEach(function (container) {
        if (container !== panelContainer) {
          container.classList.remove('active');
        }
      });
    });
  });
});


/* --- Alternatives Click Code */

/* const panelContainer = document.querySelectorAll('.panel-container');

panelContainer.forEach(item => {
  item.addEventListener('click', () => {
    document.querySelector('.active')?.classList.remove('active');
    item.classList.add('active');
  });
}); */

// Toggle Theme

const body = document.querySelector('body');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {

  body.classList.toggle('darkmode');

});