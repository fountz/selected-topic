"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var news_service_1 = require("./news.service");
var NewsComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function NewsComponent(NewsService) {
        this.NewsService = NewsService;
        this.news = [];
    }
    NewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.NewsService.getdataIncome()
            .subscribe(function (res) {
            _this.news = res;
            console.log(_this.news);
        }, function (err) { return console.log("Something went wrong " + err); });
    };
    NewsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./news.component.html",
        }),
        __metadata("design:paramtypes", [news_service_1.NewsService])
    ], NewsComponent);
    return NewsComponent;
}());
exports.NewsComponent = NewsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZXdzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUdsRCwrQ0FBNkM7QUFVN0M7SUFJSSw2SUFBNkk7SUFDN0ksaUhBQWlIO0lBQ2pILHVCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUo1QyxTQUFJLEdBQUUsRUFBRSxDQUFDO0lBSXVDLENBQUM7SUFFakQsZ0NBQVEsR0FBUjtRQUFBLGlCQVFDO1FBUEcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUU7YUFDM0IsU0FBUyxDQUFDLFVBQUMsR0FBRztZQUNYLEtBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1lBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzFCLENBQUMsRUFDRCxVQUFDLEdBQUcsSUFBRyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEdBQUMsR0FBRyxDQUFDLEVBQXhDLENBQXdDLENBQ2xELENBQUM7SUFDTixDQUFDO0lBaEJRLGFBQWE7UUFMekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1NBQ3ZDLENBQUM7eUNBT21DLDBCQUFXO09BTm5DLGFBQWEsQ0FpQnpCO0lBQUQsb0JBQUM7Q0FBQSxBQWpCRCxJQWlCQztBQWpCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgTmV3cyB9IGZyb20gXCIuL25ld3NcIjtcbmltcG9ydCB7IE5ld3NTZXJ2aWNlIH0gZnJvbSBcIi4vbmV3cy5zZXJ2aWNlXCI7XG5cbmltcG9ydCB7IEh0dHAgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbmV3cy5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBOZXdzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBpdGVtczogTmV3c1tdO1xuICAgIG5ld3MgPVtdO1xuXG4gICAgLy8gVGhpcyBwYXR0ZXJuIG1ha2VzIHVzZSBvZiBBbmd1bGFy4oCZcyBkZXBlbmRlbmN5IGluamVjdGlvbiBpbXBsZW1lbnRhdGlvbiB0byBpbmplY3QgYW4gaW5zdGFuY2Ugb2YgdGhlIEl0ZW1TZXJ2aWNlIHNlcnZpY2UgaW50byB0aGlzIGNsYXNzLiBcbiAgICAvLyBBbmd1bGFyIGtub3dzIGFib3V0IHRoaXMgc2VydmljZSBiZWNhdXNlIGl0IGlzIGluY2x1ZGVkIGluIHlvdXIgYXBw4oCZcyBtYWluIE5nTW9kdWxlLCBkZWZpbmVkIGluIGFwcC5tb2R1bGUudHMuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBOZXdzU2VydmljZTogTmV3c1NlcnZpY2UpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuTmV3c1NlcnZpY2UuZ2V0ZGF0YUluY29tZSgpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5ld3MgPSByZXM7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5uZXdzKVxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICAoZXJyKT0+Y29uc29sZS5sb2coXCJTb21ldGhpbmcgd2VudCB3cm9uZyBcIitlcnIpXG4gICAgICAgICk7XG4gICAgfVxufSJdfQ==