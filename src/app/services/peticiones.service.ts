import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Empleado } from '../empleados/empleado';
import {GLOBAL} from '../services/global';

@Injectable()
export class PeticionesService {

    public url: string;

    constructor( private _http: HttpClient ){
        this.url = GLOBAL.url +  "empleado";
    }

    getPruebaService(){
        console.log('Llamado e servicio');
    }

    getEmpleados(): Observable<any>{
        return this._http.get(this.url);
    }

    borrar( index ){
        return this._http.delete( this.url + "/" + index );
    }

    insertar(empleado: Empleado){
        let body = JSON.stringify(empleado);
        const options = {
            headers: new HttpHeaders().append('Content-Type', 'application/json')
          }

        return this._http.post(this.url, body, options);
    }

     actualizar( empleado ) {
        let body = JSON.stringify(empleado);
        const options = {
            headers: new HttpHeaders().append('Content-Type', 'application/json')
          }

        return this._http.put(this.url + '/' + empleado.id, body, options);
    }

    getEmpleadoById(index): Observable<any>{
        return this._http.get(this.url +'/'+ index);
    }

}