import { Component, OnInit } from "@angular/core";
import axios from "axios";

@Component({
  selector: "app-count",
  templateUrl: "./count.component.html",
  styleUrls: ["./count.component.css"],
})
export class CountComponent implements OnInit {
  myVar: any = [];

  constructor() {}

  ngOnInit(): void {
    this.getcount();
  }

  getcount() {
    axios
      .get("http://127.0.0.1:8000/order/count/")
      .then((res) => {
        console.log(res.data);
        this.myVar = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
{
}
