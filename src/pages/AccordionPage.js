import Accordion from '../components/Accordion';

function AccordionPage() {
  const items = [
    {
      id: 1,
      label: 'label 1',
      content: 'You can'
    },
    {
      id: 2,
      label: 'label 2',
      content: 'You can 1'
    },
    {
      id: 3,
      label: 'label 3',
      content: 'You can 2'
    }
  ];

  return <Accordion items={items} />
}

export default AccordionPage;
