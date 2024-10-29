<template>
    <section id="capture-form" class="py-12 text-center">
      <h2 class="text-3xl font-bold">Baixe Seu eBook Grátis Agora</h2>
      <form @submit.prevent="submitForm" class="mt-4">
        <input type="text" v-model="name" placeholder="Nome" required class="border p-2 rounded mr-2" />
        <input type="email" v-model="email" placeholder="E-mail" required class="border p-2 rounded mr-2" />
        <button type="submit" class="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">Enviar</button>
      </form>
      <p v-if="successMessage" class="mt-4 text-green-500">{{ successMessage }}</p>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        successMessage: ''
      };
    },
    methods: {
      submitForm() {
        // Integre com seu serviço de e-mail aqui
        this.successMessage = "Obrigado por baixar! O link do eBook está a caminho do seu e-mail.";
        this.name = '';
        this.email = '';
      }
    }
  };
  </script>
  