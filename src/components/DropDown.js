import { useState } from 'react';

function DropDown({ options, selection, onChange }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOptionClick = (option) => {
    setMenuOpen((currentMenuOpen) => !currentMenuOpen);
    console.log(option)
    onChange(option);
  };

  const handleOpenClick = () => {
    setMenuOpen((currentMenuOpen) => !currentMenuOpen);
  };

  const dropDownOptions = options.map((option) => {
    return <div onClick={() => handleOptionClick(option)} key={option.value}>{option.label}</div>;
  });

  console.log(dropDownOptions);

  let content = "Select.."
  if (selection) {
    content = selection.label;
  }

  return <div>
    <div onClick={handleOpenClick}>{content}</div>
    {menuOpen && <div>{dropDownOptions}</div>}
  </div>;
}

export default DropDown;
