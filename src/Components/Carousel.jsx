const Carousel = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className="carousel max-h-[calc(60vh)] w-full rounded-3xl"
    >
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/cbDtdCy/Screenshot-2024-04-30-110549.png"
          className="w-full object-cover"
        />
        <div className="absolute bottom-5  left-10 right-10 rounded-xl border border-black bg-base-100 bg-opacity-60 p-4 text-center text-2xl font-bold">
          <h1>Sundorban</h1>
          <p className="text-xl font-medium">
            Bangladesh&apos;s majestic mangrove forest, home to diverse wildlife
            and stunning natural beauty.
          </p>
        </div>
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
          src="https://i.ibb.co/C9gLrPm/malayasia.png"
          className="w-full object-cover"
        />
        <div className="absolute bottom-5  left-10 right-10 rounded-xl border border-black bg-base-100 bg-opacity-60 p-4 text-center text-2xl font-bold">
          <h1>Langkawi</h1>
          <p className="text-xl font-medium">
            Malaysia&apos;s tropical paradise, offering pristine beaches, lush
            rainforests, and vibrant culture.
          </p>
        </div>
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
          src="https://i.ibb.co/b7rNKnH/Hoi-An-Ancient-Town.png"
          className="w-full object-cover"
        />
        <div className="absolute bottom-5  left-10 right-10 rounded-xl border border-black bg-base-100 bg-opacity-60 p-4 text-center text-2xl font-bold">
          <h1>Hoi An Ancient Town</h1>
          <p className="text-xl font-medium">
            A charming UNESCO World Heritage site in Vietnam, known for its
            well-preserved architecture, lantern-lit streets, and rich cultural
            heritage.
          </p>
        </div>
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
          src="https://i.ibb.co/PQS04xq/Phnom-Penh.png"
          className="w-full object-cover"
        />
        <div className="absolute bottom-5  left-10 right-10 rounded-xl border border-black bg-base-100 bg-opacity-60 p-4 text-center text-2xl font-bold">
          <h1>Phnom Penh</h1>
          <p className="text-xl font-medium">
            The vibrant capital city of Cambodia, brimming with historic
            landmarks, bustling markets, and a blend of Khmer and French
            colonial architecture.
          </p>
        </div>
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
