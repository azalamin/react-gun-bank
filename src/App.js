import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import './App.css';
import Card from './components/Card/Card';
import CartItem from './components/CartItem/CartItem';
import Navbar from './components/Navbar/Navbar';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '500px',
    height: '400px',
    overflowY: 'scroll'
  },
};

Modal.setAppElement('#root');
function App() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [guns, setGuns] = useState([]);
  const [cart, setCart] = useState([]);
  
  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }
  
  useEffect( () => {
    
    fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
    .then(res => res.json())
    .then(data => setGuns(data))

  }, [])

  const handleAddToCart = (gun) => {
    const newCart = [...cart, gun];
    setCart(newCart)
  }

  return (
    <div>
      <Navbar openModal={openModal} cart={cart}></Navbar>
      <div className='card-container'>
        {
         guns && guns.map(gun => <Card handleAddToCart={handleAddToCart} key={gun.id} gun={gun} />)
        }
      </div>

      <Modal
        isOpen={modalIsOpen}  
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className='close-btn-modal'>
          <button className='modal-close-button' onClick={closeModal}>X</button>
        </h2>
        <div>
          {
            cart.map(gun => <CartItem key={gun.id} gun={gun} />)
          }
        </div>
      </Modal>
    </div>
  );
}


export default App;
