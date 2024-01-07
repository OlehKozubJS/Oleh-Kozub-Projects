import { lazy, Suspense } from "react";

const LazyImport = ({ newComponent }) => {
  const NewApplication = lazy(() =>
    import(`../../applications/${newComponent.replaceAll(" ", "")}`)
  );

  return (
    <Suspense>
      <NewApplication />
    </Suspense>
  );
};

const MultipleAppLoader = ({ applicationName }) => {
  return <LazyImport newComponent={applicationName} />;
};

export { MultipleAppLoader };
