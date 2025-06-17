import Globe from "react-globe.gl";
import { aboutMe } from "../constants";

const About = () => {
  return (
    <section className="c-space my-20">
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
                globeImageUrl={'//unpkg.com/three-globe/example/img/earth-day.jpg'}
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
