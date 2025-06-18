import Globe from "react-globe.gl";
import { aboutMe } from "../constants";
import Button from "../components/Button";
import { useState } from "react";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("huynhngoc822870@gmail.com");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <section id="about" className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl: grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {aboutMe.map((item) => {
          return (
            <div className="col-span-1 xl:row-span-3" key={item.id}>
              <div className="grid-container">
                <img
                  src={item.imageSrc}
                  alt={item.alt}
                  className="w-full sm:h-[276px] h-fit object-contain"
                />
                <div>
                  <p className="grid-headtext">{item.headText}</p>
                  <p className="grid-subtext">{item.subText}</p>
                </div>
              </div>
            </div>
          );
        })}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                showAtmosphere
                showGraticules
                globeImageUrl={
                  "//unpkg.com/three-globe/example/img/earth-night.jpg"
                }
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              />
            </div>
            <div>
              <p className="grid-headtext">
                I work remotely accross most timezones.
              </p>
              <p className="grid-subtext">
                I&apos;m based in Croatia, with remote work available.
              </p>
              <Button
                name={"Contact Me"}
                isBeam
                containerClass={"w-full mt-10"}
              />
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid3"
              className="w-full h-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Coding
                isn&apos;t just my profession - it is my passion.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid4"
              className="w-full sm:h-[276px] md:h-[126px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-xl md:text-xl font-medium text-gray_gradient text-white">
                  huynhngoc822870@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
