import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class JokesService {
  constructor(private httpClient: HttpClient) {}

  getJokes() {
    return this.httpClient.get("assets/jokes.json");
  }
}
