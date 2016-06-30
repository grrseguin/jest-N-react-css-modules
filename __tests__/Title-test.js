jest.unmock('react-css-modules');
jest.unmock('../src/components/Title');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Title from '../src/components/Title';

describe('Title', () => {

  it('should have a text', () => {
    // Render a checkbox with label in the document
    const title = TestUtils.renderIntoDocument(
      <Title>Hello, world! I am a title.</Title>
    );

    const titleNode = ReactDOM.findDOMNode(title);

    // Verify that it's Off by default
    expect(titleNode.textContent).toEqual('Hello, world! I am a title.');
  });

});
