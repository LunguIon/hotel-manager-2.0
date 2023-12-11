import {Component, OnInit} from '@angular/core';
import {Room} from "../room";
import {RoomService} from "../room.service";
import {HttpErrorResponse} from "@angular/common/http";


@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})

export class AppComponent implements OnInit {
  public rooms: Room[] = [];
  roomNumber: any;
  roomType: any;
  availability: any;
  price: any;

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

export class BookingComponent {
}
