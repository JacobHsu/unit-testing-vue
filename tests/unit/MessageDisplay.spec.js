import MessageDisplay from '@/components/MessageDisplay'
import { mount } from '@vue/test-utils'
import { getMessage } from '@/services/axios'
import flushPromises from 'flush-promises'

jest.mock('@/services/axios') // path of module to mock

describe('MessageDisplay', () => {

  // in our first test, getMessage was called, and then it gets called again in our second test. We haven’t done anything to clear out our mocked
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('Calls getMessage once and displays message', async () => {
    const mockMessage = 'Hello from the db' 
    // mock the API call
    getMessage.mockResolvedValueOnce({ text: mockMessage }) 
    const wrapper = mount(MessageDisplay)

    await flushPromises() // resolves promises
    // ensures that a mock function is called an exact number of times
    expect(getMessage).toHaveBeenCalledTimes(1)

    // components\MessageDisplay.vue template
    const message = wrapper.find('[data-testid="message"]').element.textContent
    expect(message).toEqual(mockMessage)
  })

  it('Displays an error when getMessage call fails', async () => {
    const mockError = 'Oops! Something went wrong.'
    getMessage.mockRejectedValueOnce(mockError) // mock the API call
    const wrapper = mount(MessageDisplay)

    await flushPromises()
    // check that call happened once
    expect(getMessage).toHaveBeenCalledTimes(1)
    // check that component displays error
    const displayedError = wrapper.find('[data-testid="message-error"]').element
      .textContent
    expect(displayedError).toEqual(mockError)
  })
  
})
