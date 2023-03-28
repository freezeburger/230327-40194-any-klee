import { Component , OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent implements OnChanges {

  count = 0;
  constructor() {
    console.log('1. Instanciation')
    setInterval( this.tick  , 1000 )
  }

  tick = () => {
    this.count = this.count +1
  }
  
  ngOnChanges( changes:SimpleChanges){
    console.log('MAJ des Input')
  }

  ngOnInit() {
    console.log('2. Initialisation dans le DOM')
  }

  ngDoCheck() {
    console.log('3. Modification')
  }

  ngAfterViewInit(){
    // Only Once
    console.log('3.3 Template Initialisation')
  }

  ngContentInit(){
    // Only Once
    console.log('3.3 Template Initialisation')
  }

  ngOnDestroy() {
    console.log('4. Suppression')
  }
}
