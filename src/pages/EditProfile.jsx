import { useState } from 'react';
import Navbar from '../components/Navbar';

import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function EditProfile() {
  const { user, setUser } = useAuth();
  const [bio, setBio] = useState(user.bio || '');
  const navigate = useNavigate();

  const handleSave = () => {
    if (!bio.trim()) return toast.error('Bio cannot be empty');
    const updatedUser = { ...user, bio };
    setUser(updatedUser);
    const allUsers = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = allUsers.map(u => u.email === updatedUser.email ? updatedUser : u);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    toast.success('Profile updated!');
    navigate('/dashboard');
  };

  return (
    <>
    <Navbar />
    <div className="container">
      <h2>Edit Profile</h2>
      <input value={bio} onChange={(e) => setBio(e.target.value)} />
      <button onClick={handleSave}>Save</button>

      
    </div>
    </>
  );
}
