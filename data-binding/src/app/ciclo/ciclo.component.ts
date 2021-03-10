import { 
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy, 
  Input
} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.scss']
})
export class CicloComponent implements OnInit,OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy  {

  @Input() valorInicial: number = 10

  constructor() { 
    this.log('construtor')
  }

  ngOnChanges() {
   this.log('ngOnChanges')
  }

  ngOnInit(): void {
    this.log('ngOnInit')
  }

  ngDoCheck() {
    this.log('ngDoCheck')
  }

  ngOnDestroy() {
    this.log('ngOnDestroy')
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit')
  }
  ngAfterContentChecked() {
    this.log('ngAfterContentChecked')
  }
  ngAfterViewInit() {
    this.log('ngAfterViewInit')
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked')
  }


  private log(hook: string) {
    console.log(hook)
  }

}
