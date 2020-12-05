import { Component, OnInit, Input } from "@angular/core";
import { Flags } from "../models/joke-object";

@Component({
  selector: "app-flag",
  templateUrl: "./flag.component.html",
  styleUrls: ["./flag.component.css"],
})
export class FlagComponent implements OnInit {
  constructor() {}
  @Input() flags: Flags;
  ngOnInit(): void {}
}
