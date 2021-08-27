//Import all SASS files needed for styling of website

import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/header.scss'
import './styles/results.scss'
 
//Import the main handler function of the userinput and the checker function (checks if url is valid)

import { checkURL } from './js/checkURL.js'
import { handleSubmit } from './js/formHandler.js'

//Export handler function and checker function

export{
    checkURL,
    handleSubmit
}
