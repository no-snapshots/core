/// <reference types="jest" />

declare namespace jest {
  interface Matchers<R> {
    toMatchImage(): R;
  }
}
