import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarContainerComponent } from '../calendar-container/calendar-container.component';
import { CalendarViewComponent } from '../calendar-view/calendar-view.component';

const routes: Routes = [
  {path:"", component: CalendarContainerComponent},
  {path:"e/:id", component: CalendarViewComponent}
];


@NgModule({
  
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
