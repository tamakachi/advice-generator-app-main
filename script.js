const adviceId = document.querySelector(".adviceNumber")
const adviceParagraph = document.querySelector(".adviceText")
const roundDiv = document.querySelector(".round")

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

roundDiv.addEventListener("click",()=>{
    getAdvice()
})