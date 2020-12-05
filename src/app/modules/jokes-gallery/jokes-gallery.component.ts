import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { JokeDetailsComponent } from "./joke-details/joke-details.component";
import { DialogData } from "./models/dialog-data";
import { JokesService } from "./services/jokes.service";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { JokeObject } from "./models/joke-object";
import { MatPaginator } from "@angular/material/paginator";

@Component({
  selector: "app-jokes-gallery",
  templateUrl: "./jokes-gallery.component.html",
  styleUrls: ["./jokes-gallery.component.css"],
})
export class JokesGalleryComponent implements OnInit, AfterViewInit {
  constructor(
    private router: Router,
    private dialog: MatDialog,
    private jokesService: JokesService
  ) {}

  data: any[] = [];
  jokes: JokeObject[] = [];
  listData: MatTableDataSource<JokeObject>;
  displayedColumns: string[] = ["id", "setup", "joke", "type", "category", "error", "actions"];
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  ngOnInit(): void {
    this.jokesService.getJokes().subscribe((x) => {
      this.jokes = JSON.parse(JSON.stringify(x));
      this.listData = new MatTableDataSource(this.jokes);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    });
  }

  ngAfterViewInit(): void {
    // this.listData.sort = this.sort;
    // this.listData.paginator = this.paginator;
  }

  details(row: JokeObject) {
    debugger;
    const dialogData: DialogData = {
      id: row.id,
    };

    const dialogRef = this.dialog.open(JokeDetailsComponent, {
      width: "900px",
      height: "750px",
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      debugger;
    });
  }
}
