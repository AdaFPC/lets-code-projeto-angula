import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import CalendarEvent from '../models/calendarEvent.model';
import SimpleStorage from '../simple-storage';

@Component({
  selector: 'app-calendar-container',
  templateUrl: './calendar-container.component.html',
  styleUrls: ['./calendar-container.component.css']
})
export class CalendarContainerComponent implements OnInit {

  year: number = 0;
  months: string[] = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  month: string = "";
  days: Date[] = [];
  currentYear: number = new Date().getFullYear();
  currentMonth: number = new Date().getMonth();
  events: CalendarEvent[] = [];


  constructor() {
    SimpleStorage.getInstance().subscribe(events => this.events = events);
  }

  ngOnInit(): void {
    this.days = this.fillCalendar(this.currentYear, this.currentMonth); //preenche o mês e o ano corrente
    this.events = SimpleStorage.getInstance().getEvents();

  }
  previousMonth(): void {
    let firstDay = new Date(this.currentYear, this.currentMonth - 1, 1);
    this.currentMonth = firstDay.getMonth();
    this.currentYear = firstDay.getFullYear();
    this.days = this.fillCalendar(this.currentYear, this.currentMonth);
  }

  nextMonth(): void {
    let firstDay = new Date(this.currentYear, this.currentMonth + 1, 1);
    this.currentMonth = firstDay.getMonth();
    this.currentYear = firstDay.getFullYear();
    this.days = this.fillCalendar(this.currentYear, this.currentMonth);
  }

  getEventsForDay(day: Date): CalendarEvent[] {

    return this.events.filter(event => {
      const eventDate = new Date(event.date || "");
      return eventDate.getDate() === day.getDate() &&
        eventDate.getMonth() === day.getMonth() &&
        eventDate.getFullYear() === day.getFullYear();
    });
  }

  private fillCalendar(year: number, month: number): Date[] {
    this.year = year; //define ano que começa o calendario
    this.month = this.months[month]; //define mês que começa o calendario
    const firstDay = new Date(year, month, 1); //pega o primeiro dia do mês
    return new Array(35) //cria as "semanas"
      .fill(-1)
      .map((valor, index) => this.giveDay(year, month, 1, index - firstDay.getDay())); //preenche o calendario com os dias do mês corrente
  }

  private giveDay(year: number, month: number, day: number, diff: number): Date {
    let date = new Date(year, month, day); //pega o dia que foi passado(nesse caso o primeiro dia do ano)
    date.setDate(date.getDate() + diff) //setando a data movendo a quantidade de dias entre o primeiro dia e os demais
    return date;
  }


}
