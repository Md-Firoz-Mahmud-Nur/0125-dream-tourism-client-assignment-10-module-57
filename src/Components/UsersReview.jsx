const UsersReview = () => {
  return (
    <div className="col-span-2 flex flex-col gap-4 lg:col-span-1">
      <h1
        data-aos="fade-up"
        data-aos-duration="1500"
        className="text-center text-3xl font-bold"
      >
        Our Top Review
      </h1>
      <br />
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="rounded-2xl border border-black  p-4"
      >
        <h1 className="pb-2 text-2xl font-bold">Emily Smith</h1>
        <h2 className="text-lg font-medium">Amazing Experience!</h2>
        <p className="pl-4 text-gray-500">
          Our family had the most incredible vacation thanks to this tour
          company. From the stunning destinations to the knowledgeable guides,
          every moment was unforgettable. Highly recommend!
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="rounded-2xl border border-black  p-4"
      >
        <h1 className="pb-2 text-2xl font-bold">David Johnson</h1>
        <h2 className="text-lg font-medium">Exceeded Expectations!</h2>
        <p className="pl-4 text-gray-500">
          I was blown away by the level of service provided by this tour
          operator. Everything, from the seamless booking process to the
          attention to detail during the tour, exceeded my expectations. A truly
          remarkable experience!
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="rounded-2xl border border-black  p-4"
      >
        <h1 className="pb-2 text-2xl font-bold">Michael Brown</h1>
        <h2 className="text-lg font-medium">Best Tour Ever!</h2>
        <p className="pl-4 text-gray-500">
          I have been on many tours, but none compare to the quality and
          excitement of this one. The itinerary was well-planned, the
          accommodations were top-notch, and the guides were friendly and
          informative. Will definitely book again!
        </p>
      </div>
    </div>
  );
};

export default UsersReview;
