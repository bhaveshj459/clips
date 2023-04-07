import { Injectable } from '@angular/core';
interface IModel{
  id:string,
  visible:boolean
}

@Injectable({
  providedIn: 'root',
})
export class ModelService {
  private models:IModel[] = [];
  constructor() {}

  isModelOpen(id:string):boolean {
    return !!this.models.find(element=>element.id===id)?.visible
  }
  register(id:string){
    this.models.push({
      id,
      visible:false
    })

  }

  toggleModel(id:string) {
   let model= this.models.find(element=>element.id===id)
   if (model) {
    model.visible=!model.visible
   }
  }
}
