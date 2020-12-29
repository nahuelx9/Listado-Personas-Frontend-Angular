import { DataService } from './data-service';
import { Injectable } from "@angular/core";
import { Persona } from "./persona.model";

@Injectable()
export class PersonaService {
  personas : Persona[] = [];

  constructor(private dataService : DataService){}

  //se usa para modificar el valor del arreglo debido a la llamada asincrona
    setPersonas(personas : Persona[]){
      this.personas = personas;
    }

    obtenerPersonas(){
      return this.dataService.cargarPersonas();
    }

    agregarPersona(persona : Persona){
      console.log("Persona a agregar: " + persona.nombre);
      this.dataService.agregarPersona(persona)
        .subscribe(
            (persona : Persona) => {
              //Recuperamos el objeto persona con el idpersona recien agregado
              console.log("se agregar al arreglo la persona recien insertada suscriber" + persona.idPersona);
              this.personas.push(persona);
            }
        );
    }

    encontrarPersona(id : number){
      const persona : Persona = this.personas.find(persona => persona.idPersona == id);
      console.log("persona encontrada:" + persona.idPersona + ' ' + persona.nombre);
      return persona;
    }

    modificarPersona(id : number, persona : Persona){
      console.log("Persona a modificar: " + persona.idPersona);
      //se actuliza el objeto persona del arreglo
      const personaModificadaLocal = this.personas.find(persona => persona.idPersona == id);
      personaModificadaLocal.idPersona = persona.idPersona;
      personaModificadaLocal.nombre = persona.nombre;

      //guardar la persona en la base de datos
      this.dataService.modificarPersona(id, persona);
    }

    eliminarPersona(id : number){
      console.log("Eliminar persona con id: " + id);
      const index = this.personas.findIndex(persona => persona.idPersona == id); //Encontramos el indice en el arreglo
      this.personas.splice(index,1);
      this.dataService.eliminarPersona(id);
    }

}
