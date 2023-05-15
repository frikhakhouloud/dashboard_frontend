import { Component, OnInit } from "@angular/core";
import { Chart, registerables } from "node_modules/chart.js";
Chart.register(...registerables);
import axios from "axios";

@Component({
  selector: "app-cost-customer-order-per-errors",
  templateUrl: "./cost-customer-order-per-errors.component.html",
  styleUrls: ["./cost-customer-order-per-errors.component.css"],
})
export class CostCustomerOrderPerErrorsComponent implements OnInit {
  ngOnInit(): void {
    interface ChartData {
      error: string;
      price: number;
    }

    axios
      .get<ChartData[]>("http://localhost:8000/order/order_par_errors/")

      .then((response) => {
        const data = response.data;
        const uniqueError = Array.from(new Set(data.map((item) => item.error)));
        const prices = data.map((item) => item.price);

        uniqueError.forEach((error) => {
          const errorData = data.filter((item) => item.error === error);
        });

        this.RenderChart(uniqueError, prices);
      })
      .catch((error) => {
        console.error("Error, error");
      });
  }

  RenderChart(labels: string[], data: number[]) {
    const ctx = document.getElementById("cost_error");

    new Chart("cost_error", {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "# cost per error",

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
