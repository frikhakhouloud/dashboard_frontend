import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { ImportationFilesService } from "../../services/importation-files.service";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-import-files",
  templateUrl: "./import-files.component.html",
  styleUrls: ["./import-files.component.css"],
})
export class ImportFilesComponent implements OnInit {
  form: FormGroup;

  constructor(
    // private route: Router,
    private importationFilesService: ImportationFilesService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      ccclient: [null],
      cepc: [null],
      tcurr: [null],
    });
  }

  ngOnInit(): void {}

  // goToHomme() {
  //   this.route.navigate([""]);
  // }

  submitForm() {
    const formData = new FormData();
    formData.append("ccclient", this.form.get("ccclient").value);
    formData.append("cepc", this.form.get("cepc").value);
    formData.append("tcurr", this.form.get("tcurr").value);
    this.importationFilesService.postfiles(formData);
  }

  uploadFileccclient(event) {
    const ccclient = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      ccclient: ccclient,
    });
    this.form.get("ccclient").updateValueAndValidity();
  }

  uploadFilecepc(event) {
    const cepc = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      cepc: cepc,
    });
    this.form.get("cepc").updateValueAndValidity();
  }

  uploadFiletcurr(event) {
    const tcurr = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      tcurr: tcurr,
    });
    this.form.get("tcurr").updateValueAndValidity();
  }
}
