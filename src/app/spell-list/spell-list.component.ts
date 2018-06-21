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
  spellListByClass;
  byClass: boolean = false;
  ngOnInit() {
    this.spellList = this.spellService.getSpells();
  }

  formatDescription(description: String) {
    return description.split("~");
  }

  filterSpells(classId: number){
    if(classId === 0){
      this.byClass = false;
    } else{
      this.spellListByClass = this.spellService.getSpellsByClass(classId);
      setTimeout(() =>{
        this.byClass = true;
      }, 1000);
    }
  }

}
