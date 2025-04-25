import React, { Suspense } from "react";
import ComfirmAccount from "./_confirmAccount";

const page = () => {
  return (
    <Suspense>
      <ComfirmAccount />
    </Suspense>
  );
};

export default page;
