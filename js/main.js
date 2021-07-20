(function()  												{

let dinoDataObject 											= [];
let newHumanData                                			= {};


function 	setup() 										{

			getDinoData();

			createForm();

}

function getDinoData() 										{

		 let dinoDb                          				= `../data/dino.json`;

         fetch(dinoDb)
              .then(function(response)                   	{

                 return response.json();

              }).then(function(localDinoData)            	{

              	 dinoDataObject 							= localDinoData;

    		  });

}

function populateDinoData(i, dataType, factChoice) 		{

		 if (dataType === "species") 								{

		 	let speciesText 											= dinoDataObject["Dinos"][i]["species"];

		 	return speciesText;

		 }

		 if (dataType === "image") 								{

		 	let speciesImage 											= '../'+dinoDataObject["Dinos"][i]["images"];

		 	return speciesImage;

		 }

		 if (dataType === "fact") 									{

		 	let speciesFact;

		 	if (factChoice === 1) 									{

		 		speciesFact 								    		= "Weight: " + dinoDataObject["Dinos"][i]["weight"];

		 	}

		 	else if (factChoice === 2) 							{

		 		speciesFact 								    		= "Height: " + dinoDataObject["Dinos"][i]["height"];
		 		
		 	}

		 	else if (factChoice === 3) 							{

		 		speciesFact 								    		= "Diet: " + dinoDataObject["Dinos"][i]["diet"];
		 		
		 	}

		 	else if (factChoice === 4) 							{

		 		speciesFact 								    		= "Where: " + dinoDataObject["Dinos"][i]["where"];
		 		
		 	}

		 	else if (factChoice === 5) 							{

		 		speciesFact 								    		= "When: " + dinoDataObject["Dinos"][i]["when"];
		 		
		 	}

		 	else if (factChoice === 6) 							{

		 		speciesFact 								    		= "Fact: " + dinoDataObject["Dinos"][i]["fact"];
		 		
		 	}

		 	return speciesFact;

		 }
		 
}

function 	createForm() 												{

			if (document.getElementById('gridContainer'))  				{

				let gridContainer 										= document.getElementById('gridContainer');
				gridContainer.parentNode.removeChild(gridContainer);

				let newHumanButton 										= document.getElementById('startNewHumanButton');
				newHumanButton.parentNode.removeChild(newHumanButton);

				let startNewHumanContainer 								= document.getElementById('startNewHumanContainer');
				startNewHumanContainer.parentNode.removeChild(startNewHumanContainer);


			}

			if (document.getElementById("formPageTitleContainer")) 		{

				document.getElementById("formFirstNameInput").value		= "";
         		document.getElementById("formHeightFeetInput").value 	= "";
         		document.getElementById("formHeightInchesInput").value 	= "";
         		document.getElementById("formWeightInput").value 		= "";
         		document.getElementById("formDietSelect").value 		= "Herbivore";

         		document.getElementById("formPage").style.display 	  	= "grid";
				document.getElementById("dinoPage").style.display		= "none";

			}	else  													{											

				let formPageDiv  										= document.getElementById("formPage");

				let formPageTitleContainer								= document.createElement("div");
				let formPageTitle 										= document.createElement("h1");
				let formContainer 										= document.createElement("div");
				let formFirstNameInput 									= document.createElement("input");
				let formFirstNameInputLabel 							= document.createElement("label");
				let formLastNameInput 									= document.createElement("input");
				let formLastNameInputLabel 								= document.createElement("label");
				let formHeightFeetInput 								= document.createElement("input");
				let formHeightFeetInputLabel 							= document.createElement("label");
				let formHeightInchesInput 								= document.createElement("input");
				let formHeightInchesInputLabel 							= document.createElement("label");
				let formWeightInput 									= document.createElement("input");
				let formWeightInputLabel 								= document.createElement("label");
				let formDietSelect 										= document.createElement("select");
				let optionHerbivore  									= document.createElement("option");
				let optionCarnivore  									= document.createElement("option");
				let optionOmnivore  									= document.createElement("option");
				let formDietSelectLabel 								= document.createElement("label");
				let formCompareContainer 								= document.createElement("div");
				let formSubmitButton 									= document.createElement("Button");


				formPageTitleContainer.setAttribute("class", "formPageTitleContainer");
				formPageTitleContainer.setAttribute("id", "formPageTitleContainer");
				formPageDiv.appendChild(formPageTitleContainer);

				formPageTitle.setAttribute("class", "formPageTitle");
				formPageTitle.setAttribute("id", "formPageTitle");
				formPageTitle.innerHTML 								= "Dino Compare"
				formPageTitleContainer.appendChild(formPageTitle);

				formContainer.setAttribute("class", "formContainer");
				formContainer.setAttribute("id", "formContainer");
				formPageDiv.appendChild(formContainer);

				formFirstNameInput.setAttribute("class", "formFirstNameInput");
				formFirstNameInput.setAttribute("id", "formFirstNameInput");
				formFirstNameInput.name                   	   			= "humanFirstName";
				formFirstNameInput.type                   	   			= "text";
				formFirstNameInputLabel.htmlFor 						= "formFirstNameInput";
         		formFirstNameInputLabel.innerHTML 						= "First Name";
         		formContainer.appendChild(formFirstNameInputLabel);
				formContainer.appendChild(formFirstNameInput);

				formHeightFeetInput.setAttribute("class", "formHeightFeetInput");
				formHeightFeetInput.setAttribute("id", "formHeightFeetInput");
				formHeightFeetInput.name                   	   			= "humanHeightFeet";
				formHeightFeetInput.type                   	   			= "text";
				formHeightFeetInputLabel.htmlFor 						= "formHeightFeetInput";
         		formHeightFeetInputLabel.innerHTML 						= "Height in Feet";
         		formContainer.appendChild(formHeightFeetInputLabel);
				formContainer.appendChild(formHeightFeetInput);

				formHeightInchesInput.setAttribute("class", "formHeightInchesInput");
				formHeightInchesInput.setAttribute("id", "formHeightInchesInput");
				formHeightInchesInput.name                   			= "humanHeightInches";
				formHeightInchesInput.type                   			= "text";
				formHeightInchesInputLabel.htmlFor 						= "formHeightInchesInput";
         		formHeightInchesInputLabel.innerHTML 					= "Height in Inches";
         		formContainer.appendChild(formHeightInchesInputLabel);
				formContainer.appendChild(formHeightInchesInput);

				formWeightInput.setAttribute("class", "formWeightInput");
				formWeightInput.setAttribute("id", "formWeightInput");
				formWeightInput.name                   	   				= "humanWeightPounds";
				formWeightInput.type                   					= "text";
				formWeightInputLabel.htmlFor 							= "formWeightInput";
         		formWeightInputLabel.innerHTML 							= "Weight in Pounds";
         		formContainer.appendChild(formWeightInputLabel);
				formContainer.appendChild(formWeightInput);

				formDietSelect.setAttribute("class", "formDietSelect");
				formDietSelect.setAttribute("id", "formDietSelect");
				formDietSelect.name                   	   				= "humanDiet";
				formDietSelect.type                   					= "text";
				formDietSelectLabel.htmlFor 							= "formDietSelect";
         		formDietSelectLabel.innerHTML 							= "Diet";
         		formContainer.appendChild(formDietSelectLabel);
				formContainer.appendChild(formDietSelect);
				optionHerbivore.text  									= "Herbivore";
				optionCarnivore.text  									= "Carnivore";
				optionOmnivore.text  									= "Omnivore";
				formDietSelect.add(optionHerbivore);
				formDietSelect.add(optionCarnivore);
				formDietSelect.add(optionOmnivore);

				formCompareContainer.setAttribute("class", "formCompareContainer");
				formCompareContainer.setAttribute("id", "formCompareContainer");
				formPageDiv.appendChild(formCompareContainer);


				formSubmitButton.setAttribute("class", "formSubmitButton");
				formSubmitButton.setAttribute("id", "formSubmitButton");
				formSubmitButton.textContent = 'Compare to Dinos';
				formCompareContainer.appendChild(formSubmitButton);
				document.getElementById('formSubmitButton').onclick  	=  createHuman;

			}

}

function	createDinoDisplay()											{

			document.getElementById("formPage").style.display 	  		= "none";
			document.getElementById("dinoPage").style.display		  	= "grid";

			let dinoPage  												= document.getElementById('dinoPage');

			let gridContainer											= document.createElement("div");
			gridContainer.setAttribute("id", "gridContainer");
			gridContainer.setAttribute("class", "gridContainer");
			dinoPage.appendChild(gridContainer);

			let startNewHumanContainer									= document.createElement("div");
			startNewHumanContainer.setAttribute("id", "startNewHumanContainer");
			startNewHumanContainer.setAttribute("class", "startNewHumanContainer");
			dinoPage.appendChild(startNewHumanContainer);

			let startNewHumanButton										= document.createElement("button");
			startNewHumanButton.setAttribute("class", "formSubmitButton");
			startNewHumanButton.setAttribute("id", "startNewHumanButton");
			startNewHumanButton.textContent = 'Compare New Human';
			startNewHumanContainer.appendChild(startNewHumanButton);
			document.getElementById('startNewHumanButton').onclick  =  createForm;

			let boxesCreated                                			= 0;

			let numberOfBoxes											= 8;

			for (let i = numberOfBoxes-1; i >= 0; i--) 		         	{

				boxesCreated++;
				
				let speciesText 										= dinoDataObject["Dinos"][i]["species"];

				let box 												= 	document.createElement("div");
				box.setAttribute("id", "box"+i);
				box.setAttribute("class", "box");
				gridContainer.appendChild(box);

				let speciesTextElement									= document.createElement("p");
				speciesTextElement.setAttribute("id", "speciesTitle"+i);
				speciesTextElement.setAttribute("class", "speciesTitle");
				speciesTextElement.innerHTML 							= populateDinoData(i, "species");
				box.appendChild(speciesTextElement);

				let speciesImageElement									= document.createElement("img");
				speciesImageElement.setAttribute("id", "speciesImageElement"+i);
				speciesImageElement.setAttribute("class", "speciesImageElement");
				speciesImageElement.src 								= populateDinoData(i, "image");
				speciesImageElement.setAttribute("alt", "Image of " + speciesText);
				box.appendChild(speciesImageElement);

				let speciesFactElement									= document.createElement("p");
				speciesFactElement.setAttribute("id", "speciesFactElement"+i);
				speciesFactElement.setAttribute("class", "speciesFactElement");
				let factChoice 											= Math.floor((Math.random() * 6) + 1);
				speciesFactElement.innerHTML 							= populateDinoData(i, "fact", factChoice);
				box.appendChild(speciesFactElement);

				if (i===4) 												{

						let box 										= document.createElement("div");
						box.setAttribute("id", "humanBox");
						box.setAttribute("class", "humanBox");

						let speciesTextElement							= document.createElement("p");
						speciesTextElement.setAttribute("id", "speciesTitle"+i);
						speciesTextElement.setAttribute("class", "speciesTitle");
						speciesTextElement.innerHTML 					= "Human";
						box.appendChild(speciesTextElement);

						let humanImageElement							= document.createElement("img");
						humanImageElement.setAttribute("id", "humanImageElement"+i);
						humanImageElement.setAttribute("class", "humanImageElement");
						humanImageElement.src 							= "../"+"img/"+"human.jpg";
						humanImageElement.setAttribute("alt", "Image of a Human");
						box.appendChild(humanImageElement);

						let speciesFactElement							= document.createElement("p");
						speciesFactElement.setAttribute("id", "speciesFactElement"+i);
						speciesFactElement.setAttribute("class", "speciesFactElement");
						let factChoice 									= Math.floor((Math.random() * 4) + 1);
						speciesFactElement.innerHTML 					= populateHumanData(2);
						box.appendChild(speciesFactElement);


						gridContainer.appendChild(box);

				}

			}
}

function  	populateHumanData(factChoice) 					{

			let choice;
			let displayData;

			if (factChoice === 2) 							{

				return newHumanData["heightFeet"];

			}

			if (factChoice === 3) 							{

				return newHumanData["heightFeet"];

			}

			console.log("Chosen Human Data: ", newHumanData[choice]);

}

function 	createHuman() 									{

			let humanHeightFeetText							= document.getElementById("formHeightFeetInput").value;
			let humanHeightInchesText						= document.getElementById("formHeightInchesInput").value;
			let humanFeetInFeetNumber						= parseInt(humanHeightFeetText,10);
			let humanHeightInchesNumber 					= parseInt(humanHeightInchesText,10);
			let totalHumanHeightInches 						= (humanFeetInFeetNumber*12)+humanHeightInchesNumber;

         	newHumanData.firstName                   		= document.getElementById("formFirstNameInput").value;
            newHumanData.height 							= totalHumanHeightInches;
         	newHumanData.weight                   			= document.getElementById("formWeightInput").value;
         	newHumanData.diet                   			= document.getElementById("formDietSelect").value;

         	console.log("Human height in feet: ", humanFeetInFeetNumber);
         	console.log("Human inches: ", humanHeightInchesNumber);
         	console.log("Total human height in inches: ", totalHumanHeightInches);

         	console.log("New Human Data: ", newHumanData);

         	createDinoDisplay();

}

setup();

})()