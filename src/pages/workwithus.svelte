<script>
    import Footer from "../foot.svelte";
    import { route } from "@sveltech/routify";
    console. log("route", $route);

    
</script>

<div class="content">

    
    <div class="container">
      <div class="illustration">
        <img src="Work-wth-us.svg" alt="work with us Illustration">
      </div>
      <div class="row align-items-stretch no-gutters contact-wrap">
        <div class="col-md-12">
          <div class="form h-100">
            <div class="titt"><h3>Work With Us</h3></div>
            <form class="mb-5" method="post" id="contactForm" name="contactForm">
              <div class="row">
                <div class="col-md-6 form-group mb-3">
                  <label for="" class="col-form-label">Name *</label>
                  <input type="text" class="form-control" name="name" id="name" placeholder="Your name">
                </div>
                <div class="col-md-6 form-group mb-3">
                  <label for="" class="col-form-label">Email *</label>
                  <input type="text" class="form-control" name="email" id="email"  placeholder="Your email">
                </div>
              </div>

              <div class="row">
                <div class="col-md-12 form-group mb-3">
                  <label for="budget" class="col-form-label">Category</label>
                  <select class="custom-select" id="budget" name="Category">
    <option selected>Choose...</option>
    <option value="$category">Consulting</option>
    <option value="$category">Business Development</option>
    <option value="$category">Services</option>
  </select>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12 form-group mb-3">
                  <label for="message" class="col-form-label">Message *</label>
                  <textarea class="form-control" name="message" id="message" cols="30" rows="4"  placeholder="Write your message"></textarea>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 form-group">
                  <input type="submit" value="Send Message" class="btn btn-primary rounded-0 py-2 px-4">
                  <span class="submitting"></span>
                </div>
              </div>
            </form>

            <div class= "form-message-warning mt-4"  id="form-message-warning mt-4"></div> 
            <div class= "form-message-success" id="form-message-success">
              Your message was sent, thank you!
            </div>

          </div>
        </div>
      </div>
    </div>

</div>
<div class="hide">
    <a href="*">.</a>
    <div class="text-black"></div>
    <div class="heading"></div>
    <div class=".contact-wrap form"></div>
    <div class=".contact-info"></div>
    <div class="label error"></div>

</div>

    
<Footer>
</Footer>

<style>

  .hide {
    display: none;
  }
  .illustration img {
    display: center;
    margin: 5em 3em;
    width:500px;
  }
  .illustration {
    float: left;
  }
    
.titt h3 {
  color: #172250;
}

a {
  -webkit-transition: .3s all ease;
  -o-transition: .3s all ease;
  transition: .3s all ease; }
a, a:hover {
    text-decoration: none !important; }

.text-black {
  color: #000; }

.content {
  padding: 7rem 0; }

.heading {
  font-size: 2.5rem;
  font-weight: 900; }

.form-control {
  border: none;
  border-bottom: 1px solid #ccc;
  padding-left: 0;
  padding-right: 0;
  border-radius: 0;
  background: none; }
  .form-control:active, .form-control:focus {
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    border-color: #000; }

.col-form-label {
  color: #000;
  font-size: 13px; }

.btn, .form-control, .custom-select {
  height: 45px;
  border-radius: 0; }

.custom-select {
  border: none;
  border-bottom: 1px solid #ccc;
  padding-left: 0;
  padding-right: 0;
  border-radius: 0; }
  .custom-select:active, .custom-select:focus {
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    border-color: #000; }

.btn {
  border: none;
  border-radius: 0;
  font-size: 11px;
  letter-spacing: .2rem;
  text-transform: uppercase;
  border-radius: 3px !important; 
}
  .btn.btn-primary {
    border-radius: 30px;
    background: rgb(24, 35, 82);
    color: #fff;
    -webkit-box-shadow: 0 15px 30px 0 rgba(24, 35, 82, 0.2);
    box-shadow: 0 15px 30px 0 rgba(24, 35, 82, 0.2);}
  .btn:hover {
    color: #fff; }
  .btn:active, .btn:focus {
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none; }

.contact-wrap {
  -webkit-box-shadow: 0 0px 20px 0 rgba(0, 0, 0, 0.05);
  box-shadow: 0 0px 20px 0 rgba(0, 0, 0, 0.05);
  border: 1px solid #efefef; }
  .contact-wrap .col-form-label {
    font-size: 14px;
    color: #b3b3b3;
    margin: 0 0 10px 0;
    display: inline-block;
    padding: 0; }
  .contact-wrap .form, .contact-wrap .contact-info {
    padding: 40px; }
  .contact-wrap .contact-info {
    color: rgba(255, 255, 255, 0.5); }
    .contact-wrap .contact-info ul li {
      margin-bottom: 15px;
      color: rgba(255, 255, 255, 0.5); }
      .contact-wrap .contact-info ul li .wrap-icon {
        font-size: 20px;
        color: #fff;
        margin-top: 5px; }
  .contact-wrap .form {
    background: #fff; }
    .contact-wrap .form h3 {
      color: #000;
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 30px; }
  .contact-wrap .contact-info {
    height: 100vh;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat; }
    .contact-wrap .contact-info a {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0; }
    @media (max-width: 1199.98px) {
      .contact-wrap .contact-info {
        height: 400px !important; } }
    .contact-wrap .contact-info h3 {
      color: #fff;
      font-size: 20px;
      margin-bottom: 30px; }


label.error {
  font-size: 12px;
  color: red; }

#message {
  resize: vertical; }

.form-message-warning, #form-message-success {
  display: none; }

.form-message-warning {
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
  color: #000; }


  @media (max-width: 640px) {
    .illustration {
      float: none;
    }
    .illustration img {
      width: 250px;
      margin: 1em 1em;
    }
  }
  @media (max-width: 1024px) {
    .illustration img {
      width: 320px;
      margin: 1em 1em;
    }
  }
</style>

