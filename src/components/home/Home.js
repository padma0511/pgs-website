import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import firstimage from "../asserts/360_F_265578022_3NbVGd1OZntLK46hjmv8EUisNYA3SqiM-removebg-preview-transformed.png";
import secondimage from "../asserts/360_F_365420014_xjsSDkKzrhq4gr9GFzP6S97H7MJyNI5B-removebg-preview.png";
import thirdimage from "../asserts/images-removebg-preview-YoS47PuGp-transformed.png";
import forthimage from "../asserts/luxury-royal-wing-letter-hd-crest-gold-color-logo-victory-logo-crest-logo-wing-logo-logo-template-vector-removebg-preview-transformed.png";
import digitalInovation from "../asserts/2017-Innovate-removebg-preview.png";
import "../home/home.css";

function Home() {
  useEffect(() => {
    AOS.init();
    const handleScroll = () => {
      const pageTop = window.pageYOffset;
      const pageBottom = pageTop + window.innerHeight;
      const tags = document.querySelectorAll(".fadein");

      tags.forEach((tag) => {
        if (tag.getBoundingClientRect().top < pageBottom) {
          tag.classList.add("visible");
        } else {
          tag.classList.remove("visible");
        }
      });
    };

    // Add event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const images = [
    {
      src:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5fc15466175e05a199fe086592c4ddcc024b40705180c10ceb600f0cc0411d66?apiKey=788432c044c44952b3b13ba78f00f3fc&",
      alt: "First gallery image",
    },
    {
      src:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/73077b2cf9745b110352de4ddbb234d21887acaec7204056d2bde54744ce7392?apiKey=788432c044c44952b3b13ba78f00f3fc&",
      alt: "Second gallery image",
    },
    {
      src:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/276ab5f6673aa5729c787f6032546b20d66e424453bac06be904d762201718a7?apiKey=788432c044c44952b3b13ba78f00f3fc&",
      alt: "Third gallery image",
    },
  ];

  return (
    <div className="homepage" id="home">
      <div className="top1-tit">
        <div className="example-10">
          <h1 data-aos="zoom-in-left" data-aos-easing="linear" data-aos-duration="1500">
            RESEARCH AND <br />
            DEVELOPMENT COMPANY
          </h1>
          <p data-aos="zoom-in-left" data-aos-easing="linear" data-aos-duration="1500">
            Our company specializes in providing innovative digital marketing
            <br />
            solutions tailored to elevate your brand's online presence and drive
            business growth.
          </p>
          <p className="Contact-Us" data-aos="zoom-in-left" data-aos-easing="linear" data-aos-duration="1500">
            <span>CONTACT US</span>
            <span>CONTACT US</span>
          </p>
        </div>

        <div className="top-2">
          <div className="container">
            <div className="top-2content fadein">
              <div className="content-wrapper">
                <div className="image-container">
                  <img loading="lazy" src={digitalInovation} alt="Digital Innovation Visual Representation" className="responsive-image fadein" />
                </div>
                <div className="text-container">
                  <h1 className="section-top-3-title">
                    <span className="highlight fadein">Digital Innovation</span>{" "}
                    for Your Business
                  </h1>
                  <p className="section-description fadein">
                    Pro Global Solution is a global leader in IT Solutions. Our
                    services are completely tailored to meet clients’
                    requirements and expectations. We always keep on exploring
                    new innovations and leverage creativity to serve across 360°
                    solutions. Are you ready to grow your business with our
                    experts’ assistance?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="top-3">
          <div className="top-3-content">
            <h1 className="top-3-title">OUR LATEST WORKS</h1>
          </div>
          <section className="gallery">
            {images.map((image, index) => (
              <img
                key={index}
                loading="lazy"
                src={image.src}
                alt={image.alt}
                className="gallery-image"
              />
            ))}
          </section>
          <div className="exploreButton-content">
            <button className="exploreButton">EXPLORE MORE</button>
          </div>
        </div>
      </div>
      <div className="slider1">
        <h1 className="slider-head">OUR CLIENTS</h1>
        <div className="slider">
          <div className="slide-track">
            {[firstimage, secondimage, thirdimage, forthimage].map((image, index) => (
              <div className="slide" key={index}>
                <img src={image} height="100" width="250" alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
