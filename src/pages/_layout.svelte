<script>

    import Nav from "../Nav.svelte"; 
   
    
    
</script>

<Nav />

<slot />

<div class="cookie-container">
    <p>
      We use cookies in this website to give you the best experience on our
      site and show you relevant ads. To find out more, read our
      <a href="../privacypolicy">privacy policy</a> and <a href="../cookienotice">cookie policy</a>.
    </p>

    <button class="cookie-btn">
      Okay
    </button>
  </div>
  <div class="hide">
      . <div class="cookie-container active"></div>
  </div>





<style> 
.hide {
    display: none;
}

.cookie-container {
  position: fixed;
  bottom: -100%;
  left: 0;
  right: 0;
  background: rgba(47, 54, 64, .97);
  color: #f5f6fa;
  padding: 0 32px;
  box-shadow: 0 -2px 16px rgba(47, 54, 64, 0.39);
  border-radius: 10px;
  margin-bottom: 1em;
  margin-left: 1em;
  height: 170px;
  width: 500px;
  transition: 400ms;
  
}
.cookie-container.active{
    bottom: 0;
}
.cookie-container a {
 color: rgb(0, 174, 255);
}
.cookie-container p {
 margin-top: 1em;
 font-weight: medium;
}

.cookie-btn {
  background: #e84118;
  border: 0;
  color: #f5f6fa;
  padding: 12px 48px;
  font-size: 18px;
  margin-bottom: 16px;
  border-radius: 8px;
  cursor: pointer;
}
@media (max-width:640px) {
    .cookie-container {
        width: 350px;
        margin: 1em 1em;
    }
    .cookie-container p {
        font-size: small;
    }
}
</style>

