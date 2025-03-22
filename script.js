document.addEventListener("DOMContentLoaded", function () {
    
    // Fetches the description parameters
    const [buttons, infoBlock, infoTitle, infoTag, infoBox, StartBar, BodyBar, EndBar] = [
        document.querySelectorAll('btn'),
        ...['infoBlock', 'infoTitle', 'infoTag', 'infoBox', 'infoBar', 'BarStart', 'BarBody', 'BarEnd']
            .map(id => document.getElementById(id))
    ];

    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            // Initializes the descriptions upon hovering on the button
            [infoTitle, infoTag, infoBlock].forEach((el, idx) => el.textContent = button.getAttribute(['title', 'tag', 'desc'][idx]));
            [infoTitle, infoTag, infoBlock, infoBox, StartBar, BodyBar, EndBar].forEach(el => el.style.display = 'block');
        });

        button.addEventListener('mouseleave', () => {
            // Hides all the description elements when the mouse leaves
            [infoTitle, infoTag, infoBlock, infoBox, StartBar, BodyBar, EndBar].forEach(el => el.style.display = 'none');
        });
    });
    
    
    
    let time = document.getElementById('time');
    setInterval(() =>{
        let d = new Date();
        time.innerHTML = d.toLocaleTimeString();
    },1000)

});


