import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SugerenciasService } from 'src/app/services/sugerencias.service';

@Component({
  selector: 'app-crear-sugerencias',
  templateUrl: './crear-sugerencias.component.html',
  styleUrls: ['./crear-sugerencias.component.scss']
})
export class CrearSugerenciasComponent implements OnInit {
  createEmpleado:FormGroup
  submited = false
  loading = false
  exitoso = false
  id:string | null
  titulo = 'Agregar Sugerencia'

  constructor(private fb:FormBuilder,private sugerenciaService: SugerenciasService,private router:Router,private aRoute:ActivatedRoute) { 
    this.createEmpleado = this.fb.group({
      descripcion: ['',Validators.required],
      email: ['',Validators.required],
      fotoUrlLugar: ['',Validators.required],
      idUsuario: ['',Validators.required],
      latitud: ['',Validators.required],
      longitud: ['',Validators.required],
      nombreLugar: ['',Validators.required],
      nombreUsuario: ['',Validators.required],
    })
    this.id = this.aRoute.snapshot.paramMap.get('id')
    //console.log(this.id) //id de la ruta anterior

  }

  ngOnInit(): void {
    this.esEditar()
  }

  agregarEditarEmpleado(){
    this.submited = true
    if(this.createEmpleado.invalid){
      return
    }
    if(this.id === null){
      this.agregarEmpleado()
    }else{
      this.editarEmpleado(this.id)
    }
  }

  editarEmpleado(id:string){
    this.loading = true
    const sugerencia:any = {
      descripcion:this.createEmpleado.value.descripcion,
      email: this.createEmpleado.value.email,
      fotoUrlLugar: this.createEmpleado.value.fotoUrlLugar,
      idUsuario: this.createEmpleado.value.idUsuario,
      latitud: this.createEmpleado.value.latitud,
      longitud: this.createEmpleado.value.longitud,
      nombreLugar: this.createEmpleado.value.nombreLugar,
      nombreUsuario: this.createEmpleado.value.nombreUsuario,
    }
    this.sugerenciaService.actualizarSugerencia(id,sugerencia).then(() => {
      this.loading = false
      this.exitoso = true
      setTimeout(() => {
        this.router.navigate(['/list-sugerencias'])
      }, 1500);
    })
  }

  agregarEmpleado(){
    const sugerencia:any = {
      descripcion:this.createEmpleado.value.descripcion,
      email: this.createEmpleado.value.email,
      fotoUrlLugar: this.createEmpleado.value.fotoUrlLugar,
      idUsuario: this.createEmpleado.value.idUsuario,
      latitud: this.createEmpleado.value.latitud,
      longitud: this.createEmpleado.value.longitud,
      nombreLugar: this.createEmpleado.value.nombreLugar,
      nombreUsuario: this.createEmpleado.value.nombreUsuario,
    }
    this.loading = true
    this.sugerenciaService.agregarSugerencia(sugerencia).then(() => {
      this.loading = false
      this.exitoso = true
      setTimeout(() => {
        this.router.navigate(['/list-sugerencias'])
      }, 1500);
    }).catch(error => {
      this.loading = false
      console.log(error)
    })
  }

  esEditar(){
    if(this.id !== null){
      this.sugerenciaService.getSugerencia(this.id).subscribe(data => {
        this.titulo = "Editar Sugerencia"
        //data.payload.data()['nombre'] => retornar nombre
        this.createEmpleado.setValue({          
          descripcion:data.payload.data()['descripcion'],
          email: data.payload.data()['email'],
          fotoUrlLugar: data.payload.data()['fotoUrlLugar'],
          idUsuario: data.payload.data()['idUsuario'],
          latitud: data.payload.data()['latitud'],
          longitud: data.payload.data()['longitud'],
          nombreLugar: data.payload.data()['nombreLugar'],
          nombreUsuario: data.payload.data()['nombreUsuario'],
        })
      })
    }
  }
}
