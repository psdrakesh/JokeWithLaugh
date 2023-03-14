import { Component } from '@angular/core';
import { JokesCount } from '../jokes-count-model';
import { JokesCountService } from '../jokes-count.service';
import { Jokes } from '../jokes-model';
import { JokesService } from '../jokes.service';

@Component({
  selector: 'app-jokes-detail',
  templateUrl: './jokes-detail.component.html',
  styleUrls: ['./jokes-detail.component.css']
})
export class JokesDetailComponent {

 jokesArray: Jokes[] = [];
 jokesCountArray: any;
 jokesCountTotal:string = '0';
 loading: boolean = true;
 errorMessage :string ='';
  constructor(private loadJokeService:JokesService,private loadJokeCountService:JokesCountService){}

  ngOnInit():void{
    
    this.loadJokeService.getJokes().subscribe((data)=>{
      //console.log(data);
      this.jokesArray = data["body"];
      console.log(this.jokesArray)      
    },error=>{console.log(error)
      this.errorMessage = error;
      this.loading = true;
      throw error;
    })

    this.loadJokeCountService.getJokesCount().subscribe(data=>{
      //console.log(data);
      this.jokesCountArray = data;
      this.jokesCountTotal = JSON.parse(JSON.stringify(data)).body;
      console.log(JSON.parse(JSON.stringify(data)).body);
      console.log(this.jokesCountArray) ;
    },error=>{this.errorMessage = error;
      this.loading = false;
      throw error;})

    
  }

  onNextJoke(){
    console.log("connection statrted");
    this.loadJokeService.getJokes().subscribe((data)=>{
      //console.log(data);
      this.jokesArray = data["body"];
      console.log(this.jokesArray)      
    },error=>{console.log(error)
      this.errorMessage = error;
      this.loading = true;
      throw error;
    })
  
  }

}
