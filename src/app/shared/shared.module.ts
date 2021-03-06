import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { ApiService } from './services/api.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  exports: [ApiService],
})
export class SharedModule {}
