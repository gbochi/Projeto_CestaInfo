// Dados das 4 Cestas Básicas
const baskets = [
    {
        id: 'economica',
        name: 'Cesta Econômica',
        category: 'economica',
        badge: 'Mais Acessível',
        badgeColor: 'bg-blue-100 text-blue-700',
        price: 95.00,
        icon: 'fa-basket-shopping',
        description: 'Ideal para atendimento emergencial e orçamentos reduzidos, contendo os alimentos essenciais para a alimentação diária.',
        nutritionalInfo: 'Fornece carboidratos de absorção rápida e proteínas básicas. Estimativa média de 1.800 kcal/dia por pessoa para uma família pequena.',
        items: [
            { name: 'Arroz Agulhinha Tipo 1', qty: '5 kg' },
            { name: 'Feijão Carioca', qty: '2 kg' },
            { name: 'Açúcar Refinado', qty: '2 kg' },
            { name: 'Óleo de Soja', qty: '900 ml' },
            { name: 'Sal Refinado', qty: '1 kg' },
            { name: 'Macarrón Espaguete', qty: '1 kg' },
            { name: 'Café Moído', qty: '250 g' }
        ]
    },
    {
        id: 'essencial',
        name: 'Cesta Essencial',
        category: 'essencial',
        badge: 'Padrão Recomendado',
        badgeColor: 'bg-emerald-100 text-emerald-700',
        price: 165.00,
        icon: 'fa-wheat-awn',
        description: 'Cobre as necessidades nutricionais básicas de uma pessoa ou casal durante o mês, com itens balanceados de despensa.',
        nutritionalInfo: 'Balanceada em carboidratos complexos, proteínas vegetais e gorduras boas. Média estimada de 2.200 kcal/dia.',
        items: [
            { name: 'Arroz Agulhinha Tipo 1', qty: '5 kg' },
            { name: 'Feijão Carioca', qty: '3 kg' },
            { name: 'Açúcar Refinado', qty: '3 kg' },
            { name: 'Óleo de Soja', qty: '2 frascos (1.8L)' },
            { name: 'Café Tradicional', qty: '500 g' },
            { name: 'Farinha de Trigo', qty: '2 kg' },
            { name: 'Farinha de Mandioca', qty: '1 kg' },
            { name: 'Macarrão Espaguete', qty: '1 kg' },
            { name: 'Molho de Tomate', qty: '3 sachês' },
            { name: 'Leite em Pó', qty: '400 g' }
        ]
    },
    {
        id: 'familia',
        name: 'Cesta Família',
        category: 'familia',
        badge: 'Completa para 4 Pessoas',
        badgeColor: 'bg-purple-100 text-purple-700',
        price: 245.00,
        icon: 'fa-people-roof',
        description: 'Desenvolvida para suprir o consumo mensal de uma família de 4 pessoas com variedade e maiores quantidades.',
        nutritionalInfo: 'Rica em fibras, minerais e proteínas reforçadas com adição de matinais e achocolatado.',
        items: [
            { name: 'Arroz Agulhinha Tipo 1', qty: '10 kg' },
            { name: 'Feijão Carioca', qty: '5 kg' },
            { name: 'Açúcar Refinado', qty: '5 kg' },
            { name: 'Óleo de Soja', qty: '3 frascos (2.7L)' },
            { name: 'Café Moído', qty: '1 kg' },
            { name: 'Farinha de Trigo', qty: '3 kg' },
            { name: 'Macarrão Diversos', qty: '2 kg' },
            { name: 'Molho de Tomate', qty: '5 sachês' },
            { name: 'Leite UHT Integral', qty: '6 litros' },
            { name: 'Achocolatado em Pó', qty: '400 g' },
            { name: 'Biscoito Cream Cracker', qty: '3 pacotes' },
            { name: 'Milho em Conserva', qty: '2 latas' }
        ]
    },
    {
        id: 'premium',
        name: 'Cesta Premium & Hortifrúti',
        category: 'premium',
        badge: 'Nutrição & Variedade',
        badgeColor: 'bg-amber-100 text-amber-800',
        price: 320.00,
        icon: 'fa-carrot',
        description: 'Combina os itens secos essenciais com produtos de hortifrúti de alta durabilidade e itens de higiene básica.',
        nutritionalInfo: 'Alto teor de vitaminas (A, C), minerais e fibras devido à inclusão de legumes e hortifrúti frescos.',
        items: [
            { name: 'Arroz Integral / Tipo 1', qty: '5 kg' },
            { name: 'Feijão Preto / Carioca', qty: '4 kg' },
            { name: 'Azeite de Oliva Extra Virgem', qty: '500 ml' },
            { name: 'Café Gourmet Moído', qty: '500 g' },
            { name: 'Batata Inglesa', qty: '3 kg' },
            { name: 'Cebola', qty: '2 kg' },
            { name: 'Alho', qty: '500 g' },
            { name: 'Cenoura fresca', qty: '1.5 kg' },
            { name: 'Banana Prata', qty: '2 dúzias' },
            { name: 'Aveia em Flocos', qty: '500 g' },
            { name: 'Mel Natural', qty: '250 g' }
        ]
    }
];

// Estado do Simulador de Quantidades
const quantities = {
    economica: 0,
    essencial: 1,
    familia: 0,
    premium: 0
};

// Formatador para Moeda BRL
const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
};

// Renderizar Cards de Cesta na Tela
function renderBaskets(filteredList) {
    const grid = document.getElementById('basketsGrid');
    const emptyState = document.getElementById('emptyState');
    const countLabel = document.getElementById('basketCount');

    grid.innerHTML = '';

    countLabel.textContent = `${filteredList.length} ${
        filteredList.length === 1
            ? 'opção encontrada'
            : 'opções encontradas'
    }`;

    if (filteredList.length === 0) {
        emptyState.classList.remove('hidden');
        return;
    } else {
        emptyState.classList.add('hidden');
    }

    filteredList.forEach(basket => {
        const card = document.createElement('div');

        card.className = "bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-4";

        // Exibe primeiros 4 itens na prévia
        const previewItems = basket.items.slice(0, 4);
        const remainingCount = basket.items.length - 4;

        card.innerHTML = `
            <div class="space-y-3">
                <div class="flex items-start justify-between">
                    <span class="text-[11px] font-bold px-2.5 py-1 rounded-md ${basket.badgeColor}">
                        ${basket.badge}
                    </span>
                    <i class="fa-solid ${basket.icon} text-slate-400 text-lg"></i>
                </div>

                <div>
                    <h4 class="font-bold text-slate-900 text-lg">${basket.name}</h4>
                    <p class="text-xs text-slate-500 line-clamp-2 mt-1">${basket.description}</p>
                </div>

                <div class="pt-2">
                    <span class="text-xs text-slate-400 block font-medium">Conteúdo principal:</span>
                    <ul class="text-xs text-slate-600 mt-1.5 space-y-1">
                        ${previewItems.map(item => `
                            <li class="flex items-center justify-between">
                                <span class="truncate pr-2">• ${item.name}</span>
                                <span class="font-semibold text-slate-700">${item.qty}</span>
                            </li>
                        `).join('')}

                        ${remainingCount > 0 ? `
                            <li class="text-emerald-600 font-medium text-[11px] pt-1">
                                + ${remainingCount} outros itens...
                            </li>
                        ` : ''}
                    </ul>
                </div>
            </div>

            <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                    <span class="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Valor Total</span>
                    <div class="text-xl font-extrabold text-emerald-600">
                        ${formatCurrency(basket.price)}
                    </div>
                </div>

                <button onclick="openModal('${basket.id}')" class="bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 p-2.5 rounded-xl font-semibold text-xs transition flex items-center gap-1">
                    <span>Detalhes</span>
                    <i class="fa-solid fa-chevron-right text-[10px]"></i>
                </button>
            </div>
        `;

        grid.appendChild(card);
    });
}

// Filtrar Cestas por Busca, Categoria e Preço Máximo
function filterBaskets() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;
    const maxPrice = parseFloat(document.getElementById('priceFilter').value);

    const filtered = baskets.filter(basket => {

        // Filtro por preço
        const matchesPrice = basket.price <= maxPrice;

        // Filtro por categoria
        const matchesCategory =
            category === 'todos' || basket.category === category;

        // Filtro por termo digitado
        const matchesSearch =
            basket.name.toLowerCase().includes(searchTerm) ||
            basket.items.some(item =>
                item.name.toLowerCase().includes(searchTerm)
            );

        return matchesPrice && matchesCategory && matchesSearch;
    });

    renderBaskets(filtered);
}

// Renderizar Itens da Calculadora
function renderCalculator() {
    const container = document.getElementById('calculatorItems');

    container.innerHTML = '';

    baskets.forEach(basket => {
        const itemRow = document.createElement('div');

        itemRow.className = "bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between gap-4";

        itemRow.innerHTML = `
            <div>
                <h5 class="font-bold text-white text-sm">${basket.name}</h5>
                <span class="text-xs text-emerald-400 font-medium">
                    ${formatCurrency(basket.price)} un.
                </span>
            </div>

            <div class="flex items-center gap-3">
                <button onclick="updateQuantity('${basket.id}', -1)" class="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold flex items-center justify-center transition">
                    -
                </button>

                <span class="font-bold text-white w-6 text-center text-sm">
                    ${quantities[basket.id]}
                </span>

                <button onclick="updateQuantity('${basket.id}', 1)" class="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold flex items-center justify-center transition">
                    +
                </button>
            </div>
        `;

        container.appendChild(itemRow);
    });

    calculateTotal();
}

// Atualizar Quantidade no Simulador
function updateQuantity(basketId, delta) {
    const current = quantities[basketId] || 0;
    const updated = Math.max(0, current + delta);

    quantities[basketId] = updated;

    renderCalculator();
}

// Calcular Total Geral da Simulação
function calculateTotal() {
    let grandTotal = 0;

    const simulatedList = document.getElementById('simulatedList');

    simulatedList.innerHTML = '';

    let hasItems = false;

    baskets.forEach(basket => {
        const qty = quantities[basket.id];

        if (qty > 0) {
            hasItems = true;

            const subtotal = basket.price * qty;

            grandTotal += subtotal;

            const row = document.createElement('div');

            row.className = "pt-2 flex justify-between items-center";

            row.innerHTML = `
                <span>${qty}x ${basket.name}</span>
                <span class="font-semibold text-white">
                    ${formatCurrency(subtotal)}
                </span>
            `;

            simulatedList.appendChild(row);
        }
    });

    if (!hasItems) {
        simulatedList.innerHTML = `
            <p class="text-xs text-slate-400 py-2">
                Nenhuma cesta selecionada na simulação.
            </p>
        `;
    }

    document.getElementById('grandTotal').textContent =
        formatCurrency(grandTotal);
}

// Abrir Modal com Detalhes da Cesta
function openModal(basketId) {
    const basket = baskets.find(b => b.id === basketId);

    if (!basket) return;

    document.getElementById('modalTitle').textContent = basket.name;
    document.getElementById('modalCategory').textContent = basket.badge;
    document.getElementById('modalDescription').textContent = basket.description;
    document.getElementById('modalNutritional').textContent = basket.nutritionalInfo;
    document.getElementById('modalPrice').textContent = formatCurrency(basket.price);

    const iconContainer = document.getElementById('modalIcon');

    iconContainer.innerHTML = `<i class="fa-solid ${basket.icon}"></i>`;

    const itemList = document.getElementById('modalItemList');

    itemList.innerHTML = basket.items.map(item => `
        <li class="py-2 flex items-center justify-between text-xs sm:text-sm">
            <span class="text-slate-700 font-medium">${item.name}</span>
            <span class="text-slate-500 font-semibold bg-white px-2 py-0.5 rounded border border-slate-200">
                ${item.qty}
            </span>
        </li>
    `).join('');

    document.getElementById('detailsModal').classList.remove('hidden');
}

// Fechar Modal
function closeModal() {
    document.getElementById('detailsModal').classList.add('hidden');
}

// Event Listeners e Inicialização
document.addEventListener('DOMContentLoaded', () => {

    // Render Inicial
    renderBaskets(baskets);
    renderCalculator();

    // Eventos de Busca e Filtro
    document.getElementById('searchInput')
        .addEventListener('input', filterBaskets);

    document.getElementById('categoryFilter')
        .addEventListener('change', filterBaskets);

    const priceFilter = document.getElementById('priceFilter');

    priceFilter.addEventListener('input', (e) => {

        document.getElementById('priceValue').textContent =
            formatCurrency(e.target.value);

        filterBaskets();
    });

    // Fechar modal ao clicar fora do conteúdo
    document.getElementById('detailsModal')
        .addEventListener('click', (e) => {

            if (e.target.id === 'detailsModal') {
                closeModal();
            }
        });
});