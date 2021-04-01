<template>
    <div id="app">
        <Panel header="Header">
            <template #icons>
                <button class="p-panel-header-icon p-link p-mr-2" @click="toggle">
                    <span class="pi pi-cog"></span>
                </button>
                <Menu id="config_menu" ref="menu" />
            </template>
            <div class="container-fluid">
                <router-view v-slot="{ Component }">
                    <transition>
                        <keep-alive>
                        <component :is="Component" />
                        </keep-alive>
                    </transition>
                </router-view>
            </div>
        </Panel>
    </div>
</template>

<script lang="ts" src="./App.ts"></script>
<style lang="scss" scoped src="./app.scss"></style>