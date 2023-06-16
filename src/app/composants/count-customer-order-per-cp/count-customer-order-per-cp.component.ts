import { Component, OnInit } from "@angular/core";
import { Chart, registerables } from "node_modules/chart.js";
Chart.register(...registerables);
import axios from "axios";

@Component({
  selector: "app-count-customer-order-per-cp",
  templateUrl: "./count-customer-order-per-cp.component.html",
  styleUrls: ["./count-customer-order-per-cp.component.css"],
})
export class CountCustomerOrderPerCpComponent implements OnInit {
  ngOnInit(): void {
    interface ChartData {
      cp: string;
      count: number;
    }

    axios
      .get<ChartData[]>("http://127.0.0.1:8000/order/order_par_cp/")

      .then((response) => {
        const data = response.data;
        const uniqueCp = Array.from(new Set(data.map((item) => item.cp)));
        const counts = data.map((item) => item.count);

        uniqueCp.forEach((cp) => {
          const cpData = data.filter((item) => item.cp === cp);
        });
        this.RenderChart(uniqueCp, counts);
      })
      .catch((error) => {
        console.error("Error, error");
      });
  }

  RenderChart(labels: string[], data: number[]) {
    const ctx = document.getElementById("count_cp");

    new Chart("count_cp", {
      type: "bar",

      data: {
        labels: labels,
        datasets: [
          {
            label: "# count per profit center",
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
