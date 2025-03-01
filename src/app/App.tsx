import { Navbar } from '../widgets/Navbar';
import { Sidebar } from '../widgets/Sidebar';
import { AppRouter } from './routes';

const App = () => {
    return (
        <div className='bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text min-h-screen'>
            <Navbar />
            <div className='flex'>
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
};

export default App;
