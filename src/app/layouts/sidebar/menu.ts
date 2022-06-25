import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id:1,
    label:'Tableau de bord',
    icon: 'bx-home-circle',
    link:'/page/dashboards/centralbank',
    role:'centralbank'
  },
  {
    id:2,
    label:'Portefeuille',
    icon: 'bx-wallet',
    link:'/page/centralbank-wallet',
    role:'centralbank'
  },
  {
    id:3,
    label:'Banques Commerciales',
    icon: 'bx-user-plus',
    link:'/page/commercialbank',
    role:'centralbank'
  },
  {
    id:4,
    label:'Régulation Monetaire',
    icon: 'bx bx-edit',
    link:'/page/regulatemoney',
    role:'centralbank'

  },

  {
    id:5,
    label:'Régulation Devise',
    icon: 'bx bx-stats',
    link:'/page/regulatedevise',
    role:'centralbank'
  },
  {
    id:6,
    label:'Régulation Transfert',
    icon: 'bx bx-transfer',
    link:'/page/regulatetransfer',
    role:'centralbank'
  },
  {
    id:7,
    label:'Tableau de bord',
    icon: 'bx-home-circle',
    link:'/page/dashboards/commercialbank',
    role:'commercialbank'
  },

  {
    id:8,
    label:'Portefeuille',
    icon: 'bx-wallet',
    link:'/page/commercialbank-wallet',
    role:'commercialbank'
  },
  {
    id:7,
    label:'Utilisateurs',
    icon: 'bx-user',
    link:'/page/users',
    role:'commercialbank'
  },
  {
    id:9,
    label:'Utilisateurs En Attente',
    icon: 'bx-user',
    link:'/page/enduser/activation/:token',
    role:'commercialbank'
  },




];

