export function handleSubmit(event) {
  event.preventDefault();

  //define the userinput (url given by user) variable
  const userInput = document.getElementById("name").value;

  //pass the userinput to checker function to check if URL is a valid URL
  if (Client.checkURL(userInput)) {
    
    let resSection =  document.getElementById("results");
    resSection.style.display = "block"
    //fetch a req to server and set respoinse to handle data
    fetch("http://localhost:55555/analyze", {
      method: "POST",
      credentials: "same-origin",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        url: userInput,
      }),
    })
      .then((response) => response.json())
      //handle response data to update the UI with needed items
      .then(function (response) {
        document.getElementById("score_tag").innerHTML = response.score_tag;
        document.getElementById("subjectivity").innerHTML = response.subjectivity;
        document.getElementById("agreement").innerHTML = response.agreement;
        document.getElementById("irony").innerHTML = response.irony;
        document.getElementById("confidence").innerHTML = response.confidence;
      });
  } else {
      //if URL given is not a valid URL -- alert user to give a valid one - remove results section
     let resSection =  document.getElementById("results");
     resSection.style.display = "none"
    document.getElementById("errormessage").innerHTML ="Pleaser enter a valid URL";
  }
}
