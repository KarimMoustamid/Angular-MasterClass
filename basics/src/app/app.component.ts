import {Component} from "@angular/core";


@Component({
  selector: 'app-root',
  templateUrl : './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Simba';
  imgURL = 'https://picsum.photos/id/237/500/500';

  changeImage(e:KeyboardEvent) {
    this.imgURL = e.target.value; // Property 'value' does not exist on 'EventTarget' ??
  }
}
