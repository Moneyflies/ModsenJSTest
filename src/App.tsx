import './styles.css';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';


export const App = () => {
    return (
        <div className='app'>
            <Header />
            <Main />
            <Footer />
        </div>
    );
};

export default App;