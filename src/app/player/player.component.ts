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
  characterId: number;
  equippedSpellIds: number[] = [];
  equippedSpells = [];
  spellsFull: boolean = false;
  spellsEquipped: booelan = false;
  spellsLeft: number;

  ngOnInit() {
    this.router.params.forEach((urlParameters) => {
        this.characterId = parseInt(urlParameters['id']);
    });
    this.currentCharacter = this.characterService.getCharacterById(this.characterId);
    this.characterClass = this.classService.getClassById(this.currentCharacter.classId);
    this.spellList = this.spellService.getSpellsByClass(this.currentCharacter.classId)

  }

  addSpell(spellId: number){
    if(this.equippedSpells.indexOf(spellId) === -1){
      this.equippedSpellIds.push(spellId);
      this.equippedSpells.push(this.spellService.getSpellById(spellId));
      this.spellsLeft -= 1;
      if(this.equippedSpells.length === this.currentCharacter.spellCount){
        this.spellsFull = true;
      }
    }

  }

  removeSpell(spellId: number){
    if(this.equippedSpells.indexOf(spellId) !== -1){
      this.equippedSpells.splice(this.equippedSpellIds.indexOf(spellId), 1);
      this.equippedSpellIds.splice(this.equippedSpellIds.indexOf(spellId), 1);
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
