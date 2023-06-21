import { Component, OnInit } from "@angular/core";
import axios from "axios";
import { Router } from "@angular/router";

import { FormBuilder, FormGroup, FormArray, FormControl } from "@angular/forms";

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

  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.getdivision();
    this.getprofit();
    this.getorganisation();
    this.getweek();

    this.form = this.fb.group({
      week_year_25_2023: new FormControl(),
      week_year_24_2023: new FormControl(),
      week_year_23_2023: new FormControl(),
      week_year_22_2023: new FormControl(),
      week_year_21_2023: new FormControl(),
      week_year_20_2023: new FormControl(),
      week_year_19_2023: new FormControl(),
      week_year_18_2023: new FormControl(),
      week_year_17_2023: new FormControl(),
      week_year_16_2023: new FormControl(),
      week_year_15_2023: new FormControl(),
      week_year_14_2023: new FormControl(),
      division_2000: new FormControl(),
      division_2010: new FormControl(),
      division_2020: new FormControl(),
      division_2030: new FormControl(),
      division_2040: new FormControl(),
      division_2091: new FormControl(),
      division_2092: new FormControl(),
      division_2110: new FormControl(),
      division_2200: new FormControl(),
      division_2300: new FormControl(),
      division_2320: new FormControl(),
      division_2400: new FormControl(),
    });
  }

  getdivision() {
    axios
      .get("http://127.0.0.1:8000/filtre/division/")
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
      .get("http://127.0.0.1:8000/filtre/profit/")
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
      .get("http://127.0.0.1:8000/filtre/organisation/")
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
      .get("http://127.0.0.1:8000/filtre/range/")
      .then((res) => {
        console.log(res.data);
        this.weeks = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onSubmit() {
    console.log("hello message");

    const week_year: string[] = [];

    if (this.form.controls["week_year_25_2023"].value == true) {
      week_year.push("25_2023");
    }
    if (this.form.controls["week_year_24_2023"].value == true) {
      week_year.push("24_2023");
    }
    if (this.form.controls["week_year_23_2023"].value == true) {
      week_year.push("23_2023");
    }
    if (this.form.controls["week_year_22_2023"].value == true) {
      week_year.push("22_2023");
    }
    if (this.form.controls["week_year_21_2023"].value == true) {
      week_year.push("21_2023");
    }
    if (this.form.controls["week_year_20_2023"].value == true) {
      week_year.push("20_2023");
    }
    if (this.form.controls["week_year_19_2023"].value == true) {
      week_year.push("19_2023");
    }
    if (this.form.controls["week_year_18_2023"].value == true) {
      week_year.push("18_2023");
    }
    if (this.form.controls["week_year_17_2023"].value == true) {
      week_year.push("17_2023");
    }
    if (this.form.controls["week_year_16_2023"].value == true) {
      week_year.push("16_2023");
    }
    if (this.form.controls["week_year_15_2023"].value == true) {
      week_year.push("15_2023");
    }
    if (this.form.controls["week_year_14_2023"].value == true) {
      week_year.push("14_2023");
    }

    const divisions: string[] = [];

    if (this.form.controls["division_2000"].value == true) {
      divisions.push("2000");
    }
    if (this.form.controls["division_2010"].value == true) {
      divisions.push("2010");
    }
    if (this.form.controls["division_2020"].value == true) {
      divisions.push("2020");
    }
    if (this.form.controls["division_2030"].value == true) {
      divisions.push("2030");
    }
    if (this.form.controls["division_2040"].value == true) {
      divisions.push("2040");
    }
    if (this.form.controls["division_2091"].value == true) {
      divisions.push("2091");
    }
    if (this.form.controls["division_2092"].value == true) {
      divisions.push("2092");
    }
    if (this.form.controls["division_2110"].value == true) {
      divisions.push("2110");
    }
    if (this.form.controls["division_2200"].value == true) {
      divisions.push("2200");
    }
    if (this.form.controls["division_2300"].value == true) {
      divisions.push("2300");
    }
    if (this.form.controls["division_2320"].value == true) {
      divisions.push("2320");
    }
    if (this.form.controls["division_2400"].value == true) {
      divisions.push("2400");
    }
    console.log(week_year);
    console.log(divisions);
    this.router.navigate(["/home/show"]);
  }
}
