<script setup>
import hero from "@/components/hero.vue";
import homeCard from "@/components/homeCard.vue";
import jobListing from "@/components/jobListing.vue";
</script>

<template>
  <hero />
  <homeCard />
  <jobListing :limit="3" :showButton="true" />
</template>