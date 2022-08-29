const adviceId = document.querySelector(".adviceNumber")
const adviceParagraph = document.querySelector(".adviceText")

const updateUI = (adviceIDNumber,advice) =>{
    adviceId.innerHTML= `
    ADVICE #${adviceIDNumber}
    `

    adviceParagraph.innerHTML = `"${advice}"`  

}

const getAdvice = () =>{
fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then(data => updateUI(data.slip.id,data.slip.advice));}

  getAdvice()

