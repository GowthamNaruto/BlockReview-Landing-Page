
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




<div class="logo"> 
    <img src="BlockReviewWithName GR03.svg" alt="BR">
</div>

<wrapper>
    <div class="left">
        <h1> Get the Blockchain <br>Advantage</h1>
        <p>Make your business more competitive by incorporating <br>
            cutting edge solutions from the forefront of the <br> blockchain revolution!</p>
            <div class="button">
                <a href="../workwithus"><button class= "work">Work With us</button></a>
                   <a href="../about"> <button class="learn">Learn More</button></a>
            </div>
    </div>
    <div class="right">
       <div class="lottie">
        <LottiePlayer
            src="nodes-animation.json"
            autoplay="{true}"
            loop="{true}"
            controls="{false}"
            renderer="svg"
            background="transparent"
            height="{340}"
            width="{340}"
            controlsLayout="{controlsLayout}"
       />
       </div>
    </div>
</wrapper>

<wrapper>

    <div class="left">
        <div class="lottie">
             <LottiePlayer
                 src="Baas.json"
                 autoplay="{true}"
                 loop="{true}"
                 controls="{false}"
                 renderer="svg"
                 background="transparent"
                 height="{300}"
                 width="{300}"
                 controlsLayout="{controlsLayout}"
             />
        </div>
     </div>
    <div class="right">
        <h2>Services</h2>
        <h3>Baas: Blockchain as a service</h3>
        <p> Enterprise app development, Web development
            <br>and Browser integrated solutions<br> that utilize the blockchain.
        </p>
    </div>

</wrapper>

<section-3>
    <div class="left">
        <h2>Why BlockReview</h2>
        <p>As one of the first movers in the space of BSV <br>application development in India. </p>
            <br>
           <p>We hope to capitalize on our access to the immense <br>software talent pool here in the region to deliver <br>cost-effective and quality scalable products and <br>services on the BSV Blockchain. 
        </p>

    </div>
    <div class="right">
        <div class="lottie3">
            <LottiePlayer
            src="whybr.json"
            autoplay="{true}"
            loop="{true}"
            controls="{false}"
            renderer="svg"
            background="transparent"
            height="{300}"
            width="{300}"
            controlsLayout="{controlsLayout}"
       />
        </div>
    </div>
</section-3>

<section-4>
    <div class="six-s">
        <h2>Why BSV?</h2>
        <h3>6s of BSV</h3>
    </div>
    <div class="grids">
        <div class="row1">
            <div class="sixicons">
                <img src="Scalable.svg" alt="Scalable Icon">
                <h3>Scalable</h3>
                <p>Proven block propagation capabilities of 2 GB on the BSV network establishes BSV as the only blockchain capable of boundless scaling today.</p>
            </div>
            <div class="sixicons">
                <img src="Secure.svg" alt="Secure Icon">
                <h3>Secure</h3>
                <p>Commitment to professional engineering and quality assurance ensures enterprise security.</p>
            </div>
            <div class="sixicons">
                <img src="Stable.svg" alt="Stable Icon">
                <h3>Stable</h3>
                <p>A set in stone base layer approach assures applications built on BSV guaranteed stability.</p>
            </div>
        </div>
        <div class="row1">
            <div class="sixicons">
                <img src="Sustainable.svg" alt="Sustainable Icon">
                <h3>Sustainable</h3>
                <p>As the most efficient technology with scale, BSV is highly cost effective, sustainable and eco-friendly.</p>
            </div>
            <div class="sixicons">
                <img src="Swift.svg" alt="SwiftIcon">
                <h3>Swift</h3>
                <p>Unlimited block size driven by market dynamics ensures instant transaction and nano payments as the fundamental future of the BSV Blockchain.</p>
            </div>
            <div class="sixicons">
                <img src="Smart.svg" alt="Smart Icon">
                <h3>Smart</h3>
                <p>Scripting capabilities reenabled on the BSV protocol unleashes smart value exchange automations.</p>
            </div>
        </div>  
    </div>

</section-4>

<section id="team" class="pb-5">
    <div class="container">
        <h5 class="section-title h1">Applications</h5>
        <div class="row">
            <!-- Team member -->
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                    <p><img class=" img-fluid" src="LearnBSV.svg" alt="card image"></p>
                        
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <p class="card-text">Empowering fledgling talent through BSV to collaborate in the incentive economy.</p>
                                    <ul class="list-inline">
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="*">
                                                <i class="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="*">
                                                <i class="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="*">
                                                <i class="fa fa-skype"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="*">
                                                <i class="fa fa-google"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- ./Team member -->
            <!-- Team member -->
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                    <p><img class=" img-fluid" src="nftplatform.svg" alt="card image"></p>

                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <p class="card-text">Immersive digital assets marketplace of the future, Unlocking true NFT with BSV.</p>
                                    <ul class="list-inline">
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="*">
                                                <i class="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="*">
                                                <i class="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="*">
                                                <i class="fa fa-skype"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="*">
                                                <i class="fa fa-google"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- ./Team member -->
            <!-- Team member -->
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                    <p><img class=" img-fluid" src="MoneySwipe-N.svg" alt="card image"></p>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <p class="card-text">Streaming instant nano-payments with boundless connectivity.</p>
                                    <ul class="list-inline">
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="*">
                                                <i class="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="*">
                                                <i class="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="*">
                                                <i class="fa fa-skype"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="*">
                                                <i class="fa fa-google"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- ./Team member -->
            
        </div>
    </div>
</section>

<div class="faqtittle">
    <h2>Frequently Asked <br> Questions</h2>
</div>

<section-6>
    <div class="left">
        <div class="left-faq">
            <LottiePlayer
            src="leaf.json"
            autoplay="{true}"
            loop="{true}"
            controls="{false}"
            renderer="svg"
            background="transparent"
            height="{300}"
            width="{300}"
            controlsLayout="{controlsLayout}"
        />
         </div>
    </div>
        <div class="accordion">
          <div class="accordion-item">
            <div class="accordion-item-header">
                What is Blockchain? 
            </div>
            <div class="accordion-item-body">
                <div class="accordion-item-body-content">
                    Blockchain is a time-stamped distributed system of recording information within a block of time that makes it difficult or impossible to change, hack or cheat the system.

                </div>
            </div>
          </div>
          <div class="accordion-item">
            <div class="accordion-item-header">
                What is the benefit of Blockchain
            </div>
            <div class="accordion-item-body">
                <div class="accordion-item-body-content">
                    Blockchain increases trust without the need for a third party, it enables transparency, security, immutability and traceability of data in the system whilst bringing down cost and adding efficiency.
                </div>
            </div>
          </div>
          <div class="accordion-item">
            <div class="accordion-item-header">
                What is DLT? Is it different from Blockchain?
            </div>
            <div class="accordion-item-body">
                <div class="accordion-item-body-content">
                     DLT is a decentralized database managed by multiple participants, across multiple nodes. Blockchain is a type of DLT which uses economic incentives to bring consensus amongst participating entities.
                </div>
            </div>
          </div>
          <div class="accordion-item">
            
            <div class="accordion-item-header">
                Can bitcoin blockchain be used without having access to bitcoin?
            </div>
            <div class="accordion-item-body">
                <div class="accordion-item-body-content">
                    Yes it can be!
                    Bitcoin is the enabling technology of the Internet of Value (IoV), in which securely stored valuable entities are intended to be transferred as easily as information.
                    However there are use-cases where bitcoin is not needed in a blockchain application
                    Whether to use BSV blockchain in such instances is a whole another question.
                </div>
            </div>
        </div>
    </div>
    
</section-6>
<div class="hide">
    <div class="accordion-item-header active"></div>
</div>




<Footer>
</Footer>





<style>


    .left p{
        margin-bottom: .2em;
    }



    .work {
        margin-right: 1em;
    }
    .hide {
        display: none;
    }

    .faqtittle {
        text-align: center;
    }
    .faqtittle h2 {
        font-family: 'Ubuntu', sans-serif;
        margin-top: 1.7em;
        margin-bottom: -2em;
    }
    .sixicons {
        box-sizing: border-box;
        background-color: white;
        border-radius: 10px;
        box-shadow: 0px 5px 15px rgb(167, 167, 167);
        min-width:90px ;
        max-width: 200px;
        min-height: 250px;
    }
    .sixicons p {
        margin: .5em .5em;
    }
    .logo {
        text-align: center; 
                  
    }
    .logo img {
        display: center;   
        width: 650px;
        margin: 2em 2em;
    }
    .grids img {
        width: 50px;
        padding: 1em 0em;
    }
    .right {
        margin: 1em 1em;
        padding: 2em 1em;
        margin-right:6em ;
    }
    .accordion {
        margin: 1em 1em;
        padding: 2em 1em;
        margin-right:6em ;
    }
    .left {
        margin-left: 6em;
        margin: 1em 1em;
        padding: 1em 1em;
        justify-content: flex-end;
    }

    wrapper {
        background-color: #F5FEFC;
        align-items: center;
        display: flex;
        justify-content: center;
        gap: 80px;   
    }


    section-3 {
        align-items: center;
        display: flex;
        justify-content: center;
        gap: 100px;
    }
    section-3 h2 {
        margin-bottom: .4em;
    }
    section-4 {
        text-align: center;
        background-color: #F5FEFC;   
    }
    h1 {
        
        font-weight: bold;
        font-family: 'Ubuntu', sans-serif;
        text-transform: uppercase;
        color: #172252;
        font-size: 41px;
    }
    p {
        font-family: 'Ubuntu', sans-serif;
        font-size: 18px;
    }
    .learn { 
        cursor: pointer;
    	color: rgb(0, 0, 0);
	    background-color: rgb(197, 197, 197);
	    outline: none;      
    }
    .learn:not(:disabled):active {
	cursor: pointer;
	background-color: #172252;
    }

    h2 {
        margin-bottom: 1em;
        font-family: 'Ubuntu', sans-serif;
        font-weight: bold;
        color: #172252;
        font-size: 35px; 
        margin-bottom: .2%;   
    }
    h3 {
        font-family: 'Ubuntu', sans-serif;
        color: #172252;
        font-size: 25px;
        margin-top: 1%;
    }


    .row1 {
        align-items: center;
        display: flex;
        justify-content: center;
        gap: 50px;
        background-color: #F5FEFC;
        margin: 0em 1em;
        padding-bottom: 2em;
    }

    .grids h3 {
        text-align: center;
    }
    .grids p {
        font-family: 'Ubuntu', sans-serif;
        text-align: center;
        font-size: 15px;
    }

    .six-s {
        background-color:#F5FEFC;
        padding: 10px;
    }    
    .applications {
        text-align:center;
        margin-top: 3em;
    }
    .app-elements {
        display:flex;
        justify-content: center;
        gap: 150px;
        margin-top:5em; 
    }

    .Apps img {
        width: 150px;
        height: 130px;
    }

    .Apps {
        align-items: center;
        cursor: pointer;
        display: center;
        height:auto;
        width:100px;
        margin-bottom: 5em;
    }

    .Apps:hover {
        
        transition: ease-in .2s;
        box-sizing: border-box;
        border-radius: 10px;
        background-color: rgba(231, 231, 3, 0.726);
        

        
        cursor: pointer;   
    }
    .Apps img:hover {
        transition: ease-in .2s;
        opacity: 1%;
        
    }

    section-6 {    
        align-items: center;
        display: flex;
        justify-content: center;
        gap: 60px;
        padding-top:5rem;
    }
    .left-faq {
        display: center;
        padding: 1em 1em;
    }
    .accordion {
        width: 500px;
        max-width: 500px;
        margin: 2em 2em;
        margin-top: 6em;
        
    }
    .accordion-item {
    font-family: 'Ubuntu', sans-serif;
    background-color: #fff;
    color: #111;
    margin: 1rem 0;
    border-radius: 0.5rem;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.25);
    }
    .accordion-item-header {
    font-family: 'Ubuntu', sans-serif;
    padding: 0.5rem 3rem 0.5rem 1rem;
    min-height: 3.5rem;
    line-height: 1.25rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    }
 
    .accordion-item-header::after {
    content: "\002B";
    font-size: 2rem;
    position: absolute;
    right: 1rem;
    }
    .accordion-item-header.active::after {
    content: "\2212";
    }
    .accordion-item-body {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
    }
    .accordion-item-body-content {
    padding: 1rem;
    line-height: 1.5rem;
    border-top: 1px solid;
    border-image: linear-gradient(to right, transparent, #34495e, transparent) 1;
    }



    #team {
    background: rgb(240, 240, 240);
}
.row {
    display: flex;
    justify-content: center;
    gap: 50px;
}
.col-xs-12.col-sm-6.col-md-4 {
    max-width: 200px;
}

.btn-primary {
    color: #fff;
    background-color: #007b5e;
    border-color: #007b5e;
}

section {
    padding: 60px 0;
}

section .section-title {
    text-align: center;
    color: #172252;
    margin-bottom: 40px;
    
}

#team .card {
    border: none;
    background: rgb(240, 240, 240);
}

.image-flip:hover .backside,
.image-flip.hover .backside {
    -webkit-transform: rotateY(0deg);
    -moz-transform: rotateY(0deg);
    -o-transform: rotateY(0deg);
    -ms-transform: rotateY(0deg);
    transform: rotateY(0deg);
    border-radius: .25rem;
}

.image-flip:hover .frontside,
.image-flip.hover .frontside {
    -webkit-transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);
    -o-transform: rotateY(180deg);
    transform: rotateY(180deg);
}

.mainflip {
    -webkit-transition: 1s;
    -webkit-transform-style: preserve-3d;
    -ms-transition: 1s;
    -moz-transition: 1s;
    -moz-transform: perspective(1000px);
    -moz-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    transition: 1s;
    transform-style: preserve-3d;
    position: relative;
}

.frontside {
    position: relative;
    -webkit-transform: rotateY(0deg);
    -ms-transform: rotateY(0deg);
    z-index: 2;
    margin-bottom: 30px;
}

.backside {
    position: absolute;
    top: 0;
    left: 0;
    background: white;
    -webkit-transform: rotateY(-180deg);
    -moz-transform: rotateY(-180deg);
    -o-transform: rotateY(-180deg);
    -ms-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
    -webkit-box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
    -moz-box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
    box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
}

.frontside,
.backside {
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transition: 1s;
    -webkit-transform-style: preserve-3d;
    -moz-transition: 1s;
    -moz-transform-style: preserve-3d;
    -o-transition: 1s;
    -o-transform-style: preserve-3d;
    -ms-transition: 1s;
    -ms-transform-style: preserve-3d;
    transition: 1s;
    transform-style: preserve-3d;
}

.frontside .card,
.backside .card {
    max-height: 200px;
}

.backside .card a {
    font-size: 13px;
    color: #172252;
}
.backside p {
    font-size: 16px;
    
}

.frontside .card .card-title,
.backside .card .card-title {
    color: #172252;
}

.frontside .card .card-body img {
    width: 120px;
    height: 120px;
    border-radius: 5%;
}




@media (max-width:640px) {
    wrapper {
        display: inline-block;  
        width: 375px;  
    }
    wrapper h1 {
        font-size: x-large; 
        text-align: center;  
    }
    wrapper p {
        font-size: medium; 
        text-align: center;  
    }
    wrapper h2 {
        font-size: xx-large; 
        text-align: center;  
    }
    wrapper h3 {
        font-size: x-large; 
        text-align: center;  
    }
    .right {
        max-width: 355x;
        margin: 1em 1em;
    }
    .left {
        max-width: 355px;
        margin: 1em 1em;
    }
    section-3 h2 {
        font-size: xx-large;
        text-align: center;
    }
    section-3 p {
        font-size: medium; 
        text-align: center;  
    }
    .button {
        display: flex;
        justify-content: center;
        gap: 20px;
    }
    section-3 {
        display: inline-block;  
        width: 375px; 
    }
    section-6 {
        display: inline-block;
        width: 350px;
    }
    section-4 {
        display: inline-block;
        text-align: center;
        background-color: #F5FEFC;    
    }

    .row1 {
        align-items: center;
        display: inline-block;
        justify-content: space-around;
        margin: 0em 0em;
        padding-bottom: 2em;
        gap: 15px 5px;
    }
    .grids {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 1em 1em;
        gap: 10px 10px;
        padding-bottom:10px;    
    }


    .sixicons {
        min-width:110px ;
        max-width: 300px;
        min-height: 180px;
        max-height: 230px;
        margin-bottom: 1em;
    }
    .sixicons p {
        font-size: x-small;
        margin: 1em 1em;
    }
    .sixicons h3 {
        font-size: medium;   
    }
    .logo img {
        width: 1px;
        margin: 0;
    }
    .six-s {
        width: 365px;
        padding: 0;
    }
    .app-elements {
        display: inline-block;
        margin: 1em 1em;
    }
    .Apps {
        width: 100px;
    }
    .accordion {
        max-width: 300px;
    }
    .cookie-container {
    height: 150px;
    width: 350px;
    }
    .cookie-container p {
    font-size: small;
    }

    .row {
        display: inline-block;
        justify-content: center;
        margin-left:5em ;
    }
    .container {
        margin-left:auto;
    }
}

</style>
