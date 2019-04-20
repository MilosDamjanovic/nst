import { ChangeDetectionStrategy } from "@angular/core";
import { Component, OnInit, Output, Input, EventEmitter } from "@angular/core";

@Component({
  selector: "nst-ui-toolbar",
  templateUrl: "./ui-toolbar.component.html",
  styleUrls: ["./ui-toolbar.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiToolbarComponent {
  @Input() isLoggedIn: boolean;
  @Input() title: string;
  @Input() sidenav: any;
  @Output() logout = new EventEmitter();
}
