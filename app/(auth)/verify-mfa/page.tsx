import React, { Suspense } from "react";
import VerifyMfa from "./_verifymfa";

const page = () => {
  return (
    <Suspense>
      <VerifyMfa />
    </Suspense>
  );
};

export default page;
