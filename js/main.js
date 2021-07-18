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
			let optionHerbivore  							= document.createElement("option");
			let optionCarnivore  							= document.createElement("option");
			let optionOmnivore  							= document.createElement("option");
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
			formLastNameInputLabel.htmlFor 					= "formLastNameInput";
         	formLastNameInputLabel.innerHTML 				= "Last Name";
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

			formHeightInchesInput.setAttribute("class", "formHeightInchesInput");
			formHeightInchesInput.setAttribute("id", "formHeightInchesInput");
			formHeightInchesInput.name                   	= "humanHeightInches";
			formHeightInchesInput.type                   	= "text";
			formHeightInchesInputLabel.htmlFor 				= "formHeightInchesInput";
         	formHeightInchesInputLabel.innerHTML 			= "Height in Inches";
         	formContainer.appendChild(formHeightInchesInputLabel);
			formContainer.appendChild(formHeightInchesInput);

			formWeightInput.setAttribute("class", "formWeightInput");
			formWeightInput.setAttribute("id", "formWeightInput");
			formWeightInput.name                   	   		= "humanWeightPounds";
			formWeightInput.type                   			= "text";
			formWeightInputLabel.htmlFor 					= "formWeightInput";
         	formWeightInputLabel.innerHTML 					= "Weight in Pounds";
         	formContainer.appendChild(formWeightInputLabel);
			formContainer.appendChild(formWeightInput);

			formDietSelect.setAttribute("class", "formDietSelect");
			formDietSelect.setAttribute("id", "formDietSelect");
			formDietSelect.name                   	   		= "humanDiet";
			formDietSelect.type                   			= "text";
			formDietSelectLabel.htmlFor 					= "formDietSelect";
         	formDietSelectLabel.innerHTML 					= "Diet";
         	formContainer.appendChild(formDietSelectLabel);
			formContainer.appendChild(formDietSelect);
			optionHerbivore.text  							= "Herbivore";
			optionCarnivore.text  							= "Carnivore";
			optionOmnivore.text  							= "Omnivore";
			formDietSelect.add(optionHerbivore);
			formDietSelect.add(optionCarnivore);
			formDietSelect.add(optionOmnivore);


}

setup();

})()