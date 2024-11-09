import { Component } from '@angular/core';
import { tenderIndexModel } from '../../models/dataTable/tenderIndexModel';
import { TendercardComponent } from '../tendercard/tendercard.component';
import { TenderIndexService } from '../../services/tender-index.service';

@Component({
  selector: 'app-tender-index-list',
  standalone: true,
  imports: [TendercardComponent],
  templateUrl: './tender-index-list.component.html',
  styleUrl: './tender-index-list.component.css'
})
export class TenderIndexListComponent {
  Datatabelname="Tender Index  Masters List";
  _tenderIndexList:tenderIndexModel[]=[];
constructor(private tenderIndexService:TenderIndexService){
  this._tenderIndexList=tenderIndexService.getTenderIndexList();
}


}
