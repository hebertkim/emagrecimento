<template>
  <div class="bg-black text-white min-h-screen flex flex-col items-center justify-center">
    <div class="container max-w-lg px-5 py-10 text-center">
      <!-- Título e Subtítulo -->
      <h1 class="text-4xl font-bold text-orange-500 mb-5">
        Emagrecimento Saudável: Transforme Sua Vida
      </h1>
      <p class="text-lg mb-10">
        Baixe nosso eBook gratuito e junte-se ao grupo exclusivo no WhatsApp para dicas de
        emagrecimento saudável e suporte contínuo!
      </p>

      <!-- Formulário de Captura -->
      <form @submit.prevent="submitForm" class="bg-gray-800 p-5 rounded-lg shadow-lg">
        <div class="mb-4">
          <input
            type="text"
            placeholder="Seu Nome"
            v-model="name"
            class="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
          />
        </div>
        <div class="mb-4">
          <input
            type="email"
            placeholder="Seu Email"
            v-model="email"
            class="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
          />
        </div>
        <div class="mb-4">
          <input
            type="text"
            placeholder="Seu Telefone"
            v-model="phone"
            class="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          class="bg-orange-500 w-full py-2 rounded text-black font-bold hover:bg-orange-600 transition-colors duration-200"
        >
          Baixar eBook e Entrar no Grupo
        </button>
      </form>

      <!-- Benefícios e Call to Action -->
      <div class="mt-10 text-left">
        <h2 class="text-2xl font-semibold text-orange-500 mb-3">O que você vai ganhar:</h2>
        <ul class="list-disc list-inside text-gray-300 space-y-2">
          <li>Acesso a dicas exclusivas de emagrecimento saudável</li>
          <li>Participação em uma comunidade com suporte contínuo</li>
          <li>Promoções e conteúdos especiais disponíveis apenas no grupo</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      phone: '',
    };
  },
  methods: {
    submitForm() {
      // Criar uma mensagem interessante com ícones e emojis
      const message = `🌟 Olá! Meu nome é *${this.name}*.\n` +
                      `📧 Meu email é *${this.email}*.\n` +
                      `📞 Meu telefone é *${this.phone}*.\n\n` +
                      `📚 Gostaria de receber o *eBook gratuito* e entrar no grupo! 🔥\n` +
                      `💪 Vamos juntos na jornada do emagrecimento saudável!`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappNumber = '+5541996454466';
      const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      // Redirecionar para o WhatsApp
      window.open(whatsappLink, '_blank');

      // Redirecionar para o grupo após abrir o WhatsApp
      setTimeout(() => {
        window.open('https://chat.whatsapp.com/JIiiTgRc3mo2l7wZxJcgqb', '_blank');
      }, 2000); // Espera 2 segundos antes de abrir o grupo

      // Resetar os campos
      this.name = '';
      this.email = '';
      this.phone = '';
    },
  },
};
</script>

<style scoped>
/* Personalizações adicionais */
body {
  font-family: 'Arial', sans-serif;
}
</style>
