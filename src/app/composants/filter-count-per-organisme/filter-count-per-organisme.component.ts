import { Component, OnInit } from "@angular/core";
import { Chart, registerables } from "node_modules/chart.js";
Chart.register(...registerables);
@Component({
  selector: "app-filter-count-per-organisme",
  templateUrl: "./filter-count-per-organisme.component.html",
  styleUrls: ["./filter-count-per-organisme.component.css"],
})
export class FilterCountPerOrganismeComponent implements OnInit {
  ngOnInit(): void {
    interface ChartData {
      division: string;
      count: number;
    }
    this.RenderChart();
  }

  RenderChart() {
    const ctx = new Chart("countorganisme", {
      type: "bar",
      data: {
        labels: ["OC20", "OC21"],

        datasets: [
          {
            label: "21",
            data: [5875, 2604],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(75, 192, 192, 0.2)",
            ],
            borderColor: ["rgb(255, 99, 132)", "rgb(75, 192, 192)"],
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
