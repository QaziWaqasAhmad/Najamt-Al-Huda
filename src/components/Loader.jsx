import { useState } from "react";
import  SyncLoader  from "react-spinners/SyncLoader";
// import ClipLoader from "react-spinners/ClipLoader";



const Loader=({isLoading})=>{
  let [color, setColor] = useState("#000");

  return (
    <div className="loader" style={{ display: isLoading ? "flex" : "none" }}>
      <SyncLoader
        color={color}
        loading={isLoading}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}


export default Loader


