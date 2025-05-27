import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
    selector: 'app-root',
    template: `Witaj w Angularze - Jello Universe!
    <hr>
    Jestes we wspanialym miescie {{ city }}.
    <hr>
    1 +1 = {{ 1 + 1 }}.
    <hr>
    <input [(ngModel)]="nazwaUzytkownika">
    <hr>
    <button (click)="zapisz()">Zapiszesz w consoli log</button>
    `,
    imports: [FormsModule],
    styles: `:host {
      color: #d39bff;
    }`
})

export class AppComponent {
    city: string = "Wroclaw";

    nazwaUzytkownika: string = ""

    zapisz() {
        console.log("Zapisano: " + this.nazwaUzytkownika);
    }


}
