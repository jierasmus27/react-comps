import { useState } from 'react';

function DropDown({ options }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedOption, setSelectionOption] = useState(null);

  return <div>DropDown</div>;
}

export default DropDown;
