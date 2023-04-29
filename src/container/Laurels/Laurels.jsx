import React from "react";

import "./Laurels.css";
import { images, data } from "../../constants";
import { SubHeading } from "../../components";

const AwardCard = ({ award }) => (
  <div className="app__laurels_awards-card">
    <img src={award.imgUrl} alt="award" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: "#DCCA87" }}>
        {award.title}
      </p>
      <p className="p__cormorant" style={{ fontSize: "1rem" }}>
        {award.subtitle}
      </p>
    </div>
  </div>
);

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeading title="Awards & Recognition" />
      <h2 className="headtext__cormorant">Our Laurels</h2>
      <div className="app__laurels_awards">
        {data.awards.map((award) => (
          <AwardCard award={award} key={award.title} />
        ))}
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.laurels} alt="laurel" />
    </div>
  </div>
);

export default Laurels;
