import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { user, setUser } = useAuth();
  const { darkMode, setDarkMode } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav style={navStyle(darkMode)}>
      <span style={titleStyle}>🌐 WebX App</span>

      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <button onClick={() => setDarkMode(!darkMode)} style={toggleStyle}>
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>

        {user && (
          <button onClick={handleLogout} style={logoutStyle}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

// 💅 Styling
const navStyle = (dark) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: dark ? '#111' : '#eee',
  color: dark ? '#fff' : '#000',
  padding: '1rem',
});

const titleStyle = {
  fontWeight: 'bold',
  fontSize: '1.2rem',
};

const toggleStyle = {
  padding: '0.4rem 0.8rem',
  cursor: 'pointer',
  backgroundColor: '#ccc',
  border: 'none',
  borderRadius: '4px',
};

const logoutStyle = {
  backgroundColor: '#f44336',
  border: 'none',
  padding: '0.4rem 0.8rem',
  color: '#fff',
  cursor: 'pointer',
  borderRadius: '4px',
};
