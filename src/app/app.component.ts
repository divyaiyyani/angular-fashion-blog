import { Component } from '@angular/core';
import { UrlService } from './url.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UrlService]
})
export class AppComponent {
  title: string;
  constructor(private _urlService: UrlService) {

  }

  ngOnInit() {
    this.title = this._urlService.callurl();
}
}
