<script setup>
import { ref } from 'vue';

const op = ref(false);

const toggleMenu = () => {
    op.value = !op.value;
}

const apps = ref([
    { name: 'Google' },
    { name: 'Gmail' },
    { name: 'Drive' }
]);
</script>

<template>
    <div class="m-auto p-3 d-flex align-items-center justify-content-between" style="width: 95%;">
        <h3>Marcadores</h3>
        <span @click="toggleMenu" class="menu d-flex justify-content-center align-items-center">
            <i class="bi bi-three-dots m-auto"></i>
        </span>
        <!-- Muestra el contenido condicionado por op -->
        <div v-if="op" class="popover-content">
            <h4>Google Apps</h4>
            <div v-for="app in apps">
                <li>{{ app.name }}</li>
            </div>
        </div>
    </div>
</template>

<style scoped>
.menu {
    border-radius: 50%;
    width: 32px;
    height: 32px;
}

.menu:hover {
    background-color: rgb(202, 202, 202);
}

.popover-content {
    position: absolute;
    right: 32px;
    top: 64px;

    min-height: 128px;

    background-color: white;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
