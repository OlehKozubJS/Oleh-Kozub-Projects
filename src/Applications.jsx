import { lazy, Suspense, useState, useEffect } from "react";

const lazyImport = (newComponent) => {
  return lazy(() => import(`./applications/${newComponent}`));
};

const CarRent = lazyImport("CarRent");
const MyClock = lazyImport("MyClock");

function Applications() {
  const [app, setApp] = useState("CarRent");

  const selectApp = (event) => {
    setApp(event.target.dataset.value);
  };

  return (
    <Suspense>
      <header>
        <nav>
          <button type="button" onClick={selectApp} data-value="CarRent">
            Car Rent
          </button>
          <button type="button" onClick={selectApp} data-value="MyClock">
            My Clock
          </button>
        </nav>
      </header>
      <main>
        {app === "CarRent" && <CarRent />}
        {app === "MyClock" && <MyClock />}
      </main>
    </Suspense>
  );
}

export { Applications };
