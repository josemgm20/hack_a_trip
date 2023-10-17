
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useUser } from '../../Hooks/useUser';

const Dashboard = () => {
    const { user, loading } = useUser();

    return (
        <div>
            <Header />
            <div className="container my-5">
                <h1 className="display-4">Welcome to your Dashboard</h1>
                {loading ? (
                    <p>Loading user data...</p>
                ) : user ? (
                    <div>
                        <p>Username: {user.username}</p>
                        <p>Email: {user.email}</p>
                    </div>
                ) : (
                    <p>No user data available</p>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;
