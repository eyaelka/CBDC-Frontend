import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id:1,
    label:'Tableau de bord',
    icon: 'bx-home-circle',
    link:'/page/dashboards/default',
    role:'BC'
  },
  {
    id:2,
    label:'Portefeuille',
    icon: 'bx-wallet',
    link:'/page/cb-wallet',
    role:'ALL'
  },
  {
    id:3,
    label:'Administrateurs',
    icon: 'bx-user-pin',
    link:'/centralbank/add/dashboard',
    role:'BC'
  },
  {
    id:4,
    label:'Banques Commerciales',
    icon: 'bx-user-plus',
    link:'/page/commercialbank',
    role:'BC'
  },
  {
    id:5,
    label:'Régulation Monetaire',
    icon: 'bx bx-edit',
    link:'/page/regulatemoney',
    role:'BC'

  },
  {
    id:6,
    label:'E-mail',
    icon: 'bx-mail-send',
    link:'/page/email',
    role:'ALL'
  },
  {
    id:7,
    label:'Régulation Devise',
    icon: 'bx bx-stats',
    link:'/page/regulatedevise',
    role:'ALL'
  },
  {
    id:8,
    label:'Régulation Transfert',
    icon: 'bx bx-transfer',
    link:'/page/regulatetransfer',
    role:'ALL'
  }




    // {
    //     id: 1,
    //     label: 'MENUITEMS.MENU.TEXT',
    //     isTitle: true
    // },
  //  {
  //       id: 2,
  //       label: 'MENUITEMS.DASHBOARDS.TEXT',
  //       icon: 'bx-home-circle',
  //       badge: {
  //           variant: 'info',
  //           text: 'MENUITEMS.DASHBOARDS.BADGE',
  //       },
  //       subItems: [
  //           {
  //               id: 3,
  //               label: 'MENUITEMS.DASHBOARDS.LIST.DEFAULT',
  //               link: '/dashboard',
  //               parentId: 2
  //           },
  //           {
  //               id: 4,
  //               label: 'MENUITEMS.DASHBOARDS.LIST.SAAS',
  //               link: '/dashboards/saas',
  //               parentId: 2
  //           },
  //           {
  //               id: 5,
  //               label: 'MENUITEMS.DASHBOARDS.LIST.CRYPTO',
  //               link: '/dashboards/crypto',
  //               parentId: 2
  //           },
  //           {
  //               id: 6,
  //               label: 'MENUITEMS.DASHBOARDS.LIST.BLOG',
  //               link: '/dashboards/blog',
  //               parentId: 2
  //           },
  //       ]
  //   },
  //   {
  //       id: 7,
  //       isLayout: true
  //   },
  //   {
  //       id: 8,
  //       label: 'MENUITEMS.APPS.TEXT',
  //       isTitle: true
  //   },
  //   {
  //       id: 9,
  //       label: 'MENUITEMS.CALENDAR.TEXT',
  //       icon: 'bx-calendar',
  //       link: '/calendar',
  //   },
  //   {
  //       id: 10,
  //       label: 'MENUITEMS.CHAT.TEXT',
  //       icon: 'bx-chat',
  //       link: '/chat',

  //   },
  //   {
  //       id: 11,
  //       label: 'MENUITEMS.FILEMANAGER.TEXT',
  //       icon: 'bx-file',
  //       link: '/filemanager',
  //       badge: {
  //           variant: 'success',
  //           text: 'MENUITEMS.FILEMANAGER.BADGE',
  //       },
  //   },
  //   {
  //       id: 12,
  //       label: 'MENUITEMS.ECOMMERCE.TEXT',
  //       icon: 'bx-store',
  //       subItems: [
  //           {
  //               id: 13,
  //               label: 'MENUITEMS.ECOMMERCE.LIST.PRODUCTS',
  //               link: '/ecommerce/products',
  //               parentId: 12
  //           },
  //           {
  //               id: 14,
  //               label: 'MENUITEMS.ECOMMERCE.LIST.PRODUCTDETAIL',
  //               link: '/ecommerce/product-detail/1',
  //               parentId: 12
  //           },
  //           {
  //               id: 15,
  //               label: 'MENUITEMS.ECOMMERCE.LIST.ORDERS',
  //               link: '/ecommerce/orders',
  //               parentId: 12
  //           },
  //           {
  //               id: 16,
  //               label: 'MENUITEMS.ECOMMERCE.LIST.CUSTOMERS',
  //               link: '/ecommerce/customers',
  //               parentId: 12
  //           },
  //           {
  //               id: 17,
  //               label: 'MENUITEMS.ECOMMERCE.LIST.CART',
  //               link: '/ecommerce/cart',
  //               parentId: 12
  //           },
  //           {
  //               id: 18,
  //               label: 'MENUITEMS.ECOMMERCE.LIST.CHECKOUT',
  //               link: '/ecommerce/checkout',
  //               parentId: 12
  //           },
  //           {
  //               id: 19,
  //               label: 'MENUITEMS.ECOMMERCE.LIST.SHOPS',
  //               link: '/ecommerce/shops',
  //               parentId: 12
  //           },
  //           {
  //               id: 20,
  //               label: 'MENUITEMS.ECOMMERCE.LIST.ADDPRODUCT',
  //               link: '/ecommerce/add-product',
  //               parentId: 12
  //           },
  //       ]
  //   },
  //   {
  //       id: 21,
  //       label: 'MENUITEMS.CRYPTO.TEXT',
  //       icon: 'bx-bitcoin',
  //       subItems: [
  //           {
  //               id: 22,
  //               label: 'MENUITEMS.CRYPTO.LIST.WALLET',
  //               link: '/crypto/wallet',
  //               parentId: 21
  //           },
  //           {
  //               id: 23,
  //               label: 'MENUITEMS.CRYPTO.LIST.BUY/SELL',
  //               link: '/crypto/buy-sell',
  //               parentId: 21
  //           },
  //           {
  //               id: 24,
  //               label: 'MENUITEMS.CRYPTO.LIST.EXCHANGE',
  //               link: '/crypto/exchange',
  //               parentId: 21
  //           },
  //           {
  //               id: 25,
  //               label: 'MENUITEMS.CRYPTO.LIST.LENDING',
  //               link: '/crypto/lending',
  //               parentId: 21
  //           },
  //           {
  //               id: 26,
  //               label: 'MENUITEMS.CRYPTO.LIST.ORDERS',
  //               link: '/crypto/orders',
  //               parentId: 21
  //           },
  //           {
  //               id: 27,
  //               label: 'MENUITEMS.CRYPTO.LIST.KYCAPPLICATION',
  //               link: '/crypto/kyc-application',
  //               parentId: 21
  //           },
  //           {
  //               id: 28,
  //               label: 'MENUITEMS.CRYPTO.LIST.ICOLANDING',
  //               link: '/crypto-ico-landing',
  //               parentId: 21
  //           }
  //       ]
  //   },
  //   {
  //       id: 29,
  //       label: 'MENUITEMS.EMAIL.TEXT',
  //       icon: 'bx-envelope',
  //       subItems: [
  //           {
  //               id: 30,
  //               label: 'MENUITEMS.EMAIL.LIST.INBOX',
  //               link: '/email/inbox',
  //               parentId: 29
  //           },
  //           {
  //               id: 31,
  //               label: 'MENUITEMS.EMAIL.LIST.READEMAIL',
  //               link: '/email/read/1',
  //               parentId: 29
  //           },
  //           {
  //               id: 32,
  //               label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.TEXT',
  //               badge: {
  //                   variant: 'success',
  //                   text: 'MENUITEMS.EMAIL.LIST.TEMPLATE.BADGE',
  //               },
  //               parentId: 29,
  //               subItems: [
  //                   {
  //                       id:33 ,
  //                       label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.LIST.BASIC',
  //                       link: '/email/basic',
  //                       parentId:32
  //                   },
  //                   {
  //                       id:34 ,
  //                       label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.LIST.ALERT',
  //                       link: '/email/alert',
  //                       parentId:32
  //                   },
  //                   {
  //                       id:35 ,
  //                       label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.LIST.BILLING',
  //                       link: '/email/billing',
  //                       parentId:32
  //                   }
  //               ]
  //           }
  //       ]
  //   },
  //   {
  //       id: 36,
  //       label: 'MENUITEMS.INVOICES.TEXT',
  //       icon: 'bx-receipt',
  //       subItems: [
  //           {
  //               id: 37,
  //               label: 'MENUITEMS.INVOICES.LIST.INVOICELIST',
  //               link: '/invoices/list',
  //               parentId: 36
  //           },
  //           {
  //               id: 38,
  //               label: 'MENUITEMS.INVOICES.LIST.INVOICEDETAIL',
  //               link: '/invoices/detail',
  //               parentId: 36
  //           },
  //       ]
  //   },
  //   {
  //       id: 39,
  //       label: 'MENUITEMS.PROJECTS.TEXT',
  //       icon: 'bx-briefcase-alt-2',
  //       subItems: [
  //           {
  //               id: 40,
  //               label: 'MENUITEMS.PROJECTS.LIST.GRID',
  //               link: '/projects/grid',
  //               parentId: 38
  //           },
  //           {
  //               id: 41,
  //               label: 'MENUITEMS.PROJECTS.LIST.PROJECTLIST',
  //               link: '/projects/list',
  //               parentId: 38
  //           },
  //           {
  //               id: 42,
  //               label: 'MENUITEMS.PROJECTS.LIST.OVERVIEW',
  //               link: '/projects/overview',
  //               parentId: 38
  //           },
  //           {
  //               id: 43,
  //               label: 'MENUITEMS.PROJECTS.LIST.CREATE',
  //               link: '/projects/create',
  //               parentId: 38
  //           }
  //       ]
  //   },
  //   {
  //       id: 44,
  //       label: 'MENUITEMS.TASKS.TEXT',
  //       icon: 'bx-task',
  //       subItems: [
  //           {
  //               id: 45,
  //               label: 'MENUITEMS.TASKS.LIST.TASKLIST',
  //               link: '/tasks/list',
  //               parentId: 44
  //           },
  //           {
  //               id: 46,
  //               label: 'MENUITEMS.TASKS.LIST.KANBAN',
  //               link: '/tasks/kanban',
  //               parentId: 44
  //           },
  //           {
  //               id: 47,
  //               label: 'MENUITEMS.TASKS.LIST.CREATETASK',
  //               link: '/tasks/create',
  //               parentId: 44
  //           }
  //       ]
  //   },
  //   {
  //       id: 48,
  //       label: 'MENUITEMS.CONTACTS.TEXT',
  //       icon: 'bxs-user-detail',
  //       subItems: [
  //           {
  //               id: 49,
  //               label: 'MENUITEMS.CONTACTS.LIST.USERGRID',
  //               link: '/contacts/grid',
  //               parentId: 48
  //           },
  //           {
  //               id: 50,
  //               label: 'MENUITEMS.CONTACTS.LIST.USERLIST',
  //               link: '/contacts/list',
  //               parentId: 48
  //           },
  //           {
  //               id: 51,
  //               label: 'MENUITEMS.CONTACTS.LIST.PROFILE',
  //               link: '/contacts/profile',
  //               parentId: 48
  //           }
  //       ]
  //   },
  //   {
  //       id: 52,
  //       label: 'MENUITEMS.BLOG.TEXT',
  //       icon: 'bx-file',
  //       badge: {
  //           variant: 'success',
  //           text: 'MENUITEMS.EMAIL.LIST.TEMPLATE.BADGE',
  //       },
  //       subItems: [
  //           {
  //               id: 53,
  //               label: 'MENUITEMS.BLOG.LIST.BLOGLIST',
  //               link: '/blog/list',
  //               parentId: 52
  //           },
  //           {
  //               id: 54,
  //               label: 'MENUITEMS.BLOG.LIST.BLOGGRID',
  //               link: '/blog/grid',
  //               parentId: 52
  //           },
  //           {
  //               id: 55,
  //               label: 'MENUITEMS.BLOG.LIST.DETAIL',
  //               link: '/blog/detail',
  //               parentId: 52
  //           },
  //       ]
  //   },
  //           ///////////////////////////////
  //   {
  //       id: 123,
  //       label: 'MENUITEMS.MAPS.TEXT',
  //       icon: 'bx-map',
  //       subItems: [
  //           {
  //               id: 124,
  //               label: 'MENUITEMS.MAPS.LIST.GOOGLEMAP',
  //               link: '/maps/google',
  //               parentId: 123
  //           }
  //       ]
  //   },

];

