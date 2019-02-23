import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'nst-ui-toolbar',
  templateUrl: './ui-toolbar.component.html',
  styleUrls: ['./ui-toolbar.component.scss']
})
export class UiToolbarComponent {

    @Input() isLoggedIn;
    @Input() title;
    @Input() sidenav;
    @Output() logout = new EventEmitter();
}

