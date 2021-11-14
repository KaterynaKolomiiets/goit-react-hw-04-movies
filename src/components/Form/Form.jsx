import { useState } from "react";
import s from "./Form.module.css";
import PropTypes from "prop-types";

const Form = ({ onSubmit }) => {
  const [query, setQuery] = useState();

  const updateState = ({ target: { value } }) => {
    setQuery(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
    setQuery("");
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input
        className={s.input}
        type="text"
        placeholder="Start typing..."
        value={query || ""}
        onChange={updateState}
      ></input>
      <button type="submit" className={s.button}>
        Search
      </button>
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func,
};

export default Form;
