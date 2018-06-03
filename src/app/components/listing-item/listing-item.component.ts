import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listing-item',
  templateUrl: './listing-item.component.html',
  styleUrls: ['./listing-item.component.css']
})
export class ListingItemComponent implements OnInit {

  @Input() animal: any;
  
  constructor() { }

  ngOnInit() {
  }

}
