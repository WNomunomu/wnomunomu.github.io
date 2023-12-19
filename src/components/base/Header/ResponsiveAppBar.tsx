import { useState } from 'react';

import { AppBar, Toolbar, Typography, Box, Divider, List, ListItem, ListItemButton, ListItemText, Drawer, IconButton, Button } from '@mui/material';
import { Menu } from '@mui/icons-material';

type Props = {
  window?: () => Window;
}

const drawerWidth = 240;

const navItems = [
  {title: 'Top', link: '#'},
  {title: 'About this site', link: '#'},
  {title: 'Profile', link: '#'},
  {title: 'Works', link: '#'},
  {title: 'Contact me', link: '#'},
]

export const ResponsiveAppBar = (props: Props) => {

  const { window } = props;

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar component="nav" position="sticky" color='default'>
        <Toolbar sx={{ width: { xs: '80%', sm: '70%' }, margin: '0 auto'}}>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, float: 'left' }}
          >
            <Menu />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Desktop
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ display: { xs: 'inline-block', sm: 'none' }, position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}
          >
            Mobile
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item, index) => (
              <Button key={index} sx={{ color: '#000' }}>
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
};
