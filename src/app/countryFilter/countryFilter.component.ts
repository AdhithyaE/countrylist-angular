import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'country-filter',
  templateUrl: './countryFilter.component.html',
  styleUrls: ['./countryFilter.component.scss']
})

export class CountryFilter implements OnInit {
  @Input() countryList: string[];
filtered:string[]=[];
notFound:boolean=false;
find(){
  let inp=(document.getElementById("app-input") as HTMLInputElement).value;
  if(inp!==""){
     this.filtered=this.countryList.filter(
       country=>country.toLocaleLowerCase().includes(inp.toLocaleLowerCase())
     );
    }
    if(!this.filtered.length){
      this.notFound=true;
    }
    else{
      this.notFound=false;
    }

}
  ngOnInit() {
 this.filtered=this.countryList;
  }
}
