// app.js - 3D Force Graph Başlatma ve Etkileşimler (Gerçekçi Galaksi Teması)

// 1. Procedural Parlayan Yıldız Dokusu (Texture) Oluşturma
function createStarTexture(color, size = 64) {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const context = canvas.getContext('2d');
    
    const center = size / 2;
    const gradient = context.createRadialGradient(center, center, 0, center, center, center);
    
    // Merkez parlak beyaz, dışa doğru renklenip şeffaflaşıyor
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.2, color);
    gradient.addColorStop(0.6, color.replace(')', ', 0.2)').replace('rgb', 'rgba'));
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    
    context.fillStyle = gradient;
    context.fillRect(0, 0, size, size);
    
    const texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;
    return texture;
}

// Renk paleti - Galaksiye uygun derin ve parlak renkler
const phaseColors = {
    1: 'rgb(0, 150, 255)',    // Derin Mavi/Cyan
    2: 'rgb(120, 0, 255)',    // Mor
    3: 'rgb(255, 0, 150)',    // Pembe/Magenta
    4: 'rgb(0, 255, 200)',    // Turkuaz
    5: 'rgb(180, 100, 255)',  // Açık Mor
    6: 'rgb(255, 200, 255)',  // Parlak Beyaz/Pembe (Yaklaşan)
    7: 'rgb(100, 120, 150)'   // Soluk Gri/Mavi (Uydu)
};

const starTextures = {};
for (const [phase, color] of Object.entries(phaseColors)) {
    starTextures[phase] = createStarTexture(color, 128);
}

// 2. Grafiği Başlatma
const Graph = ForceGraph3D()
    (document.getElementById('3d-graph'))
        .graphData(mcuData)
        .backgroundColor('#020205') // Çok koyu lacivert/siyah uzay boşluğu
        .nodeLabel('id')
        
        // --- GERÇEKÇİ YILDIZ DÜĞÜMLERİ VE İSİMLER ---
        .nodeThreeObject(node => {
            const group = new THREE.Group();

            // 1. Parlayan Yıldız
            const material = new THREE.SpriteMaterial({
                map: starTextures[node.group] || starTextures[1],
                color: 0xffffff,
                blending: THREE.AdditiveBlending, // Işıkların birleşip parlaması için
                transparent: true,
                depthWrite: false
            });
            const sprite = new THREE.Sprite(material);
            // Bağlantı sayısına göre boyut (Merkezler çok büyük, diğerleri küçük)
            const scale = (node.val * 2) + 10; 
            sprite.scale.set(scale, scale, 1);
            group.add(sprite);

            // 2. Yapım İsmi (Etiket)
            const spriteText = new SpriteText(node.id);
            spriteText.color = 'rgba(255, 255, 255, 0.9)';
            spriteText.textHeight = Math.max(3, node.val / 2); // Önemli filmlerin yazısı daha büyük
            spriteText.fontFace = 'Inter';
            spriteText.fontWeight = '600';
            spriteText.position.y = - (scale / 4) - 4; // Yıldızın hemen altında durması için ayarlandı
            group.add(spriteText);

            return group;
        })
        
        // --- SİNAPSLAR / BAĞLANTILAR ---
        .linkColor(link => {
            // Sinapsları daha belirgin hale getiriyoruz (opaklık arttırıldı)
            switch(link.type) {
                case 'direct': return 'rgba(150, 200, 255, 0.6)'; // Açık mavi, çok daha belirgin
                case 'crossover': return 'rgba(200, 100, 255, 0.45)'; // Mor
                case 'event': return 'rgba(100, 255, 255, 0.35)'; // Cyan
                case 'postcredit': return 'rgba(255, 100, 200, 0.45)'; // Pembe
                default: return 'rgba(255,255,255,0.2)';
            }
        })
        .linkWidth(link => link.type === 'direct' ? 3.0 : (link.type === 'crossover' ? 1.5 : 1.0))
        .linkResolution(12) // Daha yumuşak çizgiler
        .linkDirectionalParticles(link => link.type === 'direct' ? 3 : (link.type === 'postcredit' ? 2 : 1))
        .linkDirectionalParticleSpeed(0.003)
        .linkDirectionalParticleWidth(link => link.type === 'direct' ? 2.5 : 1.8)
        .linkDirectionalParticleColor(() => 'rgba(255, 255, 255, 0.9)')
        
        // Tıklama etkileşimi
        .onNodeClick(node => {
            const distance = 100;
            const distRatio = 1 + distance/Math.hypot(node.x, node.y, node.z);
            Graph.cameraPosition(
                { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, 
                node, 
                2000
            );
            showNodeInfo(node);
        })
        .linkLabel(() => '') // Boş link tooltip'lerini (siyah kutu) engelle
        .nodeLabel(node => {
            // İlgili bağlantıları bul
            const relatedLinks = mcuData.links.filter(l => l.source.id === node.id || l.target.id === node.id);
            const previewLinks = relatedLinks.slice(0, 2); // Sadece 2 tanesini göster
            
            let tooltipHTML = `<div class="custom-tooltip">
                <strong style="font-size: 1.1em; color: #fff;">${node.id}</strong><br/>`;
            
            previewLinks.forEach(l => {
                const isSource = l.source.id === node.id;
                const otherNode = isSource ? l.target.id : l.source.id;
                const direction = isSource ? "Giden" : "Gelen";
                
                let timecodeHTML = "";
                if (l.timecodes) {
                    const sourceTime = l.timecodes.sourceTime;
                    const targetTime = l.timecodes.targetTime;
                    if (isSource) {
                        timecodeHTML = `<div class="timecodes-container">
                            <span class="timecode-badge">${sourceTime}</span> 
                            <span class="timecode-arrow">➔</span> 
                            <span class="timecode-badge">${targetTime}</span>
                        </div>`;
                    } else {
                        timecodeHTML = `<div class="timecodes-container">
                            <span class="timecode-badge">${targetTime}</span> 
                            <span class="timecode-arrow">➔</span> 
                            <span class="timecode-badge">${sourceTime}</span>
                        </div>`;
                    }
                } else {
                    timecodeHTML = `<div class="timecodes-container">
                        <span class="timecode-badge" style="background:rgba(100,100,100,0.2); color:#aaa; border-color:rgba(100,100,100,0.4);">Zaman Kodu Yok</span>
                    </div>`;
                }

                tooltipHTML += `<div style="font-size:12px; margin-top:8px; line-height: 1.4; color: #ddd; white-space: normal;">
                    <strong style="color:#aaa;">${direction} (${otherNode}):</strong> ${l.description || 'Bağlantı'}
                    ${timecodeHTML}
                </div>`;
            });

            if(relatedLinks.length > 2) {
                tooltipHTML += `<div style="font-size:11px; color:#888; margin-top:8px; font-style:italic;">+${relatedLinks.length - 2} bağlantı daha (Tamamı için yıldıza tıklayın)</div>`;
            }
            tooltipHTML += `</div>`;
            return tooltipHTML;
        });

// Düğümleri Z ekseninde (dikine) sıkıştırarak disk şeklinde bir galaksi görünümü veriyoruz
// (d3 kütüphanesi yüklenmediği için forceZ yerine var olan charge ve link force'larına güveneceğiz)
// Graph.d3Force('z', d3.forceZ().strength(0.1)); 
Graph.d3Force('charge').strength(-200); // Düğümler arası itme

// --- ARKA PLAN YILDIZLAR VE BULUTSULAR (NEBULA) ---
const scene = Graph.scene();

// Arka plan yıldızları (Nokta bulutu)
const starsGeometry = new THREE.BufferGeometry();
const starsCount = 3000;
const positions = new Float32Array(starsCount * 3);
const colors = new Float32Array(starsCount * 3);

for(let i = 0; i < starsCount * 3; i+=3) {
    // Uzaya rastgele yıldızlar dağıt (geniş bir küre içinde)
    const r = 1000 + Math.random() * 2000;
    const theta = 2 * Math.PI * Math.random();
    const phi = Math.acos(2 * Math.random() - 1);
    
    positions[i] = r * Math.sin(phi) * Math.cos(theta);
    positions[i+1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i+2] = r * Math.cos(phi);

    // Yıldız renkleri (beyaz, hafif mavi, hafif mor)
    const colorType = Math.random();
    if(colorType > 0.8) {
        colors[i] = 0.5; colors[i+1] = 0.5; colors[i+2] = 1.0; // Mavi
    } else if(colorType > 0.6) {
        colors[i] = 0.8; colors[i+1] = 0.5; colors[i+2] = 1.0; // Mor
    } else {
        colors[i] = 1.0; colors[i+1] = 1.0; colors[i+2] = 1.0; // Beyaz
    }
}

starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
starsGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

const starsMaterial = new THREE.PointsMaterial({
    size: 2,
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
    sizeAttenuation: true
});

const starField = new THREE.Points(starsGeometry, starsMaterial);
scene.add(starField);

// Nebula (Bulutsu) Efekti - Arka planda devasa yumuşak parlamalar
function createNebula() {
    const nebulaTexture = createStarTexture('rgb(100, 20, 150)', 256); // Koyu mor nebula
    const nebulaTexture2 = createStarTexture('rgb(20, 50, 150)', 256); // Koyu mavi nebula

    for(let i=0; i<15; i++) {
        const material = new THREE.SpriteMaterial({
            map: Math.random() > 0.5 ? nebulaTexture : nebulaTexture2,
            color: 0xffffff,
            transparent: true,
            opacity: 0.15, // Çok saydam
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        const sprite = new THREE.Sprite(material);
        
        // Merkeze yakın geniş alanlar
        sprite.position.set(
            (Math.random() - 0.5) * 800,
            (Math.random() - 0.5) * 400,
            (Math.random() - 0.5) * 800
        );
        const size = 500 + Math.random() * 1000;
        sprite.scale.set(size, size, 1);
        scene.add(sprite);
    }
}
createNebula();

// Kamera başlangıç pozisyonu
setTimeout(() => {
    // Galaksiye hafif üstten açılı bir bakış
    Graph.cameraPosition({ x: 0, y: 300, z: 800 });
}, 100);

// --- UI ETKİLEŞİMLERİ ---
const nodeInfoPanel = document.getElementById('node-info');

// Lejant Aç/Kapa Mantığı
const legendPanel = document.getElementById('legend-panel');
const legendToggleBtn = document.getElementById('legend-toggle-btn');
const legendCloseBtn = document.getElementById('legend-close-btn');

legendToggleBtn.addEventListener('click', () => {
    legendPanel.classList.add('active');
    legendToggleBtn.style.display = 'none';
});

legendCloseBtn.addEventListener('click', () => {
    legendPanel.classList.remove('active');
    legendToggleBtn.style.display = 'flex';
});

function showNodeInfo(node) {
    nodeInfoPanel.classList.remove('hidden');
    
    let phaseText = "";
    switch(node.group) {
        case 1: phaseText = "FAZ 1"; break;
        case 2: phaseText = "FAZ 2"; break;
        case 3: phaseText = "FAZ 3"; break;
        case 4: phaseText = "FAZ 4"; break;
        case 5: phaseText = "FAZ 5"; break;
        case 6: phaseText = "YAKLAŞAN"; break;
        case 7: phaseText = "MİRAS / UYDU"; break;
    }

    const typeText = node.type === "movie" ? "Film" : "Dizi";
    const colorStr = phaseColors[node.group] || phaseColors[1];

    // Bu düğümün tüm bağlantılarını bul
    const relatedLinks = mcuData.links.filter(l => l.source.id === node.id || l.target.id === node.id);
    let connectionsHTML = "";
    
    if(relatedLinks.length > 0) {
        connectionsHTML = `<h4 class="connections-title">SİNAPSLAR (${relatedLinks.length})</h4><div class="connections-list">`;
        relatedLinks.forEach(l => {
            const isSource = l.source.id === node.id;
            const otherNode = isSource ? l.target.id : l.source.id;
            const icon = isSource ? '→' : '←';
            const colorClass = `type-${l.type}`; // CSS için (type-direct, type-event vb.)
            
            let timecodeHTML = "";
            if (l.timecodes) {
                const sourceTime = l.timecodes.sourceTime;
                const targetTime = l.timecodes.targetTime;
                if (isSource) {
                    timecodeHTML = `<div class="timecodes-container" style="margin-top: 8px;">
                        <span class="timecode-badge">${sourceTime}</span> 
                        <span class="timecode-arrow">➔</span> 
                        <span class="timecode-badge">${targetTime}</span>
                    </div>`;
                } else {
                    timecodeHTML = `<div class="timecodes-container" style="margin-top: 8px;">
                        <span class="timecode-badge">${targetTime}</span> 
                        <span class="timecode-arrow">➔</span> 
                        <span class="timecode-badge">${sourceTime}</span>
                    </div>`;
                }
            } else {
                timecodeHTML = `<div class="timecodes-container" style="margin-top: 8px;">
                    <span class="timecode-badge" style="background:rgba(100,100,100,0.2); color:#aaa; border-color:rgba(100,100,100,0.4);">Zaman Kodu Yok</span>
                </div>`;
            }

            connectionsHTML += `
                <div class="connection-item">
                    <div class="connection-header">
                        <span class="connection-icon ${colorClass}">${icon}</span>
                        <strong>${otherNode}</strong>
                    </div>
                    <div class="connection-desc">${l.description || 'Bilinmeyen bağlantı.'}</div>
                    ${timecodeHTML}
                </div>
            `;
        });
        connectionsHTML += `</div>`;
    }

    nodeInfoPanel.innerHTML = `
        <button id="info-close-btn" class="close-btn" style="z-index: 10; color: #fff; text-shadow: 0 2px 4px rgba(0,0,0,0.8); background: rgba(0,0,0,0.5); border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; right: 10px; top: 10px;">&times;</button>
        <div class="node-cover-container">
            <img src="${node.img || 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg'}" alt="${node.id}" class="node-cover">
        </div>
        <h2>${node.id}</h2>
        <span class="phase-badge" style="background-color: ${colorStr.replace('rgb', 'rgba').replace(')', ', 0.2)')}; color: ${colorStr.replace('rgb', 'rgba').replace(')', ', 1)')}; border: 1px solid ${colorStr.replace('rgb', 'rgba').replace(')', ', 0.5)')};">
            ${phaseText} - ${typeText}
        </span>
        ${connectionsHTML}
    `;

    // Kapatma butonuna tıklama olayı
    const infoCloseBtn = document.getElementById('info-close-btn');
    if (infoCloseBtn) {
        infoCloseBtn.addEventListener('click', () => {
            nodeInfoPanel.classList.add('hidden');
        });
    }
}

document.getElementById('ui-layer').addEventListener('click', (e) => {
    if(e.target.id === 'ui-layer') {
        nodeInfoPanel.classList.add('hidden');
    }
});

// Yavaşça dönen bir galaksi animasyonu
let angle = 0;
setInterval(() => {
    // Kamera galaksinin etrafında çok yavaş döner (kullanıcı müdahale edebilir)
    // Graph.cameraPosition({
    //     x: 800 * Math.sin(angle),
    //     z: 800 * Math.cos(angle)
    // });
    // angle += Math.PI / 5000;
}, 50);

// --- ARAMA İŞLEVİ (SEARCH) ---
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const searchResults = document.getElementById('search-results');

function performSearch() {
    const query = searchInput.value.toLowerCase().trim();
    if (!query) {
        searchResults.classList.add('hidden');
        return;
    }

    // Graph'ın içindeki render edilmiş düğümleri bul.
    const matches = mcuData.nodes.filter(n => n.id.toLowerCase().includes(query));
    
    searchResults.innerHTML = '';
    if (matches.length === 0) {
        searchResults.innerHTML = '<div style="color: #aaa; font-size: 0.85rem;">Sonuç bulunamadı.</div>';
        searchResults.classList.remove('hidden');
        return;
    }

    matches.forEach(node => {
        const item = document.createElement('div');
        item.className = 'search-result-item';
        item.textContent = node.id;
        item.onclick = () => {
            // Yıldıza yaklaş
            const distance = 100;
            const distRatio = 1 + distance/Math.hypot(node.x, node.y, node.z);
            Graph.cameraPosition(
                { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, 
                node, 
                2000
            );
            // Paneli aç
            showNodeInfo(node);
            
            // Arama sonuçlarını gizle
            searchResults.classList.add('hidden');
            searchInput.value = '';
        };
        searchResults.appendChild(item);
    });
    
    searchResults.classList.remove('hidden');
}

searchBtn.addEventListener('click', performSearch);
searchInput.addEventListener('input', performSearch);

// Arama kutusu dışına tıklandığında sonuçları gizle
document.addEventListener('click', (e) => {
    if (!e.target.closest('#search-container') && !e.target.closest('#search-results')) {
        searchResults.classList.add('hidden');
    }
});
