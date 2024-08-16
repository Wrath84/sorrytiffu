document.getElementById('clickMeButton').addEventListener('click', function() {
    const button = document.getElementById('clickMeButton');
    const boxContainer = document.getElementById('boxContainer');

    // Hide the button
    button.style.display = 'none';

    // Show the box with animation
    boxContainer.style.display = 'flex';
});

document.getElementById('clickNowButton').addEventListener('click', function() {
    const boxContainer = document.getElementById('boxContainer');
    const imageBoxContainer = document.getElementById('imageBoxContainer');

    // Hide the first box
    boxContainer.style.display = 'none';

    // Show the image box
    imageBoxContainer.style.display = 'flex';
});

document.getElementById('clickMeAgainButton').addEventListener('click', function() {
    const imageBoxContainer = document.getElementById('imageBoxContainer');
    const emptyBoxContainer = document.getElementById('emptyBoxContainer');

    // Hide the image box
    imageBoxContainer.style.display = 'none';

    // Show the empty box
    emptyBoxContainer.style.display = 'flex';
});
