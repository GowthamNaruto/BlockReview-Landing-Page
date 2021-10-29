
<script>
    import Footer from "../foot.svelte";
    import { route } from "@sveltech/routify";
    console. log("route", $route);
    


    import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';

let controlsLayout = [
  'previousFrame',
  'playpause',
  'stop',
  'nextFrame',
  'progress',
  'frame',
  'loop',
  'spacer',
  'background',
  'snapshot',
  'zoom',
  'info',
];
</script>

<about-page>

<div class="head">
    <h1>About</h1>
</div>

<div class="about">
       <div class="leftlottie">       
            <LottiePlayer
                src="about-us.json"
                autoplay="{true}"
                loop="{true}"
                controls="{false}"
                renderer="svg"
                background="transparent"
                height="{450}"
                width="{450}"
                controlsLayout="{controlsLayout}"
            />
        </div> 

        
        <div class="par">
            <p> Established as an exclusive conference organizer and education provider on blockchain technology in Singapore. 
                We transformed to a cutting-edge BSV blockchain application development start-up early 2021.</p>
            <p> BlockReview's objective is to infuse innovation, transformation and optimization in data-driven enterprises, 
                utilizing unlimited transaction scalability, network security, and micro-transaction abilities of the BSV blockchain.</p>
            <p> As a full stack application development agency, BlockReview aim's to cater to the growing demand 
                for enterprise blockchain applications, platforms and solutions.</p>
            <p> BlockReview is building an immersive suite of products and services to help organizations 
                & individuals participate in the coming micro-incentives driven economy.</p>
            
        </div>

</div>
<div class="line"></div>
<div class="team">
    
        <h1>Leadership</h1>
        <h3>Meet the people taking the <br> satoshi vision forward</h3>
    
        <div class="leaders">
        <div class="leader1">
            <div class="dp">
              <img src="gowtham-dp.jpg" alt="Gowtham">
            </div>
            <h5>Gowtham Selvam</h5>
             <h6>Design Head</h6>
            
            <div class="linked">
                
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="33" height="33"
                    viewBox="0 0 48 48"
                    style=" fill:#000000;"><path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"></path><path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"></path><path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"></path><path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"></path></svg>
                    <div class="linkedin"><a href="https://www.linkedin.com/in/gowtham-selvam-499613187/">Linkedin</a></div>    
            </div>

        </div>
        <div class="leader1">
            <div class="dp">
                <img src="guru-dp.jpg" alt="Kumaraguru">
            </div>
            <h5>Kumaraguru Ramanujam</h5>
            <h6>Business Manager</h6>
            <div class="linked">
                
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="33" height="33"
                    viewBox="0 0 48 48"
                    style=" fill:#000000;"><path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"></path><path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"></path><path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"></path><path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"></path></svg>
                    <div class="linkedin"><a href="https://www.linkedin.com/in/kumaraguru7/">Linkedin</a></div>    
            </div>
        </div>
        <p>Ignited by Satoshi’s vision for a truly scalable, unbounded technology to serve billions of people. We have nourished a team of enthusiastic professionals to disrupt, innovate and forge transformative ideas of the future in every industry.        </p>

    </div>
        
    <h1>Team</h1>
    <h3>Meet our super-stars</h3>
        <div class="leaders">
        <div class="leader1">
            <div class="dp"><img src="Aditya.png" alt="Yogeshwar BK"></div>
            <h5>Aditya</h5>
             <h6>Flutter Developer</h6>
            

        </div>
        <div class="leader1">
            <div class="dp">
                <img src="yogeshwar-bk.png" alt="Yogeshwar BK">
            </div>
            <h5>Yogeshwar BK</h5>
            <h6>Full-stack Developer</h6>

        </div>
        <div class="leader1">
            <div class="dp">
                <img src="Aditiyamenon.png" alt="Aditiya Menon">
            </div>
            <h5>Aditiya Menon</h5>
             <h6>Full-stack Developer</h6>
            

        </div>
        <div class="leader1">
            <div class="dp">
                <img src="guru-t.png" alt="kumaraguru T">
            </div>
            <h5>Kumaraguru T</h5>
            <h6>Full-stack Developer</h6>

        </div>
    </div>
</div>

<section-5>
    <div class="applications">
        <div class="app">
            <h2>Community</h2>

        </div>
        <div class="app-elements">
            <div class="Apps">

               <img src="playbsv.png" alt="DogeBSV">
            </div>
            <div class="Apps">
                <img src="DogeBSV.svg" alt="Kaarma">
            </div>
            <div class="Apps">
                <img src="eatBSV.svg" alt="MoneySwipe">
            </div>
        </div>
    </div>

</section-5>

<div class="meet">
  <div class="left">
    <h1>Have more question?</h1>
    <h3>Book now to talk to our business manager.</h3>
     <a href="https://calendly.com/kumaraguru-blockreview"> <button>Book a meeting</button> </a>
  </div>
    <div class="right">
        <div class="pic">
            <img src="./guru-dp.jpg" alt="Kumaraguru">
        </div>
        <div class="email">
        <h4>Kumaraguru Ramanujam</h4>
        <p>kumaraguru at blockreview.in</p>
    </div>
  </div>
</div>
</about-page>

<Footer>
</Footer>

<style>
    .applications {
        text-align:center;
        margin-top: 3em;
    }
    .applications h2 {
        
        margin-bottom: 2em;
    }
    .app-elements {
        display:flex;
        justify-content: center;
        gap: 150px;
        margin-top:2em; 
    }

    .Apps img {
        width: 150px;
        height: 150px;
    }

    .Apps {
        align-items: center;
        cursor: pointer;
        display: center;
        height:auto;
        width:150px;
        margin-bottom: 5em;
    }
    .head h1 {
        text-align: center;
        margin-top: 1em;
    }
   

    .par p {
        font-family: 'Ubuntu', sans-serif;
        font-size: medium;
        line-height: 25px;
    }
    .par {
        padding-top: 4em;
        width: 35em;
    }
    .head h1 {
        font-family: 'Ubuntu', sans-serif;
        text-shadow: 0px 2px 20px rgba(245, 245, 245, 0.555);
        font-size: 50px;
        font-weight:lighter;

    }

    .line {
        background-color:rgb(58, 58, 58) ;
        height: 1px;
        margin: 0em 3em;
    }
    .about {
        display: flex;
        justify-content: center;
        align-content: center;
        gap: 150px;
        margin: 3em 3em;
        max-height: 500px;   
    }
    p {
        font-size: medium;
        font-family: 'Ubuntu', sans-serif;     
    }

    .pic img {
        width: 100%;
        border-radius: 160px;
        margin-top: 20px;
    }
    h4 {
        font-family: 'Ubuntu', sans-serif;
        font-weight: bolder;
        color: #172252;
        padding-top: 50px;
        font-size:20px;
        margin-bottom: 5px;
    }
    .pic {
        box-sizing: border-box;
        text-align: center;
        align-content: center;
        
        width: 150px;
        min-width: 230px;
        height:230px;
        
        margin-left: 30px;
        border-radius: 190px;
    }
    .email {
        text-align: center;   
    }
    .email p {
        font-family: 'Ubuntu', sans-serif;
        font-size: medium;
        margin-top: 1px;  
    }
    .right {
        box-sizing: border-box;
        background-color:white;
        margin-top: -120px;
        margin-bottom: -120px;
        width: 290px;
        border-radius: 20px;
        box-shadow: 0px 5px 10px black;
    } 
    h6 {
        font-family: 'Ubuntu', sans-serif;
        font-weight: bold;
        font-size: 13px;
        text-align: left;
        padding-bottom: 10px;
        margin: .2em 1.3em;
      
    }
    h5 {
        font-family: 'Ubuntu', sans-serif;
        font-weight: bolder;
        font-size: 13px;
        text-align: left;
        margin: .2em 1.3em;
      
    }
    .linked {
        display: flex;
    }
    .linkedin {
        color: #172252;
        display: left;
        padding-left: auto;
        padding-right: auto;
        
        
    }
    .linked svg {
        padding-left: 15px;
        padding-right: auto;
        padding-bottom: 10px;
    }
    a {
        color: rgb(4, 120, 214);
        font-weight: bold;
        font-size: small;
    }


    .team {
        text-align:left;
        padding:3em 5em;
        margin:auto;
        box-sizing:border-box;
        padding-bottom: 100px;
        max-width: 1600px;
      
    }

    .team h1 {
        font-weight: bold;
        font-family: 'Ubuntu', sans-serif;
        color: rgb(25, 149, 250);
    }
    .team h3 {
        font-weight: normal;
        font-family: 'Ubuntu', sans-serif;
        padding-bottom: 50px;
        color: rgb(36, 36, 36);
    }
    .team p {
        padding-bottom: 5em;   
    }
    h3 {
        font-family: 'Ubuntu', sans-serif;
        font-weight: bolder;
        color: rgb(36, 36, 36);
    }
    .meet {
        display: flex;
        justify-content: center;
        text-align:left;
        max-width: 1600px;
        padding:6em 5em;
        margin: auto;
        margin-top: 8em;
        margin-bottom: 7em;
        border-radius: 30px;
        box-sizing:border-box;
        background: #172252;
        background: -webkit-repeating-linear-gradient(to left, #172252 0%, #1FCF94 100%);
        background: -moz-repeating-linear-gradient(to left, #172252 0%, #1FCF94 100%);
        background: repeating-linear-gradient(to left, #172252 0%, #1FCF94 100%);
    }



    .left {
      padding-left: auto;
      margin: 20px ;
      line-height: 20px;
    }
    button {
      font-family: 'Ubuntu', sans-serif;
      background-color: white;
      border-radius: 20px;
      font-size: normal;
      padding: .6em;
      
    }
    button:hover {
      transition: 0.3s;
      box-shadow: 0px 5px 15px  black;
      background-color: #172252;
      color: white;
    }
    .left h1 {
      font-weight: bold;
      font-family: 'Ubuntu', sans-serif;
      color:white ;
      padding-bottom: 0;
    }
    h3 {
      font-weight: bold;
      font-family: 'Ubuntu', sans-serif;
      color: white;
      padding-top: 1px;
    }

    h1 {
        font-family: 'Ubuntu', sans-serif;
        color: #172252;
        padding: 0;
    }
    .leaders {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row-reverse;
        justify-content: center; 
        align-content: start;
        gap:60px;
        height: 100%;
        padding-top: 3rem;
        padding-bottom: 5px;
        margin-bottom: 1px;
        
    }
    
    .leader1 {
        text-align: center;
        width:20%;
        height:100%;
        box-sizing: border-box;
        background-color: white;
        border-radius: 15px;
        box-shadow: 0px 2px 8px rgb(150, 150, 150);
        
    }

    .dp {
        text-align: center;
        width:85%;
        height:70%;
        box-sizing: border-box;
        margin: 1em;
        
        border-radius: 5px;
    }
    .dp img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
    }
@media (max-width:1024px) {
    
    .par {
        margin-top: -2em;
        padding-top: 0em;

    }
    .head h1 { 
        font-size: 40px;
        padding-left: 2em;
        margin-top: 1em;
        margin-bottom: 1em;
        text-align: left;
    }
    .leftlottie  {
        display: none;
        content: name;
    }
    .about {
        text-align:left;
        padding:1em 2em;
        margin: 1em;
        margin-top: 1em;
        
        display: inline-block;      
    }

    .meet {
        display: inline-block;
        justify-content: space-around;
        padding:1em 1em;
        margin: 1em 1.5em;
    }
    .team {
        text-align:left;
        padding:1em 2em;
        margin: 1em 1em;      
    }
    .line {
        margin-top: 1em;
    }
}
@media (max-width:1024px) {
    h6 {
        font-weight: bold;
        font-size: 7px;
        text-align: left;
        padding-bottom: 10px;
        margin: 0;
        padding-left: 20px;
    }
    h5 {
        font-weight: bolder;
        font-size: 10px;
        text-align: left;
        margin: 0;
        padding-left: 20px;
    }
    .meet {
        display: flex;
        justify-content: space-around;
        text-align:left;
        padding:1em 1em;
        margin: 5em 2.5em;
        border-radius: 30px;
    }
    .right {
        box-sizing: border-box;
        background-color:white;
        margin-top: -50px;
        margin-bottom: -50px;
        width: 250px;
        border-radius: 20px;
        box-shadow: 0px 5px 10px black;
    } 
    .pic img {
        align-content: center;
        width: 70%;
        border-radius: 160px;
        margin-top: 20px;
    }
    .pic {
        box-sizing: border-box;
        align-content: center;
        width: 100px;
    
        height:130px;
        margin: 1em .7em;
        border-radius: 190px;
    }
    .right h4 {
        font-size: medium;
    }
    .right p {
        font-size: small;
    }

}
@media (max-width:640px) {
    .app-elements {
        display: inline-block;
        margin: 1em 1em;
    }
    .Apps {
        width: 100px;
    }
    .par {
        max-width: 280px;
    }
    .head h1 {
        font-size: 18px;
        text-align: center;
        padding: 0em;
    }
    .meet {
        display: inline-block;
        padding:1em 1em;
        margin: 1em 1em;
        border-radius: 30px;
        margin-bottom: 6em;
    }
    .meet h1 {
        font-size: xx-large;
    }
    .meet h3 {
        font-size: x-large;
    }
    .right {
        display: center;
        margin-top: -10px;
        height: 250px;
        margin-bottom: -50px;
        margin-left: 1.5em;
        width: 260px;
        border-radius: 20px;
        box-shadow: 0px 5px 10px black;
    } 
    .pic {
        width: 100px;
        height:130px;
        margin: 1em .7em;
        border-radius: 190px;
    }
    .leaders {
        display: inline-block;
        justify-content: center; 
        padding-top: 1rem;
        padding-bottom: 5px;
        margin: 1em 1em;    
    }
    .leader1 {
        width: 170px;
        height: 230px;
        margin: 2em 1em;
    }
    .dp {
        text-align: center;
        width:85%;
        height:68%;
        box-sizing: border-box;
        margin:1em .8em;
        padding-top: 1em;
        align-content: center;
        border-radius: 5px;
    }
    .team h3 {
        padding-bottom: .5em;
        
    }
}

</style>