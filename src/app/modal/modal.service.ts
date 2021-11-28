import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modals: any[] = [];

  constructor() { }

  add(modal:any): void{
    this.modals.push(modal);
    
  }

  remove(id:string): void{
    this.modals = this.modals.filter(modal => modal.id !== id);
  }

  open(id:string): void{
    const existModal = this.modals.find(modal => modal.id === id);
    if(existModal) existModal.open();
  }

  close(id:string): void{
    const existModal = this.modals.find(modal => modal.id === id);
    if(existModal) existModal.close();
  }
}
