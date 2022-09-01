import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/models/Constants';
import { LocationList } from 'src/app/models/Constants';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  public categoryList = new Array<Category>();
  public locationList = LocationList;
  public eventForm: any;

  constructor(private readonly restService: RestService, private readonly formBuider: FormBuilder) { }

  ngOnInit(): void {
    this.restService.getAllCategories().subscribe(res => {
      this.categoryList = res && res.length ? res : [];
    });

    this.eventForm = this.formBuider.group({
      name: [null, [Validators.required]],
      description: [null, Validators.required],
      category: [null, Validators.required],
      onDate: [null, Validators.required],
      location: [null, Validators.required],
    })
  }

  public onSubmit(form: any): void {
    console.log(form);
  }
}
