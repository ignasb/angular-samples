import { trigger, state, style, animate, transition, group } from '@angular/animations';

export const cardAnimation = (animationName: string, width: string) => {
  return trigger(animationName, [
    state('card-hovered', style({
      width,
      height: '110px',
      boxShadow: '10px 5px 5px lightgray'
    })),
    state('card-leave', style({
      width: '200px',
      height: '100px',
    })),
    transition('card-leave => card-hovered', [
      animate('0.3s ease', style({
        width
      })),
      animate('0.3s ease', style({
        height: '110px'
      })),
      animate('0.3s ease', style({
        boxShadow: '10px 5px 5px lightgray'
      }))
    ]),
    transition('card-hovered => card-leave', [
      group([
        animate('0.3s ease', style({
          width: '200px'
        })),
        animate('0.3s ease', style({
          height: '100px'
        })),
        animate('0.3s ease', style({
          boxShadow: 'none'
        }))
      ])
    ])
  ])
}
