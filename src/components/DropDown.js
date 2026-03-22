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
    return <div className="hover:bg-sky-100 rounded p-1 cursor-pointer" onClick={() => handleOptionClick(option)} key={option.value}>{option.label}</div>;
  });

  return <div className="w-48 relative">
    <div
     className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full"
     onClick={handleOpenClick}
     >
      {value?.label || 'Select...'}
    </div>
    {menuOpen && <div className="absolute top-full border rounded p-3 shadow bg-white w-full">{dropDownOptions}</div>}
  </div>;
}

export default DropDown;
