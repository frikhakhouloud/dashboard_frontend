import { Component, OnInit } from "@angular/core";
import axios from "axios";

@Component({
  selector: "app-filtre",
  templateUrl: "./filtre.component.html",
  styleUrls: ["./filtre.component.css"],
})
export class FiltreComponent implements OnInit {
  divisions = [];
  profits = [];
  organisations = [];
  weeks = [];
  constructor() {}

  ngOnInit(): void {
    this.getdivision();
    this.getprofit();
    this.getorganisation();
    this.getweek();
  }

  getdivision() {
    axios
      .get("http://127.0.0.1:8000/division/")
      .then((res) => {
        console.log(res.data);
        this.divisions = res.data.Results;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getprofit() {
    axios
      .get("http://127.0.0.1:8000/profit/")
      .then((res) => {
        console.log(res.data);
        this.profits = res.data.Results;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getorganisation() {
    axios
      .get("http://127.0.0.1:8000/organisation/")
      .then((res) => {
        console.log(res.data);
        this.organisations = res.data.Results;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getweek() {
    axios
      .get("http://127.0.0.1:8000/range/")
      .then((res) => {
        console.log(res.data);
        this.weeks = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
