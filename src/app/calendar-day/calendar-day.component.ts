import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../modal/modal.service';
import CalendarEvent from '../models/calendarEvent.model';

@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.css']
})
export class CalendarDayComponent implements OnInit {
  @Input() day: Date = new Date();
  @Input() events: CalendarEvent[] = [];
  dayNumber: number = new Date().getDate();

  constructor( private modalService: ModalService) { }

  ngOnInit(): void {
    this.dayNumber = this.day.getDate();    
  }

  teste(): void {
    this.modalService.open('add-event');
  }
}
