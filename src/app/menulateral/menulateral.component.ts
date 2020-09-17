import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, ViewChild, ElementRef} from '@angular/core';
import {VERSION} from '@angular/material/core';
import {NavItem} from '../nav-item';
import {NavService} from '../nav.service';

/** @title Responsive sidenav */
@Component({
  selector: 'sidenav-responsive-example',
  templateUrl: './menulateral.component.html',
  styleUrls: ['menulateral.style.css'],
})
export class MenulateralComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  @ViewChild('appDrawer') appDrawer: ElementRef;
  version = VERSION;

  isExpanded = true;
  showSubmenu:boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;  

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private navService: NavService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  mouseenter() {
      if ( !this.isExpanded ) {
        this.isShowing = true;
      }
  }

  mouseLeave(){
      if ( !this.isExpanded ) {
        this.isShowing = false;
      }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = true;


  navItems: NavItem[] = [
    {
      displayName: 'Home', iconName: 'home', route: '/home', children: []
    },
    {
      displayName: 'Empresas', iconName: '', route: 'empresas', 
      children: [
        {
          displayName: 'Empresa', iconName: '', route: 'empresas/empresa', children: []
        }
      ]
    },
    {
      displayName: 'Empleados', iconName: '', route: 'empleados', 
      children: [
        {
          displayName: 'Empleado', iconName: '', route: 'empleados/empleado', children: []
        }   
      ]
    },
    {
      displayName: 'Contacto', iconName: '', route: '/contacto', children: []
    },
  ];

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }

}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */