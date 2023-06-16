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

    //   axios
    //     .get<ChartData[]>("http://127.0.0.1:8000/filtre/result/")

    //     .then((response) => {

    //       const data = response.data;
    //       const uniqueDivisions = Array.from(
    //         new Set(data.map((item) => item.division))
    //       );
    //       const counts = data.map((item) => item.count);

    //       uniqueDivisions.forEach((division) => {
    //         const divisionData = data.filter(
    //           (item) => item.division === division
    //         );

    //       });
    //       this.RenderChart(uniqueDivisions, counts);
    //     })
    //     .catch((error) => {
    //       console.error("Error, error");
    //     });
    // }
  }

  RenderChart() {
    const ctx = new Chart("fdivision", {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
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
