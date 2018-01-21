import { animate, state, style, transition, trigger } from '@angular/animations';

// const slideUp = [
//   /* order */
//   /* 1 */ query(':enter, :leave', style({ position: 'fixed', width: '100%', opacity: 0 })
//     , { optional: true }),
//   /* 2 */ group([  // block executes in parallel
//     query(':enter', [
//       style({ transform: 'translate(-50%, 100%)' }),
//       animate('0.5s ease-in-out', style({ transform: 'translate(-50%, 0)' }))
//     ], { optional: true }),
//     query(':enter', [
//       style({ opacity: '0' }),
//       animate('1s ease-in-out', style({ opacity: '1' }))
//     ], { optional: true }),
//   ]),
// ];

// export const slideToRight() {
//   return trigger('routerTransition', [
//     state('void', style({})),
//     state('*', style({})),
//     transition(':enter', [
//       style({ transform: 'translateX(-100%)' }),
//       animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
//     ]),
//     transition(':leave', [
//       style({ transform: 'translateX(0%)' }),
//       animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
//     ])
//   ]);
// }

// export const slideToLeft() {
//   return trigger('routerTransition', [
//     state('void', style({})),
//     state('*', style({})),
//     transition(':enter', [
//       style({ transform: 'translateX(100%)' }),
//       animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
//     ]),
//     transition(':leave', [
//       style({ transform: 'translateX(0%)' }),
//       animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
//     ])
//   ]);
// }

// export const slideToBottom() {
//   return trigger('routerTransition', [
//     state('void', style({})),
//     state('*', style({})),
//     transition(':enter', [
//       style({ transform: 'translateY(-100%)' }),
//       animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
//     ]),
//     transition(':leave', [
//       style({ transform: 'translateY(0%)' }),
//       animate('0.5s ease-in-out', style({ transform: 'translateY(100%)' }))
//     ])
//   ]);
// }

export const slideToTopWithFade = trigger('routerTransition', [
  state('void', style({})),
  state('*', style({})),
  transition(':enter', [
    style({ transform: 'translateY(100%)' }),
    animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
  ]),
  transition(':leave', [
    style({ transform: 'translateY(0%)' }),
    animate('0.5s ease-in-out', style({ transform: 'translateY(-100%)' }))
  ])
]);


export const routerTransition = slideToTopWithFade;

