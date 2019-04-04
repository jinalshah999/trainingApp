import { Injectable } from "@angular/core";
import { endPoints } from "src/environments/environment";
import {
  HttpHeaders,
  HttpClient,
  HttpErrorResponse
} from "@angular/common/http";
import { throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class UserserviceService {
  url = endPoints.url + "user/";
  commonHeader = new HttpHeaders().set("Content-Type", "application/json");
  constructor(private _http: HttpClient) {}
  getAllUser() {
    return this._http.get(this.url).pipe(catchError(this.handleError));
  }
  addUser(fd: FormData) {
    return this._http
      .post(this.url, fd, {
        reportProgress: true,
        observe: "events"
      })
      .pipe(catchError(this.handleError));
  }
  private handleError(ex: HttpErrorResponse) {
    if (ex.error instanceof ErrorEvent) {
      console.log("client side error", ex.message);
    } else {
      console.log("server side error", ex.message);
    }
    return throwError("something went wrong");
  }
}
