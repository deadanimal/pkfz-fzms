import { Component, OnInit, NgZone, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { NotifyService } from 'src/app/shared/handler/notify/notify.service';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

export enum SelectionType {
  single = 'single',
  multi = 'multi',
  multiClick = 'multiClick',
  cell = 'cell',
  checkbox = 'checkbox'
}

export const applications = [
  {
    application_id: 'APP-001',
    name: 'Hafiz Abdullah',
    reason: 'Renew',
    date: '12/03/2020',
    status: 'In Progress'
  }
]

@Component({
  selector: 'app-e-permanent',
  templateUrl: './e-permanent.component.html',
  styleUrls: ['./e-permanent.component.scss']
})
export class EPermanentComponent implements OnInit {

  // Table
  tableEntries: number = 5;
  tableSelected: any[] = [];
  tableTemp = [];
  tableActiveRow: any;
  tableRows: any[] = []
  SelectionType = SelectionType;

  // Modal
  modal: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-dialog-centered"
  };

  // Chart
  chart

  constructor(
    private modalService: BsModalService,
    private notify: NotifyService,
    private zone: NgZone
  ) { 
    this.getData()
  }

  ngOnInit() {
  }

  getData() {
    this.tableRows = [...applications]
      this.tableTemp = this.tableRows.map((prop, key) => {
        return {
        ...prop,
        id: key
      };
    });
  }

  submit() {
    let message = 'Success!'
    let title = 'Yearly pass application has been submitted'
    this.notify.openToastr(message, title)
    this.closeModal()
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose()
      }
    })
  }

  openModal(modalRef: TemplateRef<any>) {
    this.modal = this.modalService.show(modalRef, this.modalConfig);
  }

  closeModal() {
    this.modal.hide()
  }

  entriesChange($event) {
    this.tableEntries = $event.target.value;
  }

  filterTable($event) {
    let val = $event.target.value;
    this.tableTemp = this.tableRows.filter(function(d) {
      for (var key in d) {
        if (d[key].toLowerCase().indexOf(val) !== -1) {
          return true;
        }
      }
      return false;
    });
  }

  onSelect({ selected }) {
    this.tableSelected.splice(0, this.tableSelected.length);
    this.tableSelected.push(...selected);
  }
  
  onActivate(event) {
    this.tableActiveRow = event.row;
  }

}
