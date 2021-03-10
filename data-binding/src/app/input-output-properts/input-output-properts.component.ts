import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-output-properts.component.html',
  styleUrls: ['./input-output-properts.component.scss']
})
export class InputOutputPropertsComponent implements OnInit {

  @Input('nome') nomeCurso: string = '';


  constructor() { }

  ngOnInit(): void {
  }

}
