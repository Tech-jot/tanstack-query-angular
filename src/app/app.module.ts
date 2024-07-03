import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppComponent } from './app.component';
import { QueryClient, QueryClientProvider } from '@tanstack/angular-query';

const queryClient = new QueryClient();

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Include HttpClientModule here
    QueryClientProvider.provide(queryClient)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
