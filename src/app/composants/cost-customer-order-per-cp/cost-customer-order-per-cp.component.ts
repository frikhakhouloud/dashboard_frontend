import { Component, OnInit } from "@angular/core";
import { Chart, registerables } from "node_modules/chart.js";
Chart.register(...registerables);
import axios from "axios";

@Component({
  selector: "app-cost-customer-order-per-cp",
  templateUrl: "./cost-customer-order-per-cp.component.html",
  styleUrls: ["./cost-customer-order-per-cp.component.css"],
})
export class CostCustomerOrderPerCpComponent implements OnInit {
  ngOnInit(): void {
    interface ChartData {
      cp: string;
      price: number;
    }

    axios
      .get<ChartData[]>("http://127.0.0.1:8000/order/order_par_cp/")

      .then((response) => {
        const data = response.data;
        const uniqueCp = Array.from(new Set(data.map((item) => item.cp)));
        const prices = data.map((item) => item.price);

        uniqueCp.forEach((cp) => {
          const cpData = data.filter((item) => item.cp === cp);
        });

        this.RenderChart(uniqueCp, prices);
      })
      .catch((error) => {
        console.error("Error, error");
      });
  }

  RenderChart(labels: string[], data: number[]) {
    const ctx = document.getElementById("cost_cp");

    new Chart("cost_cp", {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "# cost per profit center",

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
