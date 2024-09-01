import { Component } from '@angular/core';
import { PropertyComponent } from '../shared/property/property.component';
import { IPROPERTY } from '../_interfaces/property.interface';
import { properties } from '../_datas/property.data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    PropertyComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  properties: IPROPERTY[] = properties;

}
