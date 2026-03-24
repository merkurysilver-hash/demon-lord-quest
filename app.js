// ═══════════════════════════════════════
// RAVEN QUEST — CHARACTER SHEET APP v2
// ═══════════════════════════════════════

// ──── DEFAULT DATA ────

// Track allocated free points per stat
let ALLOCATED_FREE_POINTS = {
  str: 0,
  vig: 0,
  dex: 0,
  agi: 0,
  mag: 0,
  cha: 0
};

const DEF_SKILLS = [
  {name:'Grave-Thread Sovereignty',tier:'III',desc:'Sovereign control over wound-threads — metaphysical sutures binding flesh, spirit, and fate.'},
  {name:'Identify',tier:'II',desc:'Reveals nature, tier, and properties of targets and magical effects. Cannot pierce Uber-tier obfuscation.'},
  {name:'Shroud of the Waiting Void',tier:'II',desc:'Cloaks class, tier, and spiritual signature. The primary mechanism keeping ‹Demon Lord› concealed.'},
  {name:'Murder Magic',tier:'IV',desc:'Advanced Blood Magic — weaponization of life-force. Lethal blood constructs, sympathetic wounding, severing life-threads.'},
  {name:"Hydra's Stare",tier:'I',desc:'Gaze-based intimidation. Floods target with sovereign predator pressure.'},
  {name:'Fate Magic',tier:'IV',desc:'Advanced Chronomancy — reading and manipulation of causal threads. Deeply synergistic with ‹Epochbreaker›.'},
  {name:'Shadowbound Retinue',tier:'I',desc:'Core ‹Eclipse Princess› skill. Bind willing spirits into a loyal retinue.'},
  {name:'Midnight Descent',tier:'II',desc:'Drop through shadow, emerge at a connected point. Can chain into attacks.'},
  {name:'Lunar Conductor',tier:'I',desc:'Channels magic through moonlight. Spells gain potency and range under moonlight.'},
  {name:'Crown of Dreadful Radiance',tier:'II',desc:'‹Demon Lord› sovereignty aura. Invisible pressure causing unease, awe, or terror.'},
  {name:'Sanguine Crown',tier:'I',desc:'Blood-sovereignty. Authority over spilled blood in vicinity.'},
  {name:'Shadowfall Sight',tier:'I',desc:'Darkvision through umbral attunement. Reveals hidden magical constructs in shadow.'},
  {name:'Calamity Engine',tier:'I',desc:'Converts accumulated damage and desperation into catastrophic force release.'},
  {name:'Radiance of the First Throne',tier:'II',desc:'Sovereignty projection. Allies rally, enemies falter, ambient magic bends.'},
  {name:'Pyric Axiom',tier:'X',desc:'Anomalous tier. A single absolute truth burned into reality through sheer will. Activates in moments of ultimate conviction.'},
  {name:'Death Magic',tier:'IV',desc:'Advanced Necromancy — boundary between life and death. Communication with dead, soul-residue, surgical necrotic precision.'},
  {name:'Kind Touch, Cold Flesh',tier:'I',desc:'Healing with necromantic foundation. Effective but unsettling — the healed flesh feels momentarily cold.'},
  {name:'Umbramancy',tier:'III',desc:'Advanced shadow magic. Semi-solid constructs, sensory extensions, zones of absolute darkness.'},
  {name:'Veinweaving',tier:'I',desc:'Sense and manipulate blood channels. Trace emotion and intent through bloodstains.'},
  {name:'Grayscale Insight',tier:'I',desc:'Strips emotional coloring to reveal stark objective clarity. Sees through deception and illusion.'},
  {name:'Moonwell Intuition',tier:'I',desc:'Passive awareness attuned to water and moonlight. Danger-sense near water. Prophetic impressions in dreams.'},
  {name:'Accelerated Horizon',tier:'I',desc:'‹Epochbreaker› time-combat. Briefly accelerates personal timeframe for decisive action.'},
  {name:'Thaumaturgy',tier:'II',desc:'Fusion casting across magical disciplines. Can reliably blend two schools, occasionally three.'},
  {name:'Third Presence',tier:'II',desc:'Creates phantom third sensory presence. Enemies detect three threat sources instead of one.'},
  {name:'Wings of the Everwill',tier:'III',desc:'Spectral wings of crystallized will. True flight, aerial combat, can deflect magical projectiles.'},
  {name:'Abjuration',tier:'II',desc:'Defensive and counter-magic. Barriers, dispels, wards against specific damage types.'},
  {name:'Smithing',tier:'II',desc:'Magical and mundane metalwork. Maintain/enhance equipment, inscribe minor enchantments.'},
  {name:'Essence Reservoir',tier:'III',desc:'Expanded mana pool. Efficient recovery during rests, can overclock mana output temporarily.'},
  {name:'Sepulchral Refrain',tier:'III',desc:'Death-magic performance. Necrotic resonance weakens, binds, or commands undead and spirits.'},
  {name:'Supremacy Harvest',tier:'II',desc:'‹Demon Lord› growth skill. After defeating a foe, absorb a fragment of their power.'},
  {name:null,tier:null,desc:null},
  {name:null,tier:null,desc:null},
];

const DEF_PERKS = [
  {name:'Boon of the White Bloom',type:'Passive',desc:'In places of death and despair, the air around Raven calms. Minor undead and tormented enemies are delayed.'},
  {name:'Desire Remembered',type:'Active · 1/Day',desc:'Invoke one true desire aloud. Next skill/spell/attack gains additional Charisma scaling.'},
  {name:'Ember of Self Control',type:'Passive / Active',desc:'Boosts willpower. Once/day burn away foreign mental and emotional influences.'},
  {name:'Mark of the Hollow Choir',type:'Active · 1/Hour',desc:'Voice gains strange weight. Enemies hesitate; allies reassured.'},
  {name:'Scarlet Mark',type:'Passive / Active',desc:'Insight into Blood/Murder Magic. Flares nearby. Once/day interrupt a ritual by bleeding on it.'},
  {name:'Shattered Self',type:'Passive / Active',desc:'Grants second primary class. Once/day summon Echo for 40 seconds. Immune to charm/fear while out.'},
  {name:'Stillwater Memory',type:'Passive',desc:'Water spells extended naturally. Mana regen in rain/water. Water spirits may recognize her as purifier.'},
];

const DEF_GEAR = {
  'Weapons & Tools':[
    {name:'Sutureblade, Threaded Grief',fx:[{n:'Wound as Restoration',d:'Unravels affliction without killing.'},{n:'Fatecleave',d:'Once/day cuts through destiny.'},{n:"Mercy's Edge",d:'Cannot kill unless chosen. Surges with purpose.'},{n:'Grieving Edge',d:'Stored sorrow burns oath-breakers.'},{n:'Sever Regret',d:'Remove a painful memory from a willing ally.'}],warn:'Pain accumulates in the soul.',flav:'"It was never meant to kill."'},
    {name:'Riverglass Fang',fx:[{n:'Flowcut Form',d:'No momentum penalty.'},{n:'Spellchannel Core',d:'Store spell for melee detonation.'},{n:'Moonwater Resonance',d:'Silent in water/rain.'},{n:'Spirit Recognition',d:'Sacred to purified spirits.'}]},
    {name:'Thirstbrand Dagger',fx:[{n:'Wound to Weave',d:'Self-wounds fuel spells.'},{n:'Arcane Hunger',d:'Whispers if unfed.'},{n:'Sympathetic Link',d:'Blood tether targeting.'}]},
    {name:'Tetherlash',fx:[{n:'Latching Pull',d:'Anchor and pull foes.'},{n:'Ceiling Hook',d:'Vault via ceilings.'},{n:'Whisper Coil',d:'Masks movement.'}]},
    {name:'Scriptfang Quill',fx:[{n:'Script of the Living Word',d:'Write ≤5 words in blood to make real.'},{n:"Bloodletter's Authority",d:'Blood rituals faster/harder to dispel.'},{n:'Ink That Cuts',d:'Write runes into bodies.'},{n:'The Second Word',d:'Second phrase while first active.'}],warn:'Cannot write lies in blood.'},
    {name:'Dirgeflute of the Last Masque',fx:[{n:'Soundless Dirge',d:'Target hears melody. Pressure builds.'},{n:'One-Note Ending',d:'Once/day stagger or stun.'}]},
    {name:'The Arterial Lexicon',fx:[{n:'Veinweaving',d:'Sense/manipulate blood.'},{n:'Rite of the Living Seal',d:'Seal dying essence (max 7).'},{n:'Spilled Ink, Spilled Life',d:'Blood for mana.'}],warn:'Forbidden rituals inside. One page missing.'},
  ],
  'Armor & Clothing':[
    {name:'Cuirass of the Silent Sentence',fx:[{n:'Silent Dominion',d:'Cannot be compelled to speak.'},{n:'Weight of Judgment',d:'Unjust attackers slowed.'},{n:'Iron Witness',d:'Detects lies.'}],warn:'Tolling bell if she strikes the innocent.'},
    {name:'Deathfeather Cloak',fx:[{n:'Necrotic Resistance',d:'Resist necrotic.'},{n:'Veil of the Forgotten',d:'Stealth in dim light.'},{n:"Death's Mourning",d:'Once/day feign death.'}]},
    {name:'Petal-Pinned Slippers',fx:[{n:'Soundless Step',d:'Silent.'},{n:'Untraceable Grace',d:'No trail.'},{n:'Lingering Scent',d:'False trails.'}]},
  ],
  'Accessories':[
    {name:'Amber-Touched Hourglass',fx:[{n:'',d:'Extends chronomancy. Resists time-warping. Sharpens timing.'}]},
    {name:'Bracers of the Clinked Chalice',fx:[{n:'',d:'Three guards = shockwave. Amplifies vs wounded.'}]},
    {name:'Splitsecond Watch',fx:[{n:'',d:'Splits moments. Temporal backlash.'}]},
    {name:'Lucid Signet',fx:[{n:'',d:'Dampens compulsions. Once/day negate mental effects.'}]},
    {name:'Giltcoil Band',fx:[{n:'',d:'Steal buff. Charisma when outnumbered.'}]},
    {name:'Graftfang Loop',fx:[{n:'',d:'Mimic techniques. Instinctive evasion.'}]},
    {name:'Veinroot Anklet',fx:[{n:'',d:'Burst acceleration. Wall-run. Phantom steps.'}]},
    {name:'Sash of Spiraling Steps',fx:[{n:'',d:'Agility in motion. Mid-dodge redirects.'}]},
  ],
  'Trinkets & Curiosities':[
    {name:'Cork of the Final Bottle',fx:[{n:'',d:'Seal a state of being. Symbolic resonance.'}]},
    {name:'Folded Napkin of Apology',fx:[{n:'',d:'Pacify wounded enemy. Charisma with wronged.'}]},
    {name:'Mask of the Forgotten Role',fx:[{n:'',d:'Obscure identity. False persona 10 min.'}],warn:'Prolonged wear blurs identity.'},
    {name:'Red Verdict Charm',fx:[{n:'',d:'Amplify retaliatory blow. Stagger after injury.'}]},
    {name:'White Glove of the Final Ovation',fx:[{n:'',d:'Suppress emotions. Spectral applause.'}],warn:'Stores suppressed grief.'},
  ],
};

const DEF_RELS = [
  {name:'Ascenia',desc:'Elf. Silver hair, starry-night eyes. ‹Archimage›. Thaumaturgy specialist.'},
  {name:'Kaela',desc:'Sea-green hair. Bubbly, warm. Hydromancer. A spark of romantic interest.'},
  {name:'Fel',desc:'Black hair, braided. Glasses. Umbral Magic scholar.'},
  {name:'King Corvus Nightingale',desc:'‹Machiavellian Nightingale King (3)›. King first, father second.'},
  {name:'Prince Rook Nightingale',desc:'‹Nightingale Prince (1)›. Kind, generous brother.'},
  {name:"Raven's Mother",desc:'An elf in the Elven Kingdom. Never met.'},
];

// ──── DOM HELPERS ────

function makeDelBtn(section) {
  return `<button class="del-btn" onclick="removeItem(this,'${section}')" title="Delete">×</button>`;
}

function toggleCard(el) { el.closest('.card').classList.toggle('collapsed'); }
function toggleGear(el) { el.closest('.gear-item').classList.toggle('open'); }

function removeItem(btn, section) {
  const item = btn.closest('.deletable, .stat-block, .class-row, .skill-card, .perk-card, .gear-item, .rel-card, .discipline-tag');
  if (!item) return;
  item.style.opacity = '0.3';
  if (confirm('Delete this item?')) {
    item.remove();
    scheduleSave(section);
  } else {
    item.style.opacity = '';
  }
}

function renumberSkills() {
  document.querySelectorAll('#skills-content .skill-slot').forEach((el, i) => { el.textContent = (i + 1) + '.'; });
}

// ──── BUILD FUNCTIONS ────

function renderStatsDisplay() {
  const container = document.getElementById('stats-display');
  if (!container) return;
  // Calculate totals from CLASS_STATS
  const totals = {};
  STAT_NAMES.forEach(s => { totals[s] = 0; });
  Object.values(CLASS_STATS).forEach(cls => {
    const mult = cls.perLevel ? cls.levels : 1;
    STAT_NAMES.forEach(s => { totals[s] += cls[s] * mult; });
  });
  
  // Calculate remaining free points
  const totalAllocated = Object.values(ALLOCATED_FREE_POINTS).reduce((a, b) => a + b, 0);
  const remainingFree = totals['free'] - totalAllocated;
  
  // Build stat display with +/- for non-free stats, showing allocated amounts
  const statHtml = STAT_NAMES.slice(0, -1).map(s => {
    const baseVal = totals[s];
    const allocated = ALLOCATED_FREE_POINTS[s] || 0;
    const finalVal = baseVal + allocated;
    return `<div class="stat-block">
      <div class="stat-label">${STAT_LABELS[s]}</div>
      <div class="stat-display">
        <div class="stat-value">${finalVal}${allocated > 0 ? ` <span class="stat-allocated">(+${allocated})</span>` : ''}</div>
        <div class="stat-controls">
          <button class="stat-btn" onclick="modifyFreeStat('${s}', 1)" title="Allocate free point">+</button>
          <button class="stat-btn" onclick="modifyFreeStat('${s}', -1)" title="Deallocate point" ${allocated === 0 ? 'disabled' : ''}>−</button>
        </div>
      </div>
    </div>`;
  }).join('');
  
  // Add free points display at the end
  const freeHtml = `<div class="stat-block stat-block-free">
    <div class="stat-label">${STAT_LABELS['free']}</div>
    <div class="stat-value">${remainingFree}</div>
  </div>`;
  
  container.innerHTML = statHtml + freeHtml;
}

function modifyFreeStat(stat, delta) {
  if (!ALLOCATED_FREE_POINTS.hasOwnProperty(stat)) return;
  
  // Calculate current free points
  const totals = {};
  STAT_NAMES.forEach(s => { totals[s] = 0; });
  Object.values(CLASS_STATS).forEach(cls => {
    const mult = cls.perLevel ? cls.levels : 1;
    STAT_NAMES.forEach(s => { totals[s] += cls[s] * mult; });
  });
  
  const totalAllocated = Object.values(ALLOCATED_FREE_POINTS).reduce((a, b) => a + b, 0);
  const remainingFree = totals['free'] - totalAllocated;
  
  // Can only add if free points available
  if (delta > 0 && remainingFree <= 0) return;
  
  // Can only remove if allocated points exist
  if (delta < 0 && ALLOCATED_FREE_POINTS[stat] <= 0) return;
  
  ALLOCATED_FREE_POINTS[stat] += delta;
  renderStatsDisplay();
  scheduleSave('allocatedFreePoints');
}

function buildClasses(container) {
  const classMap = {
    '‹Demon Lord of Pride›': 'demon-lord-2',
    '‹Eclipse Princess›': 'eclipse-1',
    '‹Epochbreaker›': 'epochbreaker-1',
  };
  
  container.innerHTML = [
    {n:'‹Demon Lord of Pride›',t:'Uber (2)',d:'The force of upheaval, dominion, and sovereign dread.'},
    {n:'‹Eclipse Princess›',t:'S (1)',d:"Echo's class. Umbral Magic, Necromancy, Rulership."},
    {n:'‹Epochbreaker›',t:'S (1)',d:'Chronomancy swordsman. Time magic and advanced swordsmanship.'},
    {n:'Locked',t:'—',d:'Unlock by maxing a primary class.'},
    {n:'Locked',t:'—',d:'Unlock by maxing a primary class.'},
  ].map(c => {
    const key = classMap[c.n];
    const isLocked = c.n === 'Locked';
    const currentLevel = key && CLASS_STATS[key] ? CLASS_STATS[key].levels : 0;
    const levelHtml = isLocked ? '—' : `<div class="class-level-display"><button class="level-btn" onclick="changeClassLevel('${key}', -1)">−</button><span class="level-value">Lv. <span class="level-num">${currentLevel}</span></span><button class="level-btn" onclick="changeClassLevel('${key}', 1)">+</button></div>`;
    return `<div class="class-row"><div class="class-name-label" contenteditable="true">${c.n}</div><div class="class-tier" contenteditable="true">${c.t}</div>${levelHtml}<div class="class-desc" contenteditable="true">${c.d}</div></div>`;
  }).join('');
}

function buildDisciplines(container) {
  container.innerHTML = '<div class="discipline-list">' +
    ['Murder Magic','Death Magic','Fate Magic','Umbral Magic','Swordsmanship','Thaumaturgy','Abjuration']
      .map(d => `<span class="discipline-tag" contenteditable="true">${d}<span class="disc-del" onclick="removeItem(this.parentElement.querySelector(\\'.disc-del\\'),'disciplines');this.parentElement.remove();scheduleSave('disciplines')">×</span></span>`).join('') +
    '</div>';
}

function buildSkills(container) {
  container.innerHTML = DEF_SKILLS.map((s, i) => {
    const name = s.name ? `‹${s.name}›` : 'Empty Slot';
    const tier = s.tier || '—';
    const desc = s.desc || 'Click to add a description...';
    const empty = s.name ? '' : ' skill-card-empty';
    return `<div class="skill-card${empty} deletable">${makeDelBtn('skills')}<div class="skill-card-header"><span class="skill-slot">${i+1}.</span><span class="skill-card-name" contenteditable="true">${name}</span><span class="skill-card-tier" contenteditable="true">${tier}</span></div><div class="skill-card-desc" contenteditable="true">${desc}</div></div>`;
  }).join('');
}

function buildPerks(container) {
  container.innerHTML = DEF_PERKS.map(p =>
    `<div class="perk-card deletable">${makeDelBtn('perks')}<div class="perk-name" contenteditable="true">${p.name}</div><div class="perk-type" contenteditable="true">${p.type}</div><div class="perk-desc" contenteditable="true">${p.desc}</div></div>`
  ).join('');
}

function buildGear(container) {
  let html = '';
  Object.entries(DEF_GEAR).forEach(([cat, items]) => {
    html += `<div class="gear-category-title">${cat}</div>`;
    items.forEach(item => {
      let fx = item.fx.map(e => `<div class="gear-effect">${e.n ? `<span class="gear-effect-name">${e.n}</span> — ` : ''}${e.d}</div>`).join('');
      if (item.warn) fx += `<div class="gear-drawback">\u26A0 ${item.warn}</div>`;
      if (item.flav) fx += `<div class="gear-flavor">${item.flav}</div>`;
      html += `<div class="gear-item deletable" draggable="true"><button class="del-btn-gear" onclick="removeItem(this,'gear')" title="Delete">×</button><div class="gear-toggle" onclick="toggleGear(this)"><span class="gear-arrow">\u25B6</span><span class="gear-name">${item.name}</span></div><div class="gear-details" contenteditable="true">${fx}</div></div>`;
    });
  });
  container.innerHTML = html;
  setTimeout(bindGearDrag, 0);
}

function buildRels(container) {
  container.innerHTML = DEF_RELS.map(r =>
    `<div class="rel-card deletable">${makeDelBtn('relationships')}<div class="rel-name" contenteditable="true">${r.name}</div><div class="rel-details" contenteditable="true">${r.desc}</div></div>`
  ).join('');
}

function initAllContent() {
  buildClasses(document.getElementById('classes-content'));
  // Disciplines - build inline since it uses special delete
  const dc = document.getElementById('disciplines-content');
  dc.innerHTML = '<div class="discipline-list">' +
    ['Murder Magic','Death Magic','Fate Magic','Umbral Magic','Swordsmanship','Thaumaturgy','Abjuration']
      .map(d => `<span class="discipline-tag" contenteditable="true">${d}<span class="disc-del" onclick="this.parentElement.remove();scheduleSave('disciplines')">×</span></span>`).join('') +
    '</div>';
  buildSkills(document.getElementById('skills-content'));
  buildPerks(document.getElementById('perks-content'));
  buildGear(document.getElementById('gear-content'));
  buildRels(document.getElementById('rels-content'));
  buildSystemRef();
}

// ──── SYSTEM REFERENCE ────

const TIER_TABLE = [
  {tier:'E',points:3},{tier:'D',points:5},{tier:'C',points:10},{tier:'B',points:20},
  {tier:'A',points:30},{tier:'S',points:40},{tier:'Uber',points:65}
];

// Per-level stat distributions for each class period
const STAT_NAMES = ['str','vig','dex','agi','mag','cha','free'];
const STAT_LABELS = {str:'Strength',vig:'Vigor',dex:'Dexterity',agi:'Agility',mag:'Magic',cha:'Charisma',free:'Free Points'};

const CLASS_STATS = {
  'half-elf':     {label:'Half-Elf (Racial)',     perLevel:false, levels:1, str:0,  vig:0,  dex:2,  agi:2,  mag:2,  cha:2,  free:3},
  'demon-lord-1': {label:'‹Demon Lord› (I)',       perLevel:true,  levels:20, str:10, vig:10, dex:10, agi:10, mag:10, cha:10, free:5},
  'demon-lord-2': {label:'‹Demon Lord of Pride› (II)', perLevel:true, levels:3, str:10, vig:10, dex:10, agi:10, mag:11, cha:12, free:6},
  'eclipse-1':    {label:'‹Eclipse Princess› (I)', perLevel:true,  levels:11, str:2,  vig:3,  dex:6,  agi:6,  mag:10, cha:8,  free:5},
  'epochbreaker-1':{label:'‹Epochbreaker› (I)',    perLevel:true,  levels:4,  str:8,  vig:7,  dex:2,  agi:8,  mag:10, cha:1,  free:4},
};

function buildSystemRef() {
  const ref = document.getElementById('system-ref');
  if (!ref) return;

  let html = '<table class="ref-table"><thead><tr><th>Tier</th><th>Stat Points / Level</th></tr></thead><tbody>';
  TIER_TABLE.forEach(t => {
    const hl = (t.tier === 'Uber' || t.tier === 'S') ? ' class="ref-highlight"' : '';
    html += `<tr${hl}><td>${t.tier}</td><td>${t.points}</td></tr>`;
  });
  html += '</tbody></table>';
  html += '<div class="ref-note"><strong>Max Level:</strong> 20 per class. Ascension at 20 resets to Lv. 1 at the next tier.</div>';
  html += '<div class="ref-note"><strong>Skill Slots:</strong> 8 base + 8 per secondary class gained or class ascension.</div>';
  html += '<div class="ref-note"><strong>Capstones:</strong> At max level (20), choose one of three capstone abilities. Not skills — do not occupy slots.</div>';
  html += '<div class="ref-note"><strong>Secondary Classes:</strong> Unlocked by maxing a primary class. Cannot ascend higher than primary class tier.</div>';
  ref.innerHTML = html;

  buildStatBreakdown();
}

function buildStatBreakdown() {
  const container = document.getElementById('stat-budget');
  if (!container) return;

  const entries = Object.entries(CLASS_STATS);

  let html = '<div class="budget-title">Stat Breakdown by Source</div>';
  html += '<table class="ref-table"><thead><tr><th>Source</th><th style="text-align:center">Lvls</th>';
  STAT_NAMES.forEach(s => { html += `<th style="text-align:center">${s === 'free' ? 'Free' : STAT_LABELS[s].slice(0,3)}</th>`; });
  html += '<th style="text-align:center">Total</th></tr></thead><tbody id="budget-rows">';

  entries.forEach(([key, cls]) => {
    html += `<tr data-classkey="${key}">`;
    html += `<td contenteditable="true">${cls.label}</td>`;
    if (cls.perLevel) {
      html += `<td style="text-align:center"><input type="number" class="budget-level-input" data-classkey="${key}" value="${cls.levels}" min="0" max="20"></td>`;
    } else {
      html += `<td style="text-align:center;color:var(--text-muted)">1×</td>`;
    }
    STAT_NAMES.forEach(s => {
      const val = cls[s] * (cls.perLevel ? cls.levels : 1);
      html += `<td style="text-align:center" class="computed-stat" data-classkey="${key}" data-stat="${s}">${val || '<span style="color:var(--text-muted)">—</span>'}</td>`;
    });
    const rowTotal = STAT_NAMES.reduce((sum, s) => sum + cls[s] * (cls.perLevel ? cls.levels : 1), 0);
    html += `<td style="text-align:center;color:var(--gold)" class="computed-stat" data-classkey="${key}" data-stat="rowtotal">${rowTotal}</td>`;
    html += '</tr>';
  });

  // Totals row
  html += '<tr class="ref-highlight" id="budget-totals-row"><td style="font-weight:700">Total</td><td></td>';
  const totals = {};
  STAT_NAMES.forEach(s => { totals[s] = entries.reduce((sum, [k, c]) => sum + c[s] * (c.perLevel ? c.levels : 1), 0); });
  const grand = Object.values(totals).reduce((a, b) => a + b, 0);
  STAT_NAMES.forEach(s => { html += `<td style="text-align:center;font-weight:700" id="total-${s}">${totals[s]}</td>`; });
  html += `<td style="text-align:center;font-weight:700;color:var(--gold-bright)" id="total-grand">${grand}</td></tr>`;

  html += '</tbody></table>';
  html += '<div class="ref-note" style="margin-top:12px">Edit the <strong>Lvls</strong> column when you level up. Totals recalculate automatically.</div>';

  container.innerHTML = html;
  bindBudgetInputs();
}

function bindBudgetInputs() {
  document.querySelectorAll('.budget-level-input').forEach(inp => {
    const key = inp.dataset.classkey;
    // Sync restored values back to CLASS_STATS
    if (key && CLASS_STATS[key] && inp.value) {
      CLASS_STATS[key].levels = parseInt(inp.value) || 0;
    }
    inp.addEventListener('input', () => {
      const cls = CLASS_STATS[key];
      if (!cls) return;
      const newLevels = Math.max(0, Math.min(20, parseInt(inp.value) || 0));
      cls.levels = newLevels;
      recalcBudget();
      scheduleSave('classLevels');
    });
  });
  recalcBudget();
}

function recalcBudget() {
  const entries = Object.entries(CLASS_STATS);
  const totals = {};
  STAT_NAMES.forEach(s => { totals[s] = 0; });

  entries.forEach(([key, cls]) => {
    const mult = cls.perLevel ? cls.levels : 1;
    let rowTotal = 0;
    STAT_NAMES.forEach(s => {
      const val = cls[s] * mult;
      totals[s] += val;
      rowTotal += val;
      const cell = document.querySelector(`.computed-stat[data-classkey="${key}"][data-stat="${s}"]`);
      if (cell) cell.innerHTML = val || '<span style="color:var(--text-muted)">—</span>';
    });
    const totalCell = document.querySelector(`.computed-stat[data-classkey="${key}"][data-stat="rowtotal"]`);
    if (totalCell) totalCell.textContent = rowTotal;
    
    // Sync class row level display
    if (cls.perLevel) {
      const levelNum = document.querySelector(`button[onclick*="'${key}'"]`)?.closest('.class-level-display')?.querySelector('.level-num');
      if (levelNum) levelNum.textContent = cls.levels;
    }
  });

  let grand = 0;
  STAT_NAMES.forEach(s => {
    grand += totals[s];
    const el = document.getElementById('total-' + s);
    if (el) el.textContent = totals[s];
  });
  const grandEl = document.getElementById('total-grand');
  if (grandEl) grandEl.textContent = grand;
  renderStatsDisplay();
}

// ──── ADD FUNCTIONS ────

function addClass() {
  const c = document.getElementById('classes-content');
  const row = document.createElement('div');
  row.className = 'class-row deletable';
  row.innerHTML = `${makeDelBtn('classes')}<div class="class-name-label" contenteditable="true">‹New Class›</div><div class="class-tier" contenteditable="true">Tier</div><div class="class-level" contenteditable="true">Lv. 1</div><div class="class-desc" contenteditable="true">Description...</div>`;
  c.appendChild(row);
  row.querySelector('.class-name-label').focus();
  scheduleSave('classes');
}

function changeClassLevel(classKey, delta) {
  if (!classKey || !CLASS_STATS[classKey]) return;
  const cls = CLASS_STATS[classKey];
  const newLevel = Math.max(0, Math.min(20, cls.levels + delta));
  cls.levels = newLevel;
  
  // Update the budget table input for this class
  const budgetInput = document.querySelector(`.budget-level-input[data-classkey="${classKey}"]`);
  if (budgetInput) budgetInput.value = newLevel;
  
  recalcBudget();
  scheduleSave('classLevels');
}

function addDiscipline() {
  const list = document.querySelector('#disciplines-content .discipline-list');
  if (!list) return;
  const tag = document.createElement('span');
  tag.className = 'discipline-tag';
  tag.contentEditable = 'true';
  tag.textContent = 'New Discipline';
  const del = document.createElement('span');
  del.className = 'disc-del';
  del.textContent = '×';
  del.onclick = function() { tag.remove(); scheduleSave('disciplines'); };
  tag.appendChild(del);
  list.appendChild(tag);
  // Select text for easy editing
  const range = document.createRange();
  range.selectNodeContents(tag);
  range.setEndBefore(del);
  const sel = window.getSelection();
  sel.removeAllRanges(); sel.addRange(range);
  scheduleSave('disciplines');
}

function addSkill() {
  const c = document.getElementById('skills-content');
  const count = c.querySelectorAll('.skill-card').length + 1;
  const card = document.createElement('div');
  card.className = 'skill-card skill-card-empty deletable';
  card.innerHTML = `${makeDelBtn('skills')}<div class="skill-card-header"><span class="skill-slot">${count}.</span><span class="skill-card-name" contenteditable="true">‹New Skill›</span><span class="skill-card-tier" contenteditable="true">I</span></div><div class="skill-card-desc" contenteditable="true">Describe this skill...</div>`;
  c.appendChild(card);
  card.querySelector('.skill-card-name').focus();
  scheduleSave('skills');
}

function addPerk() {
  const c = document.getElementById('perks-content');
  const card = document.createElement('div');
  card.className = 'perk-card deletable';
  card.innerHTML = `${makeDelBtn('perks')}<div class="perk-name" contenteditable="true">New Perk</div><div class="perk-type" contenteditable="true">Passive / Active</div><div class="perk-desc" contenteditable="true">Describe this perk...</div>`;
  c.appendChild(card);
  card.querySelector('.perk-name').focus();
  scheduleSave('perks');
}

function addGearItem() {
  const c = document.getElementById('gear-content');
  const item = document.createElement('div');
  item.className = 'gear-item open deletable';
  item.setAttribute('draggable', 'true');
  item.innerHTML = `<button class="del-btn-gear" onclick="removeItem(this,'gear')" title="Delete">×</button><div class="gear-toggle" onclick="toggleGear(this)"><span class="gear-arrow">\u25B6</span><span class="gear-name" contenteditable="true">New Item</span></div><div class="gear-details" contenteditable="true"><div class="gear-effect"><span class="gear-effect-name">Effect</span> — Describe the effect...</div></div>`;
  c.appendChild(item);
  item.querySelector('.gear-name').focus();
  bindGearDrag();
  scheduleSave('gear');
}

function addRelationship() {
  const c = document.getElementById('rels-content');
  const card = document.createElement('div');
  card.className = 'rel-card deletable';
  card.innerHTML = `${makeDelBtn('relationships')}<div class="rel-name" contenteditable="true">New Character</div><div class="rel-details" contenteditable="true">Describe this character...</div>`;
  c.appendChild(card);
  card.querySelector('.rel-name').focus();
  scheduleSave('relationships');
}

// ──── REBIND HANDLERS (after Firebase restore) ────

function rebindHandlers() {
  document.querySelectorAll('.gear-toggle').forEach(t => { t.onclick = function() { toggleGear(this); }; });
  document.querySelectorAll('.del-btn').forEach(b => {
    const section = b.getAttribute('onclick')?.match(/'([^']+)'/)?.[1];
    if (section) b.onclick = function() { removeItem(this, section); };
  });
  document.querySelectorAll('.del-btn-gear').forEach(b => { b.onclick = function() { removeItem(this, 'gear'); }; });
  document.querySelectorAll('.disc-del').forEach(d => { d.onclick = function() { this.parentElement.remove(); scheduleSave('disciplines'); }; });
  bindGearDrag();
  bindBudgetInputs();
}

// ──── DRAG & DROP FOR INVENTORY ────

let draggedItem = null;

function bindGearDrag() {
  const container = document.getElementById('gear-content');
  if (!container) return;

  container.querySelectorAll('.gear-item').forEach(item => {
    item.setAttribute('draggable', 'true');
    item.ondragstart = function(e) {
      draggedItem = this;
      this.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', '');
    };
    item.ondragend = function() {
      this.classList.remove('dragging');
      draggedItem = null;
      container.querySelectorAll('.drag-over').forEach(el => el.classList.remove('drag-over'));
    };
    item.ondragover = function(e) {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      if (this !== draggedItem && draggedItem) {
        container.querySelectorAll('.drag-over').forEach(el => el.classList.remove('drag-over'));
        this.classList.add('drag-over');
      }
    };
    item.ondragleave = function() {
      this.classList.remove('drag-over');
    };
    item.ondrop = function(e) {
      e.preventDefault();
      this.classList.remove('drag-over');
      if (!draggedItem || this === draggedItem) return;
      // Insert before the drop target
      this.parentElement.insertBefore(draggedItem, this);
      scheduleSave('gear');
    };
  });

  // Allow dropping on category titles (to move item to top of a category)
  container.querySelectorAll('.gear-category-title').forEach(title => {
    title.ondragover = function(e) {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      if (draggedItem) {
        container.querySelectorAll('.drag-over').forEach(el => el.classList.remove('drag-over'));
        this.classList.add('drag-over');
      }
    };
    title.ondragleave = function() { this.classList.remove('drag-over'); };
    title.ondrop = function(e) {
      e.preventDefault();
      this.classList.remove('drag-over');
      if (!draggedItem) return;
      // Insert the dragged item right after this category title
      if (this.nextSibling) {
        this.parentElement.insertBefore(draggedItem, this.nextSibling);
      } else {
        this.parentElement.appendChild(draggedItem);
      }
      scheduleSave('gear');
    };
  });
}

// ──── ROUTING ────

const PAGES = ['overview','skills','perks','inventory','identity','relationships','chronicle'];
function navigate(page) {
  if (!PAGES.includes(page)) page = 'overview';
  PAGES.forEach(p => {
    const el = document.getElementById('page-' + p);
    const tab = document.getElementById('tab-' + p);
    if (el) el.classList.toggle('active', p === page);
    if (tab) tab.classList.toggle('active', p === page);
  });
  window.scrollTo(0, 0);
}
function initRouter() {
  window.addEventListener('hashchange', () => navigate(location.hash.replace('#','') || 'overview'));
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', () => { location.hash = tab.id.replace('tab-',''); });
  });
  navigate(location.hash.replace('#','') || 'overview');
}

// ──── FIREBASE SYNC ────

const CONFIG_KEY = 'raven_fb_cfg';
const LOCAL_KEY = 'raven_sheet_v4';
let db = null, sheetRef = null, isOnline = false, activeSection = null, suppressRemote = {}, saveTimers = {};

const ALL_KEYS = ['header/charName','header/charTitle','header/charRace','classLevels','allocatedFreePoints','classes','disciplines','skills','perks','gear','personality','oath','echo','story','relationships','notes'];

document.addEventListener('focusin', e => {
  const sec = e.target.closest('[data-section]');
  const fld = e.target.closest('[data-field]');
  if (sec) activeSection = sec.dataset.section || sec.getAttribute('data-section');
  else if (fld) activeSection = fld.dataset.field;
  else activeSection = null;
});
document.addEventListener('focusout', () => { setTimeout(() => { activeSection = null; }, 400); });

function getVal(key) {
  if (key === 'notes') { const ta = document.getElementById('notes-area'); return ta ? ta.value : ''; }
  if (key === 'classLevels') {
    // Serialize CLASS_STATS levels as JSON string
    const data = {};
    Object.entries(CLASS_STATS).forEach(([k, c]) => { data[k] = c.levels; });
    return JSON.stringify(data);
  }
  if (key === 'allocatedFreePoints') {
    return JSON.stringify(ALLOCATED_FREE_POINTS);
  }
  const fld = document.querySelector(`[data-field="${key}"]`);
  if (fld) return fld.innerHTML;
  const sec = document.querySelector(`[data-section="${key}"]`);
  if (sec) {
    // Sync input values to attributes so innerHTML captures them
    sec.querySelectorAll('input').forEach(inp => inp.setAttribute('value', inp.value));
    return sec.innerHTML;
  }
  return null;
}

function setVal(key, val) {
  if (val == null) return;
  if (key === 'notes') { const ta = document.getElementById('notes-area'); if (ta) ta.value = val; return; }
  if (key === 'classLevels') {
    // Restore CLASS_STATS levels from JSON and rebuild the table
    try {
      const data = typeof val === 'string' ? JSON.parse(val) : val;
      Object.entries(data).forEach(([k, lvl]) => {
        if (CLASS_STATS[k]) CLASS_STATS[k].levels = lvl;
      });
      buildStatBreakdown();
    } catch(e) {}
    return;
  }
  if (key === 'allocatedFreePoints') {
    try {
      const data = typeof val === 'string' ? JSON.parse(val) : val;
      Object.entries(data).forEach(([stat, allocated]) => {
        if (ALLOCATED_FREE_POINTS.hasOwnProperty(stat)) {
          ALLOCATED_FREE_POINTS[stat] = allocated;
        }
      });
      renderStatsDisplay();
    } catch(e) {}
    return;
  }
  // Reject non-string values for section content (old Firebase format was objects)
  if (typeof val !== 'string') return;
  const fld = document.querySelector(`[data-field="${key}"]`);
  if (fld) { fld.innerHTML = val; return; }
  const sec = document.querySelector(`[data-section="${key}"]`);
  if (sec) { sec.innerHTML = val; rebindHandlers(); }
}

function setStatus(state, label) { document.getElementById('status-dot').className = 'status-dot ' + state; document.getElementById('status-label').textContent = label; }
function setSave(text, cls) { const el = document.getElementById('save-indicator'); el.textContent = text; el.className = 'save-indicator ' + (cls || ''); }

function scheduleSave(key) {
  if (saveTimers[key]) clearTimeout(saveTimers[key]);
  setSave('Saving...', 'saving');
  if (key === 'classes') setTimeout(buildStatBreakdown, 50);
  saveTimers[key] = setTimeout(() => {
    const val = getVal(key);
    if (isOnline && sheetRef) { suppressRemote[key] = true; sheetRef.child(key).set(val).then(() => setSave('Saved', 'saved')).catch(() => setSave('Error', '')); }
    try { const l = JSON.parse(localStorage.getItem(LOCAL_KEY) || '{}'); l[key] = val; localStorage.setItem(LOCAL_KEY, JSON.stringify(l)); } catch (e) {}
    if (!isOnline) setSave('Saved locally', 'saved');
  }, 800);
}

function attachSyncListeners() {
  document.querySelectorAll('[data-field]').forEach(el => el.addEventListener('input', () => scheduleSave(el.dataset.field)));
  document.querySelectorAll('[data-section]').forEach(el => {
    const key = el.dataset.section || el.getAttribute('data-section');
    if (el.tagName === 'TEXTAREA') { el.addEventListener('input', () => scheduleSave(key)); }
    else { el.addEventListener('input', () => scheduleSave(key)); }
  });
}

function startListening() {
  if (!sheetRef) return;
  sheetRef.on('value', snap => {
    const data = snap.val();
    if (!data) { const seed = {}; ALL_KEYS.forEach(k => { seed[k] = getVal(k); }); sheetRef.set(seed); return; }
    ALL_KEYS.forEach(k => {
      if (k === activeSection) return;
      if (suppressRemote[k]) { delete suppressRemote[k]; return; }
      let val = data; k.split('/').forEach(p => { if (val) val = val[p]; });
      if (val !== undefined) setVal(k, val);
    });
  });
}

function firebaseAvailable() { return typeof firebase !== 'undefined' && firebase.initializeApp; }

function showApp() {
  document.getElementById('setup-panel').style.display = 'none';
  document.getElementById('app-wrapper').style.display = 'block';
  attachSyncListeners();
  initRouter();
}

function initFirebase(config) {
  if (!firebaseAvailable()) { skipSetup(); return; }
  try {
    firebase.initializeApp(config);
    db = firebase.database(); sheetRef = db.ref('sheet');
    db.ref('.info/connected').on('value', snap => {
      if (snap.val()) { isOnline = true; setStatus('connected', 'Connected — syncing live'); }
      else { isOnline = false; setStatus('offline', 'Offline — saving locally'); }
    });
    showApp(); startListening();
  } catch (e) {
    document.getElementById('setup-error').textContent = 'Error: ' + e.message;
    document.getElementById('setup-error').style.display = 'block';
  }
}

function saveConfig() {
  if (!firebaseAvailable()) { document.getElementById('setup-error').textContent = 'Firebase SDK not loaded. Open in a real browser.'; document.getElementById('setup-error').style.display = 'block'; return; }
  const a = document.getElementById('cfg-apiKey').value.trim(), c = document.getElementById('cfg-databaseURL').value.trim();
  const b = document.getElementById('cfg-authDomain').value.trim(), d = document.getElementById('cfg-projectId').value.trim();
  if (!a || !c) { document.getElementById('setup-error').textContent = 'apiKey and databaseURL required.'; document.getElementById('setup-error').style.display = 'block'; return; }
  const cfg = { apiKey: a, authDomain: b, databaseURL: c, projectId: d };
  localStorage.setItem(CONFIG_KEY, JSON.stringify(cfg));
  initFirebase(cfg);
}

function skipSetup() {
  isOnline = false; showApp();
  setStatus('offline', firebaseAvailable() ? 'Offline — localStorage only' : 'Preview mode — download for sync');
  try { const l = JSON.parse(localStorage.getItem(LOCAL_KEY) || '{}'); ALL_KEYS.forEach(k => { if (l[k]) setVal(k, l[k]); }); } catch (e) {}
}

// ──── BOOT ────

document.addEventListener('DOMContentLoaded', () => {
  initAllContent();
  if (!firebaseAvailable()) { skipSetup(); return; }
  const s = localStorage.getItem(CONFIG_KEY);
  if (s) { try { initFirebase(JSON.parse(s)); } catch (e) { document.getElementById('setup-panel').style.display = 'block'; } }
  else { document.getElementById('setup-panel').style.display = 'block'; }
});
