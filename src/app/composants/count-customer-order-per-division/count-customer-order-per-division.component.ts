import { Component, OnInit } from "@angular/core";
import { Chart, registerables } from "node_modules/chart.js";
Chart.register(...registerables);
import axios from "axios";
//import { Colors } from "chart.js";
//Chart.register(Colors);

@Component({
  selector: "app-count-customer-order-per-division",
  templateUrl: "./count-customer-order-per-division.component.html",
  styleUrls: ["./count-customer-order-per-division.component.css"],
})
export class CountCustomerOrderPerDivisionComponent implements OnInit {
  ngOnInit(): void {
    interface ChartData {
      division: string;
      count: number;
    }

    axios
      .get<ChartData[]>("http://127.0.0.1:8000/order/count_order_par_division/")

      .then((response) => {
        const data = response.data;
        const uniqueDivisions = Array.from(
          new Set(data.map((item) => item.division))
        );
        const counts = data.map((item) => item.count);

        uniqueDivisions.forEach((division) => {
          const divisionData = data.filter(
            (item) => item.division === division
          );
        });
        this.RenderChart(uniqueDivisions, counts);
      })
      .catch((error) => {
        console.error("Error, error");
      });
  }

  RenderChart(labels: string[], data: number[]) {
    const ctx = document.getElementById("piechart");

    new Chart("piechart", {
      type: "bar",

      data: {
        labels: labels,
        datasets: [
          {
            label: "# count per division",
            backgroundColor: [
              "#845EC2",
              "#D65DB1",
              "#FF6F91",
              "#FF9671",
              "#FFC75F",
              "#008F7A",
              "#4E8397",
              "#C34A36",
            ],

            data: data,
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
