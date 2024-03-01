<template>
  <div id="header-hero">
    <div class="header-bg">
      <img src="https://cdn-images.imagevenue.com/66/83/18/ME17P71S_o.jpg" alt="header-image" />
    </div>
    <div class="header-content">
      <div class="text-container">
        <span>T</span>
        <span>E</span>
        <span>C</span>
        <span>H</span>
        <span>T</span>
        <span>O</span>
        <span>P</span>
        <span>I</span>
        <span>A</span>
      </div>
      <p class="heading-1">Latest Collection of 2024</p>
      <!-- <h1>Welcome to Tech<span class="logo-style">Topia</span></h1> -->
      <p class="description">
        Where Innovation Meets Tomorrow. Your gateway to cutting-edge solutions and
        digital transformation. We redefine possibilities and build a tomorrow that's
        smarter, faster, and more connected than ever before.
      </p>
      <div class="button">
        <p>shop now</p>
      </div>
    </div>
  </div>
  <section id="summer-collection">
    <div class="container">
      <div class="sc-content">
        <h1>Featured collection</h1>
        <p class="description">
          Elevate your audio experience with the immersive sound of the JBL Bluetooth
          speaker. From pumping bass to crisp highs, every note is delivered with
          precision and clarity, making your favorite music come alive like never before.
          The JBL speaker ensures that the beat never stops. Pair it effortlessly with the
          latest iPhone 14 for a seamless audio connection, taking advantage of
          cutting-edge technology to enhance your listening pleasure. With its sleek
          design and advanced features, the iPhone 14 offers not just a phone, but a
          lifestyle upgrade.
        </p>
      </div>
      <div class="sc-media">
        <div class="sc-media-bg">
          <img src="https://cdn-images.imagevenue.com/d0/37/72/ME17P723_o.png" alt="sc-image" />
        </div>
        <div class="sc-media-bg">
          <img src="https://cdn-images.imagevenue.com/4a/d5/3c/ME17P725_o.png" alt="sc-image" />
        </div>
      </div>
    </div>
  </section>
  <section id="products">
    <div class="container">
      <div class="products-header">
        <h2>popular products</h2>
      </div>
      <div class="product product-1">
        <figure>
          <img src="https://cdn-images.imagevenue.com/47/b3/28/ME17P75I_o.jpg" alt="product-image" />
          <figcaption>Xbox Series X Console 1TB</figcaption>
          <figcaption>R 10 499.99</figcaption>
        </figure>
      </div>
      <div class="product product-2">
        <figure>
          <img src="https://cdn-images.imagevenue.com/87/fd/aa/ME17PCS8_o.png" alt="product-image" />
          <figcaption>Samsung Galaxy S24 Ultra 5G</figcaption>
          <figcaption>R 24 999.99</figcaption>
        </figure>
      </div>
      <div class="product product-3">
        <figure>
          <img src="https://cdn-images.imagevenue.com/b6/0b/38/ME17P75K_o.jpg" alt="product-image" />
          <figcaption>Apple iPhone 15 128GB</figcaption>
          <figcaption>R19 999.99</figcaption>
        </figure>
      </div>
      <div class="product product-4">
        <figure>
          <img src="https://cdn-images.imagevenue.com/95/39/38/ME17PCSA_o.png" alt="product-image" />
          <figcaption>PlayStation 5 Digital Edition 1TB</figcaption>
          <figcaption>R 9 999.99</figcaption>
        </figure>
      </div>
    </div>
  </section>
  <section id="blog">
    <div class="container">
      <div class="blog-header">
        <h2>latest Reviews</h2>
        <p>Here are some reviews from our loyal customers regarding their recent purchased products!</p>
      </div>
      <div class="blog-content">
        <div class="blog-1">
          <div class="blog-1-image-holder">
            <img
              src="https://cdn-images.imagevenue.com/9b/e3/6e/ME17PH5K_o.png"
              alt="image" />
          </div>
          <div class="blog-1-content">
            <h4>Certified Lover Boy!</h4>
            <h3>Brandon Roulstone</h3>
            <p class="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <p class="button">view post</p>
          </div>
        </div>
        <div class="blog-2">
          <div class="blog-2-image-holder">
            <img
              src="https://cdn-images.imagevenue.com/76/26/fd/ME17PHA3_o.jpg"
              alt="image" />
          </div>
          <div class="blog-2-content">
            <h4>Verified Ladies Man!</h4>
            <h3>Damon Raffels</h3>
            <p class="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <p class="button">view post</p>
          </div>
        </div>
      </div>
    </div>
    <div class="back-to-top">
      <a href="#nav">
        <img title="Back to Top."
          src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412541/E-commerce%20landing%20page/icons/back_-_top_1x.png"
          alt="back to top" /></a>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>


<style>
.text-container>span {
  margin: 15px;
  padding: 5px;
  font-size: 50px;
  text-transform: uppercase;
  animation: glow 4.75s ease-in-out infinite;
}

@keyframes glow {

  0%,
  100% {
    color: white;
    text-shadow: 0 0 10px rgb(255, 255, 255), 0 0 50px rgb(181, 37, 12), 0 0 100px rgb(255, 38, 0);
  }

  10%,
  90% {
    color: tomato;
    text-shadow: none;
  }
}

.text-container>span:nth-child(2) {
  animation-delay: 0.5s;
}

.text-container>span:nth-child(3) {
  animation-delay: 1s;
}

.text-container>span:nth-child(4) {
  animation-delay: 1.5s;
}

.text-container>span:nth-child(5) {
  animation-delay: 2s;
}

.text-container>span:nth-child(6) {
  animation-delay: 2.5s;
}

.text-container>span:nth-child(7) {
  animation-delay: 3s;
}
.text-container>span:nth-child(8) {
  animation-delay: 3.5s;
}
.text-container>span:nth-child(9) {
  animation-delay: 4s;
}


#header-hero {
  width: 100%;
  display: block;
  position: relative;
}

#header-hero .header-bg {
  width: 100%;
  height: auto;
}

#header-hero .header-bg img {
  width: 900px;
  height: 600px;
  border-radius: 50px;
}

#header-hero .header-content {
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0%;
  text-align: center;
  color: #f2f2f2;
  padding: 0rem 0.4rem;
}

#header-hero .header-content p.heading-1 {
  text-transform: uppercase;
  margin: 0 auto;
  font-family: "Lato", sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 2vw;
  padding-top: 75px;
}

#header-hero .header-content h1 {
  margin: 0 auto;
  font-family: "Lato", sans-serif;
  font-size: 3rem;
  font-style: italic;
  text-transform: uppercase;
  margin-bottom: 2.4vw;
}

#header-hero .header-content h1 .logo-style {
  color: tomato;
}

#header-hero .header-content p.description {
  margin: 0 auto;
  width: 30%;
  font-family: Cambria;
  font-size: 1.4rem;
  font-style: italic;
  margin-bottom: 5vw;
}

#header-hero .header-content .button {
  margin: 0 auto;
  background-color: tomato;
  -webkit-box-shadow: 0px 1px 3.84px 0.16px rgba(0, 0, 0, 0.35);
  box-shadow: 0px 1px 3.84px 0.16px rgba(0, 0, 0, 0.35);
  width: 10rem;
  padding: 0.5rem;
}

#header-hero .header-content .button p {
  font-family: Cambria;
  font-size: 1rem;
  font-weight: 400;
  text-align: justify;
  margin: 0 auto;
  text-align: center;
  text-transform: uppercase;
}

@media only screen and (max-width: 1440px) {
  #header-hero .header-content p.description {
    width: 40%;
    margin-bottom: 3rem;
    font-size: 1.2rem;
  }

  #header-hero .header-content p.heading-1 {
    padding-top: 8vw;
  }
}

@media only screen and (max-width: 1024px) {
  #header-hero .header-bg {
    width: 100%;
    height: auto;
    overflow: hidden;
  }

  #header-hero .header-bg img {
    width: 100rem;
    height: 40rem;
    margin-left: -50%;
  }

  #header-hero .header-content p.heading-1 {
    padding-top: 20vw;
  }

  #header-hero .header-content p.description {
    width: 60%;
    margin-bottom: 4rem;
  }
}

@media only screen and (max-width: 480px) {
  #header-hero .header-content h1 {
    font-size: 2rem;
    padding: 1rem 0rem;
  }

  #header-hero .header-bg img {
    width: 100rem;
    height: 40rem;
    margin-left: -140%;
  }

  #header-hero .header-content p.description {
    width: 50%;
    margin-bottom: 3rem;
    text-align: left;
  }

  #header-hero .header-content .button {
    width: 8rem;
    padding: 0.6rem;
  }

  #header-hero .header-content .button p {
    font-size: 0.8rem;
  }
}

#summer-collection {
  width: 100%;
  display: block;
  margin: 6rem 0rem;
}

#summer-collection .container {
  margin: 0 auto;
  width: 80%;
  background-color: #ffffff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

#summer-collection .container .sc-content {
  width: 60%;
  padding-top: 3.4rem;
  padding-right: 3rem;
  padding-bottom: 2rem;
}

#summer-collection .container .sc-content h1 {
  font-family: "Franklin Gothic Medium";
  color: #000000;
  font-size: 4rem;
  font-weight: 800;
  letter-spacing: 1rem;
  line-height: 6rem;
  text-transform: uppercase;
  margin-bottom: 2vw;
}

#summer-collection .container .sc-content p.description {
  font-family: Cambria;
  color: #111;
  font-size: 1rem;
  font-style: italic;
  line-height: 2rem;
  margin-bottom: 4vw;
  padding-right: 4rem;
}

#summer-collection .container .sc-content a {
  border-bottom: 2px solid #a61458;
  text-decoration: none;
  font-family: "Franklin Gothic Medium";
  color: #000000;
  font-weight: 400;
  text-transform: uppercase;
}

#summer-collection .container .sc-media {
  width: 40vw;
}

#summer-collection .container .sc-media .sc-media-bg {
  width: 100%;
  height: auto;
  padding-top: 30px;
}

#summer-collection .container .sc-media .sc-media-bg img {
  width: 100%;
  height: 230px;
}

@media only screen and (max-width: 1024px) {
  #summer-collection {
    width: 100vw;
    display: block;
    margin-top: 0rem;
  }

  #summer-collection .container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  #summer-collection .container .sc-content {
    width: 80vw;
    padding: 8rem 2rem 2rem;
  }

  #summer-collection .container .sc-media {
    width: 80vw;
  }

  #summer-collection .container .sc-content h1 {
    font-size: 5.6vw;
    letter-spacing: 1rem;
    line-height: 4rem;
  }
}

@media only screen and (max-width: 768px) {
  #summer-collection .container .sc-content h1 {
    font-size: 5.6vw;
    letter-spacing: 0.6rem;
    line-height: 2.4rem;
    margin-bottom: 1rem;
  }
}

@media only screen and (max-width: 480px) {
  #summer-collection .container .sc-content p.description {
    font-size: 1rem;
    line-height: 1.8rem;
    margin-bottom: 4vw;
    padding-right: 1.2rem;
    text-align: justify;
    margin-bottom: 2rem;
  }
}

#products {
  width: 100%;
}

#products .container {
  display: block;
  width: 80%;
  margin: 0 auto;
  font-size: 0;
}

#products .container .products-header {
  font-size: 16px;
  text-align: center;
  margin-bottom: 3rem;
}

#products .container .products-header h2 {
  padding: 1rem 1rem;
  text-transform: uppercase;
  font-family: "Franklin Gothic Medium";
  color: #000000;
  font-size: 1.875rem;
  font-weight: 400;
  letter-spacing: 0.2rem;
  line-height: 1;
  text-align: center;
}

#products .container .products-header p {
  font-family: Cambria;
  color: rgba(89, 89, 89, 1);
  font-size: 1rem;
  font-style: italic;
  line-height: 1.5;
  text-align: center;
}

#products .container .product {
  width: 25%;
  display: inline-block;
  font-size: 16px;
  text-align: center;
  padding: 1.8rem;
  -webkit-transform: scale(1);
  transform: scale(1);
  opacity: 1;
}

#products .container .product:hover {
  -webkit-transform: scale(1);
  transform: scale(1.3);
  opacity: 1;
  -webkit-transition: opacity 1s ease-in-out 0s;
  transition: opacity 1s ease-in-out 0s;
  -webkit-transition: -webkit-transform 1s ease-in-out 0s;
  transition: -webkit-transform 1s ease-in-out 0s;
  transition: transform 1.5s ease-in-out 0s;
  transition: transform 1.5s ease-in-out 0s, -webkit-transform 1s ease-in-out 0s;
  cursor: pointer;
}

#products .container .product figure img {
  width: 240px;
  height: 290px;
}

#products .container .product figure figcaption {
  font-family: "Franklin Gothic Medium";
  color: black;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.02rem;
  text-align: center;
  padding: 1rem 0rem 0rem;
  text-transform: uppercase;
}

@media only screen and (max-width: 1024px) {
  #products .container .product {
    width: 50%;
    padding: 3rem;
  }
}

@media only screen and (max-width: 768px) {
  #products .container .product {
    width: 50%;
    padding: 2rem;
  }
}

@media only screen and (max-width: 480px) {
  #products .container .product {
    width: 100%;
  }
}

#blog {
  width: 100%;
  display: block;
  margin: 6rem 0rem 0rem;
  background-color: #ddd;
  padding: 3rem 0rem 6rem;
}

#blog .container {
  margin: 0 auto;
  width: 80%;
  background-color: #ddd;
}

#blog .container .blog-header {
  text-align: center;
  margin-bottom: 3rem;
}

#blog .container .blog-header h2 {
  padding: 2rem 1rem;
  text-transform: uppercase;
  font-family: "Franklin Gothic Medium";
  color: #000000;
  font-size: 1.875rem;
  font-weight: 400;
  letter-spacing: 0.2rem;
  line-height: 1;
  text-align: center;
}

#blog .container .blog-header p {
  font-family: Cambria;
  color: #111;
  font-size: 1rem;
  font-style: italic;
  line-height: 1.5;
  text-align: center;
}

#blog .container .blog-content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

#blog .container .blog-content .blog-1 {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 2rem 0rem;
  padding-left: 5%;
}

#blog .container .blog-content .blog-1 .blog-1-image-holder {
  width: 45%;
  height: auto;
  font-size: 16px;
}

#blog .container .blog-content .blog-1 .blog-1-image-holder img {
  width: 100%;
  height: auto;
}

#blog .container .blog-content .blog-1 .blog-1-content {
  width: 50%;
  background-color: #111;
  margin-left: -10%;
  margin-top: 4%;
  padding: 4%;
  -webkit-box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.4);
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.4);
}

#blog .container .blog-content .blog-1 .blog-1-content h4 {
  text-transform: uppercase;
  color: #ddd;
  font-weight: 400;
  font-size: 0.8rem;
  margin-bottom: 1rem;
}

#blog .container .blog-content .blog-1 .blog-1-content h3 {
  text-transform: uppercase;
  padding-bottom: 6%;
  color: tomato;
}

#blog .container .blog-content .blog-1 .blog-1-content p.description {
  font-family: Cambria;
  font-style: italic;
  padding-bottom: 8%;
  color: #ddd;
}

#blog .container .blog-content .blog-1 .blog-1-content p.button {
  width: 50%;
  text-align: center;
  font-size: 0.7rem;
  text-transform: uppercase;
  font-weight: 500;
  padding: 4%;
  color: #000;
  background-color: tomato;
  -webkit-box-shadow: 0px 1px 3.84px 0.16px rgba(0, 0, 0, 0.35);
  box-shadow: 0px 1px 5px 0.16px rgba(0, 0, 0, 0.35);
}

#blog .container .blog-content .blog-1 .blog-1-content p.button:hover {
  cursor: pointer;
  background-color: #333;
  color: #ddd;
  -webkit-transition: background-color 1s ease-in-out 0s;
  -o-transition: background-color 1s ease-in-out 0s;
  transition: background-color 1s ease-in-out 0s;
  -webkit-transition: color 400ms ease-in-out 0s;
  -o-transition: color 400ms ease-in-out 0s;
  transition: color 400ms ease-in-out 0s;
}

#blog .container .blog-content .blog-2 {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 2rem 0rem;
  padding-left: 5%;
}

#blog .container .blog-content .blog-2 .blog-2-image-holder {
  width: 45%;
  height: auto;
}

#blog .container .blog-content .blog-2 .blog-2-image-holder img {
  width: 100%;
  height: auto;
}

#blog .container .blog-content .blog-2 .blog-2-content {
  width: 50%;
  background-color: #111;
  margin-left: -10%;
  margin-top: 4%;
  padding: 4%;
  -webkit-box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.4);
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.4);
}

#blog .container .blog-content .blog-2 .blog-2-content h4 {
  text-transform: uppercase;
  color: #ddd;
  font-weight: 400;
  font-size: 0.8rem;
  margin-bottom: 1rem;
}

#blog .container .blog-content .blog-2 .blog-2-content h3 {
  text-transform: uppercase;
  padding-bottom: 6%;
  color: tomato;

}

#blog .container .blog-content .blog-2 .blog-2-content p.description {
  font-family: Cambria;
  font-style: italic;
  padding-bottom: 8%;
  color: #ddd;

}

#blog .container .blog-content .blog-2 .blog-2-content p.button {
  width: 50%;
  text-align: center;
  font-size: 0.7rem;
  text-transform: uppercase;
  font-weight: 500;
  padding: 4%;
  color: #000;
  background-color: tomato;
  -webkit-box-shadow: 0px 1px 3.84px 0.16px rgba(0, 0, 0, 0.35);
  box-shadow: 0px 1px 3.84px 0.16px rgba(0, 0, 0, 0.35);
}

#blog .container .blog-content .blog-2 .blog-2-content p.button:hover {
  cursor: pointer;
  background-color: #333;
  color: #ddd;
  -webkit-transition: background-color 1s ease-in-out 0s;
  -o-transition: background-color 1s ease-in-out 0s;
  transition: background-color 1s ease-in-out 0s;
  -webkit-transition: color 400ms ease-in-out 0s;
  -o-transition: color 400ms ease-in-out 0s;
  transition: color 400ms ease-in-out 0s;
}

@media only screen and (max-width: 1024px) {
  #blog .container .blog-content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  #blog .container .blog-content .blog-1 {
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    margin-bottom: 8%;
  }

  #blog .container .blog-content .blog-2 {
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
  }

  #blog .container .blog-content .blog-1 .blog-1-image-holder {
    width: 45%;
    height: auto;
    font-size: 16px;
    margin-left: 5%;
  }

  #blog .container .blog-content .blog-2 .blog-2-image-holder {
    width: 45%;
    height: auto;
    font-size: 16px;
    margin-left: 5%;
  }
}

@media only screen and (max-width: 480px) {
  #blog .container .blog-content .blog-1 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  #blog .container .blog-content .blog-1 .blog-1-image-holder {
    width: 100%;
    height: auto;
  }

  #blog .container .blog-content .blog-1 .blog-1-image-holder {
    margin-left: 0%;
  }

  #blog .container .blog-content .blog-1 .blog-1-content {
    width: 100%;
    margin-left: 0%;
    margin-top: -1%;
    padding: 8%;
  }

  #blog .container .blog-content .blog-1 .blog-1-content p.button {
    font-size: 0.6rem;
    padding: 4%;
  }

  #blog .container .blog-content .blog-2 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  #blog .container .blog-content .blog-2 .blog-2-image-holder {
    width: 100%;
    height: auto;
  }

  #blog .container .blog-content .blog-2 .blog-2-image-holder {
    margin-left: 0%;
  }

  #blog .container .blog-content .blog-2 .blog-2-content {
    width: 100%;
    margin-left: 0%;
    margin-top: -1%;
    padding: 8%;
  }

  #blog .container .blog-content .blog-2 .blog-2-content p.button {
    font-size: 0.6rem;
    padding: 4%;
  }
}

#contact {
  width: 100%;
  height: auto;
  background-color: #e6b58f;
}

#contact .container {
  width: 80%;
  margin: 0 auto;
  display: block;
  padding-bottom: 2rem;
  text-transform: capitalize;
}

#contact .container h4 {
  font-family: "Franklin Gothic Medium";
  color: #ffffff;
  font-size: 1.125rem;
  font-weight: 400;
  letter-spacing: 0.056rem;
  text-align: center;
  text-transform: uppercase;
  padding-top: 3rem;
  padding-bottom: 2rem;
}

#contact .container p {
  font-family: Cambria;
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0.044rem;
  text-align: center;
  padding: 0.2rem 0rem;
}

#contact .container p.email {
  margin: 0 auto;
  margin-top: 16rem;
  border-bottom: 1px solid white;
  text-align: left;
  width: 40%;
}

#contact .container p.email span {
  width: 17px;
  height: 15px;
  float: right;
}

#contact .container p.email span img {
  width: 17px;
  height: auto;
}

@media only screen and (max-width: 800px) {
  #contact .container p.email {
    width: 90%;
  }
}

@media only screen and (max-width: 920px) {
  footer p {
    width: 100%;
    text-align: center;
    margin-bottom: 0.4rem;
  }

  footer .copy-right {
    width: 100%;
    text-align: center;
    margin-left: -2.2rem;
  }
}

.back-to-top {
  padding: 1rem;
  position: fixed;
  bottom: 8%;
  right: 2%;
  z-index: 2;
  opacity: 0.2;
  background-color: rgba(255, 255, 255, 0);
}

.back-to-top:hover {
  -webkit-box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 0.4);
  opacity: 1;
}
</style>
