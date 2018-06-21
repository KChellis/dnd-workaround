import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // constructor(){}

  constructor(private http:HttpClient, private characterService:CharacterService) { }
  classes;

  ngOnInit() {
    // let newCharacter  = {
    //     "name": "ISTHISWORKING?!!!!!",
    //     "id": 7,
    //     "race": "Elf",
    //     "classId": 12,
    //     "castingLevel": 3,
    //     "spellCount": 3,
    //     "preparedSpells": ""
    // };
    // this.characterService.addNewCharacter(newCharacter);
    // setTimeout(2000);
    // this.classes = this.characterService.getCharacters();
  }

}
