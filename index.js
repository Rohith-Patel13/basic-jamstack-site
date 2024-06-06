const retrieveBtn = document.getElementById(
    "RetrieveButtonId"
) // <button id="RetrieveButtonId" class="Retrieve-btn">Retrieve Data</button>

let listsContainer = document.getElementById(
    "listsContainerId"
) // <div id="listsContainerId"></div>

const displayData = (parsedData)=>{
    // console.log("displayData",parsedData)
    parsedData.forEach((eachObject)=>{
        const paraEl = document.createElement("p")
        paraEl.textContent=eachObject.team
        listsContainer.appendChild(paraEl)
    })
}

document.addEventListener("click", async ()=>{

    listsContainer.innerHTML = ""; // Clear the container contents

    // const response = fetch("./index.json") // Promise {<pending>}

    const responseData = 
        await fetch("./index.json") // Response {type: 'basic', url: 'http://127.0.0.1:5500/index.json', redirected: false, status: 200, ok: true, …}

    // const data= responseData.json() // Promise {<pending>}

    // const textFormattedData = await responseData.text() // stringified Data
    // console.log(typeof textFormattedData) // string

    const parsedData=await responseData.json() // array of objects
    // console.log(typeof parsedData) // object

    displayData(parsedData)
 
})
