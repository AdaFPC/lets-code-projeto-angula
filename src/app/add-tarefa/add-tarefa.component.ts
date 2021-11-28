import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { v4 as uuid } from 'uuid';
import { ModalService } from '../modal/modal.service';
import CalendarEvent from '../models/calendarEvent.model';
import SimpleStorage from '../simple-storage';

@Component({
  selector: 'app-add-tarefa',
  templateUrl: './add-tarefa.component.html',
  styleUrls: ['./add-tarefa.component.css']
})
export class AddTarefaComponent implements OnInit {

  editting = false;
  eventId = '';

  eventForm = this.formBuilder.group({
    date: new Date(),
    title: '',
    category: '',
    description: '',
    id: null
  });

  constructor(private formBuilder: FormBuilder, private router: ActivatedRoute, private route: Router, private modalService: ModalService) { }

  onSubmit() {
    let createEvent = this.eventForm.value;
    this.editting = createEvent.id !== null;
    createEvent.id = createEvent.id || uuid();
    SimpleStorage.getInstance().addToStorage(createEvent);
    this.eventForm.reset();
    if (this.editting)
      this.route.navigate(["/"]);
    else
      this.modalService.close('add-event');
  }

  ngOnInit(): void {
    this.eventId = this.router.snapshot.paramMap.get('id') || "";
    if (this.eventId) {
      const event = SimpleStorage.getInstance().getEvent(this.eventId);
      if (event) {
        this.eventForm = this.formBuilder.group(event);
        this.editting = true;
      }
    }
  }

  onDelete(): void {
    SimpleStorage.getInstance().removeEvent(this.eventId);
    this.route.navigate(["/"])
  }

}
