import React from 'react'
import {render} from '@testing-library/react'
import Message from '../Message'

test('find text "test message name"', () => {
    const {getByText} = render((
        <Message
             avatar=""
             name="test message name"
             message=""
             time=""
        />
    ))
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const linkElement = getByText(/test message name/i)
    expect(linkElement).toBeInTheDocument()
})
test('find text "test message"', () => {
    const {getByText} = render((
        <Message
            avatar=""
            name=""
            message="test message"
            time=""
        />
    ))
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const linkElement = getByText(/test message/i)
    expect(linkElement).toBeInTheDocument()
})
test('find text "test message time"', () => {
    const {getByText} = render((
        <Message
            avatar=""
            name=""
            message=""
            time="test message time"
        />
    ))
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const linkElement = getByText(/test message time/i)
    expect(linkElement).toBeInTheDocument()
})
