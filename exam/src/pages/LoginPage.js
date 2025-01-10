import { GoogleLogin } from '@react-oauth/google';


const LoginPage = ({ onLogin }) => {
  const handleLogin = async (credentialResponse) => {
    const user = credentialResponse.credential;
    if (user) {
      onLogin(user); // Pass user data to parent component
    }
  };

  return (
    <div className="login-page">
      <h1>Welcome to Gamified Quiz</h1>
      <GoogleLogin
        onSuccess={handleLogin}
        onError={() => console.log('Login Failed')}
      />
    </div>
  );
};
export default LoginPage;
