import { Component, Input, OnInit } from '@angular/core';
import { ModelService } from 'src/app/services/model.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() modelid=''
  constructor(public model: ModelService) {
    // console.log(model.IsVisible);
  }

  closeModel(){
    this.model.toggleModel()
  }

  ngOnInit(): void {}
}
