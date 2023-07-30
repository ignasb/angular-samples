import { InjectionToken } from "@angular/core";

export class DiClass {
  constructor(public label: string, public value: number) { }
}

export const DiClassToken = new InjectionToken('DiClassToken', {
  providedIn: 'root',
  factory: () => DiClass
})
