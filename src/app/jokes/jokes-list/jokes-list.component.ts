import { Component } from '@angular/core';
import { JokesService } from '../jokes.service';

@Component({
  selector: 'app-jokes-list',
  templateUrl: './jokes-list.component.html',
  styleUrls: ['./jokes-list.component.css']
})
export class JokesListComponent {

    constructor(private randomJokes: JokesService){}

  ngOnInit():void{   
  }

  

}
