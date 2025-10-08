import React, { Suspense } from "react";
import App from "./App";

const appsPromise = fetch("/Apps.json").then((rest) => rest.json());

const Apps = () => {
  return (
    <div>
      <div className="text-center mt-24">
        <h1 className="text-2xl font-bold">Our All Applications</h1>
        <p className="mt-3">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <Suspense fallback={<span>Loading.....</span>}>
        <App appsPromise={appsPromise}></App>
      </Suspense>
    </div>
  );
};

export default Apps;
