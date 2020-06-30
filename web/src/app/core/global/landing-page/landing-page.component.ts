import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.scss"],
})
export class LandingPageComponent implements OnInit {
  public visitor: { name: string; email: string };
  public params: { name: string; value: string }[];
  test: Date = new Date();
  isCollapsed = true;

  keyword = "name";
  data = [
    {
      id: 1,
      name: "FAQ",
    },
    {
      id: 2,
      name: "Payment",
    },
    {
      id: 3,
      name: "Dashboard",
    },
    {
      id: 4,
      name: "Assessment",
    },
    {
      id: 5,
      name: "Delivery Channel",
    },
  ];

  constructor(private router: Router) {
    this.visitor = {
      name: "John Doe",
      email: "john@doe.com",
    };

    this.params = [
      { name: "Login", value: "joe_public" },
      { name: "Account ID", value: "ABCD1234" },
      { name: "Total order value", value: "$123" },
    ];
  }

  ngOnInit() {}
  selectEvent(item) {
    // do something with selected item
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something when input is focused
  }

  navigatePage(path: String) {
    if (path == "home") {
      return this.router.navigate(["/global/landing_page"]);
    } else if (path == "manual") {
      return this.router.navigate(["/user-portal/user-manual"]);
    } else if (path == "faq") {
      return this.router.navigate(["global/faq"]);
    } else if (path == "brochure") {
      return this.router.navigate(["/user-portal/brochure"]);
    } else if (path == "refund") {
      return this.router.navigate(["/user-portal/refund"]);
    } else if (path == "complaint") {
      return this.router.navigate(["/user-portal/complaint"]);
    } else if (path == "login") {
      return this.router.navigate(["/auth/login"]);
    } else if (path == "about-us") {
      return this.router.navigate(["/global/about-us"]);
    }
  }
}
