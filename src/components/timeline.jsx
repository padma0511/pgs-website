import React, { useEffect } from "react";

const Timeline = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".timeline li");

    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          if (!items[i].classList.contains("in-view")) {
            items[i].classList.add("in-view");
          }
        } else if (items[i].classList.contains("in-view")) {
          items[i].classList.remove("in-view");
        }
      }
    }

    window.addEventListener("load", callbackFunc);
    window.addEventListener("scroll", callbackFunc);

    // Cleanup
    return () => {
      window.removeEventListener("load", callbackFunc);
      window.removeEventListener("scroll", callbackFunc);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <section className="timeline">
      <ul>
        <li>
          <div>
            <time>01</time>
            <div className="discovery">
              <p>LACK OF BRAND INDENTY</p>
              {/* <p>Laws of motion</p> */}
            </div>
            <div className="scientist">
              <p>Lack of Brand Identity:</p>
              <span>
                Developing a strong and distinctive brand identity is essential
                for standing out in a crowded marketplace.
              </span>
              <p>Consequences:</p>
              <span>
                Result in difficulty distinguishing your business, low
                recognition, reduced trust, and ineffective marketing efforts.
              </span>
            </div>
          </div>
        </li>
        <li>
          <div>
            <time>01</time>
            <div className="discovery">
              <p>LACK OF BRAND INDENTY</p>
              {/* <p>Laws of motion</p> */}
            </div>
            <div className="scientist">
              <p>Lack of Brand Identity:</p>
              <span>
                Developing a strong and distinctive brand identity is essential
                for standing out in a crowded marketplace.
              </span>
              <p>Consequences:</p>
              <span>
                Result in difficulty distinguishing your business, low
                recognition, reduced trust, and ineffective marketing efforts.
              </span>
            </div>
          </div>
        </li>
        <li className="Amd">
          <div>
            <time>01</time>
            <div className="discovery">
              <p className="discovery-item">LACK OF BRAND INDENTY</p>
              {/* <p>Laws of motion</p> */}
            </div>
            <div className="scientist">
              <p className="scientist-item1">Lack of Brand Identity:</p>
              <span>
                Developing a strong and distinctive brand identity is essential
                for standing out in a crowded marketplace.
              </span>
              <p className="scientist-item1">Consequences:</p>
              <span>
                Result in difficulty distinguishing your business, low
                recognition, reduced trust, and ineffective marketing efforts.
              </span>
            </div>
          </div>
        </li>
        <li>
          <div>
            <time>01</time>
            <div className="discovery">
              <p>LACK OF BRAND INDENTY</p>
              {/* <p>Laws of motion</p> */}
            </div>
            <div className="scientist">
              <p>Lack of Brand Identity:</p>
              <span>
                Developing a strong and distinctive brand identity is essential
                for standing out in a crowded marketplace.
              </span>
              <p>Consequences:</p>
              <span>
                Result in difficulty distinguishing your business, low
                recognition, reduced trust, and ineffective marketing efforts.
              </span>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Timeline;
