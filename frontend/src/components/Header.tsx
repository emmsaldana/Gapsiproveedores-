import { AppBar, Toolbar, IconButton, Typography, useTheme } from '@mui/material';
import { Menu as MenuIcon, ChevronLeft as ChevronLeftIcon } from '@mui/icons-material';

import { useDrawerContext } from '../contexts/drawer-context';
import image from 'logoBlanco.png';
export const Header = () => {
  const { isOpened, toggleIsOpened } = useDrawerContext();
  const theme = useTheme();
  return (
    <AppBar
      sx={{ backgroundColor: 'grey.A700', color: 'secondary.contrastText' }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          onClick={() => toggleIsOpened(!isOpened)}
          sx={{ padding: theme.spacing(1) }}
        >
          {isOpened ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
        <div  style={{ margin: 'auto' , width:"500px", float: "left"}}>
            <img  src={process.env.PUBLIC_URL+"/logoBlanco.png"} style={{ float: "left"}}></img>
            <Typography variant="h6">
              Grapsi Portal de Proveedores
            </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
