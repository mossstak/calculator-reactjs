import {textFit} from "textfit";
import "../css/Screen.css";

const Screen = ({ value, preview }) => {
  return (
    <textFit className="screen" maxFontSize={60}>
      <label className="label">{preview}</label>
      <label className="value">{value}</label>
    </textFit>
  );
};

export default Screen;
