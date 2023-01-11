import {Component} from "@angular/core";


@Component({
  selector: 'app-root',
  templateUrl : './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Karim';
  imgURL = 'https://picsum.photos/id/237/500/500';

  getName() {
    return this.name;
  }
}
