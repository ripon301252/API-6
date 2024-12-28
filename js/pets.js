// fetch, load and show categories on html

    // create loadCategories
    const loadCategories = () =>{
        
        // fetch the data
        fetch('https://openapi.programming-hero.com/api/peddy/categories')
            .then((res) => res.json())
            .then((data) => displayCategories(data.categories))
            .catch((err) => console.log(err))
  
    }

    const loadImages = () =>{
        // fetch the data
        fetch('https://openapi.programming-hero.com/api/peddy/pets')
            .then((res) => res.json())
            .then((data) => displayImages(data.pets))
            .catch((err) => console.log(err))
    }

    const loadCategoryImage = (id) => {
        alert(id)
        // fetch the data
        fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`)
            .then((res) => res.json())
            .then((data) => console.log(data.petData.category))
            .catch((err) => console.log(err))
        
    }

    // const cardDemo = {
    //     "petId": 1,
    //     "breed": "Golden Retriever",
    //     "category": "Dog",
    //     "date_of_birth": "2023-01-15",
    //     "price": 1200,
    //     "image": "https://i.ibb.co.com/p0w744T/pet-1.jpg",
    //     "gender": "Male",
    //     "pet_details": "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog.",
    //     "vaccinated_status": "Fully",
    //     "pet_name": "Sunny"
    // }

    const displayImages = (pets) =>{
       const imageContainer = document.getElementById('pets-image') 
       pets.forEach(pets => {
            console.log(pets);
            const card = document.createElement('div');
            card.classList = "card card-compact bg-gray-50 pb-5"
            card.innerHTML = `
            <figure class="px-5 pt-10 h-[200px] ">
                <img
                src="${pets.image}"
                class="rounded-xl h-full w-full object-cover" />
            </figure>
            <div class=" items-center  px-5">
                <h2 class="font-bold text-3xl mt-7 mb-2">${pets.pet_name}</h2>
                <p class="text-lg text-gray-600 font-bold mb-1">Breed : ${pets.breed}</p>
                <p class="text-lg text-gray-600 font-bold mb-1">Birth : ${pets.date_of_birth}</p>
                <p class="text-lg text-gray-600 font-bold mb-1">Gender : ${pets.gender}</p>
                <p class="text-lg text-gray-600 font-bold mb-1">Price : ${pets.price}</p>
                <div class="divider"></div>
                <div class="card-actions">
                    <button class="btn  shadow-current"> <img class="w-7 text-white" src="img/like.png" alt=""></button>
                    <button class="btn shadow-current text-base text-[#3a7a82]">Adopt</button>
                    <button id="pet-details" class="btn shadow-current text-base text-[#3a7a82]">Details</button>
                </div>
            </div>
            `
            imageContainer.append(card);
       });
    }


    // create displayCategories
    const displayCategories = (categories) =>{
        const categoryContainer = document.getElementById('categories');
        

        categories.forEach((item) => {
            
        // create buttons
              const buttonContainer = document.createElement('div');
              buttonContainer.innerHTML =`
              <button onclick="loadCategoryImage(${item.id})" class="btn lg:text-xl text-xs">
                 <img src="${item.category_icon}" alt="Shoes" class="rounded-xl lg:w-10 w-7  object-cover " />  ${item.category}
              </button>
              `  

            // const button = document.createElement('button');
            // button.classList = 'btn';
            // button.innerText = item.category;
           

            // const image = document.createElement('div');
            // image.classList = 'btn';
            // image.innerHTML = `
            //     <img src="${item.category_icon}" alt="Shoes" class="rounded-xl w-10 object-cover" />
            // `
            // add button to categoryContainer
        

            // categoryContainer.append(image,button);
            categoryContainer.append(buttonContainer);
        });



        // categories.forEach((item) => {
        
        //              // create buttons
        //     const button = document.createElement('button');
        //     button.classList = 'btn';
        //     button.innerText = item.category;
          
        //              // add button to categoryContainer
        //     categoryContainer.append(button)
        // });
    }

    loadCategories()
    loadImages()
    

