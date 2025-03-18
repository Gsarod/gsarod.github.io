document.addEventListener("DOMContentLoaded", function () {
    
    // Fetches the description parmeters
    const buttons = document.querySelectorAll('btn');       
    const infoBlock = document.getElementById('infoBlock'); 
    const infoTitle = document.getElementById('infoTitle'); 
    const infoTag = document.getElementById('infoTag');

    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            infoTitle.textContent = button.getAttribute('data-title');
            infoTag.textContent = button.getAttribute('data-tag');
            infoBlock.textContent = button.getAttribute('data-info');
    
            // Initalises the descriptions upon hovering on the button
            infoTitle.style.display = 'block';
            infoTag.style.display = 'block';
            infoBlock.style.display = 'block';
        });

            //Closes the description
        button.addEventListener('mouseleave', () => {
            infoBlock.style.display = 'none';
            infoTitle.style.display = 'none';
            infoTag.style.display = 'none';
        });
    });
});