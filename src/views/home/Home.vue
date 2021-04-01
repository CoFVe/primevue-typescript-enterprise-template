<template>
  <div class="app-container">
    <img alt="Vue logo" src="~@/assets/primevue-logo.png">
    <HelloWorld msg="Welcome to Your PrimeVue + TypeScript App" />
    <form>
      <InputText type="text" v-model="text"/>
      <Button type="submit" label="Submit"/>
    </form>
  </div>
</template>

<script lang="ts" src="./Home.ts"></script>
<style lang="scss" scoped src="./home.scss"></style>
