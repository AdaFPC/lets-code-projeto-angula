import { Subject } from 'rxjs';
import CalendarEvent from './models/calendarEvent.model';


export default class SimpleStorage {
    events: Subject<CalendarEvent[]> = new Subject<CalendarEvent[]>();

    private static instance: SimpleStorage;
    private constructor() { }

    public static getInstance(): SimpleStorage {
        if (!SimpleStorage.instance)
            SimpleStorage.instance = new SimpleStorage();
        return SimpleStorage.instance;

    }

    subscribe(callback: (events: CalendarEvent[]) => void): void {
        this.events.subscribe(callback);
    }

    addToStorage(value: CalendarEvent): void {
        let newEvents = this.getEvents();
        const eventIndex = newEvents.findIndex(event => event.id === value.id);
        if (eventIndex === -1) {
            newEvents.push(value);
        } else {
            newEvents[eventIndex] = value;
        }
        localStorage.setItem('events', JSON.stringify(newEvents));
        this.events.next(newEvents);
    }

    removeEvent(id:string): void{
        const newEvents = this.getEvents().filter(event => event.id !== id);
        localStorage.setItem('events', JSON.stringify(newEvents));
        this.events.next(newEvents);
    }

    getEvents(): CalendarEvent[] {
        const storageEvents = localStorage.getItem('events') || '[]';
        return JSON.parse(storageEvents);
    }

    getEvent(id: string): CalendarEvent | undefined {
        return this.getEvents().find(event => event.id === id);
    }

}