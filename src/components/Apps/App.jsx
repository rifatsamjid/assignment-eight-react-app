import React, { use } from "react";
import MainAppsCard from "./MainAppsCard";

const App = ({ appsPromise }) => {
  const users = use(appsPromise);
  console.log(users);
  return (
    <div className="grid grid-cols-4 gap-4">
      {users.map((apps) => (
        <MainAppsCard key={apps.id} apps={apps}></MainAppsCard>
      ))}
    </div>
  );
};

export default App;
