//import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EagerComponent } from './eager.component';
import { routing } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  ToolbarModule,
  ButtonModule,
  SplitButtonModule,
  TabViewModule,
  CodeHighlighterModule,
  DataListModule,
  InputTextModule,
  DropdownModule,
  PaginatorModule,
  BreadcrumbModule,
  DataGridModule,
  CheckboxModule,
  DialogModule,
  ChipsModule,
  StepsModule,
  DataTableModule,
  SharedModule,
  TooltipModule,
  BlockUIModule,
  PanelModule,
  ConfirmDialogModule,
  ConfirmationService,
  CarouselModule,
  SelectButtonModule
} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    EagerComponent
  ],
  imports: [
    //BrowserModule,
    routing,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    TabViewModule,
    CodeHighlighterModule,
    DataListModule,
    InputTextModule,
    DropdownModule,
    PaginatorModule,
    BreadcrumbModule,
    DataGridModule,
    CheckboxModule,
    DialogModule,
    ChipsModule,
    StepsModule,
    DataTableModule,
    SharedModule,
    TooltipModule,
    BlockUIModule,
    PanelModule,
    ConfirmDialogModule,
    CarouselModule,
    SelectButtonModule,
    BrowserAnimationsModule
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
