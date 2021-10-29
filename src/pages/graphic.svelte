<script>
    import Footer from "../foot.svelte";
    import { route } from "@sveltech/routify";
    console. log("route", $route);
</script>

<section>
    <div class="career">
        <div class="flutter">
            <img src="graphic.svg" alt="Flutter logo">
        </div>
        <div class="joinus">
            <h4>Graphic Designer</h4>
            
            
            <p> <b>Job description</b> [ Full Time | Remote Work ]
                <br>
                We are looking for a Graphic Designer/Illustrator, with up-to-date tool & subject 
                knowledge and trends, to design solutions with high visual impact. You will be working with a 
                dynamic team of Product Managers, Business Development Managers, UI/UX Designers, Developers,
                and Merchant stakeholders in order to produce beautiful illustrations to showcase the core product/feature
                in question.           
            </p>
            
            <p> <b>Mandatory Skills:</b> 
                <li>Proficient with at least one high-fidelity vector based drawing tool: Adobe Illustrator, Corel Draw, Procreate etc. Adobe Photoshop is a plus.</li>
                <li>Strong digital design background.</li>
                <li>Strong portfolio to showcase creativity and ability to tell stories through illustrations, sketches, drawings, paintings etc.</li>
                <li>Creative, ownership driven and has good communication & presentation skills.</li>
                <li>Ability to understand complex products and convert to graphical representations within timelines while maintaining quality.</li>
                <li>Create icon sets and illustrations from concept to production. Should be able to ideate, sketch variations, and come up with a consistent set of icons and illustrations conforming to the use case and theme of the app/product.</li>
                <li>Understand the product(s) to capture the essence as well as understand the target audience to capture their interest.</li>
                <li>Use and recommend the best design methods, applications, software and techniques.</li>
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
    