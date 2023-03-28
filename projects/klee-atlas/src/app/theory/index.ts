
/* import './a'
import * as A from './a' */
//import Kezako from './a'
//import {default as Kezako} from './a'

/* import { foo } from './a' */


//const Kezako = A.default;
/* const {default:Kezako} = A
const {foo} = A
 */
/* foo() */

/* 
Observable Creation :

Factory 
Instanciation
*/

/* 
Factory 
*/

/* 
Callback
Event
Promise
Observable
*/

import {of,  fromEvent, Subject,ReplaySubject,BehaviorSubject} from 'rxjs'

//const obs$ = of(true)
//const obs$ = fromEvent(window,'click')


/* 
Instancication 

Observable

Subject
BehaviorSubject
ReplaySubject
*/

/* const obs$ = new BehaviorSubject(0)

obs$.subscribe( data => console.log(data, 'm' ))


obs$.next(1)
obs$.next(2)
obs$.next(3)

obs$.subscribe( data => console.log(data, 1 ))
obs$.next(4)
obs$.next(5)

obs$.subscribe( data => console.log(data, 2 ))

 */