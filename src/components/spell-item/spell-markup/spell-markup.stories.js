import SpellMarkup from './spell-markup.vue'
import {
  toStr,
  render as storybookExampleRender
} from '../../../spells-core/storybook-example-render.js'

const render = storybookExampleRender.bind(this, {
  SpellMarkup
})

export default {
  title: 'spell-item/spell-markup',
  component: SpellMarkup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ``
      }
    },
    slots: {}
  },
  argTypes: {},
  render
}

export const Default = {
  args: {},
  tmpl: `<SpellMarkup v-model:tmpl="state.tmpl"/>
  {{state.tmpl}}
  `,
  actions: {
    mounted: toStr(function (ctx) {
      ctx.state.tmpl = `
      <LayoutDefault>
      <template #header>
        <Header isFilled="" link="/">
          <template #logo>CREDITOMAS</template>
  
          <template #default>$10 000 for 25 days</template>
        </Header>
      </template>
  
      <template #default
        ><small class="mt-5">Step 1 of 7</small>
        <h3>Personal data</h3>
        <div class="container my-3">
          <div class="row">
            <Field
              class="col-md-6 mb-4"
              label="First name"
              v-model="state.first_name"
              :validation-message="(state.validation || {}).first_name"
            ></Field>
            <Field
              class="col-md-6 mb-4"
              label="First last name"
              v-model="state.first_last_name"
              :validation-message="(state.validation || {}).first_last_name"
            ></Field>
          </div>
          <div class="row">
            <Field
              class="col-md-6 mb-4"
              label="Second last name"
              v-model="state.second_last_name"
              :validation-message="(state.validation || {}).second_last_name"
            ></Field>
            <div
              class="col-md-6 mb-4 d-flex align-items-center justify-content-between"
            >
              Gender:
              <label>
                <InputTypeRadio
                  v-model="state.gender"
                  value="male"
                ></InputTypeRadio>
                male
              </label>
              <label>
                <InputTypeRadio
                  v-model="state.gender"
                  value="female"
                ></InputTypeRadio>
                female
              </label>
            </div>
          </div>
        </div>
        <div class="container my-3">
          <div class="row">
            <Field
              class="col-md-6 mb-4"
              label="CURP"
              v-model="state.curp"
              :validation-message="(state.validation || {}).curp"
            ></Field>
            <Field
              class="col-md-6 mb-4"
              label="date of bith"
              type="date"
              v-model="state.date_of_bird"
              :validation-message="(state.validation || {}).date_of_bird"
            ></Field>
          </div>
          <div class="row">
            <Field
              class="col-md-12 mb-4"
              label="State of bith"
              v-model="state.state_of_bird"
              :validation-message="(state.validation || {}).state_of_bird"
            ></Field>
          </div>
        </div>
        <div class="container my-3">
          <div class="row">
            <Field
              class="col-md-6 mb-4"
              label="Phone number"
              type="tel"
              v-model="state.phone"
              :validation-message="(state.validation || {}).phone"
            ></Field>
            <Field
              class="col-md-6 mb-4"
              label="e-mail"
              type="email"
              v-model="state.email"
              :validation-message="(state.validation || {}).email"
            ></Field>
          </div>
        </div>
        <label>
          <InputTypeCheckbox v-model="state.is_agree"></InputTypeCheckbox>
          I have read and agree with
          <a href="#">the following</a>
        </label>
        <div class="container my-3">
          <div class="row">
            <div class="col-md-6 mb-4">
              <Button class="w-100" @click="action('onContinue')"
                >Continue</Button
              >
            </div>
          </div>
        </div>
      </template>
    </LayoutDefault>      
      
      `
    })
  }
}
