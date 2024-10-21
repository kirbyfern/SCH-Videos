import './globals.css';
import Navbar from '../components/Navbar'; // Adjust the path to the Navbar
import TopBar from '../components/TopBar'; // Import the new TopBar component

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div style={{ display: 'flex', height: '100vh' }}>
          {/* Navbar on the left */}
          <Navbar />

          {/* Main content area */}
          <div style={{ flexGrow: 1, padding: '20px', position: 'relative' }}>
            {/* TopBar with User and Settings icons */}
            <TopBar />

            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
