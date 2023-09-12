import { Textfit } from "react-textfit";
import "../css/Screen.css";

const Screen = ({ value, preview }) => {
  return (
    <Textfit className="screen" mode="single" max={70}>
      <label className="label">{preview}</label>
      <label className="">{value}</label>
    </Textfit>
  );
};

export default Screen;
