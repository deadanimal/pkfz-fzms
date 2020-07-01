import { Routes } from "@angular/router";
import { ProfileComponent } from "./profile/profile.component";
import { SettingsComponent } from "./settings/settings.component";
import { NotificationsComponent } from "./notifications/notifications.component";

import { LandingPageComponent } from "./landing-page/landing-page.component";
import { FaqComponent } from "./faq/faq.component";
import { AboutUsComponent } from "./about-us/about-us.component";

import { AgentComponent } from "./agent/agent.component";
import { TenantComponent } from "./tenant/tenant.component";

export const GlobalRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "notifications",
        component: NotificationsComponent,
      },
      {
        path: "profile",
        component: ProfileComponent,
      },
      {
        path: "agent",
        component: AgentComponent,
      },
      {
        path: "landing-page",
        component: LandingPageComponent,
      },
      {
        path: "tenant",
        component: TenantComponent,
      },
      {
        path: "about-us",
        component: AboutUsComponent,
      },
    ],
  },
];
