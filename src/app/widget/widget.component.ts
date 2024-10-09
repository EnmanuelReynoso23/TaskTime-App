import { Component } from '@angular/core';

@Component({
  selector: 'ns-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent {
  topTasks: any[] = [
    { text: 'Complete project', priority: 'high' },
    { text: 'Call client', priority: 'medium' },
    { text: 'Prepare presentation', priority: 'low' }
  ];

  completeTask(index: number) {
    this.topTasks.splice(index, 1);
  }

  postponeTask(index: number) {
    const task = this.topTasks[index];
    this.topTasks.splice(index, 1);
    this.topTasks.push(task);
  }
}