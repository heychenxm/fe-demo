import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('渲染正确的标题', () => {
    const wrapper = mount(HelloWorld, {
      props: { msg: 'Test Message' }
    })
    expect(wrapper.find('h1').text()).toBe('Test Message')
  })
})