import { Component } from '@angular/core';

@Component({
  selector: 'app-structures',
  templateUrl: './structures.component.html',
  styleUrl: './structures.component.css'
})
export class StructuresComponent {
  cityRecords = [
    {Id : 101 , Name : 'Karachi' , FamousPlace  : 'Mazar -e- Quaid'},
    {Id : 102 , Name : 'Islamabad' , FamousPlace  : 'Shah Faisal Mosque'},
    {Id : 103 , Name : 'Lahore' , FamousPlace  : 'Minaer -e- Pakistan'},
  ];
}
