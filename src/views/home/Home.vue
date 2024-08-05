<template>

    <div class="wrapper">
        <StaticPart />
        <Nearby />

    </div>
         <Docker :currentIndex="0"/>

</template>
<script>
import StaticPart from './StaticPart'
import Nearby from './Nearby'
import Docker from '../../components/Docker'
export default {
  name: 'Hemo',
  components: { StaticPart, Nearby, Docker }
}

</script>

    <style lang="scss" scoped>

    .wrapper {
      overflow-y: auto;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 5px;
      right: 0;
      padding: 0 18px 40px 18px;
    }

    </style>
