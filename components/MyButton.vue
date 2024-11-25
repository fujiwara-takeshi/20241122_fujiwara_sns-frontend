<template>
    <button @click="$emit('click')" :disabled="disabled"><slot /></button>
</template>

<script>
export default {
    props: {
        disabled: {
            type: Boolean,
            default: false,
        },
    }
}
</script>

<style scoped>
button {
    width: 100px;
    padding: 8px 0;
    margin-top: 14px;
    font-size: 12px;
    color: #fff;
    background-color: #5419DA;
    border-radius: 26px;
    cursor: pointer;
}
</style>