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
  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean= false

  nomeDoCurso: string = 'Angular';

  valorInicial = 15
  
  getValor() {
    return 1
  }

  getCurtircurso() {
    return true
  }

  botaoclicado() {
    alert("Botão clicado")
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value
  }

  salvarValor(valor: string) {
    this.valorSalvo = valor
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver
  }

  onMudouValor(evento: any) {
    console.log(evento)
  }



  constructor() { }

  ngOnInit(): void {
  }

}
