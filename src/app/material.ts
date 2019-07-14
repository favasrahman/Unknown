import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';



@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatRadioModule],
  exports: [MatButtonModule, MatCheckboxModule, MatRadioModule],
})
export class MaterialModule { }