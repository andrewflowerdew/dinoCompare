(function()  												{

function 	setup() 										{

			createForm();

}

function 	createForm() 									{

			let formPageDiv  								= document.getElementById("formPage");

			let formPageTitleContainer						= document.createElement("div");
			let formPageTitle 								= document.createElement("h1");
			let formContainer 								= document.createElement("div");
			let formFirstNameInput 							= document.createElement("input");
			let formFirstNameInputLabel 					= document.createElement("label");
			let formLastNameInput 							= document.createElement("input");
			let formLastNameInputLabel 						= document.createElement("label");
			let formHeightFeetInput 						= document.createElement("input");
			let formHeightFeetInputLabel 					= document.createElement("label");
			let formHeightInchesInput 						= document.createElement("input");
			let formHeightInchesInputLabel 					= document.createElement("label");
			let formWeightInput 							= document.createElement("input");
			let formWeightInputLabel 						= document.createElement("label");
			let formDietSelect 								= document.createElement("select");
			let formDietSelectLabel 						= document.createElement("label");
			let formSubmitButton 							= document.createElement("Button");
			let formSubmitButtonLabel 						= document.createElement("label");

			formPageTitleContainer.setAttribute("class", "formPageTitleContainer");
			formPageTitleContainer.setAttribute("id", "formPageTitleContainer");
			formPageDiv.appendChild(formPageTitleContainer);

			formPageTitle.setAttribute("class", "formPageTitle");
			formPageTitle.setAttribute("id", "formPageTitle");
			formPageTitle.innerHTML 						= "Dino Compare"
			formPageTitleContainer.appendChild(formPageTitle);

			formContainer.setAttribute("class", "formContainer");
			formContainer.setAttribute("id", "formContainer");
			formPageDiv.appendChild(formContainer);

			formFirstNameInput.setAttribute("class", "formFirstNameInput");
			formFirstNameInput.setAttribute("id", "formFirstNameInput");
			formFirstNameInput.name                   	   	= "humanFirstName";
			formFirstNameInput.type                   	   	= "text";
			formFirstNameInputLabel.htmlFor 				= "formFirstNameInput";
         	formFirstNameInputLabel.innerHTML 				= "First Name";
         	formContainer.appendChild(formFirstNameInputLabel);
			formContainer.appendChild(formFirstNameInput);

			formLastNameInput.setAttribute("class", "formLastNameInput");
			formLastNameInput.setAttribute("id", "formLastNameInput");
			formLastNameInput.name                   	   	= "humanLastName";
			formLastNameInput.type                   	   	= "text";
			formLastNameInputLabel.htmlFor 					= "formFirstNameInput";
         	formLastNameInputLabel.innerHTML 				= "First Name";
         	formContainer.appendChild(formLastNameInputLabel);
			formContainer.appendChild(formLastNameInput);

			formHeightFeetInput.setAttribute("class", "formHeightFeetInput");
			formHeightFeetInput.setAttribute("id", "formHeightFeetInput");
			formHeightFeetInput.name                   	   	= "humanHeightFeet";
			formHeightFeetInput.type                   	   	= "text";
			formHeightFeetInputLabel.htmlFor 				= "formHeightFeetInput";
         	formHeightFeetInputLabel.innerHTML 				= "Height in Feet";
         	formContainer.appendChild(formHeightFeetInputLabel);
			formContainer.appendChild(formHeightFeetInput);


}

setup();

})()