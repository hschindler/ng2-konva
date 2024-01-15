import { KonvaEventObject } from 'konva/lib/Node';
import { KonvaComponent } from './ko-component.interface';

export interface NgKonvaEventObject<T> {
  angularComponent: KonvaComponent;
  event: KonvaEventObject<T>;
}
