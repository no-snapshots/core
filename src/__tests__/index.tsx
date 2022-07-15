import React from 'react';
import '../index';

describe('toMatchImage', () => {
  it('should match previous image', () => {
    const Component = () => (
      <div style={{ width: '200px', height: '250px', backgroundColor: 'blue'}}>test</div>
    );

    // @ts-ignore
    expect(<Component />).toMatchImage();
  });

});
