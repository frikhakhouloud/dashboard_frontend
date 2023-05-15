import { Component, OnInit } from "@angular/core";
import { Chart, registerables } from "node_modules/chart.js";
Chart.register(...registerables);
import axios from "axios";
@Component({
  selector: "app-count-customer-order-per-errors",
  templateUrl: "./count-customer-order-per-errors.component.html",
  styleUrls: ["./count-customer-order-per-errors.component.css"],
})
export class CountCustomerOrderPerErrorsComponent implements OnInit {
  ngOnInit(): void {
    interface ChartData {
      error: string;
      count: number;
    }

    axios
      .get<ChartData[]>("http://localhost:8000/order/order_par_errors/")

      .then((response) => {
        const data = response.data;
        const uniqueError = Array.from(new Set(data.map((item) => item.error)));
        const counts = data.map((item) => item.count);

        uniqueError.forEach((error) => {
          const errorData = data.filter((item) => item.error === error);
        });
        this.RenderChart(uniqueError, counts);
      })
      .catch((error) => {
        console.error("Error, error");
      });
  }

  RenderChart(labels: string[], data: number[]) {
    const ctx = document.getElementById("count_errors");

    new Chart("count_errors", {
      type: "bar",

      data: {
        labels: labels,
        datasets: [
          {
            label: "# count per error",
            backgroundColor: [
              "#D65DB1",
              "#FF6F91",
              "#FF9671",
              "#FFC75F",
              "#008F7A",
              "#4E8397",
              "#C34A36",
              "#845EC2",
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
