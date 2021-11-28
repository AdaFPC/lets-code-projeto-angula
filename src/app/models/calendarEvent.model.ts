export default class CalendarEvent {
    id: string;
    date: Date;
    title: string;
    category: string;
    description: string;

    constructor(id: string, date: Date,
        title: string,
        category: string,
        description: string) {
        this.id = id;
        this.date = date;
        this.title = title;
        this.category = category;
        this.description = description;
    }
}