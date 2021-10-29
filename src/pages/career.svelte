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

<div class="care">
        <div class="hero">
            <img src="BC-5k-02.jpg" alt="bc">
            <h1>Together with BlockReview!</h1>
            
        </div>
       
</div>
<div class="list">
    <div class="dev">  
        <div class="job">
            <div class="lottie">
                <LottiePlayer
                    src="careerlotttie.json"
                    autoplay="{true}"
                    loop="{true}"
                    controls="{false}"
                    renderer="svg"
                    background="transparent"
                    height="{550}"
                    width="{550}"
                    controlsLayout="{controlsLayout}"
                 />
            </div>

        </div>
        <div class="ri">
            <h2>Career</h2>
            <p>We are looking for passionate individuals to join our 
            expanding team to build applications on BSV Blockchain across various industries.</p>
            <p> Professionals with a keen eye for detail, commitment to learning and self-management skills please apply!</p>
        </div> 
        
    </div>
    <div class="dev1">
        <div class="job">
            
        </div>
        <div class="ri"> 
            <h2>Vacancies:</h2>
            <li><a href="../fullstack">Full Stack Developer</a></li>
            <div class="line"></div>
            <li><a href="../sveltedev">Svelte Developer</a></li>
            <div class="line"></div>
            <li><a href="../reactdev">React Developer </a></li>
            <div class="line"></div>
            <li><a href="../flutterdev">Flutter Developer</a></li>
            <div class="line"></div>
            <li><a href="../graphic">Graphic Designer</a></li>
            <div class="line"></div>
        </div>
        
    </div>
</div>

<Footer>
</Footer>

<style>
    p {
        
        font-size: large;
    }
    .list {
        margin-top: 20em;
        display: center;
        justify-content: center;
    }

    .care img {
        width: 100%;
    }
    .line {
        background-color: rgb(1, 131, 252);
        height: .8px;
        margin-bottom: 2em;    
    }
    .line:hover {
        background-color: rgb(31, 31, 31);
    }
    h1 {
        font-family: 'Ubuntu', sans-serif;
        color: white;
        font-weight: bolder;
        margin-top: -7em;
        text-align: center;    
    }
    h2 {
        margin-bottom: 1em;
        font-size: xx-large;
        font-weight: bolder;
        text-align: left;
        
    }

    .job {
        padding: .8em 0em;
        display: flex;
        justify-content: space-between;
        margin-bottom: -15px;
        margin-right: 2em;
        width: 500px;
        

    }

    .dev {
        display: flex;
        justify-content: center;
        align-items: center;
        
        gap: 65px;
        margin: 2em 5em;
    }
    .dev1 {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: 90px;
        margin: 2em 5em;
    }
    .ri {
        text-align: left;
        width: 500px;
    }
    li {
        
        font-size: x-large;
        list-style: none; 
        margin-bottom: .2em;  
        
    }
    a {
        text-decoration: none;
        font-size: normal;
        color: rgb(1, 131, 252);    
    }
    a:hover {
            color: rgb(31, 31, 31);
    }
    @media (max-width:1024px) {
        .job {
            display: inline;
        }
        li {
            font-size: large;
        }
        h1 {
            font-size: 40px;
            margin-top: -5.3em;
        }
        .list {
            margin-top: 15em;
        }
        

    }
    @media (max-width:640px) {
 
        .lottie {
            display: none;
            width: 10px;
        }
        .dev1 {
            display: inline-block;
            justify-content: center;
            margin: 1em 1em;
        }
        .dev {
            margin-left: 2.5em;
            gap: 1px;
            
        }

        .line {
            display: none;
            display: center;
            margin-bottom: .5em;
            width: 250px;
        }
        .list {
            margin-top: 15em;
        }
        h1 {
            text-align: center;
            font-size: 30px;
            margin-top: -3.3em;
        }
        p {
            font-size: normal;
            width: 250px;
            margin-left: .1em;
        }
        .ri {
            text-align: center;
            width: 330px;
            margin: auto;
        
        }
        .ri h2 {
            text-align: center
        }

        

    }
    @media (max-width:450px) {

        .list {
            margin-top: 4em;
        }
        h1 {
            font-size: 30px;
            margin-top: -3.3em;
        }

    }



</style>