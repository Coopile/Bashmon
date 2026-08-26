import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [playerId, setPlayerId] = useState('');
  const [username, setUsername] = useState('Guest');

  useEffect(() => {
    // Generate 6-digit ID on first visit
    const savedId = localStorage.getItem('playerId');
    const savedName = localStorage.getItem('username');
    
    if (savedId) {
      setPlayerId(savedId);
    } else {
      const newId = Math.floor(100000 + Math.random() * 900000).toString();
      localStorage.setItem('playerId', newId);
      setPlayerId(newId);
    }
    
    if (savedName) {
      setUsername(savedName);
    }
  }, []);

  return (
    <div style={styles.container}>
      {/* === NAV BAR === */}
      <nav style={styles.nav}>
        <div style={styles.navLeft}>
          <h1 style={styles.logo}>🎮 GameHub</h1>
          <div style={styles.navLinks}>
            <a href="/" style={styles.navLink}>Home</a>
            <a href="/games" style={styles.navLink}>Games</a>
            <a href="/avatar" style={styles.navLink}>Avatar</a>
            <a href="/download" style={styles.navLink}>Download</a>
          </div>
        </div>
        <div style={styles.navRight}>
          <div style={styles.playerBadge}>
            <span style={styles.playerId}>#{playerId || '------'}</span>
            <span style={styles.playerName}>{username}</span>
          </div>
          <Link href="/profile">
            <div style={styles.avatarIcon}>👤</div>
          </Link>
        </div>
      </nav>

      {/* === HERO BANNER === */}
      <div style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Welcome to GameHub</h1>
          <p style={styles.heroSub}>Millions of games. One platform.</p>
          <a href="/download">
            <button style={styles.playButton}>🎮 Play Now</button>
          </a>
        </div>
      </div>

      {/* === GAME GRID === */}
      <div style={styles.section}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>🔥 Featured Games</h2>
          <a href="/games" style={styles.seeAll}>See All →</a>
        </div>
        <div style={styles.gameGrid}>
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} style={styles.gameCard}>
              <div style={{...styles.gameThumb, background: `hsl(${i*60}, 70%, 50%)`}}>
                <span style={styles.gameEmoji}>🎮</span>
              </div>
              <h3 style={styles.gameName}>Game {i}</h3>
              <p style={styles.gamePlayers}>👥 1.2K playing</p>
            </div>
          ))}
        </div>
      </div>

      {/* === PLAYER STATS === */}
      <div style={styles.statsBar}>
        <div style={styles.statItem}>
          <span style={styles.statNumber}>12.4M</span>
          <span style={styles.statLabel}>Total Players</span>
        </div>
        <div style={styles.statItem}>
          <span style={styles.statNumber}>846K</span>
          <span style={styles.statLabel}>Online Now</span>
        </div>
        <div style={styles.statItem}>
          <span style={styles.statNumber}>50K+</span>
          <span style={styles.statLabel}>Games</span>
        </div>
        <div style={styles.statItem}>
          <span style={styles.statNumber}>#{playerId || '------'}</span>
          <span style={styles.statLabel}>Your Player ID</span>
        </div>
      </div>

      {/* === FOOTER === */}
      <footer style={styles.footer}>
        <p>© 2026 GameHub • Your 6-digit ID: #{playerId || '------'}</p>
        <div style={styles.footerLinks}>
          <a href="/about">About</a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/support">Support</a>
        </div>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: '#f0f2f5',
    fontFamily: 'Segoe UI, Arial, sans-serif',
  },
  
  // === NAVIGATION ===
  nav: {
    background: 'white',
    padding: '12px 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    flexWrap: 'wrap',
  },
  navLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '30px',
    flexWrap: 'wrap',
  },
  logo: {
    color: '#00B656',
    fontSize: '24px',
    fontWeight: '900',
    margin: 0,
  },
  navLinks: {
    display: 'flex',
    gap: '20px',
  },
  navLink: {
    color: '#333',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '15px',
    padding: '6px 12px',
    borderRadius: '6px',
    transition: '0.3s',
  },
  navRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  playerBadge: {
    background: '#f0f2f5',
    padding: '6px 16px',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  playerId: {
    color: '#00B656',
    fontWeight: 'bold',
    fontSize: '14px',
  },
  playerName: {
    color: '#333',
    fontSize: '14px',
    fontWeight: '600',
  },
  avatarIcon: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    background: '#00B656',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '18px',
    cursor: 'pointer',
  },

  // === HERO ===
  hero: {
    background: 'linear-gradient(135deg, #00B656 0%, #008844 100%)',
    padding: '60px 40px',
    textAlign: 'center',
    borderRadius: '0 0 30px 30px',
    marginBottom: '30px',
  },
  heroContent: {
    maxWidth: '600px',
    margin: '0 auto',
  },
  heroTitle: {
    color: 'white',
    fontSize: '48px',
    fontWeight: '900',
    marginBottom: '10px',
  },
  heroSub: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: '20px',
    marginBottom: '30px',
  },
  playButton: {
    background: 'white',
    color: '#00B656',
    border: 'none',
    padding: '16px 50px',
    borderRadius: '50px',
    fontSize: '22px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: '0.3s',
  },

  // === GAME GRID ===
  section: {
    padding: '0 40px 40px',
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  sectionTitle: {
    color: '#333',
    fontSize: '24px',
  },
  seeAll: {
    color: '#00B656',
    textDecoration: 'none',
    fontWeight: '600',
  },
  gameGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
    gap: '20px',
  },
  gameCard: {
    background: 'white',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
    transition: '0.3s',
    padding: '16px',
    textAlign: 'center',
  },
  gameThumb: {
    height: '120px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '40px',
  },
  gameEmoji: {
    fontSize: '50px',
  },
  gameName: {
    color: '#333',
    fontSize: '16px',
    margin: '10px 0 5px',
  },
  gamePlayers: {
    color: '#999',
    fontSize: '13px',
  },

  // === STATS ===
  statsBar: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '20px',
    padding: '0 40px 40px',
  },
  statItem: {
    background: 'white',
    padding: '20px',
    borderRadius: '12px',
    textAlign: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
  },
  statNumber: {
    display: 'block',
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#00B656',
  },
  statLabel: {
    display: 'block',
    color: '#999',
    fontSize: '14px',
    marginTop: '4px',
  },

  // === FOOTER ===
  footer: {
    background: 'white',
    padding: '20px 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '1px solid #eee',
    flexWrap: 'wrap',
  },
  footerLinks: {
    display: 'flex',
    gap: '20px',
  },
};

// Add hover styles via CSS (in globals.css)
// .game-card:hover { transform: translateY(-4px); box-shadow: 0 8px 25px rgba(0,0,0,0.1); }
// .play-button:hover { transform: scale(1.05); box-shadow: 0 8px 30px rgba(0,182,86,0.3); }
