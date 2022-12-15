import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SugerenciasService {

  constructor(private firestore: AngularFirestore) { }
  agregarSugerencia(sugerencia:any):Promise<any>{
    return this.firestore.collection('recomendaciones').add(sugerencia)
  }
  getSugerencias():Observable<any>{
    return this.firestore.collection('recomendaciones').snapshotChanges()//time real
  }
  eliminarSugerencia(id:string):Promise<any>{
    return this.firestore.collection('recomendaciones').doc(id).delete()
  }
  getSugerencia(id:string):Observable<any>{
    return this.firestore.collection('recomendaciones').doc(id).snapshotChanges()
  }
  actualizarSugerencia(id:string,data:any):Promise<any>{
    return this.firestore.collection('recomendaciones').doc(id).update(data)
  }
}
