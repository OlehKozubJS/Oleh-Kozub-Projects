import { useState } from "react";
import { SelectItem, MultipleAppLoader } from "./common-components";

function Applications() {
  const [app, setApp] = useState("CarRent");

  const selectApp = (appName) => {
    setApp(appName);
  };

  return (
    <div>
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
    </div>
  );
}

export { Applications };
