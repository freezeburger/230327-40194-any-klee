
import { Component ,ContentChild, ViewEncapsulation, Input, HostListener } from '@angular/core';
import { LayoutFooterComponent } from './layout-containers.component';

@Component({
  selector: 'klee-layout-base',
  templateUrl: './layout-base.component.html',
  styleUrls: ['./layout-base.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutBaseComponent {
 
  @Input() public largeHeader = false;
  @Input() public sideMenuVisible = false;

  @ContentChild(LayoutFooterComponent) public footer:LayoutFooterComponent | null = null;

  @HostListener('window:keydown.alt.m')
  public toggleSideMenuVisible(){
    this.sideMenuVisible = ! this.sideMenuVisible;
  }

  ngAfterViewInit(){
    console.log( this.footer )
  }
  
}
