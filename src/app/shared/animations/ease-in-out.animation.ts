// import the required animation functions from the angular animations module
import { animate, style, transition, trigger } from '@angular/animations';

export const easeInOutAnimation =
  // trigger name for attaching this animation to an element using the [@triggerName] syntax
  trigger('easeInOut', [
    transition(':enter', [
      style({
        opacity: 0
      }),
      animate('1s ease-in-out', style({
        opacity: 1
      }))
    ]),
    transition(':leave', [
      style({
        opacity: 1
      }),
      animate('1s ease-in-out', style({
        opacity: 0
      }))
    ])
  ]);
