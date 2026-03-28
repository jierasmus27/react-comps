import ReactDOM from 'react-dom';

function Modal() {
  return ReactDOM.createPortal(
    <div>
      <div className="absolute inset-0 bg-gray-300 opacity-80"></div>
      <div className="absolute inset-40 bg-white p-10 rounded-lg">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold">Modal</h1>
          <p className="text-gray-500">Modal content</p>
        </div>
      </div>
    </div>
   , document.querySelector('.modal-container')
  );
}

export default Modal;
