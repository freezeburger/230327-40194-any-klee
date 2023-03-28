import { PLATFORM_INITIALIZER } from '@angular/core';
import { platformBrowserDynamic,  } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import './app/theory'

platformBrowserDynamic(
  [
    {
      provide:PLATFORM_INITIALIZER,
      useValue:() => console.warn('Before Modules !!'),
      multi:true
    }
  ]
) 
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));

  
/* 
const compute:any = ( n:number ) => {
  compute.results = compute.results || {}
  if(compute.results[n] ) return compute.results[n] 

  console.log('computing...')
  compute.results[n] = n * 10
  return compute.results[n] 
}

console.log(
  compute(10)
)
console.log(
  compute(11)
)
console.log(
  compute(10)
) */