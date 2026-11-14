// Dados iniciais do Catálogo da Sprint 1 (US01 e US02)
const baskets = [
    {
        id: 'economica',
        name: 'Cesta Econômica',
        badge: 'Mais Acessível',
        badgeColor: 'bg-blue-100 text-blue-700',
        price: 95.00,
        description: 'Contém os alimentos essenciais para o consumo básico diário.'
    },
    {
        id: 'essencial',
        name: 'Cesta Essencial',
        badge: 'Padrão Recomendado',
        badgeColor: 'bg-emerald-100 text-emerald-700',
        price: 165.00,
        description: 'Opção balanceada com itens de despensa reforçados.'
    },
    {
        id: 'familia',
        name: 'Cesta Família',
        badge: 'Para 4 Pessoas',
        badgeColor: 'bg-purple-100 text-purple-700',
        price: 245.00,
        description: 'Suprimento completo para o mês todo de uma família.'
    },
    {
        id: 'premium',
        name: 'Cesta Premium',
        badge: 'Variedade & Qualidade',
        badgeColor: 'bg-amber-100 text-amber-800',
        price: 320.00,
        description: 'Combina itens essenciais com produtos selecionados especiais.'
    }
];

// Função para renderizar os cards na tela (Sprint 1)
function renderSprint1Catalog() {
    const grid = document.getElementById('basketsGrid');
    grid.innerHTML = '';

    baskets.forEach(basket => {
        const card = document.createElement('div');
        card.className = "bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4";
        
        card.innerHTML = `
            <div class="space-y-2">
                <span class="text-[11px] font-bold px-2.5 py-1 rounded-md ${basket.badgeColor}">
                    ${basket.badge}
                </span>
                <h4 class="font-bold text-slate-900 text-lg">${basket.name}</h4>
                <p class="text-xs text-slate-500">${basket.description}</p>
            </div>
            <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                    <span class="text-[10px] text-slate-400 uppercase font-bold">Valor</span>
                    <div class="text-xl font-extrabold text-emerald-600">R$ ${basket.price.toFixed(2).replace('.', ',')}</div>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Inicialização da Sprint 1
document.addEventListener('DOMContentLoaded', () => {
    renderSprint1Catalog();
});