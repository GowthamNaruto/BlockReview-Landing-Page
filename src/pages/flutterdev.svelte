<script>
    import Footer from "../foot.svelte";
    import { route } from "@sveltech/routify";
    console. log("route", $route);
</script>

<section>
    <div class="career">
        <div class="flutter">
            <img src="flutter.svg" alt="Flutter logo">
        </div>
        <div class="joinus">
            <h4>Flutter Developer</h4>
            
            
            <p> <b>Job description</b> [ Full Time | Remote Work ]
                <br>We are looking for an experienced Flutter developer to engineer 
                applications that will run across Android, iOS, and the web. As a flutter developer,
                you will have experience building native applications, JavaScript knowledge, and a portfolio of
                mobile applications already published.            
            </p>
            
            <p> <b>Mandatory Skills:</b> 
                <li>Have two or more iOS/Android apps developed with Flutter.</li>
                <li>Either deployed on the AppStore/Google Play or available on Github.</li>
                <li>2+ years in mobile software development.</li>
                <li>Over one year’s developing Flutter applications for mobile.</li>
                <li>Experience with third-party libraries and APIs.</li>
                <li>Understanding of the Agile development life-cycle.</li>
                <li>Experience with automated testing and building.</li>
                <li>Experience with Git, SVN, or other version control tools.</li>
                <li>Knowledge of Java/Swift.</li>
                <li>Understanding of Android Keyboard API.</li>
                <li>Experience with optimizing applications for Material Design.</li>

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
            width: 200px;
            margin: 1em 5em;
        }
    }


</style>
    