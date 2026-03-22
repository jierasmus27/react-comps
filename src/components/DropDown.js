import { useState } from 'react';

function DropDown({ options, value, onChange }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOptionClick = (option) => {
    setMenuOpen((currentMenuOpen) => !currentMenuOpen);
    onChange(option);
  };

  const handleOpenClick = () => {
    setMenuOpen((currentMenuOpen) => !currentMenuOpen);
  };

  const dropDownOptions = options.map((option) => {
    return <div onClick={() => handleOptionClick(option)} key={option.value}>{option.label}</div>;
  });

  console.log(dropDownOptions);

  return <div>
    <div onClick={handleOpenClick}>{value?.label || 'Select...'}</div>
    {menuOpen && <div>{dropDownOptions}</div>}
  </div>;
}

export default DropDown;
