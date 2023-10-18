
import { useUser } from '../../Hooks/useUser';

const SignIn = () => {
    const { email, setEmail, password, setPassword, error, handleSignIn } = useUser();


    return (

        <div className="container my-5">
            <h1 className="display-4">Sign In to Your Account</h1>
            <form>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                <button type="button" className="btn btn-primary" onClick={handleSignIn}>
                    Sign In
                </button>
                {error && <p className="text-danger mt-2">{error}</p>}
                <p className="mt-3">Don't have an account? <a href="/register">Register here</a></p>
            </form>
        </div>

    );
}

export default SignIn;
