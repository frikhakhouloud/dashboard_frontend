import { Component, OnInit } from "@angular/core";
import { Chart, registerables } from "node_modules/chart.js";
Chart.register(...registerables);
import axios from "axios";

@Component({
  selector: "app-filter-count-per-division",
  templateUrl: "./filter-count-per-division.component.html",
  styleUrls: ["./filter-count-per-division.component.css"],
})
export class FilterCountPerDivisionComponent implements OnInit {
  ngOnInit(): void {
    interface ChartData {
      division: string;
      count: number;
    }
    this.RenderChart();
  }

  RenderChart() {
    const ctx = new Chart("fdivision", {
      type: "bar",
      data: {
        // labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        labels: ["2110", "2100", "2300"],

        datasets: [
          {
            label: "21",
            data: [439, 2604, 847],
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
