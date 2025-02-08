//your JS code here. If required.

// script.js
document.addEventListener('DOMContentLoaded', () => {
  const colorSelect = document.getElementById('colorSelect');
  const removeButton = document.querySelector('input[type="button"]'); // Select the button

  removeButton.addEventListener('click', () => {
    const selectedIndex = colorSelect.selectedIndex;

    if (selectedIndex !== -1) { // Check if an item is selected
      colorSelect.remove(selectedIndex);
    }
  });
});