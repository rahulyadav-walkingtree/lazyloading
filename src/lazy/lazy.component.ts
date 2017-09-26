import { Component } from '@angular/core';

@Component({
  template: `<p>Lazy New Component</p>
  <p-dataList [value]="cars" [paginator]="true" [rows]="5">
  <p-header>
      List of Cars
  </p-header>
  <ng-template let-car pTemplate="item">
      <div class="ui-g ui-fluid car-item">
          <div class="ui-g-12 ui-md-3" style="text-align:center">
              <img src="assets/images/car.png">
          </div>
          <div class="ui-g-12 ui-md-9 car-details">
              <div class="ui-g">
                  <div class="ui-g-2 ui-sm-6">Vin: </div>
                  <div class="ui-g-10 ui-sm-6">{{car.vin}}</div>
                  
                  <div class="ui-g-2 ui-sm-6">Year: </div>
                  <div class="ui-g-10 ui-sm-6">{{car.year}}</div>
                  
                  <div class="ui-g-2 ui-sm-6">Brand: </div>
                  <div class="ui-g-10 ui-sm-6">{{car.brand}}</div>
                  
                  <div class="ui-g-2 ui-sm-6">Color: </div>
                  <div class="ui-g-10 ui-sm-6">{{car.color}}</div>
              </div>
          </div>
      </div>
  </ng-template>
</p-dataList>
  `
})
export class LazyComponent {
  cars: any = [
        {
            "vin":"ee8a89d8",
            "brand":"Fiat",
            "year":1987,
            "color":"Maroon"
        },
        {
            "vin":"642b3edc",
            "brand":"Renault",
            "year":1968,
            "color":"White"
        },
        {
            "vin":"19ec7580",
            "brand":"Renault",
            "year":1981,
            "color":"Black"
        },
        {
            "vin":"39980f30",
            "brand":"VW",
            "year":1986,
            "color":"Red"
        },
        {
            "vin":"ec9cc4e4",
            "brand":"Fiat",
            "year":1981,
            "color":"Brown"
        },
        {
            "vin":"09a06548",
            "brand":"VW",
            "year":1965,
            "color":"Green"
        },
        {
            "vin":"05c47246",
            "brand":"Mercedes",
            "year":2007,
            "color":"Blue"
        },
        {
            "vin":"a9cb87aa",
            "brand":"Fiat",
            "year":1962,
            "color":"Green"
        },
        {
            "vin":"eae758fa",
            "brand":"BMW",
            "year":1999,
            "color":"Yellow"
        }]
}