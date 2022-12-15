import { Component, OnInit } from '@angular/core';
import { SugerenciasService } from 'src/app/services/sugerencias.service';

@Component({
  selector: 'app-lista-sugerencias',
  templateUrl: './lista-sugerencias.component.html',
  styleUrls: ['./lista-sugerencias.component.scss']
})
export class ListaSugerenciasComponent implements OnInit {
  empleados: any[] = []
  eliminar = false
  constructor(private sugerenciasService:SugerenciasService) { }

  ngOnInit(): void {
    this.getSugerencias()
    console.log(this.empleados)
  }
  getSugerencias(){
    this.sugerenciasService.getSugerencias().subscribe(data => {
      this.empleados = []
      data.forEach((element:any) => {
        //element.payload.doc.id // id de las colecciones
        //element.payload.doc.data() -> datos
        this.empleados.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
    })
  }

  eliminarSugerencia(id:string){
    this.sugerenciasService.eliminarSugerencia(id).then( () => {
      this.eliminar = true
      setTimeout(() => {
        this.eliminar = false
      }, 1500);
    }).catch(error => {
      console.log(error)
    })
  }
}
