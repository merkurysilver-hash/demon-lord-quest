// ═══════════════════════════════════════
// RAVEN QUEST — CHARACTER SHEET APP v2
// ═══════════════════════════════════════

// ──── DEFAULT DATA (used for initial build only) ────

const DEF_STATS = [
  {label:'Strength',val:339},{label:'Vigor',val:325},{label:'Dexterity',val:333},
  {label:'Agility',val:338},{label:'Magic',val:403},{label:'Charisma',val:401},{label:'Free Points',val:0}
];

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

function buildStats(container) {
  container.innerHTML = '<div class="stats-grid">' + DEF_STATS.map(s =>
    `<div class="stat-block deletable">${makeDelBtn('stats')}<div class="stat-label" contenteditable="true">${s.label}</div><input class="stat-input" type="number" value="${s.val}"></div>`
  ).join('') + '</div>';
}

function buildClasses(container) {
  container.innerHTML = [
    {n:'‹Demon Lord of Pride›',t:'Uber (2)',l:'3',d:'The force of upheaval, dominion, and sovereign dread.'},
    {n:'‹Eclipse Princess›',t:'S (1)',l:'11',d:"Echo's class. Umbral Magic, Necromancy, Rulership."},
    {n:'‹Epochbreaker›',t:'S (1)',l:'4',d:'Chronomancy swordsman. Time magic and advanced swordsmanship.'},
    {n:'Locked',t:'—',l:'—',d:'Unlock by maxing a primary class.'},
    {n:'Locked',t:'—',l:'—',d:'Unlock by maxing a primary class.'},
  ].map(c =>
    `<div class="class-row deletable">${makeDelBtn('classes')}<div class="class-name-label" contenteditable="true">${c.n}</div><div class="class-tier" contenteditable="true">${c.t}</div><div class="class-level" contenteditable="true">${c.l === '—' ? '—' : 'Lv. ' + c.l}</div><div class="class-desc" contenteditable="true">${c.d}</div></div>`
  ).join('');
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
  buildStats(document.getElementById('stats-content'));
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
}

// ──── ADD FUNCTIONS ────

function addStat() {
  const grid = document.querySelector('#stats-content .stats-grid');
  if (!grid) return;
  const block = document.createElement('div');
  block.className = 'stat-block deletable';
  block.innerHTML = `${makeDelBtn('stats')}<div class="stat-label" contenteditable="true">New Stat</div><input class="stat-input" type="number" value="0">`;
  grid.appendChild(block);
  block.querySelector('.stat-label').focus();
  scheduleSave('stats');
}

function addClass() {
  const c = document.getElementById('classes-content');
  const row = document.createElement('div');
  row.className = 'class-row deletable';
  row.innerHTML = `${makeDelBtn('classes')}<div class="class-name-label" contenteditable="true">‹New Class›</div><div class="class-tier" contenteditable="true">Tier</div><div class="class-level" contenteditable="true">Lv. 1</div><div class="class-desc" contenteditable="true">Description...</div>`;
  c.appendChild(row);
  row.querySelector('.class-name-label').focus();
  scheduleSave('classes');
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

const ALL_KEYS = ['header/charName','header/charTitle','header/charRace','stats','classes','disciplines','skills','perks','gear','personality','oath','echo','story','relationships','notes'];

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
