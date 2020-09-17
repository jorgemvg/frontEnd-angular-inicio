import { Component } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { PruebaService } from '../services/prueba.service';

@Component({
    selector: 'contacto',
    templateUrl: './contacto.component.html',
    styleUrls: ['contacto.style.css'],
    providers: [PruebaService]
})

export class ContactoComponent{
    
    

    public envioExitoso:boolean;    

    public nombre:string;
    public email:string;
    public mensaje:string;

    public parametro;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _pruebaService: PruebaService 
    ){
        this.nombre = '';
        this.email = '';
        this.mensaje = '';
        this.envioExitoso = false;
    }

    ngOnInit(){
        this._route.params.forEach( (params: Params) => {
            this.parametro = params['param'];
        }); 

        console.log( this._pruebaService.prueba() );

    }

    enviarMensaje( ){
        console.log(this.nombre +", "+ this.email +", "+ this.mensaje);
        this.envioExitoso = true;
    }


}