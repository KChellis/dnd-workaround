import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character.model';
import { Class } from '../models/class.model'
import { CharacterService } from '../character.service';
import { ClassService } from '../class.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
};

@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.scss'],
  providers: [CharacterService, ClassService]
})
export class CharacterFormComponent implements OnInit {

  constructor(private router: ActivatedRoute, private characterService: CharacterService, private classService: ClassService, private http:HttpClient) { }
  classList;

  ngOnInit() {
    this.classList = this.classService.getClasses();
  }

  addCharacter(newName, newRace, newClassId, newCastingLevel, newSpellCount){
    let newCharacter: Character = new Character(newName, newRace, newClassId, newCastingLevel, newSpellCount, "", 0);
    this.characterService.setCurrentCharacter(newCharacter);
  }
}
