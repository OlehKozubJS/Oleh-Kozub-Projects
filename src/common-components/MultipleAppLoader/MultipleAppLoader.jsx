import { lazy, Suspense } from "react";

const MultipleAppLoader = ({ applicationName }) => {
  const NewApplication = lazy(() =>
    import(`../../applications/${applicationName.replaceAll(" ", "")}`)
  );

  return (
    <Suspense>
      <NewApplication />
    </Suspense>
  );
};

export { MultipleAppLoader };
