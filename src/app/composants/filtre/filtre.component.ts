import { Component, OnInit } from "@angular/core";
import axios from "axios";
import { Router } from "@angular/router";

import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators,
} from "@angular/forms";

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
  /* Hobbies: Array<any> =[
    {name: 'Cricket', value:'Cricket'},
    {name: 'TV', value:'TV'},
  ]; */
  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      //checkArray: this.fb.array([]),
      //valeur par defaut false
    });
  }

  ngOnInit(): void {
    this.getdivision();
    this.getprofit();
    this.getorganisation();
    this.getweek();
  }

  getdivision() {
    axios
      // .get("http://127.0.0.1:8000/division/?format=json")
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

  onCkeckboxChange(e: any) {
    const checkArray: FormArray = this.form.get("checkArray") as FormArray;
  }
  submitForm() {
    console.log(this.form.value);
  }

  onSubmit() {
    console.log("hello message");
    // this.router.navigate(["/home/show"]);
  }

  // filterDivision() {
  //   axios
  //     .get("http://localhost:8000/filtre/result/")
  //     .then((res) => {
  //       console.log(res.data);
  //       this.divisions = res.data.Results;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }
}
