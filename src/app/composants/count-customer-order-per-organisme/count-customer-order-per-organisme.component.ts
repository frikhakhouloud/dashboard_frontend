import { Component, OnInit } from "@angular/core";
import { Chart, registerables } from "node_modules/chart.js";
Chart.register(...registerables);
import axios from "axios";

@Component({
  selector: "app-count-customer-order-per-organisme",
  templateUrl: "./count-customer-order-per-organisme.component.html",
  styleUrls: ["./count-customer-order-per-organisme.component.css"],
})
export class CountCustomerOrderPerOrganismeComponent implements OnInit {
  ngOnInit(): void {
    interface ChartData {
      organisme: string;
      count: number;
    }

    axios
      .get<ChartData[]>("http://127.0.0.1:8000/order/order_par_organisme/")

      .then((response) => {
        const data = response.data;
        const uniqueOrganisme = Array.from(
          new Set(data.map((item) => item.organisme))
        );
        const counts = data.map((item) => item.count);

        uniqueOrganisme.forEach((organisme) => {
          const organismeData = data.filter(
            (item) => item.organisme === organisme
          );
        });
        this.RenderChart(uniqueOrganisme, counts);
      })
      .catch((error) => {
        console.error("Error, error");
      });
  }

  RenderChart(labels: string[], data: number[]) {
    const ctx = document.getElementById("count_organisme");

    new Chart("count_organisme", {
      type: "bar",

      data: {
        labels: labels,
        datasets: [
          {
            label: "# count per organisme",
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
