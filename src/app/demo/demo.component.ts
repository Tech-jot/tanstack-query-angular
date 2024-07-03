import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { injectQuery } from '@tanstack/angular-query-experimental'
@Component({
  selector: 'app-demo',

  templateUrl: './demo.component.html',
})
export class DemoComponent implements OnInit {
  // info = injectQuery(() => ({ queryKey: ['todos'], queryFn: fetchTodoList }))

  todo: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    const observer = {
      next: (data: any[]) => {
        this.todo = data;
        // console.log('data', this.todo);
      },
      error: (error: any) => console.error('There was an error!', error),
      // complete: () => console.log('API call completed'),
    };

    this.apiService.getTodo().subscribe(observer);
  }
}
