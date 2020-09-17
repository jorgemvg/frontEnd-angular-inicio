import { Injectable } from '@angular/core';
import { Combo } from '../models/combo.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CombosService {

    private url:string;

    public lista;

    constructor( private _http:HttpClient ){
        this.url = "http://localhost:8080/bookapi/api/combos/";
    }

    getCombo( combo ): Observable<any> {
        return this._http.get( this.url + combo);
    }

}