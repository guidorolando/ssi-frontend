import { Component, OnInit } from '@angular/core';
import {Area} from '../models/area.model';
import {AreaService} from '../services/area.service';
import {AddAreaService} from '../services/add-area.service';
import {Router, RouterModule, Routes} from '@angular/router';
import {AreaCreateComponent} from '../area-create/area-create.component';


@Component({
  selector: 'app-area-list',
  templateUrl: './area-list.component.html',
  styleUrls: ['./area-list.component.css'],
  providers: [AddAreaService]
})
export class AreaListComponent implements OnInit {

   private areas: Area;
   private isValid: Boolean = true;
   private  message: String = '';


   constructor( private addAreaService: AddAreaService , private  router: Router) {
     console.log('holassssssssssssssa');

     if (sessionStorage.getItem('areas')) {
       console.log('editar valor');
       this.areas = JSON.parse(sessionStorage.getItem('areas'));
       console.log(this.areas);

     } else {
       this.areas = new Area();
     }
   }


//  }


ngOnInit() {
  }


  public  saveOrUpdate(): void {
    console.log("holaa XX");

     this.isValid = this.addAreaService.validate(this.areas);
     if (this.isValid) {
       this.addAreaService.saveOrUpdate(this.areas).subscribe(res => {
           this.router.navigate(['area-create']);

       });
     } else {
       this.message = 'los camos son obligatorios' ;
     }

     sessionStorage.clear();
  }


  public  delete(): void {
    console.log("holaa XX");

    this.isValid = this.addAreaService.validate(this.areas);
    if (this.isValid) {
      this.addAreaService.delete(this.areas).subscribe(res => {
        this.router.navigate(['area-create']);
      });
    } else {
      this.message = 'los camos son obligatorios' ;
    }

    sessionStorage.clear();
  }









}
