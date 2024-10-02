<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Kelvin is an innovative and highly skilled Full-Stack Developer, proficient in both Front-End and Back-End Development, with expertise in Web Development and UI/UX Design. He combines creativity and technical knowledge to deliver seamless, user-friendly, and high-performance web applications.">
    <!-- Link Swiper's CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <!-- Bootstrap icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <!-- Base URL -->
    <base href="/portfolio/">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="css/index.css">
    <title>ObadiahDevOps :: | :: Home</title>
</head>
<body>
    <nav class="navbar navbar-expand-md sticky-top mt-3">
        <div class="container bg-light align-items-center px-3" style="border-radius: 10px; padding-top: 15px; padding-bottom: 15px;">
            <article class="d-flex flex-column">
                <h2 class="navbar-brand m-0 p-0 fw-bolder" href="#">ObaDevOps</h2>
            </article>
            <button id="sidebarToggle1" class="d-flex d-md-none toggle-btn" style="outline: none; border: none; box-shadow: none; background-color: transparent;  right: 0; top: 30%;">
                <lottie-player
                    src="icons/lottieflow-menu-nav-11-2-000000-easey.json" 
                    background="transparent" 
                    speed="1" 
                    style="width: 30px; height: 30px;" 
                    loop 
                    autoplay>
                </lottie-player>
            </button> 
            <div class="d-flex flex-column" id="sideTopNav">
                <button id="sidebarToggle2" class="d-flex d-md-none toggle-btn position-absolute align-self-end" style="outline: none; border: none; box-shadow: none; background-color: transparent;  right: 15px; top: 15px;">
                    <lottie-player
                        src="icons/lottieflow-menu-nav-11-2-000000-easey.json" 
                        background="transparent" 
                        speed="1" 
                        style="width: 30px; height: 30px;" 
                        loop 
                        autoplay>
                    </lottie-player>
                </button>
                <div class="d-flex flex-column align-items-center my-md-0 my-4">
                    <div class="overflow-hidden rounded-circle d-md-none d-flex flex-column" style="border: 5px solid #ffffff; height: 150px; width: 150px;">
                        <img class="img-fluid" src="img/passport.JPG" alt="Profile Picture" style="height: 100%; width: 100%; object-fit: cover;">
                    </div>
                    <article class="d-md-none d-flex flex-column align-items-center">
                        <h2 class="my-2">Kelvin Mwangi</h2>
                        <h6 class="mb-2">Full Stack Developer</h6>
                        <p class="m-0 px-3 bg-light" style="border: 1px solid black; border-radius: 15px;">active since 2020</p>
                    </article>
                </div>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <header class="position-relative w-100" style="overflow: hidden;">
        <div class="container mt-2 mb-4 position-relative" style="height: fit-content;">
            <article class="d-flex flex-column position-relative" style="z-index: 1;">
                <h1 class="fw-bolder text-center d-flex flex-md-row flex-column align-items-center mt-0 my-md-5 justify-content-md-center" style="font-size: 200%;">The best <span id="typewriter" style="width: fit-content;"></span></h1>
            </article>
            <div class="row position-relative" style="z-index: 1;">
                <div class="col-md-6 d-flex flex-column justify-content-center">
                    <h1 class="fw-bolder">Hey! I Am Kelvin Mwangi</h1>
                    <p>Product designer and digital creative director working in design field for 7 year so far, specialize user interface design</p>
                    <div class="pb-5">
                        <a class="hire-me px-3 py-2" href="">Hire Me</a>
                        <a class="hire-me px-3 py-2" href="">Download CV</a>
                    </div>
                </div>
                <div class="col-md-6 d-flex justify-content-center mb-5 mb-md-0">
                    <div class="image-holder" style="width: 300px;">
                        <img class="img-fluid" src="img/hero-removebg-preview.png" alt="">
                    </div>
                </div>
            </div>
            <div class="position-absolute rounded-circle" style="border: 4px solid red; height: 100px; width: 100px; left: -10%; top: -2%; z-index: 0;"></div>
            <div class="position-absolute rounded-circle" style="border: 4px solid black; height: 50px; width: 50px; left: 85%; top: 50%; z-index: 0;"></div>
            <div class="position-absolute rounded-circle" style="border: 4px solid green; height: 45px; width: 45px; left: 0; top: 70%; z-index: 0;"></div>
            <div class="position-absolute rounded-circle" style="border: 4px solid blue; height: 150px; width: 150px; left: 5%; top: 15%; z-index: 0;"></div>
            <div class="position-absolute rounded-circle" style="border: 4px solid yellow; height: 50px; width: 50px; left: 70%; top: 25%; z-index: 0;"></div>
            <div class="position-absolute rounded-circle" style="border: 4px solid teal; height: 100px; width: 100px; left: 78%; top: 75%; z-index: 0;"></div>

            
            <div class="position-absolute rounded-circle" style="border: 4px solid red; height: 100px; width: 100px; left: 45%; top: 45%; z-index: 0;"></div>
            <div class="position-absolute rounded-circle" style="border: 4px solid black; height: 100px; width: 100px; left: 85%; top: 5%; z-index: 0;"></div>
            <div class="position-absolute rounded-circle" style="border: 4px solid green; height: 90px; width: 90px; left: 45%; top: -15%; z-index: 0;"></div>
            <div class="position-absolute rounded-circle" style="border: 4px solid blue; height: 70px; width:70px; left: 45%; top: 100%; z-index: 0;"></div>
            <div class="position-absolute rounded-circle" style="border: 4px solid yellow; height: 100px; width: 100px; left: 78%; top: 75%; z-index: 0;"></div>
            <div class="position-absolute rounded-circle" style="border: 4px solid teal; height: 50px; width: 50px; left: 30%; top: 25%; z-index: 0;"></div>
        </div>
    </header>
    <main class="d-flex flex-column">
        <section class="mb-5">
            <div class="container">
                <div>
                    <div>
                        <h1 class="mb-5">Clients I Have <span style="color: #ff7300;">Worked With</span></h1>
                    </div>
                    <div class="row mb-5">
                        <div class="col-md-6 mb-4 mb-md-0">
                            <div class="card h-100" style="border: 2px solid #ff7300;">
                                <img src="img/KeNHA-Logo.jpeg" class="img-fluid" alt="..." style="height: 200px; object-fit: contain;">
                                <div class="card-body bg-beige py-5">
                                    <h5 class="card-title text-center">Kenya <span style="color: #ff7300;">National Highways</span>Authority</h5>
                                    <p class="card-text">As a trusted partner, I played a pivotal role in developing a cutting-edge innovation hub and a streamlined internal car booking system for Kenya Natinal Highways Authority. These solutions were designed to enhance efficiency, drive innovation, and optimize resource utilization within the organization.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card h-100" style="border: 2px solid #ff7300;">
                                <img src="img/CSEA-Logo.jpeg" class="img-fluid" alt="..." style="height: 200px; object-fit: contain;">
                                <div class="card-body bg-beige py-5">
                                    <h5 class="card-title text-center">Classic <span style="color: #ff7300;">Steel East</span> Africa</h5>
                                    <p class="card-text">At Classic Steel East Africa, I played a key role in developing a dynamic online presence that helped them attract new clients and expand their market reach. The website I designed not only showcases their impressive range of products but also provides a seamless user experience for potential customers.</p>
                                </div>
                            </div>
                        </div>
                    </div>                        <div>
                        <a class="hire-me px-3 py-2" href="">Hire Me</a>
                        <a class="hire-me px-3 py-2" href="">View More</a>
                    </div>
                </div>
            </div>
        </section>

        <section class="my-5">
            <div class="container">
                <div class="row flex-column-reverse flex-lg-row">
                    <div class="col-lg-6">
                        <div class=" d-flex flex-column pt-4 overflow-auto" style="background-color: #ffe2d1; border-radius: 10px; border: 2px solid #ff7300; height: 450px;">
                            <div class="info-card p-2 mb-3" style="border-radius: 10px;">
                                <div class="d-flex flex-row align-items-center p-3" style="background-color: #ffffff; border-radius: 9px;">
                                    <div class="me-3">
                                        <div class="icon">
                                            <lord-icon
                                                src="https://cdn.lordicon.com/pveyklos.json"
                                                trigger="loop"
                                                stroke="bold"
                                                state="loop-roll"
                                                style="width:50px; height:50px">
                                            </lord-icon>
                                        </div>
                                    </div>
                                    <div class="content">
                                        <h5>Full-Stack Developer</h5>
                                        <p>As a Full-Stack developer, I'm a versatile digital craftsman, skilled to build complete web applications from the ground up, handling everything from the user interface to the server-side logic.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="info-card p-2 mb-3" style="border-radius: 10px;">
                                <div class="d-flex flex-row align-items-center p-3" style="background-color: #ffffff; border-radius: 9px;">
                                    <div class="me-3">
                                        <div class="icon">
                                            <lord-icon
                                                src="https://cdn.lordicon.com/pveyklos.json"
                                                trigger="loop"
                                                stroke="bold"
                                                state="loop-roll"
                                                style="width:50px; height:50px">
                                            </lord-icon>
                                        </div>
                                    </div>
                                    <div class="content">
                                        <h5>Web Developer</h5>
                                        <p>As a web developer, I'm the creative force behind the digital world. I craft the intricate web of code that brings websites to life, shaping how people interact with information and services online.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="info-card p-2 mb-3" style="border-radius: 10px;">
                                <div class="d-flex flex-row align-items-center p-3" style="background-color: #ffffff; border-radius: 9px;">
                                    <div class="me-3">
                                        <div class="icon">
                                            <lord-icon
                                                src="https://cdn.lordicon.com/pveyklos.json"
                                                trigger="loop"
                                                stroke="bold"
                                                state="loop-roll"
                                                style="width:50px; height:50px">
                                            </lord-icon>
                                        </div>
                                    </div>
                                    <div class="content">
                                        <h5>Front-End Developer</h5>
                                        <p>As a Front-End developer, I'm the artist of the digital world, responsible for creating visually appealing and user-friendly interfaces. I transforms designs into functional, engaging web experiences.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="info-card p-2 mb-3" style="border-radius: 10px;">
                                <div class="d-flex flex-row align-items-center p-3" style="background-color: #ffffff; border-radius: 9px;">
                                    <div class="me-3">
                                        <div class="icon">
                                            <lord-icon
                                                src="https://cdn.lordicon.com/pveyklos.json"
                                                trigger="loop"
                                                stroke="bold"
                                                state="loop-roll"
                                                style="width:50px; height:50px">
                                            </lord-icon>
                                        </div>
                                    </div>
                                    <div class="content">
                                        <h5>Back-End Developer</h5>
                                        <p>As a Back-End developer, I'm the unsung hero behind the scenes, powering the functionality and performance of web applications. My work is crucial for the smooth operation and performance of websites and applications.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="info-card p-2 mb-3" style="border-radius: 10px;">
                                <div class="d-flex flex-row align-items-center p-3" style="background-color: #ffffff; border-radius: 9px;">
                                    <div class="me-3">
                                        <div class="icon">
                                            <lord-icon
                                                src="https://cdn.lordicon.com/pveyklos.json"
                                                trigger="loop"
                                                stroke="bold"
                                                state="loop-roll"
                                                style="width:50px; height:50px">
                                            </lord-icon>
                                        </div>
                                    </div>
                                    <div class="content">
                                        <h5>UI/UX Designer</h5>
                                        <p> As a UI/UX designer, I'm the architect of digital experiences, shaping how people interact with products and services. My work is essential for creating products that are not only functional but also delightful to use.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="info-card p-2 mb-3" style="border-radius: 10px;">
                                <div class="d-flex flex-row align-items-center p-3" style="background-color: #ffffff; border-radius: 9px;">
                                    <div class="me-3">
                                        <div class="icon">
                                            <lord-icon
                                                src="https://cdn.lordicon.com/pveyklos.json"
                                                trigger="loop"
                                                stroke="bold"
                                                state="loop-roll"
                                                style="width:50px; height:50px">
                                            </lord-icon>
                                        </div>
                                    </div>
                                    <div class="content">
                                        <h5>Developer</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut laboriosam architecto quis minima exercitationem dignissimos consectetur sunt, sed eos corrupti, temporibus deleniti! Doloremque veniam minima vel adipisci aliquam, quidem unde!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 mb-4 mb-lg-0 d-flex flex-column justify-content-center">
                        <h1 class="mb-3">My Awesome <span style="color: #ff7300;">Services</span></h1>
                        <p>As a highly skilled and versatile professional, I bring together expertise in full-stack development, web development, front-end development, back-end development, and UI/UX design. This unique combination allows me to offer a complete range of services, from crafting seamless and responsive user interfaces to building robust and scalable server-side architectures resulting in seamless, efficient, and engaging web applications for my clients.</p>
                        <div>
                            <a class="hire-me px-3 py-2" href="">Hire Me</a>
                            <a class="hire-me px-3 py-2" href="">Download CV</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="my-5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 mb-4 mb-lg-0">
                        <h1>My Clients Always Get <span style="color: #ff7300;">Exceptional Results</span> From Me</h1>
                        <p>By working with me, you are guaranteed to get:</p>
                        <ol>
                            <li>Premium Quality Work</li>
                            <li>Unwavering Commitment</li>
                            <li>Dedicated Support</li>
                            <li>24/7 Accessibility</li>
                        </ol>
                        <div>
                            <a class="hire-me px-3 py-2" href="">Hire Me</a>
                            <a class="hire-me px-3 py-2" href="">Download CV</a>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="d-flex justify-content-center position-relative overflow-hidden h-100 mb-5 mb-lg-0 p-0" style="border-radius: 10px; border: 2px solid #ff7300;">
                            <div class="image-holder">
                                <img class="img-fluid" src="img/hero2.webp" alt="" style="max-width: 100%; height: 100%; object-fit: cover;">
                            </div>
                            <div class="position-absolute rounded-circle" style="border: 5px solid #ffffff; background-color: red; height: 100px; width: 100px; left: -10%; top: -2%;"></div>
                            <div class="position-absolute rounded-circle" style="border: 5px solid #ffffff; background-color: black; height: 30px; width: 30px; left: 15%; top: 30%;"></div>
                            <div class="position-absolute rounded-circle" style="border: 5px solid #ffffff; background-color: green; height: 45px; width: 45px; left: 0; top: 70%;"></div>
                            <div class="position-absolute rounded-circle" style="border: 5px solid #ffffff; background-color: blue; height: 19px; width: 19px; left: 85%; top: 10%;"></div>
                            <div class="position-absolute rounded-circle" style="border: 5px solid #ffffff; background-color: yellow; height: 50px; width: 50px; left: 70%; top: 25%;"></div>
                            <div class="position-absolute rounded-circle" style="border: 5px solid #ffffff; background-color: teal; height: 100px; width: 100px; left: 78%; top: 75%;"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="my-5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 mb-5 mb-lg-0">
                        <h1 class="mb-4">Ready To <span style="color: #ff7300;">Get Started?</span></h1>
                        
                        <div class="d-flex flex-column align-items-center">
                            <a class="hire-me px-3 py-2" href="">Hire Me</a>
                            
                            <span class="my-2">or</span>

                            <div class="d-flex flex-row" style="gap: 20px;">
                                <a href="" class="d-flex align-items-center justify-content-center rounded-circle p-2" style="background-color: #4bb3fd; box-shadow: 2px 2px 8px #4bb3fd; border: 1px solid black;">
                                    <lord-icon
                                        src="https://cdn.lordicon.com/txwpdwdi.json"
                                        trigger="loop"
                                        colors="primary:#ebe6ef,secondary:#4bb3fd"
                                        stroke="bold"
                                        state="loop-roll"
                                        style="width:30px;height:30px">
                                    </lord-icon>
                                </a>

                                <a href="" class="d-flex align-items-center justify-content-center rounded-circle p-2" style="background-color: #2ca58d; box-shadow: 2px 2px 8px #2ca58d; border: 1px solid black;">
                                    <lord-icon
                                        src="https://cdn.lordicon.com/fjuachvi.json"
                                        trigger="loop"
                                        colors="primary:#ebe6ef,secondary:#ebe6ef"
                                        stroke="bold"
                                        state="loop-roll"
                                        style="width:30px;height:30px">
                                    </lord-icon>
                                </a>
                                
                                <a href="" class="d-flex align-items-center justify-content-center rounded-circle p-2" style="background-color: #fa7e1e; box-shadow: 2px 2px 8px #fa7e1e; border: 1px solid black;">
                                    <lord-icon
                                        src="https://cdn.lordicon.com/nnfbxwtf.json"
                                        trigger="loop"
                                        stroke="bold"
                                        state="loop-roll"
                                        style="width:30px;height:30px">
                                    </lord-icon>
                                </a>

                                <a href="" class="d-flex align-items-center justify-content-center rounded-circle p-2" style="background-color: #4bb3fd; box-shadow: 2px 2px 8px #4bb3fd; border: 1px solid black;">
                                    <lord-icon
                                        src="https://cdn.lordicon.com/ftgjzwjn.json"
                                        trigger="loop"
                                        colors="primary:#ebe6ef,secondary:#ebe6ef"
                                        stroke="bold"
                                        state="loop-roll"
                                        style="width:30px;height:30px">
                                    </lord-icon>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="position-relative d-flex flex-column justify-content-center h-100">
                            <h4 class="mb-4">You Know About Me, Let's Talk About You</h4>
                            <h4>Shoot Message</h4>
                            <div class="rounded-circle position-absolute d-none d-xl-flex" style="height: 100px; width: 100px; background-color: #ff7300; left: 100px; top: 80px; z-index: -1;"></div>
                            <div class="rounded-circle position-absolute d-none d-lg-flex d-xl-none" style="height: 100px; width: 100px; background-color: #ff7300; left: 100px; top: 90px; z-index: -1;"></div>
                            <div class="rounded-circle position-absolute d-flex d-lg-none" style="height: 100px; width: 100px; background-color: #ff7300; left: 100px; top: 20px; z-index: -1;"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <footer></footer>
        
    <!-- Bootstrap 5 JS (Optional, only if you need Bootstrap JS functionality) -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"></script>

    <!-- LordIcon js -->
    <script src="https://cdn.lordicon.com/lordicon.js"></script>

    <!-- LottieFlow animated Icon js -->
    <script src="https://cdn.jsdelivr.net/npm/@lottiefiles/lottie-player@latest"></script>

    <!-- jQuery (required for your $(document).ready function) -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    <!-- Custom js -->
    <script src="js/index.js"></script>
</body>
</html>