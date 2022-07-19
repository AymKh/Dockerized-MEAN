import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.scss']
})
export class NamesComponent implements OnInit {
  loading = true;
  namesList: any;
  // name: string;


  constructor(private mainService: MainService) { }
  ngOnInit(): void {
    this.loading = true;
    this.getData();
  }

  getData(){
    this.mainService.getNames().subscribe(data => {
      console.log(data);
      
      this.namesList = data;
      this.loading = false;
    });
  }

  insertName(name: any){
    
    this.mainService.insertName(name).subscribe(data => {
      this.getData();
    });
  }
}
