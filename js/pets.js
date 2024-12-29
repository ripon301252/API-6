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

    const loadCategoryImage = (category) => {
        // alert(category)
        // fetch the data
        fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
            .then((res) => res.json())
            .then((data) =>{
                console.log(data.data)
                console.log(data)
                console.log(category)
            })
            
            .catch((err) => console.log(err))
    }

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

                <p class=" flex items-center gap-3 text-lg text-gray-600 font-bold mb-1"><img class="w-5" src="https://img.icons8.com/?size=24&id=m82dxEXRKBiI&format=png"> Breed : ${pets.breed}</p>

                <p class="flex items-center gap-3 text-lg text-gray-600 font-bold mb-1"><img class="w-5" src="https://img.icons8.com/?size=80&id=udduMUcrHmZa&format=png"> Birth : ${pets.date_of_birth}</p>

                <p class="flex items-center gap-3 text-lg text-gray-600 font-bold mb-1"><img class="w-5" src="https://img.icons8.com/?size=32&id=15241&format=png"> Gender : ${pets.gender}</p>

                <p class="flex items-center gap-3 text-lg text-gray-600 font-bold mb-1"><img class="w-5" src="https://img.icons8.com/?size=24&id=85801&format=png"> Price : ${pets.price}</p>

                <div class="divider"></div>
                <div class="card-actions">
                    <button class="btn  shadow-current"> <img class="w-7 text-white" src="img/like.png"></button>
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
              <button onclick="loadCategoryImage(${item})" class="btn lg:text-xl text-xs">
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
    

