import s from "./GoBackBtn.module.css";
import { useHistory, useLocation } from "react-router-dom";

const GoBackBtn = () => {
  const history = useHistory();
  const { state } = useLocation();

  const goBack = () => {
    history.push(state?.from || "/");
  };
  return (
    <button className={s.btn} onClick={goBack} type="button">
      {" "}
      Go back
    </button>
  );
};

export default GoBackBtn;
