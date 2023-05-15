import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ImportationFilesService {
  baseurl = "http://localhost:8000";

  constructor(private http: HttpClient) {}

  public postfiles(formData: FormData) {
    console.log("hjhj");
    this.http.post(this.baseurl + "/order/savefile", formData).subscribe();
    // return this.http
    //   .post(this.baseurl + "/order/savefile", "")
    //   .pipe(retry(1), catchError(this.errorHandl));
  }

  uploadFile(val: any) {
    return this.http.post(this.baseurl + "/order/savefile", val);
  }
}
