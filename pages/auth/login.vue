<template>
  <main class="h-lvh flex justify-center items-center p-4">
    <UCard class="max-w-96 w-full">
      <template #header>
        <h1 class="text-3xl text-center">Войти</h1>
      </template>
        <UForm :validate="validate" :state="state" class="space-y-4" @submit="onSubmit">
          <UFormGroup label="E-mail" name="email">
            <UInput v-model="state.email" />
          </UFormGroup>
          <UFormGroup label="Пароль" name="password">
            <UInput v-model="state.password" type="password" />
          </UFormGroup>
            <UButton type="submit" block>
              Войти
            </UButton>

            <div class="mt-1.5 text-center">
              <ULink
                to="/auth/registration"
                active-class="text-primary"
                inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              >
                Зарегистрироваться
              </ULink>
            </div>
        </UForm>
    </UCard>
  </main>
</template>

<script setup lang="ts">
  import type { FormError, FormSubmitEvent } from '#ui/types'
  import { validationEmail } from '@/utils/validation'

  const state = reactive({
    email: '',
    password: ''
  })

  const validate = (state: any): FormError[] => {
    const errors = []
    const emailError = validationEmail(state.email)
    if ( emailError.length) errors.push({ path: 'email', message: emailError })
    if (state.password.length < 6) errors.push({ path: 'password', message: 'Введите минимум 6 символов' })
    return errors
  }
  const onSubmit = (event: FormSubmitEvent<any>) => {
    console.log('onSubmit')
  }
</script>
