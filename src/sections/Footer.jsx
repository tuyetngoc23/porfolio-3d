import React from "react";

const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-[#1C1C21] flex justify-between items-center flex-wrap gap-5">
      <div className="text-[#62646C] flex gap-2">
        <p>Tearm & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        <div className="social-icon">
          <a
            href="https://github.com/tuyetngoc23"
            target="_blank"
            rel="noreferrer"
            className="w-1/2 h-1/2"
          >
            <img src="/porfolio-3d/assets/github.svg" alt="github" />
          </a>
        </div>
        <div className="social-icon">
          <a
            href="https://www.linkedin.com/in/ngoc-huynh-1a4442317"
            target="_blank"
            rel="noreferrer"
            className="w-1/2 h-1/2"
          >
            <img src="/porfolio-3d/assets/linkedin.png" alt="linkedin"/>
          </a>
        </div>
      </div>
      <p className="text-[#62646C]">© 2025 Ngoc. All right reserved</p>
    </section>
  );
};

export default Footer;
