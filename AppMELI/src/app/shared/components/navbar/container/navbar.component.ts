import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit{
  @ViewChild('textInput', {static: false}) textInput: ElementRef;
  @Output() onSearch = new EventEmitter;

  ngOnInit() {}

  onSearchEvent() {
    this.onSearch.emit(this.textInput.nativeElement.value);
  }
}
