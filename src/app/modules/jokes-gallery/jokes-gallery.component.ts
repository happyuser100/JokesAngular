import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatDialog } from '@angular/material/dialog';
import { JokeDetailsComponent } from './joke-details/joke-details.component';
import { DialogData } from './models/dialog-data';
import { JokesService } from './services/jokes.service';

@Component({
  selector: "app-jokes-gallery",
  templateUrl: "./jokes-gallery.component.html",
  styleUrls: ["./jokes-gallery.component.css"],
})
export class JokesGalleryComponent implements OnInit {
  typesOfShoes: string[] = [
    "Boots",
    "Clogs",
    "Loafers",
    "Moccasins",
    "Sneakers",
  ];

  constructor(private router: Router,private dialog: MatDialog,
    private jokesService: JokesService) {}

  data: any[] = [];
  jokes: any[] = [];

  ngOnInit(): void {

     this.jokesService.getJokes().subscribe((x) =>
     {
       this.jokes = JSON.parse(JSON.stringify(x));
       debugger
     }
     );

    for (let i = 1; i <= 10; i++) {
      const item = {
        id: i,
        name: `Person ${i}`,
        email: `person${i}@gmail.com`,
      };

      this.data.push(item);
    }
  }

  goToJoke(joke)
  {
    debugger;
    //this.router.navigate(["jokes", item.id]);
    const dialogData:  DialogData = 
    {
      id: joke.id
    };
        
    const dialogRef = this.dialog.open(JokeDetailsComponent, {
      width: '850px',
      height: '500px',
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(result => {
      debugger
    });

  }

  goToChat(item) {
    debugger;
    //this.router.navigate(["jokes", item.id]);
    const dialogData:  DialogData = 
    {
      id: item.id
    };
        
    const dialogRef = this.dialog.open(JokeDetailsComponent, {
      width: '500px',
      height: '500px',
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(result => {
      debugger
    });
  }
}
