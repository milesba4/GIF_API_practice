
//global constants
const formEl = document.querySelector("#GIF-form")
const searchEL = document.querySelector("#GIF-search")
const inputEL = document.querySelector("#GIF-input")
const submitEL = document.querySelector("#GIF-submit")
const resultsEl = document.querySelector("#GIF-results")
const MY_API_KEY = "nOjzgnRK5wSxGHruvjd3HVSux7Zxk46H"
const limit = 10
const rating = 'g'


//Event listener for submission
formEl.addEventListener("submit",handleSubmitForm)


// functions
async function getResults(evt){
    evt.preventDefault()
    let input = inputEL.value
    console.log("inputEL=",inputEL)
    let urlAPI = 'http://api.giphy.com/v1/gifs/search?api_key='+ MY_API_KEY+'&q='+ input
    console.log(urlAPI)
    const response = await fetch(urlAPI)
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    console.log("evt=",evt)
    console.log("search=",input)

    // calling displayResults
    
    displayResults(jsonResponse)
}


function displayResults(gifData) {
    console.log("resultsEL=", resultsEl)
    for(let i = 0; i< gifData.data.length; i++){
        
        
        resultsEl.innerHTML += `

        <img src = ${gifData.data[i].images.original.url} width = 300 height= 300/>
        
        `     

    }
}


function handleSubmitForm(evt){
    resultsEl.innerHTML = " "
    getResults(evt)



}

    console.log("url=", gifData)
    console.log("url=", gifData.data[0])
    console.log("url=", gifData.data[0].images)
    console.log("url=", gifData.data[0].images.url)
    console.log("resultsEL=",resultsEL.innerHTML)


