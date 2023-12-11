import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import { Room } from './room';
import { RoomService } from './room.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  public rooms: Room[] = [];

  constructor(private roomService: RoomService) {
  }

  ngOnInit() {
    this.getRooms();
  }

  public getRooms(): void {
    this.roomService.getRooms().subscribe(
      (response: Room[]) => {
        this.rooms = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
