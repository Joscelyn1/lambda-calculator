import React, { useState } from "react";
import { specials } from '../../../data';
import SpecialButton from './SpecialButton';

//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {
  const [ourSpecials, setSpecials] = useState(specials);
  const specialsMapped = ourSpecials.map(elements => elements);
  // STEP 2 - add the imported data to state

  return (
    <div className="special-buttons-container">
      {ourSpecials.map(info => (
        <SpecialButton key={info} specialsMapped={info} specialButtonClick={props.value} />
      ))}

    </div>
  );
};

export default Specials;
