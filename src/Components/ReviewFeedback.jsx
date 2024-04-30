import Feedback from "./Feedback";
import UsersReview from "./UsersReview";

const ReviewFeedback = () => {
  return (
    <div>
      <h1
        data-aos="fade-right"
        data-aos-duration="1500"
        className="my-5 rounded-t-lg  py-10 text-center text-4xl font-semibold "
      >
        Give your Feedback to improve our service.
        <p className="mt-2 text-lg">
          Share your valuable feedback to help us enhance your experience!
        </p>
      </h1>
      <div className="grid grid-cols-2 gap-6">
        <UsersReview></UsersReview>
        <Feedback></Feedback>
      </div>
    </div>
  );
};

export default ReviewFeedback;
