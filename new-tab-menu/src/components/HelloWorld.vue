<template>
  <div>
    <h1>Marcadores</h1>
    <p v-for="n in 10" :key="n">Marcador número {{ n }}</p>
  </div>
</template>
