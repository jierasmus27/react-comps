import { GoBell, GoCloudDownload } from 'react-icons/go';
import Button from '../components/Button';

function ButtonPage() {
  return <div>
    <div>
      <Button success rounded outline className="mb-5">
        <GoCloudDownload />
        Click me
      </Button>
    </div>
    <div>
      <Button warning>
        <GoBell />
        Click me
      </Button>
    </div>
    <div>
      <Button secondary rounded>Click me</Button>
    </div>
    <div>
      <Button primary outline>Click me</Button>
    </div>
    <div>
      <Button>Click me</Button>
    </div>
  </div>;
}

export default ButtonPage;
