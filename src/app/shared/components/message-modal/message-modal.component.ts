import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.scss']
})
export class MessageModalComponent {

  @Input() returnMessageCodeFunction?: string
  @Input() messageCode?: string
  @Input() classBtn?: string
  @Input() disabledBtn?: boolean
  @Output() emitFunctionOutput = new EventEmitter<void>()
  @Input() colorBorderOfMessageCode: string = 'green'
}
