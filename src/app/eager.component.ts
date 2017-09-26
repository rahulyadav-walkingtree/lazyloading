import { Component } from '@angular/core';

@Component({
  template: `<p>Eager New Component</p>
  <p-dataGrid [value]="cars" [paginator]="true" [rows]="20">
  <p-header>
      List of Cars
  </p-header>
  <ng-template let-car pTemplate="item">
      <div style="padding:3px" class="ui-g-12 ui-md-3">
          <p-panel [header]="car.vin" [style]="{'text-align':'center'}">
              <img src="assets/images/car.png" width="60">
              <div class="car-detail">{{car.year}} - {{car.color}}</div>
              <hr class="ui-widget-content" style="border-top:0">
              <i class="fa fa-search" (click)="selectCar(car)" style="cursor:pointer"></i>
          </p-panel>
      </div>
  </ng-template>
</p-dataGrid>

<p-dialog header="Car Details" [(visible)]="displayDialog" [responsive]="true" showEffect="fade" [modal]="true" width="225" (onAfterHide)="onDialogHide()">
  <div class="ui-grid ui-grid-responsive ui-grid-pad" *ngIf="selectedCar" style="font-size:16px;text-align:center;padding:20px">
      <div class="ui-grid-row">
          <div class="ui-grid-col-12" style="text-align:center"><img src="assets/images/car.png"></div>
      </div>
      <div class="ui-grid-row">
          <div class="ui-grid-col-4">Vin: </div>
          <div class="ui-grid-col-8">{{selectedCar.vin}}</div>
      </div>
      <div class="ui-grid-row">
          <div class="ui-grid-col-4">Year: </div>
          <div class="ui-grid-col-8">{{selectedCar.year}}</div>
      </div>
      <div class="ui-grid-row">
          <div class="ui-grid-col-4">Brand: </div>
          <div class="ui-grid-col-8">{{selectedCar.brand}}</div>
      </div>
      <div class="ui-grid-row">
          <div class="ui-grid-col-4">Color: </div>
          <div class="ui-grid-col-8">{{selectedCar.color}}</div>
      </div>
  </div>
</p-dialog>
  `
})
export class EagerComponent {

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