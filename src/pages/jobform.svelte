
<script>
    import Footer from "../foot.svelte";
    import { route } from "@sveltech/routify";
    console. log("route", $route);

</script>



<div class="testbox">
    <form action="/">
      <div class="banner">
        <h1>Job Application Form</h1>
      </div>
      <p class="top-info">Thank you for your interest in working with us. Please check below for available job opportunities that meet your criteria and send your application by filling out the Job Application Form.</p>
      <div class="item">
        <p>Name<span class="required">*</span></p>
        <div class="name-item">
          <input type="text" name="name" placeholder="First" required/>
          <input type="text" name="name" placeholder="Last" required/>
        </div>
      </div>
      <div class="contact-item">
        <div class="item">
          <p>Email<span class="required">*</span></p>
          <input type="text" name="name" required/>
        </div>
        <div class="item">
          <p>Phone<span class="required">*</span></p>
          <input type="text" name="name" required/>
        </div>
      </div>
      <div class="position-item">
        <div class="item">
          <p>What position are you applying for?<span class="required">*</span></p>
          <select required>
            <option value="1">Full Stack Developer</option>
            <option value="2">SVelte Developer</option>
            <option value="3">Flutter Developer</option>
            <option value="4">React Developer</option>
            <option value="5">Graphic designer</option>
            <option value="5">Other</option>
          </select>
        </div>
        <div class="item">
          <p>Available start date<span class="required">*</span></p>
          <input type="date" name="bdate" required/>
          <i class="fas fa-calendar-alt"></i>
        </div>
      </div>
      <div class="question">
        <p>What is your current employment status?<span class="required">*</span></p>
        <div class="question-answer">
          <div>
            <input type="radio" value="none" id="radio_1" name="status" required/>
            <label for="radio_1" class="radio"><span>Employed</span></label>
          </div>
          <div>
            <input type="radio" value="none" id="radio_2" name="status" required/>
            <label for="radio_2" class="radio"><span>Self-Employed</span></label>
          </div>
          <div>
            <input type="radio" value="none" id="radio_3" name="status" required/>
            <label for="radio_3" class="radio"><span>Unemployed</span></label>
          </div>
          <div>
            <input type="radio" value="none" id="radio_4" name="status" required/>
            <label for="radio_4" class="radio"><span>Student</span></label>
          </div>
        </div>
      </div>
      <div class="item">
        <p>Submit your resume by providing your resume URL or attach file:</p>
        <input type="text" name="providing"/>
<input type="file" name="file" accept="file/*">
      </div>
      <div class="question">
        <p>Would you like to list references</p>
        <div class="question-answer">
          <div>
            <input type="radio" value="none" id="radio_5" name="references" />
            <label for="radio_5" class="radio"><span>Yes</span></label>
          </div>
          <div>
            <input type="radio" value="none" id="radio_6" name="references" />
            <label for="radio_6" class="radio"><span>No</span></label>
          </div>
        </div>
      </div>
      <div class="btn-block">
        <button type="submit" href="/">Apply Now</button>
      </div>
    </form>
  </div>

  <Footer>
  </Footer>

  <style>

    h1 {
        font-size: x-large;
        text-align: center;
        margin: 1em 1em;
    }

    div, form, input, select, p { 
    padding: 0;
    margin: 0;
    outline: none;
    font-family: helvetica;
    font-size: 14px;
    color: #666;
    line-height: 22px;
    }

    p.top-info {
    margin: 10px 0;
    }
    .testbox {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    }
    form {
    width: 75%;
    margin: 3em;
    padding: 20px;
    border-radius: 6px;
    background: #fff;
    box-shadow: 0 0 25px 0 rgb(214, 214, 214); 
    }

    input, select, textarea {
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    }
    input {
    width: calc(100% - 10px);
    padding: 5px;
    }
    input[type="date"] {
    padding: 4px 5px;
    }
    select {
    width: 100%;
    padding: 7px 0;
    background: transparent;
    }
    .item:hover p, .item:hover i, .question:hover p, .question label:hover, input:hover::placeholder {
    color: #1c87c9;
    }
    .item input:hover, .item select:hover {
    border: 1px solid transparent;
    box-shadow: 0 0 6px 0 rgb(214, 214, 214);
    color: #1c87c9;
    }
    .item {
    position: relative;
    margin: 10px 0;
    }
    input[type="date"]::-webkit-inner-spin-button {
    display: none;
    }
    .item i, input[type="date"]::-webkit-calendar-picker-indicator {
    position: absolute;
    font-size: 20px;
    color: #a9a9a9;
    }
    .item i {
    right: 2%;
    top: 30px;
    z-index: 1;
    }
    [type="date"]::-webkit-calendar-picker-indicator {
    right: 1%;
    z-index: 2;
    opacity: 0;
    cursor: pointer;
    }
    input[type=radio]  {
    display: none;
    }
    label.radio {
    position: relative;
    display: inline-block;
    margin: 5px 20px 10px 0;
    cursor: pointer;
    }
    .question span {
    margin-left: 30px;
    }
    span.required {
    margin-left: 0;
    color: red;
    }
    label.radio:before {
    content: "";
    position: absolute;
    left: 0;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    border: 2px solid #ccc;
    }
    input[type=radio]:checked + label:before, label.radio:hover:before {
    border: 2px solid #1c87c9;
    }
    label.radio:after {
    content: "";
    position: absolute;
    top: 6px;
    left: 5px;
    width: 8px;
    height: 4px;
    border: 3px solid #1c87c9;
    border-top: none;
    border-right: none;
    transform: rotate(-45deg);
    opacity: 0;
    }
    input[type=radio]:checked + label:after {
    opacity: 1;
    }
    .btn-block {
    margin-top: 10px;
    text-align: center;
    }
    button {
    width: auto;
    padding: 10px;
    border: none;
    border-radius: 5px; 
    background: #1c87c9;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
    }
    button:hover {
    background: #1e6fa0;
    }
    @media (min-width: 568px) {
    .name-item, .contact-item, .position-item {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    }
    .banner{
        font-size: 20px;
        margin: 1em;
    }
    .name-item input {
    width: calc(50% - 20px);
    }
    .contact-item .item, .position-item .item {
    width: calc(50% - 8px);
    }
    .contact-item input, .position-item input {
    width: calc(100% - 12px);
    }
    .position-item select {
    width: 100%;
    }
    }
  </style>