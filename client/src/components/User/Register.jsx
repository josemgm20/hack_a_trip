
import { useUser } from '../../Hooks/useUser';


const Register = () => {
    const {
        username,
        setUsername,
        password,
        setPassword,
        email,
        setEmail,
        handleRegister, // Importamos de handleRegister 
    } = useUser();

    return (

        <div className="container my-5">
            <h1 className="display-4">User Registration</h1>
            <form>
                <div className="form-group">
                    <label>Username:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button type="button" className="btn btn-primary" onClick={() => handleRegister(username, password, email)}>
                    Register
                </button>
            </form>
        </div>

    );
}

export default Register;
