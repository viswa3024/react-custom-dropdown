import React, { useEffect, useState } from "react";
import withClickOutside from "./withClickOutside";

const SelectComponent = React.forwardRef(
  (
    { options, placeholder = "", onChange, selectedKey, open, setOpen },
    ref
  ) => {
    const [inputValue, setInputValue] = useState(placeholder);

    useEffect(() => {
      if (selectedKey) {
        setInputValue(options.find((o) => o.key === selectedKey).value);
      }
    }, [selectedKey, options]);

    useEffect(() => {
      if (!open && options.findIndex((o) => o.value === inputValue) === -1) {
        if (!inputValue) {
          onChange("");
        } else {
          if (selectedKey) {
            setInputValue(options.find((o) => o.key === selectedKey).value);
          } else {
            setInputValue("");
          }
        }
      }
    }, [open, options, selectedKey, inputValue, onChange]);

    const onInputChange = (e) => {
      setInputValue(e.target.value);
    };

    const onInputClick = () => {
      setOpen((prevValue) => !prevValue);
    };

    const onOptionSelected = (option) => {
      onChange !== undefined && onChange(option.key);
      onChange !== undefined && setInputValue(option.value);
      setOpen(false);
    };

    const clearDropdown = () => {
      setInputValue("");
      onChange("");
    };

    return (
      <div className="dropdown-container" ref={ref}>
        <div className="input-container" onClick={onInputClick}>
           <div className={`select-dropdown ${open ? "" : "dropdown-open"}`}>
            <div className="select-selected-option">{inputValue}</div>
           </div>

           {/* <input
            type="text"
            value={inputValue}
            placeholder={placeholder}
            onChange={onInputChange}
          /> */}


          <div className="input-arrow-container">
            <i className="input-arrow" />
          </div>
        </div>
        <div className={`dropdown ${open ? "visible" : ""}`}>
          {options
            .map((opt) => (
              <div
                key={opt.key}
                onClick={() => onOptionSelected(opt)}
                className="option"
                value={opt.key}>
                {opt.value}
              </div>
            ))}
        </div>
      </div>
    );
  }
);

export default withClickOutside(SelectComponent);
