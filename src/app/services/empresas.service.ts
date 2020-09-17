import { Injectable } from '@angular/core';

@Injectable()
export class EmpresaService {

    private nombreEmpresa: string;
    private empresas:Array<string>;

    constructor(){
        this.empresas = ['Postobon', 'Comlombina', 'Nestle'];        
    }

    getEmpresas(): Array<string>{
        return this.empresas;
    }

    agregarEmpresa( nombreEmpresa:string ){
        this.empresas.push( nombreEmpresa );
    }

    borrarEmpresa( indice ){
        this.empresas.splice(indice, 1);
    }
}