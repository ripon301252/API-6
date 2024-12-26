<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assainment-6 (API)</title>

    <!-- google font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet">

    <!-- daisyui & tailwindcss -->
    <link href="https://cdn.jsdelivr.net/npm/daisyui@4.12.22/dist/full.min.css" rel="stylesheet" type="text/css" />
    <script src="https://cdn.tailwindcss.com"></script>

    <style>
        .lato{
            font-family: "Lato", serif;
        }

        html {
            scroll-behavior: smooth;
        }
    </style>
</head>
<body class="lato">
    <header>
        <div class="navbar bg-base-100 w-11/12 mx-auto">
            <div class="navbar-start">
              <div class="dropdown">
                <div tabindex="0" role="button" class="btn  lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul
                  tabindex="0"
                  class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                  <li><a>Home</a></li>
                  <li><a>Shop</a></li>
                  <li><a>Contact</a></li>
                </ul>
              </div>
              <div class="flex items-center gap-2 cursor-pointer mx-auto lg:mx-0">
                <div><img class="w-6" src="img/logo.webp" alt=""></div>
                <a class=" text-2xl font-bold">Peddy</a>
              </div>
            </div>
    
            <div class="navbar-center hidden lg:flex">
              <ul class="menu menu-horizontal px-1">
                <li><a>Home</a></li>
                <li><a>Shop</a></li>
                <li><a>Contact</a></li>
              </ul>
            </div>

            <div class="navbar-end">
                <div class="dropdown dropdown-end">
                    <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar border-[#cfe4e6]">
                        <div class="w-10 rounded-full">
                            <img class="p-2 w-6" alt="Tailwind CSS Navbar component" src="https://img.icons8.com/?size=32&id=22396&format=png" />
                        </div>
                    </div>
                </div> 
            </div>

        </div>
    </header>
    <main>
        <section class="text-center w-11/12 mx-auto mt-5">
            <h3 class="text-gray-500 text-xs lg:text-xl font-bold mb-5">Bringing Families Together ❤️‍🔥 </h3>
            <h1 class="text-3xl lg:text-5xl font-bold mb-5">Your Path to Adoption <br> Starts Here</h1>
            <p class="text-gray-500 text-xs lg:text-sm mb-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking <br> at its layout. The point of using Lorem Ipsum is that it has a.</p>
            <button id="view-more" class="btn bg-[#0e7a81] text-white hover:text-black mb-5"><a href="#adopt-best">View More</a></button>
            <img class="lg:w-[700px] mx-auto " src="img/pet.webp" alt="">
        </section>

        <section class="mt-7 w-11/12 mx-auto">
          <div id="adopt-best" class="text-center">
            <h1 class="text-3xl lg:text-5xl font-bold mb-5">Adopt  Your  Best Friend</h1>
            <p class="text-gray-500 text-xs lg:text-sm mb-5">It is a long established fact that a reader will be distracted by the readable content of a <br> page when looking at its layout. The point of using Lorem Ipsum is that it has a.</p>
          </div>
        </section>

        <section class="w-11/12 mx-auto">
          <nav id="categories" class=" flex justify-center items-center"> </nav>
        </section >

        <div class="w-11/12 mx-auto flex justify-between mt-20">
          <h2>Best Deal For you</h2>
          <button class="btn bg-[#0e7a81] text-white hover:text-black">Sort by Price</button>
        </div>

        <section class=" lg:w-11/12 mx-5 lg:mx-auto flex-cols-1 lg:flex gap-5 my-3">
          <div id="pets-image" class="grid grid-cols-1 lg:grid-cols-3 gap-5  ">

          </div>
          <div class="w-[340px] h-[600px] bg-gray-50 rounded-xl mt-5 lg:mt-0">

          </div>
        </section>
    </main>

    <footer class="bg-violet-900 mt-7 mb-5">
      <div class="flex-cols-1 lg:flex justify-between lg:items-center w-11/12 mx-auto py-10">
        <div>
          <div class="flex lg:fl items-center gap-2">
            <div><img class="w-6" src="img/logo.webp" alt=""></div>
            <a class=" text-2xl font-bold">Peddy</a>
          </div>
          <p>Location: av. Washington 165, NY 54003</p>
          <p>Phone: +31 85 964 47 25</p>
          <p>Email: info@yourdomain.com</p>
          <p>Openings hours: 9.00 AM - 5.00 PM</p>
        </div>
        

        <div class="flex">
          <div>
            <h3>Useful Links</h3>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Amilals</li>
              <li>Foundation</li>
              <li>Contact</li>
            </ul>
          </div>
           
          <div>
            <h3>Drop a Message</h3>
            <input type="text" placeholder="Inter Your Email">
            <div>
              <button class="btn bg-[#0e7a81] text-white hover:text-black">Subscribe</button>
            </div>
          </div>
        </div>
        

      </div>
    </footer>




    <!-- model -->
    <section class="w-11/12 mx-auto">
      <div id="pet-data-container" class="">  

      </div>
     </section>




   



    

  <script src="js/tailwind.config.js"></script>
  <script src="js/pets.js"></script>
  <script src="js/petData-1.js"></script>

</body>
</html>
