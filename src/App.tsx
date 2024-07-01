import './styles.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { useState } from 'react';

export const App = () => {
    const [modalActive, setModalActive] = useState(true);
    
    const handleModalChange = (isActive) => {
        setModalActive(isActive);
    };

    return (
        <div className='app'>
            <Header /> 
            <Main />
            <Footer />
            <Modal active={modalActive} setActive={setModalActive}/>
        </div>
    );
};

export default App;


