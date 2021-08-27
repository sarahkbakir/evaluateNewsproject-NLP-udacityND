export function checkURL(userInput) {

    //regex is the checker if this is a valid URL or not. match() and regex rules compare each part of a valid URL to the parts of given input by user
    
    let regex = userInput.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);

        //return true if user input is a valid URL, false if it is not.
    if(regex) {
      return Boolean(regex.length);
    } else {
      return false;
    }
}
