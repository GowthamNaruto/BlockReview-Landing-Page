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
  
<div class="content">
    <div class="container"> 
      <div class="lottie">
      <LottiePlayer
        src="mail-animation.json"
        autoplay="{true}"
        loop="{true}"
        controls="{false}"
        renderer="svg"
        background="transparent"
        height="{360}"
        width="{360}"
        controlsLayout="{controlsLayout}"
      />
      </div>  
          <div class="row justify-content-center">
            <div class="col-md-6">
              <h3 class="heading mb-4">Have an idea? We would love <br>to hear from you.</h3>

              <form class="mb-5" method="post" id="contactForm" name="contactForm">
                <div class="row">
                  <div class="col-md-12 form-group">
                    <input type="text" class="form-control" name="name" id="name" placeholder="Your name">
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 form-group">
                    <input type="text" class="form-control" name="email" id="email" placeholder="Email">
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 form-group">
                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject">
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 form-group">
                    <textarea class="form-control" name="message" id="message" cols="30" rows="7" placeholder="Write your message"></textarea>
                  </div>
                </div>  
                <div class="row">
                  <div class="col-12">
                    <input type="submit" value="Send Message" class="btn btn-primary rounded-0 py-2 px-4">
                  <span class="submitting"></span>
                  </div>
                </div>
              </form>

              <div id="form-message-warning mt-4"></div> 
              <div id="form-message-success">
                Your message was sent, thank you!
              </div>
            </div>
          </div>
    </div>
</div>

<Footer>
</Footer>





<style>



    .row.justify-content-center{
      margin: 0;
      padding: 0;
      width: 700px;
    }
    .row.justify-content-center h3{
      font-size: x-large;
      margin-top: 1.5em;
    }
    p {
      padding: auto;
      margin: auto;
    }
    h3{
      font-size:15px;
      font-family: 'Ubuntu', sans-serif;
      color: #000; }

    a {
    -webkit-transition: .3s all ease;
    -o-transition: .3s all ease;
    transition: .3s all ease; }
    a, a:hover {
        text-decoration: none; }

    .text-black {
    color: #000; }
      

     .container {
      display: flex;
      justify-content: space-around;
      align-items: center;
      gap: 50px;
     
    }

    .heading {
    font-size: 2rem;
    font-weight: 900; }

    .form-control {
    border: none;
    background: #f3f3f3; }
    .form-control:active, .form-control:focus {
        outline: none;
        -webkit-box-shadow: none;
        box-shadow: none;
        border-color: #000;
        background: #f3f3f3; }

    .col-form-label {
    color: #000; }



    .custom-select:active, .custom-select:focus {
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    border-color: #000; }

    .btn {
    border: none;
    border-radius: 4px !important; }
    .btn.btn-primary {
        background: #000;
        color: #fff;
        padding: 15px 20px; }
    .btn:hover {
        color: #fff; }
    .btn:active, .btn:focus {
        outline: none;
        -webkit-box-shadow: none;
        box-shadow: none; }

    .box {
    padding: 40px;
    background: #fff;
    -webkit-box-shadow: -30px 30px 0px 0 rgba(0, 0, 0, 0.08);
    box-shadow: -30px 30px 0px 0 rgba(0, 0, 0, 0.08); }
    .box h3 {
        font-family: 'Ubuntu', sans-serif;
        font-size: 14px;
        margin-bottom: 30px;
        text-align: center; }

    label.error {
    font-size: 12px;
    color: red; }

    #message {
    resize: vertical; }

    #form-message-warning, #form-message-success {
    display: none; }

    #form-message-warning {
    color: #B90B0B; }

    #form-message-success {
    color: #55A44E;
    font-size: 18px;
    font-weight: bold; }

    .submitting {
    float: left;
    width: 100%;
    padding: 10px 0;
    display: none;
    font-weight: bold;
    font-size: 12px;
    color: #000;
    border-color: white;
    }

    .form-group:hover {
      box-shadow: 0px 3px 15px rgb(199, 199, 199);

    }
    @media (max-width:640px) {
    p {
      text-align: center;
      padding:20px
    }
    .col-md-6 {
      text-align: center;
      padding:20px;
      padding-top:0px ;
      max-width: 350px;
    }
    .container {
      display: inline-block;
      justify-content: space-around;
      align-items: center;
      gap: 20px; 
    }
    .row.justify-content-center{
      margin: 1em;
      padding: 0;
      width: 300px;
    }
  }

  </style>