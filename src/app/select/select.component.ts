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
    }, 1000)
  }

  choose(character){
    this.router.navigate(['character', character.id]);
  }

}
