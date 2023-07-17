import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const AdminNav = ({contactRef}) => {
    const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [logoutAcknowledged, setLogoutAcknowledged] = React.useState(false);
  const [username, setUsername] = React.useState('');

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      const storedUsername = localStorage.getItem('username');
      setUsername(storedUsername || '');
    } else {
      setIsLoggedIn(false);
      setUsername('');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    setLogoutAcknowledged(true);
    setTimeout(() => {
      setLogoutAcknowledged(false);
      navigate('/');
    }, 3000);
  };

  const handleContactClick = () => {
    if (contactRef && contactRef.current) {
      window.scrollTo({
        top: contactRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
    <AppBar position="absolute" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar>
        <Box display="flex" alignItems="center" width="100%">
          <Box sx={{ flex: '1 0 50%' }}>
            <Typography variant="h5" color="White" sx={{ cursor: 'pointer' }} onClick={() => navigate('/admin')}>
              Kazana Jewellers
            </Typography>
          </Box>
          <Box sx={{ flex: '1 0 50%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', pr: 2 }}>
          <Typography
              variant="h6"
              sx={{ mr: '1.5rem', color: '#c7c6c10', cursor: 'pointer' }}
              onClick={() => navigate('/admin')}
            >
              Home
            </Typography>
            
            {contactRef && (
              <Typography
                variant="h6"
                sx={{ mr: '1.5rem', color: '#c7c6c10', cursor: 'pointer' }}
                onClick={handleContactClick}
              >
                Contact Us
              </Typography>
            )}
            {isLoggedIn ? (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="h6" sx={{ mr: '1rem', color: '#000' }}>
                  Welcome {username}
               </Typography>
                <Button sx={{ color: '#000', bgcolor: '#FFF', '&:hover': { bgcolor: '#c7c6c10' } }} onClick={handleLogout}>
                  Logout
                </Button>
              </Box>
            ) : (
              <Box>
                <Button sx={{ color: '#000', bgcolor: '#FFF', marginRight: '1rem', '&:hover': { bgcolor: '#c7c6c10' } }} onClick={() => navigate('/login')}>
                  Login
                </Button>
                <Button sx={{ color: '#000', bgcolor: '#FFF', '&:hover': { bgcolor: '#c7c6c10' } }} onClick={() => navigate('/signup')}>
                  Register
                </Button>
              </Box>
            )}
          </Box>
        </Box>
        {logoutAcknowledged && (
          <Typography variant="body1" sx={{ color: 'green' }}>
            Logout successful.
          </Typography>
        )}
      </Toolbar>
    </AppBar>
    </>
  )
}

export default AdminNav