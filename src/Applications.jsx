import { lazy, Suspense, useState } from "react";
import { SelectItem, MultipleAppLoader } from "./common-components";
/*
const LazyImport = ({ newComponent }) => {
  const NewApplication = lazy(() =>
    import(`./applications/${newComponent.replaceAll(" ", "")}`)
  );

  return (
    <Suspense>
      <NewApplication />
    </Suspense>
  );
};
*/
function Applications() {
  const [app, setApp] = useState("CarRent");

  const selectApp = (appName) => {
    setApp(appName);
  };

  return (
    <Suspense>
      <header>
        <nav>
          <SelectItem
            items={["Car Rent", "My Clock", "Multiplication Quiz"]}
            onSelectItem={selectApp}
          />
        </nav>
      </header>
      <main>
        <MultipleAppLoader applicationName={app} />
      </main>
    </Suspense>
  );
}

export { Applications };

//<MultipleAppLoader applicationName={app} />
