import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { Show } from '../../interfaces/show.interface';
import { TvShowService } from '../../services/tv-show.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-tv-show',
  imports: [MatInputModule, MatFormFieldModule, MatButtonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './new-tv-show.component.html',
  styleUrl: './new-tv-show.component.css'
})
export class NewTvShowComponent {
  form: FormGroup;
  formSubmitted: boolean = false;

  constructor(private tvShowService: TvShowService) {
    this.form = new FormGroup({
      name: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
      image: new FormControl("", [Validators.required]),
      year: new FormControl(0, [Validators.required, Validators.min(1900)]),
      episodes: new FormControl(1, [Validators.required, Validators.min(1)]),
      genre: new FormControl("", [Validators.required]),
    })
    
  }

  createNewTvShow(): void {
    this.formSubmitted = true;
    if (this.form.valid) {
      const newTvShow: Show = {
        name: this.form.value.name,
        description: this.form.value.description,
        image: this.form.value.image,
        year: this.form.value.year,
        episodes: this.form.value.episodes,
        genre: this.form.value.genre,
        likes: []
      }      
      this.tvShowService.createNewTvShow(newTvShow);
      this.form.reset();
      this.formSubmitted = false;
    }
    else {
      console.log("Formulario invalido");
    }
  }

  // createNewTvShow(form: NgForm): void {
  //   if (form.valid) {
  //     const newTvShow: Show = {
  //       description: form.value.description,
  //       image: form.value.image,
  //       name: form.value.name,
  //       episodes: 0,
  //       genre: "",
  //       likes: [],
  //       year: 0
  //     }
  //     this.tvShowService.createNewTvShow(newTvShow);
  //     form.resetForm();
  //   }
  //   else {
  //     console.log("Formulario invalido");
  //   }
  // }
}
