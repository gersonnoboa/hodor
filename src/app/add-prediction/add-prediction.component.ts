import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-prediction',
  templateUrl: './add-prediction.component.html',
  styleUrls: ['./add-prediction.component.scss']
})
export class AddPredictionComponent implements OnInit {

  characters = [
    "Jon Snow",
    "Sansa Stark",
    "Arya Stark",
    "Bran Stark",
    "Cersei Lannister",
    "Jaime Lannister",
    "Tyrion Lannister",
    "Daenerys Targaryen",
    "Yara Greyjoy",
    "Theon Greyjoy",
    "Euron Greyjoy",
    "Melisandre",
    "Jorah Mormont",
    "The Hound",
    "The Mountain",
    "Samwell Tarly",
    "Gilly",
    "Sam (child)",
    "Varys",
    "Brienne of Tarth",
    "Davos Seaworth",
    "Bronn",
    "Podrick Payne",
    "Tormund Giantsbane",
    "Grey Worm",
    "Missandei",
    "Gendry",
    "Beric Dondarrion",
    "Qyburn"
  ];

  statuses = [
    "Alive",
    "Dead",
    "White Walker"
  ];

  constructor() { }

  ngOnInit() {
  }

}
