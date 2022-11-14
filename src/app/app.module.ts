import { BrowserModule } from
	'@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FileUploadComponent } from
	'./file-upload/file-upload.component';

import { AppComponent } from './app.component';
import {HttpClientModule} from
	'@angular/common/http';
import { FileOverviewComponent } from './file-overview/file-overview.component';
@NgModule({
declarations: [
	AppComponent,
	FileUploadComponent,
 FileOverviewComponent,
],
imports: [
	BrowserModule,
	HttpClientModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
