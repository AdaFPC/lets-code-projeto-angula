import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CalendarContainerComponent } from './calendar-container/calendar-container.component';
import { CalendarDayComponent } from './calendar-day/calendar-day.component';
import { AddTarefaComponent } from './add-tarefa/add-tarefa.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ModalModule } from './modal/modal.module';
import { ColorDirective } from './color.directive';
import { CalendarViewComponent } from './calendar-view/calendar-view.component'; 


@NgModule({
  declarations: [
    AppComponent,
    CalendarContainerComponent,
    CalendarDayComponent,
    AddTarefaComponent,
    ColorDirective,
    CalendarViewComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
