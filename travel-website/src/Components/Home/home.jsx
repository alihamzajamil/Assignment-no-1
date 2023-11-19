import React from "react";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import Section2 from "./Section2";
import Section3 from "./Section3";
function Home() {
  return (
    <>

<header class='header'>
       <nav class='navbar'>
           <div class="container">
                <h1 class='logo lg-heading text-light'>WT</h1>
                <ul class='nav-items'>
                   <li class="nav-item"><a href="./index.html">Home</a></li>
                   <li class="nav-item"><a href="./about.html">About</a></li>
                   <li class="nav-item"><a href="./contact.html">Contact</a></li>
                </ul>
           </div>
       </nav>
        <div class="header-content">
            <h1 class='lg-heading text-light main-heading'>travel the world</h1>
            <p class='text-light'>travel the world, experience the greateness, it's the best gift given by nature</p>
            <a href="#" class='btn btn-primary text-red md-heading'>Explore Places</a>
        </div>
    </header>

<Section2/>
<Section3/>

<Footer/>
</>
  );
}

export default Home;