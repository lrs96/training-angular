import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  url: string  = 'http://luan.training'
  cursoAngular: boolean = true;
  urlImagem: string = 'http://lorempixel.com/400/200/nature/';

  getValor() {
    return 1
  }

  getCurtircurso() {
    return true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
