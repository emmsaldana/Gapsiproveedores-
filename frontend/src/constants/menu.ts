import {
  Dashboard as DashboardIcon,
  ShoppingCart as ShoppingCartIcon,
  People as PeopleIcon,
  AttachMoney as AttachMoneyIcon,
} from '@mui/icons-material';

import { IMenuItem } from '../types';
import { ROUTES } from './routes';

export const MENU_LIST: IMenuItem[] = [
 
  {
    route: ROUTES.main,
    literal: 'Dashboard',
    Icon: DashboardIcon,
  },
  {
    route: ROUTES.suppliers,
    literal: 'Proveedores',
    Icon: PeopleIcon,
  },
  
];
