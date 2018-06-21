import { Component, OnInit} from '@angular/core';
import { Spell } from '../models/spell.model';
import { Character } from '../models/character.model';
import { SpellService } from '../spell.service';
import { CharacterService } from '../character.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-spell-list',
  templateUrl: './spell-list.component.html',
  styleUrls: ['./spell-list.component.scss'],
  providers: [SpellService, CharacterService]
})
export class SpellListComponent implements OnInit {


  // currentCharacter: Character;

  constructor(private router: ActivatedRoute, private spellService: SpellService, private characterService: CharacterService, private http:HttpClient) { }
  spellList;
  equippedSpells: number[] = [];
  spellsFull: boolean = false;
  spellsLeft: number;

  ngOnInit() {
    // this.currentCharacter =
    //this.spellsLeft = this.currentCharacter.spellCount;
    // this.spellList = this.spellService.getSpellsByClass(this.currentCharacter.classId);
    this.spellsLeft = 5;
    this.spellList = this.spellService.getSpellsByClass(4);
  }

  addSpell(spellId: number){
    if(this.equippedSpells.indexOf(spellId) === -1){
      this.equippedSpells.push(spellId);
      this.spellsLeft -= 1;
      // if(this.equippedSpells.length === this.currentCharacter.spellCount){
      //   this.spellsFull = true;
      // }
    }

  }

  removeSpell(spellId: number){
    if(this.equippedSpells.indexOf(spellId) !== -1){
      this.equippedSpells.splice(this.equippedSpells.indexOf(spellId), 1);
      this.spellsLeft += 1;
      this.spellsFull = false;
    }
  }

  done(){
    // let spells = this.equippedSpells.toString();
    // this.currentCharacter.preparedSpells = spells;
    //this.characterService.updateCharacterById(this.currentCharacter.id);
  }

}
