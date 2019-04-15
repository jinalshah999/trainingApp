import { NgModule } from "@angular/core";
import { DemoComponent } from "./demo/demo.component";
import { CalcComponent } from "./calc/calc.component";
import { Calc1Component } from "./calc1/calc1.component";
import { TodoComponent } from "./todo/todo.component";
import { FilterPipe } from "./filter.pipe";
import { HighliterDirective } from "./highliter.directive";
import { DemodirectiveDirective } from "./demodirective.directive";
import { CreditcardDirective } from "./creditcard.directive";

import { CommonModule } from "@angular/common";
import { routingMiscArr } from "./misc.routing";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    DemoComponent,
    CalcComponent,
    Calc1Component,
    TodoComponent,
    FilterPipe,
    DemodirectiveDirective,
    HighliterDirective,
    CreditcardDirective
  ],
  imports: [CommonModule,FormsModule, routingMiscArr]
})
export class MiscModule {}
