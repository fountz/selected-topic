import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { NewsComponent } from "./news/news.component";

const routes: Routes = [
    { path: "", redirectTo: "/news", pathMatch: "full" },
    { path: "news", component: NewsComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }