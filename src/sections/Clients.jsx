import { clientReviews } from "../constants/index";

const Clients = () => {
  return (
    <section id="client" className="c-space my-20">
      <h3 className="head-text">Hear from My Clients</h3>
      <div className="client-container">
        {clientReviews.map(({ id, review, name, img, position }) => {
          return (
            <div key={id} className="client-review">
              <div className="text-white font-light">{review}</div>
              <div className="client-content">
                <div className="flex gap-3">
                  <img
                    src={img}
                    alt={name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold text-[#E4E4E6]">{name}</p>
                    <p className="text-[#62646C] md:text-base text-sm font-light">
                      {position}
                    </p>
                  </div>
                </div>
                <div className="flex self-end items-center gap-2">
                  {Array.from({ length: 5 }).map((_, index) => {
                    return (
                      <img
                        key={index}
                        src="/porfolio-3d/assets/star.png"
                        alt="star"
                        className="w-5 h-5"
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Clients;
