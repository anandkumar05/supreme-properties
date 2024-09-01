import { Component, Input } from '@angular/core';
import { IPROPERTY } from '../../_interfaces/property.interface';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-property',
  standalone: true,
  imports: [
    CommonModule,
    CurrencyPipe
  ],
  templateUrl: './property.component.html',
  styleUrl: './property.component.scss'
})

export class PropertyComponent {

  @Input() property!: IPROPERTY;

}
