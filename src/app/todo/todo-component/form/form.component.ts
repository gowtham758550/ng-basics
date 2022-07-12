import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataSource } from 'src/models/dataSource';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [
  ]
})
export class FormComponent implements OnInit {

  @Input() type!: string;
  @Input() data!: DataSource
  @Output() emitter = new EventEmitter<DataSource>();
  form: FormGroup;
  priorityList = ["High", "Medium", "Low"];

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      priority: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    if (this.type == "update") {
      let {name, priority, description} = this.data
      this.form.setValue({name, priority, description});
    }
  }

  emitFormValue() {
    this.emitter.emit(this.form.value);
  }

}
