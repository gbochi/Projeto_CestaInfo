// Base de dados completa para suportar os filtros da Sprint 2 (US03)
const baskets = [
    {
        id: 'economica',
        name: 'Cesta Econômica',
        category: 'economica',
        badge: 'Mais Acessível',
        badgeColor: 'bg-blue-100 text-blue-700',
        price: 95.00,
        description: 'Contém os alimentos essenciais para o consumo básico diário.',
        items: [
            { name: 'Arroz Agulhinha Tipo 1', qty: '5 kg' },
            { name: 'Feijão Carioca', qty: '2 kg' },
            { name: 'Açúcar Refinado', qty: '2 kg' },
            { name: 'Óleo de Soja', qty: '900 ml' }
        ]
    },
    {
        id: 'essencial',
        name: 'Cesta Essencial',
        category: 'essencial',
        badge: 'Padrão Recomendado',
        badgeColor: 'bg-emerald-100 text-emerald-700',
        price: 165.00,
        description: 'Opção balanceada com itens de despensa reforçados.',
        items: [
            { name: 'Arroz Agulhinha Tipo 1', qty: '5 kg' },
            { name: 'Feijão Carioca', qty: '3 kg' },
            { name: 'Café Tradicional', qty: '500 g' },
            { name: 'Farinha de Trigo', qty: '2 kg' }
        ]
    },
    {
        id: 'familia',
        name: 'Cesta Família',
        category: 'familia',
        badge: 'Para 4 Pessoas',
        badgeColor: 'bg-purple-100 text-purple-700',
        price: 245.00,
        description: 'Suprimento completo para o mês todo de uma família.',
        items: [
            { name: 'Arroz Agulhinha Tipo 1', qty: '10 kg' },
            { name: 'Feijão Carioca', qty: '5 kg' },
            { name: 'Leite UHT Integral', qty: '6 litros' },
            { name: 'Café Moído', qty: '1 kg' }
        ]
    },
    {
        id: 'premium',
        name: 'Cesta Premium',
        category: 'premium',
        badge: 'Variedade & Qualidade',
        badgeColor: 'bg-amber-100 text-amber-800',
        price: 320.00,
        description: 'Combina itens essenciais com produtos selecionados especiais.',
        items: [
            { name: 'Arroz Integral / Tipo 1', qty: '5 kg' },
            { name: 'Azeite de Oliva Extra Virgem', qty: '500 ml' },
            { name: 'Café Gourmet Moído', qty: '500 g' },
            { name: 'Mel Natural', qty: '250 g' }
        ]
    }
];

// Formatador de Moeda BRL
const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
};

// Função para renderizar os cards na tela
function renderBaskets(filteredList) {
    const grid = document.getElementById('basketsGrid');
    const emptyState = document.getElementById('emptyState');
    const countLabel = document.getElementById('basketCount');

    grid.innerHTML = '';
    countLabel.textContent = `${filteredList.length} ${filteredList.length === 1 ? 'opção encontrada' : 'opções encontradas'}`;

    if (filteredList.length === 0) {
        emptyState.classList.remove('hidden');
        return;
    } else {
        emptyState.classList.add('hidden');
    }

    filteredList.forEach(basket => {
        const card = document.createElement('div');
        card.className = "bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4";
        
        card.innerHTML = `
            <div class="space-y-2">
                <span class="text-[11px] font-bold px-2.5 py-1 rounded-md ${basket.badgeColor}">
                    ${basket.badge}
                </span>
                <h4 class="font-bold text-slate-900 text-lg">${basket.name}</h4>
                <p class="text-xs text-slate-500">${basket.description}</p>
                <div class="pt-2 text-xs text-slate-600">
                    <span class="font-semibold text-slate-400 block mb-1">Itens inclusos:</span>
                    <p class="truncate">• ${basket.items[0].name}, ${basket.items[1].name}...</p>
                </div>
            </div>
            <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                    <span class="text-[10px] text-slate-400 uppercase font-bold">Valor</span>
                    <div class="text-xl font-extrabold text-emerald-600">${formatCurrency(basket.price)}</div>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Lógica de Filtragem Dinâmica (US03)
function filterBaskets() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;
    const maxPrice = parseFloat(document.getElementById('priceFilter').value);

    const filtered = baskets.filter(basket => {
        const matchesPrice = basket.price <= maxPrice;
        const matchesCategory = (category === 'todos' || basket.category === category);
        const matchesSearch = basket.name.toLowerCase().includes(searchTerm) || 
                              basket.items.some(item => item.name.toLowerCase().includes(searchTerm));

        return matchesPrice && matchesCategory && matchesSearch;
    });

    renderBaskets(filtered);
}

// Inicialização dos Event Listeners para Busca em Tempo Real
document.addEventListener('DOMContentLoaded', () => {
    renderBaskets(baskets);

    document.getElementById('searchInput').addEventListener('input', filterBaskets);
    document.getElementById('categoryFilter').addEventListener('change', filterBaskets);
    
    const priceFilter = document.getElementById('priceFilter');
    priceFilter.addEventListener('input', (e) => {
        document.getElementById('priceValue').textContent = formatCurrency(e.target.value);
        filterBaskets();
    });
});