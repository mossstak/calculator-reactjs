import { textFit } from 'textfit';
import '../css/Screen.css'

const Screen = ({ value, preview }) => {
  return (
    <textFit className="screen" maxfontsize={60}>
      <label className="value">{value}</label>
      <label className="preview">{preview}</label>
    </textFit>
  )
}

export default Screen
