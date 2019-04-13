import { Component, OnInit } from '@angular/core';
import { PredictionsService } from '../services/predictions.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Prediction } from '../models/prediction';
import { General } from '../general/general';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-prediction',
  templateUrl: './add-prediction.component.html',
  styleUrls: ['./add-prediction.component.scss']
})
export class AddPredictionComponent implements OnInit {
  isLoading = false;
  canEdit = false;
  predictions: Array<Prediction>;
  private form: FormGroup;

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

  constructor(private service: PredictionsService,
    private snackBar: MatSnackBar,
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder) {
    if (this.authService.isUserLoggedOut()) {
      this.router.navigateByUrl("/");
    }
  }

  ngOnInit() {
    this.getPredictions();
  }

  getPredictions() {
    this.isLoading = true;
    this.service.getPredictions().subscribe(event => {
      this.generatePredictions(event as Array<any>);
    }, error => {
      this.isLoading = false;
    });
  }

  generatePredictions(data: Array<any>) {
    this.predictions = [];

    for (let index = 0; index < this.characters.length; index++) {
      const characterName = this.characters[index];

      let result = data.filter(value => {
        return value.name == characterName;
      });

      let statusPrediction = "";
      let statusInShow = "";
      let image = "";
      let canEdit = false;

      if (result.length > 0) {
        let remoteCharacter = result[0];

        if (remoteCharacter.user_prediction.length > 0) {
          statusPrediction = remoteCharacter.user_prediction[0];
        }

        statusInShow = remoteCharacter.status;
        image = remoteCharacter.image;
        canEdit = remoteCharacter.canEdit;
      }
      
      const prediction = new Prediction(characterName, statusPrediction, statusInShow, image, canEdit);
      this.predictions.push(prediction);
    }

    if (this.predictions.length > 0) {
      this.canEdit = this.predictions[0].canEdit;
    }

    this.isLoading = false;
  }

  onSubmitClicked() {
    this.service.postPredictions(this.predictions).subscribe(event => {
      General.show(this.snackBar, "Predictions saved successfully");
      this.router.navigateByUrl("/home");
    }, error => {
      if (error instanceof HttpErrorResponse) {
        if (error.status == 403) {
          General.show(this.snackBar, error.error);
        }
        
        General.showGeneralError(this.snackBar);
      }
    });
  }
}
