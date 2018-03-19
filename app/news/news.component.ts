import { Component, OnInit } from "@angular/core";

import { News } from "./news";
import { NewsService } from "./news.service";

import { Http } from "@angular/http";
import { TextField } from "ui/text-field";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./news.component.html",
})
export class NewsComponent implements OnInit {
    items: News[];
    news =[];

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private NewsService: NewsService) { }

    ngOnInit(): void {
        this.NewsService.getdataIncome()
            .subscribe((res) => {
                this.news = res;
                console.log(this.news)
            }, 
            (err)=>console.log("Something went wrong "+err)
        );
    }
}