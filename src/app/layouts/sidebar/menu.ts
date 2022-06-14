import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id:1,
    label:'Tableau de bord',
    icon: 'bx-home-circle',
    link:'/page/dashboards/centralbank',
    role:'BC'
  },
  {
    id:2,
    label:'Portefeuille',
    icon: 'bx-wallet',
    link:'/page/centralbank-wallet',
    role:'ALL'
  },
  {
    id:3,
    label:'Banques Commerciales',
    icon: 'bx-user-plus',
    link:'/page/commercialbank',
    role:'BC'
  },
  {
    id:4,
    label:'Régulation Monetaire',
    icon: 'bx bx-edit',
    link:'/page/regulatemoney',
    role:'BC'

  },
  {
    id:5,
    label:'E-mail',
    icon: 'bx-mail-send',
    link:'/page/email',
    role:'ALL'
  },
  {
    id:6,
    label:'Régulation Devise',
    icon: 'bx bx-stats',
    link:'/page/regulatedevise',
    role:'ALL'
  },
  {
    id:7,
    label:'Régulation Transfert',
    icon: 'bx bx-transfer',
    link:'/page/regulatetransfer',
    role:'ALL'
  }

];

