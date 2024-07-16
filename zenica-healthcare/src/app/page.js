import React from 'react'

const Home = () => {
  return (
    <div className="flex flex-col mx-4 md:flex-row md:space-x-10 md:mx-20">
      <img
        src="/Medicine.jpg"
        height="992px"
        width="600px"
        className="rounded-lg mb-5 mt-5 md:mb-10 md:mt-10"
      ></img>
      <div className="mb-2 mt-4 md:mb-10 md:mt-20">
        <p className="text-green-600 text-sm md:text-lg"> WHO WE ARE</p>
        <br />
        <p className="text-gray-600 text-wrap text-sm md:text-lg">
          Zenica Healthcare is a new and rapidly growing company that
          specializes in Pharmaceutical Manufacturing, Research & Development,
          Packaging, and Marketing of Oral Solid Dosage Forms including, but not
          limited to, Generic Rx and OTC (Over-the-Counter) Products.
        </p>
        <br/>
        <p className="bg-slate-50 text-sm md:text-lg text-black italic rounded-lg text-pretty">
          Zenica Healthcare management team is composed of highly experienced
          professionals with a proven track record of 7 years with expertise in
          Formulation, Analytical Science, Quality, Compliance and Regulatory.
        </p>
      </div>
    </div>
  );
}

export default Home