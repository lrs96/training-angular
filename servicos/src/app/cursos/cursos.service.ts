import { LogService } from './../shared/log.service';
import { Injectable, EventEmitter } from "@angular/core";



@Injectable()
export class CursosService {

    emitirCursoCriado = new EventEmitter<string>()
    static criouCursoCriado = new EventEmitter<string>()
    private cursos: string[] = ["Python", "Angular", "React"]

    constructor(private logService: LogService ){ 
        console.log('CursosService')
    }

    getCursos() {
        this.logService.consoleLog('Obtendo a lista de cursos')
        return this.cursos
    }

    addCursos(curso: string) {
        this.logService.consoleLog(`Criando um novo curso ${curso}`)
        this.emitirCursoCriado.emit(curso);
        CursosService.criouCursoCriado.emit(curso);
    }

}