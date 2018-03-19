import { Injectable } from "@angular/core";
import { Http, Headers, Response, RequestOptions } from "@angular/http";
import { Observable as RxObservable } from "rxjs/Observable";
import "rxjs/add/operator/map";

import { News } from "./news";

@Injectable()
export class NewsService {
    constructor(
        private http: Http
    ) { }
    private items = new Array<News>(
        { id: 1, name: "Ter Stegen", role: "Goalkeeper" },
        { id: 3, name: "Piqué", role: "Defender" },
        { id: 4, name: "I. Rakitic", role: "Midfielder" },
        { id: 5, name: "Sergio", role: "Midfielder" },
        { id: 6, name: "Denis Suárez", role: "Midfielder" },
        { id: 7, name: "Arda", role: "Midfielder" },
        { id: 8, name: "A. Iniesta", role: "Midfielder" },
        { id: 9, name: "Suárez", role: "Forward" },
        { id: 10, name: "Messi", role: "Forward" },
        { id: 11, name: "Neymar", role: "Forward" },
        { id: 12, name: "Rafinha", role: "Midfielder" },
        { id: 13, name: "Cillessen", role: "Goalkeeper" },
        { id: 14, name: "Mascherano", role: "Defender" },
        { id: 17, name: "Paco Alcácer", role: "Forward" },
        { id: 18, name: "Jordi Alba", role: "Defender" },
        { id: 19, name: "Digne", role: "Defender" },
        { id: 20, name: "Sergi Roberto", role: "Midfielder" },
        { id: 21, name: "André Gomes", role: "Midfielder" },
        { id: 22, name: "Aleix Vidal", role: "Midfielder" },
        { id: 23, name: "Umtiti", role: "Defender" },
        { id: 24, name: "Mathieu", role: "Defender" },
        { id: 25, name: "Masip", role: "Goalkeeper" },
    );

    getItems(): News[] {
        return this.items;
    }

    getItem(id: number): News {
        return this.items.filter(item => item.id === id)[0];
    }

    getNews(){
        let options = this.createRequestOptions();
        let api = ""  
          return this.http.get(api)
              .map(res =>  res.json());
    }
    getdataIncome(){
        let options = this.createRequestOptions();
        let api = "https://us-central1-sample-d1441.cloudfunctions.net/listhero"  
          return this.http.get(api)
              .map(res =>  res.json());
    }
    
  
     private createRequestOptions() {
          let headers = new Headers();
          headers.append("AuthKey", "my-key");
          headers.append("AuthToken", "my-token");
          headers.append("Content-Type", "application/json");
          let options = new RequestOptions({ headers: headers });
          return options;
      }
  
}
