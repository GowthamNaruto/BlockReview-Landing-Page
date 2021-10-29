<script>
    import Footer from "../foot.svelte";
</script>

<terms>
<div class="tittle">
    <h1>Cookie Notice</h1>
</div>

<div class="line"></div>

<div class="content">
    <p>The Site uses cookies to distinguish you from other users. This helps us provide you with a good experience when
         browsing, and also allows us to improve our Site
    </p>
    <h3>Your privacy is important to us.</h3>
    <p>A cookie is a small file of letters and numbers that we store on your browser or the hard drive
         of your computer if you agree. Cookies contain information that is transferred to your computer’s hard drive.
    </p>
     <p>We use or may use the following cookies:
    </p>
    <li>Strictly necessary cookies. These are cookies that are required for the operation of our Site. They include, for example, 
        cookies that enable you to log into secure areas of our Site.
    </li>
    <li>Analytical/performance cookies. They allow us to recognise and count the number of visitors and to see how visitors 
        move around our Site when they are using it. This helps us to improve the way our Site works, for example, by ensuring 
        that users are finding what they are looking for easily.
    </li>
    <li>Functionality cookies. These are used to recognise you when you return to our Site. This enables us to personalise our 
        content for you, greet you by name and remember your preferences.
    </li>
    <li>Targeting cookies. These cookies record your visit to our Site, the pages you have visited and the links you have 
        followed. We will use this information to make our Site and advertising displayed on it (if any) more relevant to 
        your interests. We may also share this information with third parties for this purpose</li>
    <p>Please note that third parties (including, for example, advertising networks and providers of external services 
        like web traffic analysis services) may also use cookies, over which we have no control.</p>
        You can block cookies by activating the setting on your browser that allows you to refuse the setting of 
    <p>all or some cookies. However, if you use your browser settings to block all cookies (including essential cookies) 
        you may not be able to access all or parts of our Site.</p>
    <p>Most cookies (other than essential cookies) will expire within four (4) days.
    </p>
    <h3>Contact</h3>
    <p>If you have any questions or concerns about how we treat your personal information, 
        you wish to ask us to stop processing your personal information, or you would like to request a 
        copy of the personal information we hold about you, please email us at <a href="mailto:contact@blockreview.in">contact@blockreview.in</a>
    </p>    
</div>
</terms>

<Footer>
</Footer>

<style>
    a {
        color: rgb(0, 145, 212);
    }
    .tittle h1 {
        margin-top: 2em;
        text-align: center;
        font-weight:bold;
    
    }

    .line {
        height: 1px;
        box-sizing: border-box;
        background-color: rgb(206, 206, 206);
        max-width: 700px;
        margin: auto;
        margin-bottom: 2em;
        
       
    }
    .content {
        width: 700px;
        margin: auto;
        text-align: left;
        padding-bottom: 6em;
    }
    .content li {
        margin: .5em;
        margin-left: 2em;
        text-indent:-1.3em;
    
    }
    .content p {
        margin-top: 1em;
    
    }
    .content h3 {
        padding-top: 2em;
        font-weight: bold;
        font-size: x-large;
    }
    terms {
        text-align: center;
        justify-content: center;
    }
    @media (max-width:1024px) {
        .content {
            width: 600px;
            margin: auto;
        }
        
    }
        @media (max-width:640px) {
        .content {
            width: 300px;
            margin: auto;
        }
        .content p {
            font-size: small;
        }
        .content h3 {
            font-size: medium;
        }
        .tittle h1 {
            font-size: x-large;
        }
        .line {
            max-width: 300px;
        }
        li {
            font-size: small;
        }
        .tittle {
            margin: auto;
            width: 300px;
        }
    }
    
    
        
    </style>