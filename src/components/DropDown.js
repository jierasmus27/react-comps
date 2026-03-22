import { useEffect, useState, useRef} from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';
import Panel from './Panel';

function DropDown({ options, value, onChange }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const divElement = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divElement.current) {
        return;
      }

      if (!divElement.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

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

  return <div ref={divElement} className="w-48 relative">
    <Panel
      className="flex justify-between items-center cursor-pointer"
      onClick={handleOpenClick}
    >
      {value?.label || 'Select...'}
      <span className="text-lg">
        {menuOpen ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    </Panel>
    {menuOpen && <Panel className="absolute top-full">{dropDownOptions}</Panel>}
  </div>;
}

export default DropDown;
