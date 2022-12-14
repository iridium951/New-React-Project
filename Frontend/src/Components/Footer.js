import React from "react";
import "./Footer.css";
import FacebookLogo from './socials/facebook.svg';
import TwitterLogo from './socials/twitter.svg';
import InstagramLogo from './socials/instagram.svg';
import YoutubeLogo from './socials/youtube.svg';
import WhatsappLogo from './socials/whatsapp.svg';

export default function Footer() {
  return (
    <footer>
<div class="row primary">
  <div class="column about">

  <h3>MovLook</h3>

   <p>
   Modularbeit Frontend im Kurs Webtechnologien
  </p>

  <div class="social">
    <img src={FacebookLogo} alt="Facebook Logo" />
    <img src={TwitterLogo} alt="Twitter Logo" />
    <img src={InstagramLogo} alt="Instagram Logo" />
    <img src={YoutubeLogo} alt="Youtube Logo" />
    <img src={WhatsappLogo} alt="Whatsapp Logo" />
  </div>
  
  <p>
  All external content remains the property of the rightful owner.
  </p>

</div>


<div class="column links">
<h3>Legal</h3>

 <ul>

  <li>
   <a href={"https://www.bmbf.de/bmbf/de/services/datenschutz/datenschutz_node.html"}>Privacy Policy</a>
  </li>
  <li>
   <a href={"https://www.bmbf.de/bmbf/de/services/impressum/impressum_node.html"}>Impressum</a>
  </li>
  <li>
   <a href="#faq">FAQ</a>
   </li>
 </ul>

</div>


<div class="column subscribe">
 <h3>Newsletter</h3>
  <div>
   <input type="email" placeholder="Your email id here" />
   <button>Subscribe</button>
  </div>

</div>

</div>

<div class="row copyright">
  <div class="footer-menu">

  <a href="/">Home</a>
  <a href="/">Popular</a>
  <a href="/">New</a>
  <a href="/">Actors</a>
  <a href="/">Sign in</a>

  </div>
   <p>Copyright &copy; 2022 Anastasia Shulman</p>
</div>
</footer>
  )
}