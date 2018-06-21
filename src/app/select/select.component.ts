import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [CharacterService]
})
export class SelectComponent implements OnInit {

  constructor(private characterService: CharacterService, private router: Router, private http:HttpClient) { }
  tempList;
  characterList;
  ngOnInit() {
    this.tempList = this.characterService.getCharacters();
    setTimeout(() => {
      this.characterList = this.tempList.__zone_symbol__value;

      console.log(this.characterList);
    }, 1000);
    // this.characterList = this.characterService.getCharacters();
  }

  getClass(classId: number){
    if(classId === 1) {
      return "Barbarian"
    } else if (classId === 2) {
      return "Bard"
    } else if (classId === 3) {
      return "Cleric"
    } else if (classId === 4) {
      return "Druid"
    } else if (classId === 5) {
      return "Fighter"
    } else if (classId === 6) {
      return "Monk"
    } else if (classId === 7) {
      return "Paladin"
    } else if (classId === 8) {
      return "Ranger"
    } else if (classId === 9) {
      return "Rogue"
    } else if (classId === 10) {
      return "Sorcerer"
    } else if (classId === 11) {
      return "Warlock"
    } else {
      return "Wizard"
    }
  }

  choose(character){
    this.router.navigate(['character', character.id]);
  }

}
