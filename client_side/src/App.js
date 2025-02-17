
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout/Layout';


function App() {
    return (
        <>
        <HelmetProvider>
        <Layout/>
        </HelmetProvider>
        </>
    );
}


export default App;