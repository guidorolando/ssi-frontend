import {Component, EventEmitter, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-incident-add',
  templateUrl: './incident-add.component.html',
  styleUrls: ['./incident-add.component.css']
})
export class IncidentAddComponent implements OnInit {

  createIncidentForm: FormGroup;
  public closeEvent = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.createIncidentForm = this.fb.group({});
  }

  closeIncident() {
    this.closeEvent.next(true);
  }

}
