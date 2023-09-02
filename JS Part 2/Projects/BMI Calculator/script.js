const form = document.querySelector('form')
form.addEventListener('submit',
    (submit) => {
        submit.preventDefault()

        const height = parseFloat(document.querySelector('#height').value)
        const weight = parseFloat(document.querySelector("#weight").value)
        const result = document.querySelector('#results');
        const value = (weight/((height**2)/10000)).toFixed(2)

        // Here we can puts some checks

        result.innerHTML = `Your BMI is ${value}`
    }
)