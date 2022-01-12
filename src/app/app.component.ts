import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { filter, pluck, tap } from 'rxjs/operators';
import { MetaService } from './services/meta/meta.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  showLoader:boolean = false;
  loaderMsg:string = "Fetching Data ...";

  public appPages = [
    { title: 'Page-One', url: '/page-one', icon: 'mail' },
    { title: 'Page-One-Edit', url: '/page-one-edit', icon: 'paper-plane' },
    { title: 'Products', url: '/products', icon: 'heart' },
    { title: 'Directive', url: '/directive-test', icon: 'archive' },
    { title: 'Push-notification', url: '/push-notification', icon: 'trash' },
    { title: 'Dynamic-component', url: '/dynamic-component', icon: 'archive' },
    { title: 'Excel-file', url: '/excel-file', icon: 'archive' },
    { title: 'Componets-test', url: '/componets-test', icon: 'archive' },
    { title: 'Scanner', url: '/scanner', icon: 'archive' },
    // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private metaService: MetaService
    ) {
    this.router.events.subscribe(ev => {
      if (ev instanceof NavigationStart) {
        this.showLoader = true;
      }
      if (
        ev instanceof NavigationEnd ||
        ev instanceof NavigationCancel ||
        ev instanceof NavigationError
      ) {
        this.showLoader = false;
      }
    });
  }

  ngOnInit(): void {
    this.router.events
    .pipe(
       filter(event => event instanceof NavigationEnd),
       pluck('urlAfterRedirects'),
       tap((data: string)=> this.metaService.updateMeta(data))
   ).subscribe();
  }
}
