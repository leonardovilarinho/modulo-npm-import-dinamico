<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('mymodule')

export default {
  computed: {
    ...mapGetters(['getEveryone'])
  }
}
</script>