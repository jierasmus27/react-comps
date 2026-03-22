import { useState } from 'react';

function DropDown({ options }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (value) => {
    setMenuOpen((currentMenuOpen) => !currentMenuOpen);
    setSelectedOption(value);
  };

  const handleOpenClick = () => {
    setMenuOpen((currentMenuOpen) => !currentMenuOpen);
    setSelectedOption(null);
  };

  const dropDownOptions = options.map((option) => {
    return <div onClick={() => handleOptionClick(option.value)} key={option.value}>{option.label}</div>;
  });

  console.log(dropDownOptions);

  return <div>
    <div onClick={handleOpenClick}>Select...</div>
    {menuOpen && <div>{dropDownOptions}</div>}
  </div>;
}

export default DropDown;
