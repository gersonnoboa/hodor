import { Component, OnInit } from '@angular/core';
import { PredictionsService } from '../services/predictions.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-prediction',
  templateUrl: './add-prediction.component.html',
  styleUrls: ['./add-prediction.component.scss']
})
export class AddPredictionComponent implements OnInit {
  isLoading = false;
  predictions: any;

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

  constructor(private service: PredictionsService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  getPredictions() {
    this.service
  }

}
