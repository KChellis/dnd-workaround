import { Injectable } from '@angular/core';
import { Character } from "./models/character.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  currentCharacter: Character;
  constructor(private http:HttpClient) { }

  getCharacters(){
    let url = "https://dnd-spell-organizer.herokuapp.com/characters";
    return this.http.get(url).toPromise().then(result => {
      return result;
    });
  }

  getCharacterById(characterId: number){
    let url = "https://dnd-spell-organizer.herokuapp.com/characters/" + characterId;
    return this.http.get(url).toPromise().then(result => {
      console.log(result);
      return result;
    });
  }

  addNewCharacter(newCharacter: Character){
    let request = new XMLHttpRequest();
    let url = "https://dnd-spell-organizer.herokuapp.com/characters/add";
    let characters;
    request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 201) {
          characters = JSON.parse(this.response);
        } else if (this.readyState === 4 && this.status != 201) {
          characters = "New character not added";
        }
    }

    request.open("POST", url, true);
    request.setRequestHeader("Content-type", "application/JSON");
    request.send(JSON.stringify(newCharacter));

    return characters;
  }

  updateCharacterById(propertiesToUpdate: Object, characterId: number){
    let request = new XMLHttpRequest();
    let url = "https://dnd-spell-organizer.herokuapp.com/characters/" + characterId + "/update";
    let characters;
    request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 201) {
          characters = JSON.parse(this.response);
        } else if (this.readyState === 4 && this.status != 201) {
          characters = "Update not processed";
        }
    }

    request.open("PUT", url, true);
    request.send(JSON.stringify(propertiesToUpdate));

    return characters;
  }

  deleteCharacterById(characterId: number){
    let url = "https://dnd-spell-organizer.herokuapp.com/characters/" + characterId + "/delete";
    this.http.delete(url);
  }
  setCurrentCharacter(character){
    this.currentCharacter= character;
  }
  getCurrentCharacter(){
    return this.currentCharacter;
  }
}
