import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = <span>
      { isExpanded ? <GoChevronDown /> : <GoChevronLeft /> }
    </span>;

    const handleClick = (index) => {
      if (expandedIndex === index) {
        setExpandedIndex(null);
        return;
      }

      setExpandedIndex(index);
    };

    return <div key={item.id}>
      <div
        onClick={() => { handleClick(index) }}
        className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
      >
        {item.label}
        {icon}
      </div>
      {isExpanded && <div className="border-b p-5"> {item.content}</div>}
    </div>
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
