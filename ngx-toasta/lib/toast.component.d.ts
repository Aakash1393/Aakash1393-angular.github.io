import { EventEmitter } from '@angular/core';
import { ToastData } from './toasta.service';
/**
 * A Toast component shows message with title and close button.
 */
export declare class ToastComponent {
    toast: ToastData;
    closeToastEvent: EventEmitter<{}>;
    /**
     * Event handler invokes when user clicks on close button.
     * This method emit new event into ToastaContainer to close it.
     */
    close($event: any): void;
}
