import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'conversor' })
export class ConversorPipe implements PipeTransform{
    transform( value ){
        return value + ' convertida '; 
    }
}