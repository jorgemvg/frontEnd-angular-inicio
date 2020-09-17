import { Injectable } from '@angular/core';

@Injectable()
export class PruebaService {
    public mensaje = 'Se ejecuto el servicio';

    prueba(){
        return this.mensaje;
    }
}
