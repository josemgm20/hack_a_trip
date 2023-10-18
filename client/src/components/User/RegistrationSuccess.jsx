
import { Link } from 'react-router-dom'; // Import Link


const RegistrationSuccess = () => {
    return (

        <div className="container my-5">
            <h1 className="display-4">Registration Successful</h1>
            <p>
                You are now registered. You can{' '}
                <Link to="/account">sign in</Link> now!
            </p>
        </div>


    );
};

export default RegistrationSuccess;
