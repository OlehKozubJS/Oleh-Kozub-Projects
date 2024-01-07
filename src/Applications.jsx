import { useState } from "react";
import { SelectItem, MultipleAppLoader } from "./common-components";
import { applications } from "./db";

function Applications() {
  const [app, setApp] = useState("CarRent");

  const selectApp = (appName) => {
    setApp(appName);
  };

  return (
    <div>
      <header>
        <nav>
          <SelectItem items={applications} onSelectItem={selectApp} />
        </nav>
      </header>
      <main>
        <MultipleAppLoader applicationName={app} />
      </main>
    </div>
  );
}

export { Applications };
