import { Component, OnInit,ViewChild } from '@angular/core';
import{
  FormGroup,
  FormControl, 
  Validators,
  FormBuilder
} from '@angular/forms'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(private fb: FormBuilder, private alertController: AlertController) {

    this.formularioRegistro = this.fb.group(
      {
        'nombre': new FormControl ("",Validators.required),
        'password': new FormControl ("",Validators.required),
        'confirmacionpassword': new FormControl ("",Validators.required),
      }
    )

   }

  ngOnInit() {
  }

  async guardar()
  {
    var f = this.formularioRegistro.value;
    if (this.formularioRegistro.invalid)
    {
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Ingrese usuario y contraseña',
        buttons: ['Aceptar']
      });
  
      await alert.present();
      return;
    }

    var usuario = {
     nombre: f.nombre,
     password: f.password
    }

    localStorage.setItem('usuario', JSON.stringify(usuario));
  }


    /* Este apartado es el "método" agregado para la funcionalidad
  de la visualización opcional de nuestra contraseña
#passwordEyeRegister*/

@ViewChild('passwordEyeRegister') passwordEye;
// Seleccionamos el elemento con el nombre que le pusimos con el #
passwordTypeInput  =  'password';
// Variable para cambiar dinamicamente el tipo de Input que por defecto sera 'password'
iconpassword  =  'eye-off';

// Esta función verifica si el tipo de campo es texto lo cambia a password y viceversa, además verificara el icono si es 'eye-off' lo cambiara a 'eye' y viceversa
togglePasswordMode() {
    this.passwordTypeInput  =  this.passwordTypeInput  ===  'text'  ?  'password'  :  'text';
    this.iconpassword  =  this.iconpassword  ===  'eye-off'  ?  'eye'  :  'eye-off';
    this.passwordEye.el.setFocus();
}

/*-------------------------------------------------*/
}
