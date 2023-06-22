import { Component, OnInit } from "@angular/core";
import { Chart, registerables } from "node_modules/chart.js";
Chart.register(...registerables);

@Component({
  selector: "app-filter-count-per-cp",
  templateUrl: "./filter-count-per-cp.component.html",
  styleUrls: ["./filter-count-per-cp.component.css"],
})
export class FilterCountPerCpComponent implements OnInit {
  ngOnInit(): void {
    interface ChartData {
      division: string;
      count: number;
    }
    this.RenderChart();
  }

  RenderChart() {
    const ctx = new Chart("fcp", {
      type: "bar",
      data: {
        labels: ["111", "107", "106", "117"],

        datasets: [
          {
            label: "21",
            data: [3500, 2100, 1700, 900],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(201, 203, 207, 0.2)",
            ],
            borderColor: [
              "rgb(255, 99, 132)",
              "rgb(75, 192, 192)",
              "rgb(153, 102, 255)",
              "rgb(201, 203, 207)",
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
