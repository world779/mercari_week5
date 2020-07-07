import { mount } from '@vue/test-utils';
import Component from '@/App.vue'
import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)

const router = new VueRouter()

let wrapper

beforeEach(() => {
  wrapper = shallowMount(Component, {
    router
  })
})
describe('Testing App component', () => {
    it('is a Vue instance', () => {
      const wrapper = mount(Component)
      expect(wrapper.isVueInstance).toBeTruthy()
    })
})