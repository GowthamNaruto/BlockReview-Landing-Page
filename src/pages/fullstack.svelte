<script>
    import Footer from "../foot.svelte";
    import { route } from "@sveltech/routify";
    console. log("route", $route);
</script>

<section>
    <div class="career">
        <div class="flutter">
            <img src="full.svg" alt="Full Stack logo">
        </div>
        <div class="joinus">
            <h4>Full Stack Developer</h4>
         <p> <b>Job description</b> [ Full Time | Remote Work ]
            <br>We are looking for an experienced full stack developer with a keen interest to learn blockchain development. 
            As a Full Stack Developer, you should be comfortable around both front-end and back-end coding languages, development 
            frameworks and third-party libraries. You should also be a team player with a knack for visual design and utility.
            
         </p>
         <p>You’ll be a key member of the team tasked with contributing to a number of high-value projects </p>

         <p> <b>Requirements:</b>
            <li>Work with development teams and product managers to ideate software solutions.</li>
            <li> Design client-side and server-side architecture.</li>
            <li> Build the front-end of applications through appealing visual design.</li>
            <li> Develop and manage well-functioning databases and application.</li>
            <li> Write effective APIs.</li>
            <li> Test software to ensure responsiveness and efficiency.</li>
            <li> Troubleshoot, debug and upgrade software.</li>
            <li> Create security and data protection settings.</li>
            <li> Build features and applications with a cross-platform responsive design.</li>
            <li> Write technical documentation.</li>
            <li> Work with data scientists and analysts to improve software.</li>  
         </p>
         <p> <b>Mandatory Skills:</b>
            <li> Knowledge and experience of all stages of software development in a highly agile working environment.</li>
            <li> Experience of design, development, testing and deployment of web applications on a cloud environment.</li>
            <li> Proven experience in writing readable code, creating extensive documentation for existing code, and refactoring previously written code.</li>
            <li> Hands-on development experience using ReactJs, NodeJS, PHP and Python.</li>
            <li> Hands-on experience in designing and developing applications using cross platform frameworks and microservices.</li>
            <li> Knowledge of multiple front-end languages and libraries (e.g. HTML/ CSS, JavaScript, XML, jQuery).</li>
            <li> Knowledge of multiple back-end languages (e.g. C#, Java, Python) and JavaScript frameworks (e.g. Angular, React, Node.js).</li>
            <li> Familiarity with databases (e.g. MySQL, MongoDB), web servers (e.g. Apache) and UI/UX design.</li>
            <li> Expert in integration & development of 3rd third party and custom API’s.</li>
            <li> Knowledge of Go.</li>
            <li> Strong Agile development experience. </li>
            <li> Experience with automated testing and building. </li>
            <li> Experience with Git, SVN, or other version control tools. </li>
            <li> Enjoy solving problems.</li>
            <li> Able to work on your own initiative. </li>
            <li> Must be proactive and take ownership from start till closure. </li>
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
        width: 250px;
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
    li {
        margin-left: 1em;
        text-indent: -1.3em;
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
            width: 200px;
            margin: 1em 5em;
        }
    }


</style>