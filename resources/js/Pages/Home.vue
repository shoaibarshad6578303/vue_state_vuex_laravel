<template>
<div>
<h1>This is a counter</h1>
<p>{{ count }}</p>
<button
@click="increaseCounter">
Increase counter
</button>
</div>
</template>
<script>
import { mapGetter, mapActions } from 'vuex'
export default {
name: 'home',
data() {
return {
count: 0,
};
},
computed: {
...mapGetter(['getCount'])
},
created() {
this.count = this.getCount;
},
methods: {
...mapActions(['incrementCount']),
increaseCounter() {
this.incrementCount(1);
this.count = this.getCount;
},
}
}
</script>

