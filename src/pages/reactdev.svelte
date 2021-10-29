<script>
    import Footer from "../foot.svelte";
    import { route } from "@sveltech/routify";
    console. log("route", $route);
</script>

<section>
    <div class="career">
        <div class="flutter">
            <img src="reactjs-ar21.svg" alt="React logo">
        </div>
        <div class="joinus">
            <h4>React Developer</h4>
            
            
            <p> <b>Job description</b> [ Full Time | Remote Work ]
                <br>We are looking for an experienced JavaScript developer who is proficient with React.js.
                 As a React developer, your primary focus is to develop user interface components implementing and 
                 executing them with well-known React.js workflows (such as Flux or Redux). 
                 Also ensuring that these components and the overall application are robust and easy to manage.            
            </p>
            
            <p> <b>Mandatory Skills:</b> 
                <li>3 + years experience working as a React.js Developer.</li>
                <li>In-depth knowledge of JavaScript, CSS, HTML, and front-end languages.</li>
                <li>Knowledge of REACT tools including React.js, Webpack, Enzyme, Redux, and Flux. </li>
                <li>Experience with user interface design.</li>
                <li>Knowledge of performance testing frameworks including Mocha and Jest.</li>
                <li>Good project management skills.</li>
                <li>Experience with Git, SVN, or other version control tools.</li>

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
        width: 350px;
    }

    h4 {
        
        font-weight: bold;
        color: rgb(44, 44, 44);
    }
    li {
        margin-left: 1em;
        text-indent: -1.3em;
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
            width: 200px;
            margin: 1em 5em;
        }
    }


</style>
    