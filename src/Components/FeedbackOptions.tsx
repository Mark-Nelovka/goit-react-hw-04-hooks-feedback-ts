import React from "react";
import PropTypes from "prop-types";
import s from "./FeedBack.module.css";
import { options } from "../Interfaces/interfaces";
export default function FeedbackOptions({ onIncrement, options }: options) {
  return (
    <div>
      {options.map((button) => {
        return (
          <button
            key={button}
            className={s.btn}
            onClick={() => onIncrement(button)}
            type="button"
          >
            {button}
          </button>
        );
      })}
    </div>
  );
}

FeedbackOptions.propTypes = {
  onIncrement: PropTypes.func,
  options: PropTypes.array,
};
