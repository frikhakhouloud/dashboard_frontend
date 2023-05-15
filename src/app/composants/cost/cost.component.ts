import { Component, OnInit } from "@angular/core";
import axios from "axios";

@Component({
  selector: "app-cost",
  templateUrl: "./cost.component.html",
  styleUrls: ["./cost.component.css"],
})
export class CostComponent implements OnInit {
  myVarCost: any = [];

  constructor() {}

  ngOnInit(): void {
    this.getcost();
  }

  getcost() {
    axios
      .get("http://127.0.0.1:8000/order/cost/")
      .then((res) => {
        console.log(res.data);
        this.myVarCost = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
{
}
