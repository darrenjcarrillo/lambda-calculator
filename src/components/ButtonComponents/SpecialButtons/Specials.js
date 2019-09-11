import React, { useState } from "react";

//import any components needed
import SpecialButton from "./SpecialButton";

import { specials } from "../../../data";

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialState] = useState(specials);

  return (
    <div>
      {specialState.map((item, key) => (
        <SpecialButton key={key} special={item} />
      ))}
    </div>
  );
};

export default Specials;
