import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DialogData } from "../models/dialog-data";
import { JokesService } from "../services/jokes.service";
import { JokeObject, Flags } from "../models/joke-object";

@Component({
  selector: "app-joke-details",
  templateUrl: "./joke-details.component.html",
  styleUrls: ["./joke-details.component.css"],
})
export class JokeDetailsComponent implements OnInit {
  jokes: JokeObject[] = [];
  joke: JokeObject = null;
  type: string;
  flags: Flags;
  jokesOfType: JokeObject[] = [];
  jokesOfTypeSelected: JokeObject[] = [];

  constructor(
    private jokesService: JokesService,
    public dialogRef: MatDialogRef<JokeDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {
    debugger;
    this.jokesService.getJokes().subscribe((x) => {
      this.jokes = JSON.parse(JSON.stringify(x));
      this.joke = this.jokes.find((x) => x.id == this.data.id);
      this.type = this.joke.type;
      this.joke.setup = this.joke.setup ? this.joke.setup : "";
      this.joke.joke = this.joke.joke ? this.joke.joke : "";
      this.flags = this.joke.flags;

      let numberJokes = Math.floor(Math.random() * 3 + 1);

      this.jokesOfType = this.jokes.filter((x) => x.type == this.type);
      this.jokesOfTypeSelected = [];
      for (let i = 0; i < numberJokes; i++) {
        const randomJoke = this.jokesOfType[
          Math.floor(Math.random() * this.jokesOfType.length)
        ];
        if (this.jokesOfTypeSelected.indexOf(randomJoke) == -1)
          this.jokesOfTypeSelected.push(randomJoke);
      }
    });
  }

  close() {
    this.dialogRef.close();
  }
}
