import { lazy, Suspense, useState, useEffect } from "react";

const lazyImport = (newComponent) => {
  return lazy(() => import(`./applications/${newComponent}`));
};

const CarRent = lazyImport("CarRent");
const MyClock = lazyImport("MyClock");
const MultiplicationQuiz = lazyImport("MultiplicationQuiz");

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
          <button
            type="button"
            onClick={selectApp}
            data-value="MultiplicationQuiz"
          >
            MultiplicationQuiz
          </button>
        </nav>
      </header>
      <main>
        {app === "CarRent" && <CarRent />}
        {app === "MyClock" && <MyClock />}
        {app === "MultiplicationQuiz" && <MultiplicationQuiz />}
      </main>
    </Suspense>
  );
}

export { Applications };
