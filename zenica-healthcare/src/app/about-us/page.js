import React from "react";

const takeTime = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
};

const AboutUs = async () => {
  await takeTime();
  return (
    <div className="mx-20">
      <div className="mx-30">
        <img
          src="/pharma2.jpeg"
          height="500px"
          width="1000px"
          className="ml-10 mb-10 mt-10"
        ></img>
      </div>
      <div className="flex space-x-10">
        <img
          src="/backgroundaboutus.jpg"
          height="500px"
          width="500px"
          className="ml-10 mb-10 mt-10"
        ></img>
        <div className="pl-10 mb-10 mt-20">
          <h1>VISION</h1>
          <br />
          <h3>
            Our Vision is to offer State of the Art, High Quality Generic
            Pharmaceuticals and OTC Products. In addition, Quality and Services
            that exceeds industry standard to promote Good Health and Quality of
            Life.
          </h3>
        </div>
      </div>
      <div className="flex space-x-10">
        <div className="mb-10 mt-20">
          <h1>MISSION</h1>
          <br />
          <h3>
            Our Mission is to achieve our Vision by providing Safe, Effective,
            Top Quality Affordable Generic RX and OTC Products, which will
            result in your Good Health and enhance the Quality of your Life with
            the focus of our Highly-Qualified Employees.
          </h3>
        </div>
        <img
          src="/pharma1.jpeg"
          height="500px"
          width="500px"
          className="ml-10 mb-10 mt-10"
        ></img>
      </div>
      <div className="flex space-x-10">
        <img
          src="/coorporate.jpg"
          height="700px"
          width="800px"
          className="ml-10 mb-10 mt-10"
        ></img>
        <div className="mb-10 mt-20">
          <h1>Business Development</h1>
          <br />
          <h3>
            Zenica HealthCare is looking for Partnership and Licensing
            Opportunities including but not limited to Contract Research,
            Contract Manufacturing and Contract Packaging in the Area of Oral
            Solid Dosage Forms, Active Pharmaceuticals Ingredients and OTC’s. To
            inquire about Business Development Opportunities, Partnership and
            Licensing Agreements, ANDA/NDA Divestiture, Contract Research,
            Manufacturing and Packaging, please contact us at
            zenicahealthcare7@gmail.com.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
