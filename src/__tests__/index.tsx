import React from 'react';
import '../index';

describe('toMatchImage', () => {
  it('should match previous image', () => {
    const Component = () => (
      <div>Hello</div>
    );

    // @ts-ignore
    expect(<Component />).toMatchImage();
  });

});
