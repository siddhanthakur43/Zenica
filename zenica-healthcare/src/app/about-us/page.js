import React from "react";
import Card from "./Card";
import Card2 from "./Card2";

// const takeTime = async () => {
//   await new Promise((resolve) => {
//     setTimeout(resolve, 1000);
//   });
// };

const AboutUs = async () => {
  // await takeTime();
  return (
    <div className="mx-20">
      <div className="relative mb-40">
        <img
          src="/banner.jpg"
          className="my-10"
        ></img>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-black text-3xl font-bold">Welcome to Zenica Health Care!!</h2>
        </div>
      </div>
      <div>
        <Card2
          heading='VISION'
          paragraph='Our Vision is to offer State of the Art, High Quality Generic
            Pharmaceuticals and OTC Products. In addition, Quality and Services
            that exceeds industry standard to promote Good Health and Quality of
            Life.'
          imgPath='/backgroundaboutus.jpg'
        />
        <Card
          heading='MISSION'
          paragraph='Our Mission is to achieve our Vision by providing Safe, Effective,
            Top Quality Affordable Generic RX and OTC Products, which will
            result in your Good Health and enhance the Quality of your Life with
            the focus of our Highly-Qualified Employees.'
          imgPath='/Mission.jpg'
        />
        <Card2
          heading='BUSINESS DEVELOPMENT'
          paragraph='Zenica HealthCare is looking for Partnership and Licensing
            Opportunities including but not limited to Contract Research,
            Contract Manufacturing and Contract Packaging. Please contact us at
            zenicahealthcare7@gmail.com.'
          imgPath='/Business1.webp'
        />
      </div>

    </div>
  );
};

export default AboutUs;
