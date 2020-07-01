export interface RouteInfo {
  path: string;
  title: string;
  type: string;
  icontype: string;
  collapse?: string;
  isCollapsed?: boolean;
  isCollapsing?: any;
  children?: ChildrenItems[];
}

export interface ChildrenItems {
  path: string;
  title: string;
  type?: string;
  collapse?: string;
  children?: ChildrenItems2[];
  isCollapsed?: boolean;
}
export interface ChildrenItems2 {
  path?: string;
  title?: string;
  type?: string;
}

// Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: "/admin/dashboard",
    title: "Dashboard",
    type: "link",
    icontype: "fas fa-home text-primary",
  },
  {
    path: "/admin/cargo",
    title: "Cargo",
    type: "sub",
    icontype: "fas fa-truck-loading text-primary",
    collapse: "cargo",
    isCollapsed: true,
    children: [
      { path: "zb-submission", title: "ZB Submission", type: "link" },
      { path: "gate-application", title: "Gate Application", type: "link" },
      { path: "oga-approval", title: "OGA Approval", type: "link" },
      { path: "release-number", title: "Release Number", type: "link" },
      { path: "database", title: "Database", type: "link" },
    ],
  },
  {
    path: "/admin/vehicle",
    title: "Vehicle",
    type: "sub",
    icontype: "fas fa-truck text-primary",
    collapse: "vehicle",
    isCollapsed: true,
    children: [
      { path: "gate-pass", title: "Gate Pass", type: "link" },
      { path: "gate-control", title: "Gate Control", type: "link" },
      {
        path: "vehicle-registration",
        title: "Vehicle Registration",
        type: "link",
      },
      { path: "vehicle-tracking", title: "Vehicle Tracking", type: "link" },
      {
        path: "equipment-machinery",
        title: "Equipment & Machinery",
        type: "link",
      },
    ],
  },
  {
    path: "/admin/people",
    title: "People",
    type: "sub",
    icontype: "fas fa-user-tag text-primary",
    collapse: "people",
    isCollapsed: true,
    children: [
      { path: "e-permanent", title: "e-Permanent", type: "link" },
      { path: "e-visitor", title: "e-Visitor", type: "link" },
      { path: "e-booking", title: "e-Booking", type: "link" },
      { path: "e-complaint", title: "e-Complaint", type: "link" },
      { path: "e-billing", title: "e-Billing", type: "link" },
    ],
  },
  {
    path: "/admin/management",
    title: "Management",
    type: "sub",
    icontype: "fas fa-file-invoice text-primary",
    collapse: "management",
    isCollapsed: true,
    children: [
      { path: "audit-trails", title: "Audit Trails", type: "link" },
      { path: "user", title: "User", type: "link" },
    ],
  },
  {
    path: "/admin/report",
    title: "Reporting",
    type: "link",
    icontype: "fas fa-chart-bar text-primary",
  },
  {
    path: "/global/landing-page",
    title: "Portal",
    type: "link",
    icontype: "fas fa-door-open text-primary",
  },
  /*
  {
    path: '/helpdesk',
    title: 'Helpdesk',
    type: 'link',
    icontype: 'fas fa-life-ring text-blue'
  },
  {
    path: '/audit',
    title: 'Audit Trail',
    type: 'link',
    icontype: 'fas fa-braille text-indigo'
  }
  */
];

export const ROUTESUSER: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    type: "link",
    icontype: "fas fa-desktop text-warning",
  },
  {
    path: "/applications",
    title: "Applications",
    type: "link",
    icontype: "fas fa-file-invoice text-pink",
  },
  {
    path: "/houses",
    title: "Houses",
    type: "link",
    icontype: "fas fa-home text-purple",
  },
  {
    path: "/management",
    title: "Management",
    type: "link",
    icontype: "fas fa-tasks text-red",
  },
  {
    path: "/report",
    title: "Report",
    type: "link",
    icontype: "fas fa-chart-bar text-green",
  },
  {
    path: "/helpdesk",
    title: "Helpdesk",
    type: "link",
    icontype: "fas fa-life-ring text-blue",
  },
  {
    path: "/audit",
    title: "Audit Trail",
    type: "link",
    icontype: "fas fa-braille text-indigo",
  } /*,
  {
    path: '/maintenance',
    title: 'Maintenance',
    type: 'link',
    icontype: 'fas fa-cogs text-orange'
  }*/,
  /*{
    path: '/settings',
    title: 'Settings',
    type: 'link',
    icontype: 'fas fa-sliders-h text-blue'
  }*/
];
