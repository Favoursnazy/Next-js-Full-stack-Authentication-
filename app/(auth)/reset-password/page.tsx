import React, { Suspense } from "react";
import ResetPassword from "./_resetPassword";

const page = () => {
  return (
    <Suspense>
      <ResetPassword />
    </Suspense>
  );
};

export default page;
