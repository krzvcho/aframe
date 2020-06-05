import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-external",
  templateUrl: "./external.component.html",
  styleUrls: ["./external.component.scss"],
})
export class ExternalComponent implements OnInit {
  public someData = [
    {
      name: "a",
      position: "-2 0 -5",
      link: "on: click; href: https://onet.pl",
    },
    {
      name: "b",
      position: "0 0 -5",
      link: "on: click; href: https://csod.com",
    },
    {
      name: "c",
      position: "2 0 -5",
      link: "on: click; href: https://saba.com",
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  fireClick(): void {
    alert(1);
  }
}
