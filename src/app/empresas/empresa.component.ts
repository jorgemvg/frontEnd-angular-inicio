import { Component } from '@angular/core';
import {Empresa} from './empresa';
import { EmpresaService } from '../services/empresas.service';

@Component({
    selector: 'empresa',
    templateUrl: './empresa.component.html',
    providers: [ EmpresaService ],
    styleUrls: ['empresa.style.css']
})

export class EmpresaComponent{

    public empresa:Empresa;
    public nombreEmpresa;
    public cantEmpleados;
    public empresas:Array<string>;

    constructor(
        public _empresaService:EmpresaService
    ){
        this.empresa = new Empresa('La casa','1111', '100');
    }

    ngOnInit(){
        this.empresas = this._empresaService.getEmpresas();
    }

    agregar(  ) {
        this._empresaService.agregarEmpresa( this.nombreEmpresa );
        this.nombreEmpresa = '';
        this.empresas = this._empresaService.getEmpresas();
    }

    borrar( indice ){
        this._empresaService.borrarEmpresa( indice );
        this.empresas = this._empresaService.getEmpresas();
    }
}