import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Profile() {
  const [playerId, setPlayerId] = useState('');
  const [username, setUsername] = useState('Guest');

  useEffect(() => {
    const id = localStorage.getItem('playerId') || Math.floor(100000 + Math.random() * 900000).toString();
    localStorage.setItem('playerId', id);
    setPlayerId(id);
    
    const name = localStorage.getItem('username') || 'Player';
    setUsername(name);
  }, []);

  return (
    <div style={styles.container}>
      {/* Nav */}
      <nav style={styles.nav}>
        <Link href="/" style={styles.logo}>🎮 GameHub</Link>
        <Link href="/" style={styles.backLink}>← Back to Home</Link>
      </nav>

      <div style={styles.profileCard}>
        <div style={styles.avatarBig}>👤</div>
        <h1 style={styles.username}>{username}</h1>
        
        <div style={styles.idBox}>
          <p style={styles.idLabel}>🎮 PLAYER ID</p>
          <p style={styles.idNumber}>#{playerId}</p>
          <p style={styles.idSub}>Your unique 6-digit identifier</p>
        </div>

        <div style={styles.stats}>
          <div style={styles.stat}>
            <span style={styles.statNum}>0</span>
            <span style={styles.statLabel}>Games Played</span>
          </div>
          <div style={styles.stat}>
            <span style={styles.statNum}>0</span>
            <span style={styles.statLabel}>Friends</span>
          </div>
          <div style={styles.stat}>
            <span style={styles.statNum}>0</span>
            <span style={styles.statLabel}>Badges</span>
          </div>
        </div>

        <button style={styles.editButton}>✏️ Edit Profile</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: '#f0f2f5',
    padding: '20px',
  },
  nav: {
    background: 'white',
    padding: '15px 30px',
    borderRadius: '12px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '600px',
    margin: '0 auto 20px',
  },
  logo: {
    color: '#00B656',
    fontSize: '22px',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  backLink: {
    color: '#666',
    textDecoration: 'none',
  },
  profileCard: {
    background: 'white',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '40px',
    borderRadius: '16px',
    textAlign: 'center',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
  },
  avatarBig: {
    fontSize: '80px',
    marginBottom: '10px',
  },
  username: {
    color: '#333',
    fontSize: '28px',
    marginBottom: '20px',
  },
  idBox: {
    background: '#f0f8f0',
    padding: '25px',
    borderRadius: '12px',
    border: '2px solid #00B656',
    marginBottom: '20px',
  },
  idLabel: {
    color: '#666',
    fontSize: '14px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
  idNumber: {
    fontSize: '48px',
    fontWeight: '900',
    color: '#00B656',
    letterSpacing: '4px',
    fontFamily: 'monospace',
  },
  idSub: {
    color: '#999',
    fontSize: '13px',
    marginTop: '5px',
  },
  stats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '15px',
    margin: '20px 0',
  },
  stat: {
    background: '#f5f5f5',
    padding: '15px',
    borderRadius: '8px',
  },
  statNum: {
    display: 'block',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#00B656',
  },
  statLabel: {
    color: '#999',
    fontSize: '13px',
  },
  editButton: {
    background: '#00B656',
    color: 'white',
    border: 'none',
    padding: '12px 30px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    width: '100%',
  },
};
