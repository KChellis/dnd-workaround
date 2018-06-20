import { Component, OnInit} from '@angular/core';
import { Spell } from '../models/spell.model';
import { Character } from '../models/character.model';
import { SpellService } from '../spell.service';
import { CharacterService } from '../character.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-spell-list',
  templateUrl: './spell-list.component.html',
  styleUrls: ['./spell-list.component.scss'],
  providers: [SpellService, CharacterService]
})
export class SpellListComponent implements OnInit {


  // currentCharacter: Character;

  constructor(private spellService: SpellService, private characterService: CharacterService, private http:HttpClient) { }
  spellList;
  equippedSpells: number[] = [];
  spellsFull: boolean = false;
  ngOnInit() {
    // this.currentCharacter =
    // this.spellList = this.spellService.getSpellsByClass(this.currentCharacter.classId);
    this.spellList = this.spellService.getSpellsByClass(4);
  }

  addSpell(spellId: number){
    if(this.equippedSpells.indexOf(spellId) === -1){
      this.equippedSpells.push(spellId);
    }
    // if(this.equippedSpells.length === this.currentCharacter.spellCount){
    //   this.spellsFull = true;
    // }
  }

}
