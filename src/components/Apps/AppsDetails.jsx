import React from "react";
import { useLoaderData } from "react-router";

const AppsDetails = () => {
  const use = useLoaderData();
  console.log(use);
  return (
    <div>
      <h1>this is my details container</h1>
    </div>
  );
};

export default AppsDetails;

// import React from "react";
// import { useLoaderData } from "react-router";

// const UserDetails = () => {
//   const use = useLoaderData();
//   //   console.log(use.name);
//   const { name, website } = use;
//   return (
//     <div>
//       <h1>this is my user details</h1>
//       <h4>{name}</h4>
//       <p>{website}</p>
//     </div>
//   );
// };

// export default UserDetails;
