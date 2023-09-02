const buttons = document.querySelectorAll('.button') // . is used to select classes
const body = document.querySelector("body")

buttons.forEach(
    (button) => {
        console.log(button)
        button.addEventListener('click', 
        (info) => {
            console.log(info)
            console.log(info.target)

            if(info.target.id === 'grey') {
                body.style.backgroundColor = info.target.id;
            }
            else if(info.target.id === 'white') {
                body.style.backgroundColor = info.target.id;
            }
            else if(info.target.id === 'blue') {
                body.style.backgroundColor = info.target.id;
            }
            else {
                body.style.backgroundColor = info.target.id;
            }
            
        })
    }
);