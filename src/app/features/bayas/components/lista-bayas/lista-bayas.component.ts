import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TarjetaBayaComponent } from '../tarjeta-baya/tarjeta-baya.component';

@Component({
  selector: 'app-tarjeta-baya',
  standalone: true,
  imports: [
    CommonModule,
    TarjetaBayaComponent
  ],
  templateUrl: './lista-bayas.component.html',
})
export class ListaBayasComponent implements OnInit {

    ngOnInit(): void {
      console.log('Componente de Lista de bayas');
    }
    
}
