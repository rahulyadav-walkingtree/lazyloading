import { NgModule } from '@angular/core';
import { LazyComponent }   from './lazy.component';
import { routing } from './lazy.routing';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { BrowserModule } from '@angular/platform-browser';
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
  imports: [
    routing,
    //BrowserModule,
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
    SelectButtonModule
    //BrowserAnimationsModule
  ],
  providers: [ConfirmationService],
  declarations: [LazyComponent]
})
export class LazyModule {}
