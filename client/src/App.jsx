// Importamos los componentes. 
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Principal from "./components/Principal/Principal";



const App = () => {  
    return (
    <div className='app'>
        <Header />
        <Principal />
        <Footer />
    </div>
    );
};

export default App;
