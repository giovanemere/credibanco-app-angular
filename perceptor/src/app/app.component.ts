import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  form!: UntypedFormGroup;
  today = new Date();
  fechaFormateada:string = '';



  constructor(
    private fb: UntypedFormBuilder
  ) { }

 

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.required, Validators.email],
      nombreResponsable: ['', Validators.required],
      vicepresidencia: ['', Validators.required],
    });


    // Obtenemos los componentes de la fecha
    const dia = this.today.getDate();
    const mes = this.today.getMonth() + 1; // Los meses son indexados desde 0, por lo que sumamos 1
    const año = this.today.getFullYear();
    const hora = this.today.getHours();
    const minutos = this.today.getMinutes();
    const segundos = this.today.getSeconds();

    // Formateamos la fecha y hora como una cadena de texto
    this.fechaFormateada = `${dia}/${mes}/${año} ${hora}:${minutos}:${segundos}`;

  }

  procesar(){

    if(this.form.invalid){
      Swal.fire({
        icon:'error',
        text: 'Faltan campos obligatorios por llenar o estan mal diligenciados'
      })
    }else{
      const nombre = this.form.controls['nombreResponsable'].value
      const email = this.form.controls['email'].value
      const vicepresidencia = this.form.controls['vicepresidencia'].value

      Swal.fire({
        icon:'success',
        title: 'La información ingresada es: ',
        html: '<div> Nombre: '+nombre +'</div> <br> <div> Email: '+ email+'</div> <br> <div> Vice presidencia: '+ vicepresidencia+'</div>',
        confirmButtonText: 'Cerrar'
      })
    }
  }

}