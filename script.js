document.addEventListener("DOMContentLoaded", function () {
    
    // Fetches the description parmeters
    const buttons = document.querySelectorAll('btn');       
    const infoBlock = document.getElementById('infoBlock'); 
    const infoTitle = document.getElementById('infoTitle'); 
    const infoTag = document.getElementById('infoTag');
    const infoBar = document.getElementById('infoBar');
    const infoBox = document.getElementById('infoBox');



    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            infoTitle.textContent = button.getAttribute('title');
            infoTag.textContent = button.getAttribute('tag');
            infoBlock.textContent = button.getAttribute('desc');
    
            // Initalises the descriptions upon hovering on the button
            infoTitle.style.display = 'block';
            infoTag.style.display = 'block';
            infoBlock.style.display = 'block';
            infoBar.style.display = 'block';
            infoBox.style.display = 'block';
        });

        button.addEventListener('mouseleave', () => {
            infoBlock.style.display = 'none';
            infoTitle.style.display = 'none';
            infoTag.style.display = 'none';
            infoBar.style.display = 'none';
            infoBox.style.display = 'none';
        });
    });
});