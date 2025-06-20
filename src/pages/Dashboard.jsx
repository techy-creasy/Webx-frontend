import Navbar from '../components/Navbar';

import { useAuth } from '../context/AuthContext';

import { Link } from 'react-router-dom';

export default function Dashboard() {
  const { user } = useAuth();
  return (
<>
    <Navbar />
    <div className="container">
      <h2>Welcome, {user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Bio: {user.bio || 'No bio yet.'}</p>
      <Link to="/edit-profile"><button>Edit Profile</button></Link>
    </div>
    </>
  );
}
