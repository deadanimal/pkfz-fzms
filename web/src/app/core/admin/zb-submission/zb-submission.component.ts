import { Component, OnInit } from "@angular/core";
import { NotifyService } from "src/app/shared/handler/notify/notify.service";
import Dropzone from "dropzone";

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox",
}

@Component({
  selector: "app-zb-submission",
  templateUrl: "./zb-submission.component.html",
  styleUrls: ["./zb-submission.component.scss"],
})
export class ZbSubmissionComponent implements OnInit {
  // Table
  tableEntries: number = 5;
  tableSelected: any[] = [];
  tableTemp = [];
  tableActiveRow: any;
  SelectionType = SelectionType;
  listIfse: any = [
    {
      cust: "Nur Aliah",
      status: "C",
      description: "FT0123456787",
      created_at: "2019-07-27T01:07:14Z",
    },
    {
      cust: "Kamarul",
      status: "D",
      description: "FT0123456788",
      created_at: "2019-07-27T01:07:14Z",
    },
    {
      cust: "Zaharah",
      status: "D",
      description: "FT0123456789",
      created_at: "2019-07-27T01:07:14Z",
    },
  ];

  constructor(private notify: NotifyService) {}

  ngOnInit() {
    let currentSingleFile = undefined;
    // single dropzone file - accepts only images
    new Dropzone(document.getElementsByClassName("dropzone-single")[0], {
      url: "/",
      thumbnailWidth: null,
      thumbnailHeight: null,
      previewsContainer: document.getElementsByClassName(
        "dz-preview-single"
      )[0],
      previewTemplate: document.getElementsByClassName("dz-preview-single")[0]
        .innerHTML,
      maxFiles: 1,
      acceptedFiles: "image/*",
      init: function () {
        this.on("addedfile", function (file) {
          if (currentSingleFile) {
            this.removeFile(currentSingleFile);
          }
          currentSingleFile = file;
        });
      },
    });
    document.getElementsByClassName("dz-preview-single")[0].innerHTML = "";
  }

  submit() {
    let message = "Success!";
    let title = "Application has been submitted";
    this.notify.openToastr(title, message);
  }
}
