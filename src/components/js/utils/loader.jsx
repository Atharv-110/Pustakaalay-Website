import React from "react";
import "../../css/utils/loader.css"
import PropagateLoader from "react-spinners/PropagateLoader";

const loader = () => {
  return (
    <>
      <div className="loader">
        <PropagateLoader
          color="#f85b4e"
          loading={true}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </>
  );
};

export default loader;
