import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-agent",
  templateUrl: "./agent.component.html",
  styleUrls: ["./agent.component.scss"],
})
export class AgentComponent implements OnInit {
  public visitor: { name: string; email: string };
  public params: { name: string; value: string }[];
  test: Date = new Date();
  isCollapsed = true;

  // Toggle
  editEnabled: boolean = false;

  // Form
  editForm: FormGroup;
  editFormMessages = {
    name: [{ type: "required", message: "Name is required" }],
    email: [
      { type: "required", message: "Email is required" },
      { type: "email", message: "A valid email is required" },
    ],
  };

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

  toggleEdit() {
    this.editEnabled = !this.editEnabled;
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
      return this.router.navigate(["/global/landing-page"]);
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
    } else if (path == "tenant") {
      return this.router.navigate(["/global/tenant"]);
    } else if (path == "agent") {
      return this.router.navigate(["/global/agent"]);
    }
  }
}
