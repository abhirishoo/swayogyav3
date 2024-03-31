import { FaFacebookSquare, FaTwitterSquare, FaGooglePlusSquare, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
    <div className="bg-[#02569C] font-['work sans'] h-[45vh] font-semibold text-white  md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className="w-full md:w-1/5">
          <h1 className=" text-xl pb-4 text-white">
            <img className="w-20" src="" alt="img" />
          </h1>
          <p className="text-sm">
            Our team consists of dedicated engineers & doctors, each specializing in unique fields.
          </p>
        </div>
        <div>
          <h1 className=" text-xl pb-4 pt-5 text-white md:pt-0">About Us</h1>
          <nav className="flex flex-col gap-2">
            <div className="hover:text-hoverColor transition-all cursor-pointer">
              About
            </div>
            <div className="hover:text-hoverColor transition-all cursor-pointer">
              Engineers & Doctors
            </div>
          </nav>
        </div>
        <div>
          <h1 className=" text-xl pb-4 pt-5 text-white md:pt-0">Services</h1>
          <nav className="flex flex-col gap-2">
            <div className="hover:text-hoverColor transition-all cursor-pointer">
              PEMF Therapy Devices
            </div>
            <div className="hover:text-hoverColor transition-all cursor-pointer">
              Rehabilitation Services
            </div>
            <div className="hover:text-hoverColor transition-all cursor-pointer">
              Educational Resources & Training
            </div>
            <div className="hover:text-hoverColor transition-all cursor-pointer">
              Personalized Consultation and <br /> Technical Support
            </div>
          </nav>
        </div>
        <div className="w-full md:w-1/4">
          <h1 className=" text-xl pb-4 pt-5 md:pt-0 text-white">Follow Us</h1>
          <nav className="flex flex-row rounded-md gap-2 ">
            <a className="hover:text-hoverColor" target="_blank" href="" rel="noreferrer">
              <FaFacebookSquare size={35} />
            </a>          
            <a className="hover:text-hoverColor" target="_blank" href="" rel="noreferrer">
              <FaTwitterSquare size={35} />
            </a>
            <a className="hover:text-hoverColor" target="_blank" href="" rel="noreferrer">
              <FaGooglePlusSquare size={35} />
            </a>
            <a className="hover:text-hoverColor" target="_blank" href="" rel="noreferrer">
              <FaInstagramSquare size={35} />
            </a>
          </nav>
        </div>
      </div>
     
      <div> 
       
      </div>
    </div>
      <div className="bg-[#263238] w-full h-[25vh] text-white">
      <div className="text-start px-40 py-10 ">
      Copyright ©1995-2023 by the American Academy of Orthopaedic Surgeons. All material on this website is protected by copyright. All rights reserved. This website also contains material copyrighted by third parties.
        </div>
      </div>
      </div>
  );
};

export default Footer;
