<template>
  <div>
  <p>
    Server status: {{ status }}
  </p>

  <hr>

  <button @click="changeStatus">
    Change Status
  </button>
  </div>
</template>

<script>
export default {
  data: () => ({
    status: 'normal',
  }),

  methods: {
    changeStatus
  },
}

// Methods
function changeStatus() {
  this.status = this.status == 'normal' ? 'critical' : 'normal'
}
</script>
