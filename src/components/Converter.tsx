import { useState } from "react";
import { Params } from "../types/currency";

interface Props {
  currencies: Params[];
}
function Converter(props: Props) {
  // const [first, setfirst] = useState<Params>((() => Params));
  return (
    <div>



      
      {/* {props.currencies.map((item) => {
        // setfirst(item);
        // console.log(first.cc);
        return <div>{item.cc + "/" + item.rate}</div>;
      })} */}
    </div>
  );
}

export default Converter;
