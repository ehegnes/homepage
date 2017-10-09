import {
  animate,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const fadeAnimation =
trigger('fadeAnimation', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('1000ms', style({ opacity: 1})),
  ]),
]);
