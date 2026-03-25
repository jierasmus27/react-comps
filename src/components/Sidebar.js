import Link from "./Link";

function Sidebar() {
  const links = [
    { label: 'Dropdown', path: '/' },
    { label: 'Accordion', path: '/accordion' },
    { label: 'Button', path: '/buttons' },
  ];

  return <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
    {links.map((link) => {
      return <Link key={link.label} to={link.path} className="mb-3">{link.label}</Link>
    })}
  </div>;
}

export default Sidebar;
