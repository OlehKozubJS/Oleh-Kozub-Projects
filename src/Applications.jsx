import { lazy, Suspense, useState, useEffect } from "react";

const lazyImport = (newComponent) => {
  return lazy(() => import(`./applications/${newComponent}`));
};

const CarRent = lazyImport("CarRent");
const MyClock = lazyImport("MyClock");

function Applications() {
  return (
    <div>
      <CarRent />
      <MyClock />
    </div>
  );
}

export { Applications };
