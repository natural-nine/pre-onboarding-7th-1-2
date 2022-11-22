export interface EntryTypes {
  boundingClientRect: DOMRectReadOnly;
  intersectionRatio: number;
  intersectionRect: DOMRectReadOnly;
  isIntersecting: boolean;
  target: Element;
  rootBounds: DOMRectReadOnly | null;
  time: number;
}
export interface ObserverTypes {
  root: Element | null;
  rootMargin: string;
  thresholds: ReadonlyArray<number>;
  unobserve: (target: Element) => void;
  observe: (target: Element) => void;
  disconnect: () => void;
  takeRecords(): EntryTypes[];
}
