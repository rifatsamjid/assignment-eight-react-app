import React from "react";

const ErrorApps = () => {
  return (
    <div>
      <div className="text-center text-gray-500 mt-12 text-lg font-medium flex flex-col justify-center gap-3">
        <figure className="flex justify-center">
          <img src={ErrorApps} alt="" />
        </figure>
        <h1 className="text-3xl font-bold">OPPS!! APP NOT FOUND</h1>
        <p>
          The App you are requesting is not found on our system. please try
          another apps
        </p>

        {/* <div onClick={() => navigate("/")} className="flex justify-center ">
                        <button className="btn w-28 bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white">
                          Go Back!
                        </button>
                      </div> */}
      </div>
    </div>
  );
};

export default ErrorApps;
