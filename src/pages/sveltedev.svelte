<script>
    import Footer from "../foot.svelte";
    import { route } from "@sveltech/routify";
    console. log("route", $route);
</script>

<section>
    <div class="career">
        <div class="flutter">
            <img src="svelte.svg" alt="Svelte logo">
        </div>
        <div class="joinus">
            <h4>Svelte Developer</h4>
            
            
            <p> <b>Job description</b> [ Full Time | Remote Work ]
                <br>We are looking for an experienced vanilla JavaScript and svelte developer.
                 As a Front End Developer you will have expert knowledge of browser DOM and transforming UI/UX 
                 design wireframes to actual code that will produce visual elements of the application          
            </p>
            
            <p> <b>Mandatory Skills:</b> 
              <li>3+ years of UI/Presentation Layer hands-on Svelte development experience.</li>
              <li>Excellent analytical and problem solving skills.</li>
              <li>Experience working in an Agile + Scrum environment.</li>
              <li>Experience implementing User Stories and writing unit tests.</li>
              <li>Acute knowledge and understanding of ES6 and TypeScrip.t</li>
              <li>Experience with React, VanillaJS and/or other JS frameworks (React, EmberJS, VueJS).</li>
              <li>Ability to create precise interfaces from wireframes or visual mockups using maintainable and reusable code.</li>
              <li>Understanding of UI design standards and best practices (Material, etc.)</li>
              <li>Ability to write software that consumes RESTful web services.</li>
              <li>Mastery of JSON.</li>
              <li>Mastery of cross-browser HTML and CSS.</li>
              <li>Understanding of using Containers and Docker development environment.</li>
              <li>Experience with Git, SVN, or other version control tools.</li>
              <li>Ability to keep up with evolving web standards (HTML5, CSS3, ES6+) and best practices.</li>

            </p>
            
            <a href="../jobform"><button type="button" class="btn btn-primary btn-sm">Apply now</button></a>
        </div>
</div>
</section>

<Footer>
</Footer>

<style>
    section {
        align-content: center;
    }
    img {
        margin: 15em 5em;
        align-content: center;
        width: 200px;
    }
    li {
        margin-left: 1em;
        text-indent: -1.3em;
    }

    h4 {
        
        font-weight: bold;
        color: rgb(44, 44, 44);
    }
    .career {
        display: flex;
        justify-content: center;
        margin: 2rem 7rem;
        gap: 1px;
       
        
        
    }
    .joinus p {
        
        text-align: left;
        line-height: 28px;
        max-width: 500px;
        font-size: medium;
        padding: 15px 0px;
        
        
    }


    .joinus {
        text-align: left;
        padding: 20px;
        margin-left: 60px;
        margin-top: 2rem;
    }
    .joinus h4 {
        text-align: left;
    }
    p {
        line-height: 25px;
        margin: 2px;
        padding: 2px;
        padding-top: -10px;
        
    }
    a {
        font-size: large;  
        text-align: left;
    }

        

    @media (max-width:1024px) {
        .career {
            display: inline-block;
            
            margin-right: 0px;
            margin-left: 0px;
            padding:0;
            width: auto;
        }
        .joinus p {
           padding: 0;
           margin-left:1px ;
        }
        img {
            width: 150px;
            margin: 1em 5em;
        }
    }


</style>
    