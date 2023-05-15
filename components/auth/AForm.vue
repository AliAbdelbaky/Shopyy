<template>
  <div class="card">
    <div class="logo tw-w-full tw-h-20 tw-relative">
      <img
        :src="Logo"
        class="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-object-contain"
      />
    </div>
    <div class="form tw-flex tw-flex-col tw-gap-6">
      <h2 class="tw-text-4xl md:tw-text-2xl tw-text-slate-800 tw-font-bold">
        Sign-in
      </h2>
      <p class="tw-text-2xl md:tw-text-xl">
        {{ isLogin ? `Don't have an account?` : "Already have an account?" }}
        <span
          class="tw-text-purple-400 hover:tw-underline tw-cursor-pointer tw-ms-1 tw-opacity-80 hover:tw-opacity-100"
          @click="() => (isLogin = !isLogin)"
        >
          {{ isLogin ? `Sign up` : "Log in" }}
        </span>
      </p>
      <Transition name="fade">
        <div v-if="!isLogin">
          <label class="tw-text-start">
            <span class="_label">Name</span>
            <q-input
              dense
              standout="bg-teal text-white"
              v-model="state.name"
              placeholder="Type here"
              bottom-slots
              hide-bottom-space
              error-message="Please use maximum 3 characters"
            />
          </label>
          <label class="tw-text-start">
            <span class="_label">Username</span>
            <q-input
              dense
              standout="bg-teal text-white"
              v-model="state.username"
              placeholder="Type here"
              bottom-slots
              hide-bottom-space
              error-message="Please use maximum 3 characters"
            />
          </label>
        </div>
      </Transition>
      <label class="tw-text-start">
        <span class="_label">{{
          isLogin ? "Email or Username" : "Email"
        }}</span>
        <q-input
          dense
          standout="bg-teal text-white"
          v-model="state.email"
          placeholder="Type here"
          bottom-slots
          hide-bottom-space
          :error-message="state.errors?.email"
          :error="!!state.errors?.email"
          @update:model-value="validate"
        />
      </label>
      <label class="tw-text-start">
        <span class="_label">Password</span>
        <q-input
          dense
          standout="bg-teal text-white"
          v-model="state.password"
          placeholder="Type here"
          bottom-slots
          hide-bottom-space
          :type="isPwd ? 'password' : 'text'"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'mdi-eye-off' : 'mdi-eye'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
      </label>
      <q-btn
        color="primary"
        label="Continue"
        size="md"
        class="tw-opacity-50 tw-transition-all hover:tw-opacity-100 !tw-py-3"
        @click="onSubmit"
      />
      <q-btn
        v-if="isLogin"
        color="transparent"
        label="Sign in with passkey"
        size="md"
        class="tw-opacity-50 tw-transition-all hover:tw-opacity-100 hover:tw-bg-slate-300 !tw-py-3 !tw-text-black"
      />
      <div class="tw-flex tw-flex-col tw-gap-4">
        <div
          class="saperator tw-flex tw-relative tw-items-center tw-justify-center"
        >
          <span class="text">or sign {{ isLogin ? "in" : "up" }} with</span>
          <div class="line"></div>
        </div>
        <div
          class="methods tw-flex tw-gap-2 tw-items-center tw-justify-center tw-py-3"
        >
          <q-btn
            v-for="(item, index) in socailMethods"
            :key="index"
            class="socail-item"
            color="transparent"
            flat
            size="md"
          >
            <q-icon :name="`mdi-${item.icon}`" :color="item.color" size="sm" />
            <span
              class="tw-text-black tw-ms-2 !tw-capitalize"
              v-show="socailMethods.length <= 2"
            >
              {{ item.name }}
            </span>
          </q-btn>
        </div>
      </div>
      {{ state }}
      sss
      <q-btn
        @click="login"
        color="transparent"
        label="logginggg"
        size="md"
        class="tw-opacity-50 tw-transition-all hover:tw-opacity-100 hover:tw-bg-slate-300 !tw-py-3 !tw-text-black"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import Logo from "~~/assets/imgs/shoppyLogo.png";
import useAuthHandler from "~/composables/website/auth/useAuthHandler";
const { socailMethods, state, onSubmit, validate, isPwd, isLogin } =
  useAuthHandler();
const { status, data, signIn, signOut } = useAuth();
const login = async () => {
  console.log(status.value, data.value);
  await signIn();
};
</script>

<style lang="scss" scoped>
.card {
  @apply tw-rounded-sm tw-px-8 md:tw-px-3  tw-w-full md:tw-max-w-[550px] tw-flex tw-flex-col tw-gap-6 tw-text-center;
}
._label {
  @apply tw-text-lg md:tw-text-base tw-mb-2 tw-block tw-text-slate-700 tw-font-semibold;
}
.socail-item {
  @apply tw-shadow-md tw-rounded-md tw-transition-all hover:tw-bg-slate-300 tw-text-black;
}
.saperator {
  .text {
    @apply tw-text-base tw-font-bold tw-lowercase tw-bg-[#f8f8fa] tw-text-slate-600 tw-relative tw-z-10 tw-px-6;
  }
  .line {
    @apply tw-h-[1px] tw-bg-slate-300 tw-w-full tw-absolute;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
