const Carousel = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className="carousel max-h-[calc(60vh)] w-full rounded-3xl"
    >
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/bLrZBHY/9-800x467.webp"
          className="w-full object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a
            href="#slide4"
            className="btn btn-circle border-none bg-gray-500 text-white hover:text-gray-700"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle border-none bg-gray-500 text-white hover:text-gray-700"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/RSGX6nB/9-5-800x467.webp"
          className="w-full object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a
            href="#slide1"
            className="btn btn-circle border-none bg-gray-500 text-white hover:text-gray-700"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle border-none bg-gray-500 text-white hover:text-gray-700"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/0j2WMW7/2-9-835x467.webp"
          className="w-full object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a
            href="#slide2"
            className="btn btn-circle border-none bg-gray-500 text-white hover:text-gray-700"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-circle border-none bg-gray-500 text-white hover:text-gray-700"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/0m4Mm4x/1-XO-Hotel-Inner-Twin-room.jpg"
          className="w-full object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a
            href="#slide3"
            className="btn btn-circle border-none bg-gray-500 text-white hover:text-gray-700"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle border-none bg-gray-500 text-white hover:text-gray-700"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
