import { Component, OnInit } from "@angular/core";
import { Chart, registerables } from "node_modules/chart.js";
Chart.register(...registerables);
import axios from "axios";
@Component({
  selector: "app-filter-cost-per-division",
  templateUrl: "./filter-cost-per-division.component.html",
  styleUrls: ["./filter-cost-per-division.component.css"],
})
export class FilterCostPerDivisionComponent implements OnInit {
  ngOnInit(): void {
    interface ChartData {
      division: string;
      count: number;
    }
    this.RenderChart();
  }

  RenderChart() {
    const ctx = new Chart("fcostdivision", {
      type: "bar",
      data: {
        labels: ["2110", "2100", "2300"],
        datasets: [
          {
            label: "21",
            data: [3965984, 2556929, 2303329],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
            ],
            borderColor: [
              "rgb(255, 99, 132)",
              "rgb(75, 192, 192)",
              "rgb(153, 102, 255)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
