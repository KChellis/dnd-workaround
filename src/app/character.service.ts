import { Injectable } from '@angular/core';
import { Character } from "./models/character.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

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
    let url = "https://dnd-spell-organizer.herokuapp.com/characters/add";
    let headers = new Headers({'Content-Type': 'text/plain'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(url, newCharacter).toPromise().then(this.extractData).catch(this.handleError);

    // let request = new XMLHttpRequest();
    // let characters;
    // request.onreadystatechange = function() {
    //     if (this.readyState === 4 && this.status === 201) {
    //       characters = JSON.parse(this.response);
    //     } else if (this.readyState === 4 && this.status != 201) {
    //       characters = "New character not added";
    //     }
    // }
    //
    // request.open("POST", url, true);
    // request.setRequestHeader("Content-type", "application/JSON");
    // request.send(JSON.stringify(newCharacter));
    //
    // return characters;
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error);
    return Promise.reject(error.message || error);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
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
    this.http.get(url).toPromise().then(result => {
      return result;
    });
  }

  setCurrentCharacter(character){
    this.currentCharacter= character;
  }

  getCurrentCharacter(){
    return this.currentCharacter;
  }
}
