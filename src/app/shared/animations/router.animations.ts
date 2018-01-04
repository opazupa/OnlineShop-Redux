import { animate, group, query, style, transition, trigger } from '@angular/animations';

const slideUp = [
  /* order */
  /* 1 */ query(':enter, :leave', style({ position: 'fixed', width: '100%', opacity: 0 })
    , { optional: true }),
  /* 2 */ group([  // block executes in parallel
    query(':enter', [
      style({ transform: 'translate(-50%, 100%)' }),
      animate('0.5s ease-in-out', style({ transform: 'translate(-50%, 0)' }))
    ], { optional: true }),
    query(':enter', [
      style({ opacity: '0' }),
      animate('1s ease-in-out', style({ opacity: '1' }))
    ], { optional: true }),
  ]),
];

export const routerTransition = trigger('routerTransition', [
  transition(':enter', []),
  transition('* => home', slideUp),
  transition('* => shop', slideUp)
]);

