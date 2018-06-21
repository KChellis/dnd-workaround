import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character.model';
import { Class } from '../models/class.model'
import { CharacterService } from '../character.service';
import { ClassService } from '../class.service';
import { SpellService } from '../spell.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  providers: [CharacterService, ClassService, SpellService]
})
export class PlayerComponent implements OnInit {

  constructor(private router: ActivatedRoute, private characterService: CharacterService, private classService: ClassService, private spellService: SpellService, private http:HttpClient) { }
  currentCharacter;
  characterClass;
  spellList;
  tempCharacter;
  characterId: number;
  equippedSpellIds: number[] = [];
  equippedSpells = [];
  spellsFull: boolean = false;
  spellsEquipped: boolean = false;
  spellsLeft: number;

  ngOnInit() {
    this.router.params.forEach((urlParameters) => {
        this.characterId = parseInt(urlParameters['id']);
    });
    this.tempCharacter = this.characterService.getCharacterById(this.characterId);
    setTimeout(() => {
      this.currentCharacter = this.tempCharacter.__zone_symbol__value;
      this.characterClass = this.classService.getClassById(this.currentCharacter.classId);
      this.spellList = this.spellService.getSpellsByClass(this.currentCharacter.classId);
      this.spellsLeft = this.currentCharacter.spellCount;
    }, 1000);
    // this.characterClass = this.classService.getClassById(this.currentCharacter.classId);
    // this.spellList = this.spellService.getSpellsByClass(this.currentCharacter.classId);
    // this.characterClass = this.classService.getClassById(4);
    // this.spellList = this.spellService.getSpellsByClass(4);

  }

  addSpell(spellId: number){
    if(this.equippedSpellIds.indexOf(spellId) === -1){
      this.equippedSpellIds.push(spellId);
      let spell = this.spellService.getSpellById(spellId);
      setTimeout(() => {
        this.equippedSpells.push(spell.__zone_symbol__value);
        this.spellsLeft -= 1;
        if(this.equippedSpells.length === 5){
          this.spellsFull = true;
        }
      }, 400);
    }

  }

  removeSpell(spellId: number){
    let index = this.equippedSpellIds.indexOf(spellId);
    if(index !== -1){
      this.equippedSpells.splice(index, 1);
      this.equippedSpellIds.splice(index, 1);
      this.spellsLeft += 1;
      this.spellsFull = false;
    }
  }

  done(){
    this.spellsEquipped = true;
  }

  changeSpells(){
    this.spellsEquipped = false;
  }

}
