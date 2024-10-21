import './globals.css';
import Navbar from '../components/Navbar'; // Adjust path as needed

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div style={{ display: 'flex', height: '100vh' }}>
          {/* Navbar on the left */}
          <Navbar />

          {/* Main content area */}
          <div style={{ flexGrow: 1, padding: '20px' }}>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
