import { Component } from '@angular/core';
import {Empleado} from './empleado';
import {PeticionesService} from '../services/peticiones.service';
import{CombosService} from '../services/combos.service';
import { Combo } from '../models/combo.model';

@Component({
    selector: 'empleado',
    templateUrl: './empleado.component.html',
    providers: [ PeticionesService, CombosService ]
})

export class EmpleadoComponent{
    
    public empleado:Empleado;
    public empleados:Array<Empleado>;

    public comboPaises:Array<Combo>;
    public comboCiudades:Array<Combo>;
    public comboDepartamentos:Array<Combo>;
    public comboEstadosCiviles:Array<Combo>;
    public comboSexos:Array<Combo>;

    constructor( public peticionesService: PeticionesService, public combosService: CombosService ){
        this.empleado = new Empleado();
        
        this.empleado.pais = '';
        this.empleado.departamento = '';
        this.empleado.ciudad = '';
        this.empleado.sexo = '';
        this.empleado.estadoCivil = '';

    }

    ngOnInit(){

        this.combosService.getCombo('paises').subscribe( r => {this.comboPaises = r}, err=>{console.log(<any>err);} );
        this.combosService.getCombo('dptos').subscribe( r => {this.comboDepartamentos = r}, err=>{console.log(<any>err);} );
        this.combosService.getCombo('ciudades').subscribe( r => {this.comboCiudades = r}, err=>{console.log(<any>err);} );
        this.combosService.getCombo('estadosCiviles').subscribe( r => {this.comboEstadosCiviles = r}, err=>{console.log(<any>err);} );
        this.combosService.getCombo('sexos').subscribe( r => {this.comboSexos = r}, err=>{console.log(<any>err);} );

        this.getEmpleados();
        
    }

    onSubmit() {

        console.log(this.empleado);
        /* this.empleados.push(this.empleado); */

        this.salvar(this.empleado);

       // console.log( this.petionesService.getPruebaService() );

    }

    public formatCurrency (number) {
        if ( number ) {
            number = number.replaceAll('.', '').replaceAll(',','.');
            var formatted = new Intl.NumberFormat('es-CO', {
                style: 'decimal',
                currency: 'COP',
                minimumFractionDigits: 2
              }).format(number);
            this.empleado.sueldo = formatted;
           }
      }

    public soloNumeros(event) {
        if(event.charCode >= 48 && event.charCode <= 57){
            return true;
           }
           return false; 
    }

    public getEmpleados() {
        this.peticionesService.getEmpleados().subscribe(
            result => {
                this.empleados = result;
            } ,
            error => {
                console.log(<any>error);
            }
        );
    }

    public borrar (index) {
        console.log('entro a borrar');
        this.peticionesService.borrar(index).subscribe(
            result => {
                console.log('Borro el empleado');
                this.getEmpleados();
            }, error => {
                console.log(<any>error);
            }
        );
    }

    public salvar ( empleado: Empleado ) {
        console.log(empleado);
        
        if ( empleado.id ) {
            this.peticionesService.actualizar( this.empleado ).subscribe(
                result => {
                    console.log('Actualizo el empleado');
                    this.getEmpleados();
                }, error => {
                    console.log(<any>error);
                }
            );    
        } else {
            this.peticionesService.insertar( this.empleado ).subscribe(
                result => {
                    console.log('Inserto el empleado');
                    this.getEmpleados();
                }, error => {
                    console.log(<any>error);
                }
            );
        }
    }

    public editar ( index ) {
        this.peticionesService.getEmpleadoById( index ).subscribe(
            result => {
                console.log('Obtuvo el empleado');
                this.empleado = result;
            }, error => {
                console.log(<any>error);
            }
        );
    }
}