import { animate, animation, style } from "@angular/animations";

export const defaultListItemAnimation = animation([
  style({
    opacity: '{{ opacity }}',
    transform: '{{ transform  }}',
  }),
  animate('{{ time }}')
])
