<template>
  <div class="box">
    <t-head-menu defaultValue="1-1" :defaultExpanded="expanded">
      <template #logo>
        <img width="136"  src="https://www.tencent.com/img/index/menu_logo_hover.png" alt="logo">
      </template>
      <t-submenu value="1">
        <template #title>
          <span>菜单1</span>
        </template>
        <t-menu-item value="1-1">子菜单1-1</t-menu-item>
        <t-menu-item value="1-2">子菜单1-2</t-menu-item>
        <t-menu-item value="1-3">子菜单1-3</t-menu-item>
      </t-submenu>
      <t-submenu value="2">
        <template #title>
          <span>菜单2</span>
        </template>
        <t-menu-item value="2-1">子菜单2-1</t-menu-item>
        <t-menu-item value="2-2">子菜单2-2</t-menu-item>
        <t-menu-item value="2-3">子菜单2-3</t-menu-item>
      </t-submenu>
      <template #operations>
        <a href="javascript:;"><icon class="t-menu__operations-icon" name="search"/></a>
        <a href="javascript:;"><icon class="t-menu__operations-icon" name="mail"/></a>
        <a href="javascript:;"><icon class="t-menu__operations-icon" name="user"/></a>
        <a href="javascript:;"><icon class="t-menu__operations-icon" name="ellipsis"/></a>
      </template>
    </t-head-menu>
    <t-head-menu defaultValue="1-1" theme="dark" :expanded="expanded2" @expand="expanded2 = $event"  style="margin-top: 24px">
      <template #logo>
        <img width="136"  src="https://www.tencent.com/img/index/menu_logo.png" alt="logo">
      </template>
      <t-submenu value="1">
        <template #title>
          <span>菜单1</span>
        </template>
        <t-menu-item value="1-1">子菜单1-1</t-menu-item>
        <t-menu-item value="1-2">子菜单1-2</t-menu-item>
        <t-menu-item value="1-3">子菜单1-3</t-menu-item>
      </t-submenu>
      <t-submenu value="2">
        <template #title>
          <span>菜单2</span>
        </template>
        <t-menu-item value="2-1">子菜单2-1</t-menu-item>
        <t-menu-item value="2-2">子菜单2-2</t-menu-item>
        <t-menu-item value="2-3">子菜单2-3</t-menu-item>
      </t-submenu>
      <template #operations>
        <a href="javascript:;"><icon class="t-menu__operations-icon" name="search"/></a>
        <a href="javascript:;"><icon class="t-menu__operations-icon" name="mail"/></a>
        <a href="javascript:;"><icon class="t-menu__operations-icon" name="user"/></a>
        <a href="javascript:;"><icon class="t-menu__operations-icon" name="ellipsis"/></a>
      </template>
    </t-head-menu>
  </div>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'tdesign-icons-vue';

export default Vue.extend({
  components: {
    Icon,
  },
  data() {
    return {
      expanded: ['1'],
      expanded2: ['1'],
    };
  },
});
</script>
