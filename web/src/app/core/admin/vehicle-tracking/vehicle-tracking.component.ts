import {
  Component,
  OnInit,
  NgZone,
  OnDestroy,
  TemplateRef,
} from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_continentsLow from "@amcharts/amcharts4-geodata/continentsLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { Router } from "@angular/router";
import { NotifyService } from "src/app/shared/handler/notify/notify.service";
import Dropzone from "dropzone";
import swal from "sweetalert2";
import { LoadingBarService } from "@ngx-loading-bar/core";
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import { tileLayer, latLng, marker } from "leaflet";
// import 'leaflet/dist/images/marker-shadow.png';
import "leaflet/dist/images/marker-icon.png";

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox",
}

@Component({
  selector: "app-vehicle-tracking",
  templateUrl: "./vehicle-tracking.component.html",
  styleUrls: ["./vehicle-tracking.component.scss"],
})
export class VehicleTrackingComponent implements OnInit {
  // Chart
  private chart: any;
  private chart1: any;
  private chart2: any;
  private clicked: any = true;
  private clicked1: any = false;

  // Modal
  modal: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-dialog-centered",
  };

  // Table
  tableEntries: number = 5;
  tableSelected: any[] = [];
  tableTemp = [];
  tableActiveRow: any;
  SelectionType = SelectionType;
  listIfse: any = [
    {
      type: "Port Code",
      id: "001",
      name: "Kota Kinabalu",
      status: "A",
      coodinate: "5.909302N 114.929323E",
      created_at: "2019-07-27T01:07:14Z",
    },
    {
      type: "Port Code",
      id: "002",
      name: "Terengganu",
      status: "A",
      coodinate: "5.909302N 114.929323E",
      created_at: "2019-07-27T01:07:14Z",
    },
    {
      type: "Port Code",
      id: "003",
      name: "Kuantan",
      status: "A",
      coodinate: "5.909302N 114.929323E",
      created_at: "2019-07-27T01:07:14Z",
    },
  ];

  options = {
    layers: [
      tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: "...",
      }),
    ],
    zoom: 8,
    center: latLng(3.4582308051504707, 101.5892640625),
  };
  layers = [
    // circle([ 46.95, -122 ], { radius: 5000 }),
    // polygon([[ 46.8, -121.85 ], [ 46.92, -121.92 ], [ 46.87, -121.8 ]]),
    marker([3.4582308051504707, 101.5892640625]),
  ];

  constructor(
    private notify: NotifyService,
    private zone: NgZone,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    // run chart
    this.getCharts();

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

  onActivate(event) {
    this.tableActiveRow = event.row;
  }

  entriesChange($event) {
    this.tableEntries = $event.target.value;
  }

  submit() {
    let message = "Success!";
    let title = "Application has been submitted";
    this.notify.openToastr(title, message);
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        console.log("Chart disposed");
        this.chart.dispose();
      }
      if (this.chart1) {
        console.log("Chart disposed");
        this.chart1.dispose();
      }
    });
  }

  openModal(modalRef: TemplateRef<any>) {
    // if (row) {
    //   console.log(row);
    //   this.editActionForm.patchValue(row);
    // }
    this.modal = this.modalService.show(
      modalRef,
      Object.assign({}, { class: "gray modal-lg" })
    );
    // this.modal = this.modalService.show(modalRef, this.modalConfig);
  }

  closeModal() {
    this.modal.hide();
    // this.editActionForm.reset();
  }

  successAlert(task) {
    swal.fire({
      title: "Success",
      text: "Successfully " + task,
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
      confirmButtonText: "Close",
    });
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      // this.getChart();
      // this.getChart1();
      // this.getChart2();
      this.getChart3();
      // this.getChart4();
      this.getChart5();
      // this.getChart6();
    });
  }

  getChart() {
    //chart nate susoh
    let container = am4core.create("chartdivgateControl", am4core.Container);
    container.layout = "grid";
    container.fixedWidthGrid = false;
    container.width = am4core.percent(100);
    container.height = am4core.percent(100);

    // Color set
    let colors = new am4core.ColorSet();

    // Functions that create various sparklines
    function createLine(title, data, color) {
      let chart = container.createChild(am4charts.XYChart);
      chart.width = am4core.percent(45);
      chart.height = 70;

      chart.data = data;

      chart.titles.template.fontSize = 10;
      chart.titles.template.textAlign = "start";
      chart.titles.template.isMeasured = false;
      chart.titles.create().text = title;

      chart.padding(20, 5, 2, 5);

      let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.disabled = true;
      dateAxis.renderer.labels.template.disabled = true;
      dateAxis.startLocation = 0.5;
      dateAxis.endLocation = 0.7;
      dateAxis.cursorTooltipEnabled = false;

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.min = 0;
      valueAxis.renderer.grid.template.disabled = true;
      valueAxis.renderer.baseGrid.disabled = true;
      valueAxis.renderer.labels.template.disabled = true;
      valueAxis.cursorTooltipEnabled = false;

      chart.cursor = new am4charts.XYCursor();
      chart.cursor.lineY.disabled = true;
      chart.cursor.behavior = "none";

      let series = chart.series.push(new am4charts.LineSeries());
      series.tooltipText = "{date}: [bold]{value}";
      series.dataFields.dateX = "date";
      series.dataFields.valueY = "value";
      series.tensionX = 0.8;
      series.strokeWidth = 2;
      series.stroke = color;

      // render data points as bullets
      let bullet = series.bullets.push(new am4charts.CircleBullet());
      bullet.circle.opacity = 0;
      bullet.circle.fill = color;
      bullet.circle.propertyFields.opacity = "opacity";
      bullet.circle.radius = 3;

      return chart;
    }

    function createColumn(title, data, color) {
      let chart = container.createChild(am4charts.XYChart);
      chart.width = am4core.percent(45);
      chart.height = 70;

      chart.data = data;

      chart.titles.template.fontSize = 10;
      chart.titles.template.textAlign = "start";
      chart.titles.template.isMeasured = false;
      chart.titles.create().text = title;

      chart.padding(20, 5, 2, 5);

      let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.disabled = true;
      dateAxis.renderer.labels.template.disabled = true;
      dateAxis.cursorTooltipEnabled = false;

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.min = 0;
      valueAxis.renderer.grid.template.disabled = true;
      valueAxis.renderer.baseGrid.disabled = true;
      valueAxis.renderer.labels.template.disabled = true;
      valueAxis.cursorTooltipEnabled = false;

      chart.cursor = new am4charts.XYCursor();
      chart.cursor.lineY.disabled = true;

      let series = chart.series.push(new am4charts.ColumnSeries());
      series.tooltipText = "{date}: [bold]{value}";
      series.dataFields.dateX = "date";
      series.dataFields.valueY = "value";
      series.strokeWidth = 0;
      series.fillOpacity = 0.5;
      series.columns.template.propertyFields.fillOpacity = "opacity";
      series.columns.template.fill = color;

      return chart;
    }

    function createPie(data, color) {
      let chart = container.createChild(am4charts.PieChart);
      chart.width = am4core.percent(10);
      chart.height = 70;
      chart.padding(20, 0, 2, 0);

      chart.data = data;

      // Add and configure Series
      let pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "value";
      pieSeries.dataFields.category = "category";
      pieSeries.labels.template.disabled = true;
      pieSeries.ticks.template.disabled = true;
      pieSeries.slices.template.fill = color;
      pieSeries.slices.template.adapter.add("fill", function (
        fill: any,
        target
      ) {
        return fill.lighten(0.1 * target.dataItem.index);
      });
      pieSeries.slices.template.stroke = am4core.color("#fff");

      // chart.chartContainer.minHeight = 40;
      // chart.chartContainer.minWidth = 40;

      return chart;
    }

    createLine(
      "(Price)",
      [
        { date: new Date(2018, 0, 1, 8, 0, 0), value: 57 },
        { date: new Date(2018, 0, 1, 9, 0, 0), value: 27 },
        { date: new Date(2018, 0, 1, 10, 0, 0), value: 24 },
        { date: new Date(2018, 0, 1, 11, 0, 0), value: 59 },
        { date: new Date(2018, 0, 1, 12, 0, 0), value: 33 },
        { date: new Date(2018, 0, 1, 13, 0, 0), value: 46 },
        { date: new Date(2018, 0, 1, 14, 0, 0), value: 20 },
        { date: new Date(2018, 0, 1, 15, 0, 0), value: 42 },
        { date: new Date(2018, 0, 1, 16, 0, 0), value: 59, opacity: 1 },
      ],
      colors.getIndex(0)
    );

    createColumn(
      "(Turnover)",
      [
        { date: new Date(2018, 0, 1, 8, 0, 0), value: 22 },
        { date: new Date(2018, 0, 1, 9, 0, 0), value: 25 },
        { date: new Date(2018, 0, 1, 10, 0, 0), value: 40 },
        { date: new Date(2018, 0, 1, 11, 0, 0), value: 35 },
        { date: new Date(2018, 0, 1, 12, 0, 0), value: 29 },
        { date: new Date(2018, 0, 1, 13, 0, 0), value: 1 },
        { date: new Date(2018, 0, 1, 14, 0, 0), value: 15 },
        { date: new Date(2018, 0, 1, 15, 0, 0), value: 29 },
        { date: new Date(2018, 0, 1, 16, 0, 0), value: 33, opacity: 1 },
      ],
      colors.getIndex(0)
    );

    createPie(
      [
        { category: "Marketing", value: 501 },
        { category: "Research", value: 301 },
        { category: "Sales", value: 201 },
        { category: "HR", value: 165 },
      ],
      colors.getIndex(0)
    );

    createLine(
      "(Price)",
      [
        { date: new Date(2018, 0, 1, 8, 0, 0), value: 22 },
        { date: new Date(2018, 0, 1, 9, 0, 0), value: 25 },
        { date: new Date(2018, 0, 1, 10, 0, 0), value: 40 },
        { date: new Date(2018, 0, 1, 11, 0, 0), value: 35 },
        { date: new Date(2018, 0, 1, 12, 0, 0), value: 29 },
        { date: new Date(2018, 0, 1, 13, 0, 0), value: 1 },
        { date: new Date(2018, 0, 1, 14, 0, 0), value: 15 },
        { date: new Date(2018, 0, 1, 15, 0, 0), value: 29 },
        { date: new Date(2018, 0, 1, 16, 0, 0), value: 33, opacity: 1 },
      ],
      colors.getIndex(1)
    );

    createColumn(
      "(Turnover)",
      [
        { date: new Date(2018, 0, 1, 8, 0, 0), value: 57 },
        { date: new Date(2018, 0, 1, 9, 0, 0), value: 27 },
        { date: new Date(2018, 0, 1, 10, 0, 0), value: 24 },
        { date: new Date(2018, 0, 1, 11, 0, 0), value: 59 },
        { date: new Date(2018, 0, 1, 12, 0, 0), value: 33 },
        { date: new Date(2018, 0, 1, 13, 0, 0), value: 46 },
        { date: new Date(2018, 0, 1, 14, 0, 0), value: 20 },
        { date: new Date(2018, 0, 1, 15, 0, 0), value: 42 },
        { date: new Date(2018, 0, 1, 16, 0, 0), value: 59, opacity: 1 },
      ],
      colors.getIndex(1)
    );

    createPie(
      [
        { category: "Data 1", value: 130 },
        { category: "Data 2", value: 450 },
        { category: "Data 3", value: 400 },
        { category: "Data 4", value: 200 },
      ],
      colors.getIndex(1)
    );

    createLine(
      "(Price)",
      [
        { date: new Date(2018, 0, 1, 8, 0, 0), value: 16 },
        { date: new Date(2018, 0, 1, 9, 0, 0), value: 62 },
        { date: new Date(2018, 0, 1, 10, 0, 0), value: 55 },
        { date: new Date(2018, 0, 1, 11, 0, 0), value: 34 },
        { date: new Date(2018, 0, 1, 12, 0, 0), value: 29 },
        { date: new Date(2018, 0, 1, 13, 0, 0), value: 29 },
        { date: new Date(2018, 0, 1, 14, 0, 0), value: 28 },
        { date: new Date(2018, 0, 1, 15, 0, 0), value: 32 },
        { date: new Date(2018, 0, 1, 16, 0, 0), value: 30, opacity: 1 },
      ],
      colors.getIndex(2)
    );

    createColumn(
      "(Turnover)",
      [
        { date: new Date(2018, 0, 1, 8, 0, 0), value: 50 },
        { date: new Date(2018, 0, 1, 9, 0, 0), value: 51 },
        { date: new Date(2018, 0, 1, 10, 0, 0), value: 62 },
        { date: new Date(2018, 0, 1, 11, 0, 0), value: 60 },
        { date: new Date(2018, 0, 1, 12, 0, 0), value: 25 },
        { date: new Date(2018, 0, 1, 13, 0, 0), value: 20 },
        { date: new Date(2018, 0, 1, 14, 0, 0), value: 70 },
        { date: new Date(2018, 0, 1, 15, 0, 0), value: 42 },
        { date: new Date(2018, 0, 1, 16, 0, 0), value: 33, opacity: 1 },
      ],
      colors.getIndex(2)
    );

    createPie(
      [
        { category: "Data 1", value: 220 },
        { category: "Data 2", value: 200 },
        { category: "Data 3", value: 150 },
        { category: "Data 4", value: 125 },
      ],
      colors.getIndex(2)
    );

    // FB

    createLine(
      "(Price)",
      [
        { date: new Date(2018, 0, 1, 8, 0, 0), value: 52 },
        { date: new Date(2018, 0, 1, 9, 0, 0), value: 55 },
        { date: new Date(2018, 0, 1, 10, 0, 0), value: 35 },
        { date: new Date(2018, 0, 1, 11, 0, 0), value: 34 },
        { date: new Date(2018, 0, 1, 12, 0, 0), value: 39 },
        { date: new Date(2018, 0, 1, 13, 0, 0), value: 42 },
        { date: new Date(2018, 0, 1, 14, 0, 0), value: 29 },
        { date: new Date(2018, 0, 1, 15, 0, 0), value: 22 },
        { date: new Date(2018, 0, 1, 16, 0, 0), value: 15, opacity: 1 },
      ],
      colors.getIndex(3)
    );

    createColumn(
      "(Turnover)",
      [
        { date: new Date(2018, 0, 1, 8, 0, 0), value: 20 },
        { date: new Date(2018, 0, 1, 9, 0, 0), value: 20 },
        { date: new Date(2018, 0, 1, 10, 0, 0), value: 25 },
        { date: new Date(2018, 0, 1, 11, 0, 0), value: 26 },
        { date: new Date(2018, 0, 1, 12, 0, 0), value: 29 },
        { date: new Date(2018, 0, 1, 13, 0, 0), value: 27 },
        { date: new Date(2018, 0, 1, 14, 0, 0), value: 25 },
        { date: new Date(2018, 0, 1, 15, 0, 0), value: 32 },
        { date: new Date(2018, 0, 1, 16, 0, 0), value: 30, opacity: 1 },
      ],
      colors.getIndex(3)
    );

    createPie(
      [
        { category: "Data 1", value: 120 },
        { category: "Data 2", value: 150 },
        { category: "Data 3", value: 125 },
        { category: "Data 4", value: 250 },
      ],
      colors.getIndex(3)
    );

    this.chart = container;
  }

  getChart1() {
    // chart half circle
    let chart = am4core.create("chartdivgateControl1", am4charts.PieChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.data = [
      {
        item: "Lights",
        value: 40,
      },
      {
        item: "Fridge",
        value: 30,
      },
      {
        item: "TV",
        value: 20,
      },
      {
        item: "Washing Machine",
        value: 16,
      },
    ];
    chart.radius = am4core.percent(70);
    chart.innerRadius = am4core.percent(40);
    chart.startAngle = 180;
    chart.endAngle = 360;

    let series = chart.series.push(new am4charts.PieSeries());
    series.dataFields.value = "value";
    series.dataFields.category = "item";
    series.ticks.template.disabled = true;
    series.labels.template.disabled = true;

    series.slices.template.cornerRadius = 10;
    series.slices.template.innerCornerRadius = 7;
    series.slices.template.draggable = true;
    series.slices.template.inert = true;
    series.alignLabels = false;

    series.hiddenState.properties.startAngle = 90;
    series.hiddenState.properties.endAngle = 90;

    //chart.legend = new am4charts.Legend();
    this.chart1 = chart;
  }

  getChart2() {
    // chart ada gambo org
    let chart = am4core.create("chartdivgateControl2", am4charts.XYChart);

    // Add data
    chart.data = [
      {
        name: "John",
        points: 35654,
        color: chart.colors.next(),
        bullet: "https://www.amcharts.com/lib/images/faces/A04.png",
      },
      {
        name: "Damon",
        points: 65456,
        color: chart.colors.next(),
        bullet: "https://www.amcharts.com/lib/images/faces/C02.png",
      },
      {
        name: "Patrick",
        points: 45724,
        color: chart.colors.next(),
        bullet: "https://www.amcharts.com/lib/images/faces/D02.png",
      },
      {
        name: "Mark",
        points: 13654,
        color: chart.colors.next(),
        bullet: "https://www.amcharts.com/lib/images/faces/E01.png",
      },
    ];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "name";
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.renderer.inside = true;
    categoryAxis.renderer.labels.template.fill = am4core.color("#fff");
    categoryAxis.renderer.labels.template.fontSize = 20;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.grid.template.strokeDasharray = "4,4";
    valueAxis.renderer.labels.template.disabled = true;
    valueAxis.min = 0;

    // Do not crop bullets
    chart.maskBullets = false;

    // Remove padding
    chart.paddingBottom = 0;

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "points";
    series.dataFields.categoryX = "name";
    series.columns.template.propertyFields.fill = "color";
    series.columns.template.propertyFields.stroke = "color";
    series.columns.template.column.cornerRadiusTopLeft = 15;
    series.columns.template.column.cornerRadiusTopRight = 15;
    series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/b]";

    // Add bullets
    let bullet = series.bullets.push(new am4charts.Bullet());
    let image = bullet.createChild(am4core.Image);
    image.horizontalCenter = "middle";
    image.verticalCenter = "bottom";
    image.dy = 20;
    image.y = am4core.percent(100);
    image.propertyFields.href = "bullet";
    image.tooltipText = series.columns.template.tooltipText;
    image.propertyFields.fill = "color";
    image.filters.push(new am4core.DropShadowFilter());
  }

  getChart3() {
    // chatt petak warna warni
    let chart = am4core.create("chartdivgateControl3", am4charts.XYChart);
    // chart.scrollbarX = new am4core.Scrollbar();

    // Add data
    chart.data = [
      {
        country: "Jan",
        visits: 3025,
      },
      {
        country: "Feb",
        visits: 1882,
      },
      {
        country: "Mar",
        visits: 1809,
      },
      {
        country: "Apr",
        visits: 1322,
      },
      {
        country: "May",
        visits: 1122,
      },
      {
        country: "Jun",
        visits: 1114,
      },
      {
        country: "July",
        visits: 984,
      },
      {
        country: "Aug",
        visits: 711,
      },
      {
        country: "Sep",
        visits: 665,
      },
      {
        country: "Oct",
        visits: 580,
      },
      {
        country: "Nov",
        visits: 443,
      },
      {
        country: "Dec",
        visits: 441,
      },
    ];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    categoryAxis.renderer.labels.template.rotation = 270;
    categoryAxis.tooltip.disabled = true;
    // categoryAxis.renderer.minHeight = 110;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.minWidth = 50;

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.sequencedInterpolation = true;
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "country";
    series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
    series.columns.template.strokeWidth = 0;

    series.tooltip.pointerOrientation = "vertical";

    series.columns.template.column.cornerRadiusTopLeft = 10;
    series.columns.template.column.cornerRadiusTopRight = 10;
    series.columns.template.column.fillOpacity = 0.8;

    // on hover, make corner radiuses bigger
    let hoverState = series.columns.template.column.states.create("hover");
    hoverState.properties.cornerRadiusTopLeft = 0;
    hoverState.properties.cornerRadiusTopRight = 0;
    hoverState.properties.fillOpacity = 1;

    series.columns.template.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    // Cursor
    chart.cursor = new am4charts.XYCursor();

    // this.chart2 = chart;
  }

  getChart4() {
    // chart 2 line
    // let chart = am4core.create("chartReceipt", am4charts.XYChart);
    let chart = am4core.create("chartdivgateControl4", am4charts.XYChart);

    // Add data
    chart.data = [
      {
        month: "Jan",
        active: 1,
        inactive: 5,
      },
      {
        month: "Feb",
        active: 3,
        inactive: 2,
      },
      {
        month: "Mar",
        active: 5,
        inactive: 4,
      },
      {
        month: "Apr",
        active: 3,
        inactive: 3,
      },
      {
        month: "May",
        active: 6,
        inactive: 5,
      },
      {
        month: "Jun",
        active: 2,
        inactive: 4,
      },
      {
        month: "Jul",
        active: 4,
        inactive: 3,
      },
      {
        month: "Aug",
        active: 6,
        inactive: 5,
      },
      {
        month: "Sep",
        active: 5,
        inactive: 4,
      },
      {
        month: "Oct",
        active: 5,
        inactive: 5,
      },
      {
        month: "Nov",
        active: 4,
        inactive: 5,
      },
      {
        month: "Dec",
        active: 5,
        inactive: 6,
      },
    ];
    // Create category axis
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "month";

    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    categoryAxis.renderer.labels.template.rotation = 270;
    categoryAxis.tooltip.disabled = true;
    categoryAxis.renderer.minHeight = 110;
    // categoryAxis.renderer.opposite = true;

    // Create value axis
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    // valueAxis.renderer.inversed = true;
    valueAxis.title.text = "File";
    valueAxis.renderer.minLabelPosition = 0.01;

    // Create series
    let series1 = chart.series.push(new am4charts.LineSeries());
    series1.dataFields.valueY = "active";
    series1.dataFields.categoryX = "month";
    series1.name = "Downloaded ";
    series1.strokeWidth = 3;
    series1.bullets.push(new am4charts.CircleBullet());
    series1.tooltipText = "Amount {name} in {categoryX}: {valueY}";
    series1.legendSettings.valueText = "{valueY}";
    series1.visible = false;

    let series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.valueY = "inactive";
    series2.dataFields.categoryX = "month";
    series2.name = "Generated";
    series2.strokeWidth = 3;
    series2.bullets.push(new am4charts.CircleBullet());
    series2.tooltipText = "Amount {name} in {categoryX}: {valueY}";
    series2.legendSettings.valueText = "{valueY}";

    // Add chart cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "zoomY";

    // Add legend
    chart.legend = new am4charts.Legend();
  }

  getChart5() {
    // chart bar 2 line
    // let chart = am4core.create("chartReceipt", am4charts.XYChart);
    let chart = am4core.create("chartdivgateControl5", am4charts.XYChart);
    chart.colors.step = 2;

    chart.legend = new am4charts.Legend();
    chart.legend.position = "top";
    chart.legend.paddingBottom = 20;
    chart.legend.labels.template.maxWidth = 95;

    let xAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    xAxis.dataFields.category = "category";
    xAxis.renderer.cellStartLocation = 0.1;
    xAxis.renderer.cellEndLocation = 0.9;
    xAxis.renderer.grid.template.location = 0;

    let yAxis = chart.yAxes.push(new am4charts.ValueAxis());
    yAxis.min = 0;

    function createSeries(value, name) {
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = value;
      series.dataFields.categoryX = "category";
      series.name = name;

      series.events.on("hidden", arrangeColumns);
      series.events.on("shown", arrangeColumns);

      let bullet = series.bullets.push(new am4charts.LabelBullet());
      bullet.interactionsEnabled = false;
      bullet.dy = 30;
      bullet.label.text = "{valueY}";
      bullet.label.fill = am4core.color("#ffffff");

      return series;
    }

    chart.data = [
      {
        category: "Jan",
        first: 40,
        second: 55,
        third: 35,
      },
      {
        category: "Feb",
        first: 30,
        second: 78,
        third: 54,
      },
      {
        category: "Mar",
        first: 27,
        second: 40,
        third: 43,
      },
      {
        category: "Apr",
        first: 50,
        second: 33,
        third: 43,
      },
      {
        category: "May",
        first: 55,
        second: 43,
        third: 37,
      },
      {
        category: "Jun",
        first: 60,
        second: 53,
        third: 43,
      },
      {
        category: "Jul",
        first: 70,
        second: 57,
        third: 50,
      },
    ];

    createSeries("first", "Motoccycle");
    createSeries("second", "Car");
    createSeries("third", "Bicycle");

    function arrangeColumns() {
      let series = chart.series.getIndex(0);

      let w =
        1 -
        xAxis.renderer.cellStartLocation -
        (1 - xAxis.renderer.cellEndLocation);
      if (series.dataItems.length > 1) {
        let x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
        let x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
        let delta = ((x1 - x0) / chart.series.length) * w;
        if (am4core.isNumber(delta)) {
          let middle = chart.series.length / 2;

          let newIndex = 0;
          chart.series.each(function (series) {
            if (!series.isHidden && !series.isHiding) {
              series.dummyData = newIndex;
              newIndex++;
            } else {
              series.dummyData = chart.series.indexOf(series);
            }
          });
          let visibleCount = newIndex;
          let newMiddle = visibleCount / 2;

          chart.series.each(function (series) {
            let trueIndex = chart.series.indexOf(series);
            let newIndex = series.dummyData;

            let dx = (newIndex - trueIndex + middle - newMiddle) * delta;

            series.animate(
              { property: "dx", to: dx },
              series.interpolationDuration,
              series.interpolationEasing
            );
            series.bulletsContainer.animate(
              { property: "dx", to: dx },
              series.interpolationDuration,
              series.interpolationEasing
            );
          });
        }
      }
    }
  }

  getChart6() {
    // pie chart
    // let chart = am4core.create("chartReceipt", am4charts.XYChart);
    let chart = am4core.create("chartdivgatePass5", am4charts.PieChart);

    // Add data
    chart.data = [
      {
        label: "Car",
        amount: 501.9,
      },
      {
        label: "Motocycle",
        amount: 301.9,
      },
      {
        label: "Lorry",
        amount: 201.1,
      },
    ];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "amount";
    pieSeries.dataFields.category = "label";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeOpacity = 1;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    chart.hiddenState.properties.radius = am4core.percent(0);
  }
}
