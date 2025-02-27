import { mount } from '@vue/test-utils';
import base from '@/examples/breadcrumb-item/demos/base.vue';

// unit test for component in examples.
describe('Breadcrumb-item', () => {
  it('base demo works fine', () => {
    const wrapper = mount(base);
    expect(wrapper.element).toMatchSnapshot();
  });
});
