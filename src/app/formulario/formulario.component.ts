import { PersonaService } from './../persona-service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: [
  ]
})
export class FormularioComponent implements OnInit {


  idPersona : number;
  nombreInput : string;


  constructor(private personaService : PersonaService,
              private router : Router,
              private route : ActivatedRoute
      ) { }

  ngOnInit(): void {
  }

  onGuardarPersona(){
    const personaAGuardar = new Persona(this.idPersona, this.nombreInput);
    this.personaService.agregarPersona(personaAGuardar);
    this.router.navigate(['personas']);
  }

}
