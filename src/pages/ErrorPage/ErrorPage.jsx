import React from "react";
import page from "../../error-404.png";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <figure className="flex justify-center">
        <img src={page} alt="" />
      </figure>
      <h1 className="text-3xl font-bold">Oops, page not found!</h1>
      <p>The page you are looking for is not available.</p>
      <button className="btn w-28 bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white mb-52">
        Go Back!
      </button>
    </div>
  );
};

export default ErrorPage;
