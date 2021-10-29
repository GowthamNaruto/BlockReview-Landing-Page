<header>
    <!-- Content -->
  </header>
  
  <main>
    <!-- Content -->
  </main>
  
  <footer class="footer">
    <div class="footer__addr">
      <h1 class="footer__logo">
        <a href="../index"><img src="BlockReviewWithName GR03.svg" alt=""></a>
      </h1>
      
      <address>
       <p> 141 Cecil Street, #08 -07, <br>
        Singapore - 069541.</p>

        <div class="socialmedias">
          <div class="soc">
              <a href="https://www.facebook.com/blockreview.in">
                  <img src="" alt="">
              </a>
          </div>
          <div class="soc">
              <a href="https://twitter.com/_BlockReview">
                  <img src="l" alt="">
              </a>
          </div>
          <div class="soc">
              <a href="https://www.linkedin.com/company/block-review/">
                  <img src="" alt="">
              </a>
          </div>
          <div class="soc1">
              <a href="*">
                  <img src="" alt="">
              </a>
          </div>
        </div>
      </address>
    </div>
    
    <ul class="footer__nav">
      <li class="nav__item">
        <h2 class="nav__title">Company</h2>
  
        <ul class="nav__ul">
          <li>
            <a href="../about">About</a>
          </li>
  
          <li>
            <a href="../career">Career</a>
          </li>
              
          <li>
            <a href="../contact">Contact</a>
          </li>
        </ul>
      </li>
      
      <li class="nav__item nav__item--extra">
        <h2 class="nav__title">Our Brands</h2>
        
        <ul class="nav__ul nav__ul--extra">
          <li>
            MoneySwipe
          </li>
          
          <li>
            Kaarma
          </li>
          
          <li>
            LearnBSV
          </li>
          
        </ul>
      </li>
      
      <li class="nav__item">
        <h2 class="nav__title">Legal</h2>
        
        <ul class="nav__ul">
          <li>
            <a href="../privacypolicy">Privacy Policy</a>
          </li>
          
          <li>
            <a href="../terms">Terms of Use</a>
          </li>
          
          <li>
            <a href="../cookienotice">Cookie Notice</a>
          </li>
        </ul>
      </li>
    </ul>
    
    <div class="socialmedias1">
      <div class="soc">
          <a href="https://www.facebook.com/blockreview.in">
              <img src="facebook.svg" alt="">
          </a>
      </div>
      <div class="soc">
          <a href="https://www.linkedin.com/company/block-review/"> 
              <img src="linkedin.svg" alt="">
          </a>
      </div>
      <div class="soc">
          <a href="https://twitter.com/_BlockReview">
              <img src="twitter.svg" alt="">
          </a>
      </div>
      <div class="soc1">
          <a href="https://twetch.app/u/58894">
              <img src="twetch.svg" alt="">
          </a>
      </div>
    </div>
    <div class="line"></div>
    <div class="legal">
      <p>&copy; 2021 BlockReview. All rights reserved.</p>
      
      <div class="legal__links">
      
      </div>
    </div>
  </footer>

  <style>
    .soc1 img {
      opacity: 80% ;
    }
    .line {
      box-sizing: border-box;
      background-color: rgb(184, 184, 184);
      height: .8px;
      margin-bottom: 1em;
      
    }
      
      *, *:before, *:after {
  box-sizing: border-box;
}

.socialmedias {
  display: flex;
  justify-content: left;
  align-content: center;
  gap: 10px;
}
.socialmedias1 {
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 10px;
  margin-bottom: 1em;
}
.soc img {
  width: 25px;
}
.soc1 img {
  width: 21px;
  margin-top: .16em;
}



.footer {
  position: relative;
  left: 0;
  bottom: 0;
  display: flex;
  flex-flow: row wrap;
  padding: 30px 30px 20px 30px;
  color: #2f2f2f;
  background-color: whitesmoke;
  border-top: 1px solid #e5e5e5;
}

.footer > * {
  flex:  1 90%;
}


.footer__addr {
  margin-right: 5em;
  margin-bottom: .5em;
}

.footer__logo {
  font-family: helvetica;
  font-weight: bold;
  font-weight: 350;
  font-size: 1.5rem;
}
.footer__logo  img {
  width: 200px;
}

.footer__addr p {
  margin-top:1.5em ;
  font-size: small;
}

.nav__title {
  color: #172252;
  font-weight: 400;
  font-size: 15px;
}

.footer address {
  font-style: normal;
  color: #999;
}



.footer ul {
  list-style: none;
  padding-left: 0;
}

.footer li {
  line-height: 2em;
}

.footer a {
  text-decoration: none;
}

.footer__nav {
  display: flex;
	flex-flow: row wrap;
}

.footer__nav > * {
  flex: 1 50%;
  margin-right: 1.25em;
}

.nav__ul a {
  color: #999;
}
.nav__ul li {
  color: #999;
}



.legal {
  text-align: center;
  flex-wrap: wrap;
  color: #999;
}
.legal p {
  font-size: small;
  margin-bottom: .5em;
}
  
.legal__links {
  display: flex;
  align-items: center;
}



@media screen and (min-width: 2560px) {
  .legal .legal__links {
    margin-left: auto;
  }
}

@media screen and (min-width: 640px) {
  .footer__nav > * {
    flex: 1;
  }
  
  .nav__item--extra {
    flex-grow: 1;
  }
  
  .footer__addr {
    flex: 1 0px;
  }
  
  .footer__nav {
    flex: 2 0px;
  }
}
@media screen and (max-width: 640) {
  .footer__addr p {
    display: none;

  }
  .footer__nav > * {
    flex: 1;
  }
  
  .nav__item--extra {
    flex-grow: 1;
  }
  
  .footer__addr {
    flex: 1 0px;
  }
  
  .footer__nav {
    flex: 2 0px;
  }
  .legal .legal__links {
    margin-left: auto;
  }
}

  </style>