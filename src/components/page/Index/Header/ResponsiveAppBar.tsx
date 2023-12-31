import { FC } from 'react';
import type { MutableRefObject } from 'react';

import { AppBar, Toolbar, Typography, Box, Divider, List, ListItem, ListItemButton, ListItemText, Drawer, IconButton, Button } from '@mui/material';
import { Menu } from '@mui/icons-material';

export type Props = {
  topBannerRef: MutableRefObject<HTMLDivElement | null>
  aboutThisSiteRef: MutableRefObject<HTMLDivElement | null>
  aboutMeRef: MutableRefObject<HTMLDivElement | null>
  worksRef: MutableRefObject<HTMLDivElement | null>
  mySkillSetRef: MutableRefObject<HTMLDivElement | null>
  contactMeRef: MutableRefObject<HTMLDivElement | null>
}

const drawerWidth = 240;

export const scrollToComponent = (ref: MutableRefObject<HTMLDivElement | null>) => {
  if (ref.current == null) {
    return;
  }

  ref.current.scrollIntoView();
}

// export const ResponsiveAppBar = (props: Props) => {

//   const { window } = props;

//   const [mobileOpen, setMobileOpen] = useState(false);

//   const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
//       <List>
//         {navItems.map((item, index) => (
//           <ListItem key={index} disablePadding>
//             <ListItemButton sx={{ textAlign: 'center' }}>
//               <ListItemText primary={item.title} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const container = window !== undefined ? () => window().document.body : undefined;

//   return (
//     <>
//       <AppBar component="nav" position="sticky" color='default'>
//         <Toolbar sx={{ width: { xs: '80%', sm: '70%' }, margin: '0 auto'}}>
//           <IconButton
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' }, float: 'left' }}
//           >
//             <Menu />
//           </IconButton>
//           <Typography
//             variant="h6"
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
//           >
//             Desktop
//           </Typography>
//           <Typography
//             variant="h6"
//             component="div"
//             sx={{ display: { xs: 'inline-block', sm: 'none' }, position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}
//           >
//             Mobile
//           </Typography>
//           <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
//             {navItems.map((item, index) => (
//               <Button key={index} sx={{ color: '#000' }}>
//                 {item.title}
//               </Button>
//             ))}
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <nav>
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>
//     </>
//   );
// };


export const ResponsiveAppBar: FC<Props> = (props) => {

  const {
    topBannerRef, aboutThisSiteRef, aboutMeRef, worksRef, mySkillSetRef, contactMeRef,
  } = props;

  const navItems = [
    {title: 'Top', ref: topBannerRef},
    {title: 'About this site', ref: aboutThisSiteRef},
    {title: 'About me', ref: aboutMeRef},
    {title: 'Works', ref: worksRef},
    {title: 'SkillSet', ref: mySkillSetRef},
    {title: 'Contact me', ref: contactMeRef},
  ]

  return (
    <>
      <div className="fixed-top">
        <div className="mx-auto row" style={{ width: '70%' }}>
          <div className="col-6">
            <div className="d-inline-block p-3"></div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-row justify-content-end">
              {navItems.map((items, index) => (
                <div className="p-3 fs-5" key={index} style={{ cursor: 'pointer' }}>
                  <div onClick={() => scrollToComponent(items.ref)}>{items.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
