import React from "react";
import { Link } from "react-router-dom";

import ReactPlayer from"react-player";
import { useRef } from "react";

const VIDEO_PATH =
  '<iframe   src="https://www.youtube.com/embed/28Rto9JjTCA?si=VC09FW8uiAAJU6Wp"  autoplay;  ></iframe>';
const Videos = () => {
  const playerRef = useRef(null);

  return (
    <>
    <div className="bggg">
      <div className="phone ">
        <ul className="list-unstyled">
          <li>
            <Link to="/Firstpage" className="gaaayu">
              LOGO
            </Link>
          </li>
          <li>
            <Link to="/Secondpage "  className="gaaayu">BANNERS</Link>
          </li>
          <li>
            <Link to="/Videos"   className="gaaayu">VIDEOS</Link>
          </li>
        </ul>
      </div>

      <div className="work">
        <div className=" container-fluid "> 
          <div className=" row">
            <div className="col-lg-4 work1">
              <Link to="/Firstpage">
                <button className="btn-dark glow-on-hover">LOGO</button>
              </Link>
              <Link to="/Secondpage">
                <button className="btn-dark glow-on-hover">BANNERS</button>
              </Link>
              <Link to="/Videos">
                <button className="btn-dark glow-on-hover">VIDEOS</button>
              </Link>
            </div>
            <div className="col-lg-8 ">
            <div className="row">
                <div className="col-lg-6">
              <ReactPlayer
                ref={playerRef}
                url={VIDEO_PATH}
                controls={true}
                className="loading"
                width={390}
                height={280}
              />
              
              <ReactPlayer
                ref={playerRef}
                url={VIDEO_PATH}
                controls={true}
                className="loading"
                width={390}
                height={280}
              />
            
            </div>
           
            <div className="col-lg-6">
              <ReactPlayer
                ref={playerRef}
                url={VIDEO_PATH}
                controls={true}
                className="loading"
                width={390}
                height={280}
              />
            
            <ReactPlayer
                ref={playerRef}
                url={VIDEO_PATH}
                controls={true}
                className="loading"
                width={390}
                height={280}
              />
</div>
           
            </div>
            </div>
          </div>
         </div> 
      </div>
      </div>
     
    </>
  );
};
export default Videos;
