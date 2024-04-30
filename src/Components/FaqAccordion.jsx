const FaqAccordion = () => {
  return (
    <div>
      <h1
        data-aos="fade-right"
        data-aos-duration="1500"
        className="my-5 rounded-t-lg  py-10 text-center text-4xl font-semibold "
      >
        Frequently Asked Questions.
        <p className="mt-2 text-lg">
          Commonly asked queries and their answers, aiding users with quick
          information.
        </p>
      </h1>
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="my-10 flex flex-col gap-4 rounded-xl border border-black p-4"
      >
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="50"
          className="collapse collapse-arrow bg-base-200 "
        >
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            How can I book a tour?
          </div>
          <div className="collapse-content">
            <p>Explore our simple tour booking process.</p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
          className="collapse collapse-arrow bg-base-200"
        >
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            What destinations do you offer tours to?
          </div>
          <div className="collapse-content">
            <p>Discover our diverse range of travel destinations.</p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="150"
          className="collapse collapse-arrow bg-base-200"
        >
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Can I customize my tour itinerary?
          </div>
          <div className="collapse-content">
            <p>Learn about our flexible travel options.</p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          className="collapse collapse-arrow bg-base-200"
        >
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            What safety measures are in place during tours?
          </div>
          <div className="collapse-content">
            <p>Find out about our commitment to traveler safety.</p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="250"
          className="collapse collapse-arrow bg-base-200"
        >
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            How can I cancel or modify my booking?
          </div>
          <div className="collapse-content">
            <p>
              Understand our booking cancellation and modification policies.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          className="collapse collapse-arrow bg-base-200"
        >
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            What should I pack for my trip?
          </div>
          <div className="collapse-content">
            <p>Get tips on essential items to bring for a memorable journey.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqAccordion;
