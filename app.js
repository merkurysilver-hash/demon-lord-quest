// ═══════════════════════════════════════════
// RAVEN QUEST — CHARACTER SHEET APP
// ═══════════════════════════════════════════

// ──── DATA ────

const SKILLS = [
  { name: 'Grave-Thread Sovereignty', tier: 'III', desc: 'The signature skill of the Woundwright. Governs the manipulation of wound-threads — metaphysical sutures binding flesh, spirit, and fate. At Tier III, grants sovereign control over the boundary between injury and restoration. Wounds inflicted can be woven into bindings, and wounds suffered can be redirected or stored.' },
  { name: 'Identify', tier: 'II', desc: 'Reveals the nature, tier, and properties of targets, objects, and magical effects. At Tier II, can penetrate basic concealment and identify hidden magical properties. Cannot pierce Uber-tier obfuscation.' },
  { name: 'Shroud of the Waiting Void', tier: 'II', desc: 'Cloaks Raven\'s class, tier, and spiritual signature from detection. At Tier II, the shroud is durable enough to withstand casual scrutiny and most identification skills below S-tier. The primary mechanism keeping her ‹Demon Lord› class concealed at Scholomance.' },
  { name: 'Murder Magic', tier: 'IV', desc: 'The advanced form of Blood Magic — not merely the manipulation of blood, but the weaponization of life-force itself. At Tier IV, grants mastery over lethal blood constructs, sympathetic wounding, and the ability to sense and sever the life-threads of others. One of Raven\'s most dangerous disciplines.' },
  { name: 'Hydra\'s Stare', tier: 'I', desc: 'A gaze-based intimidation and disruption skill. Locks eyes with a target and floods them with the psychic pressure of a sovereign predator. Can stagger, freeze, or demoralize. At Tier I, effective against targets of equal or lower tier.' },
  { name: 'Fate Magic', tier: 'IV', desc: 'The advanced expression of Chronomancy — not merely time manipulation but the reading and manipulation of causal threads. At Tier IV, Raven can perceive the weight of fate on a person or place, nudge probability, and briefly unravel predetermined outcomes. Deeply synergistic with ‹Epochbreaker›.' },
  { name: 'Shadowbound Retinue', tier: 'I', desc: 'Core ‹Eclipse Princess› skill. Allows the binding of willing spirits, echoes, and soul-fragments into a retinue that serves the princess. Bound members can scout, communicate, and lend their strength. At Tier I, the retinue is small but fiercely loyal.' },
  { name: 'Midnight Descent', tier: 'II', desc: 'A movement skill channeling umbral energy. Raven drops through shadow as though falling through water, emerging at a nearby shadow-connected point. At Tier II, can carry momentum through the descent and chain into attacks on emergence.' },
  { name: 'Lunar Conductor', tier: 'I', desc: 'Channels and amplifies magic through moonlight or its residual traces. Spells cast under moonlight gain potency and range. At Tier I, provides a modest but reliable boost and allows Raven to sense moonlight even underground.' },
  { name: 'Crown of Dreadful Radiance', tier: 'II', desc: 'A ‹Demon Lord› sovereignty aura. Manifests as an invisible pressure radiating from Raven that causes unease, awe, or outright terror in those nearby. At Tier II, can be focused on specific targets or broadened to fill a room. The crown is felt, not seen.' },
  { name: 'Sanguine Crown', tier: 'I', desc: 'A blood-sovereignty skill tied to the ‹Eclipse Princess›. Grants Raven authority over spilled blood in her vicinity — she can command it to move, form barriers, or trace patterns. At Tier I, the range and volume are limited.' },
  { name: 'Shadowfall Sight', tier: 'I', desc: 'Grants darkvision through umbral attunement. In darkness or deep shadow, Raven perceives not with light but through the texture of shadow itself. Also reveals hidden magical constructs made of shadow or darkness.' },
  { name: 'Calamity Engine', tier: 'I', desc: 'A ‹Demon Lord› devastation skill. Converts accumulated damage, pain, and desperation into a single catastrophic release of force. The more Raven has suffered in a fight, the more devastating the Engine becomes. At Tier I, the release is powerful but draining.' },
  { name: 'Radiance of the First Throne', tier: 'II', desc: 'A sovereignty projection skill. When activated, Raven\'s presence becomes undeniable — allies rally, enemies falter, and the ambient magic bends toward her will. At Tier II, can influence the emotional state of a crowd and impose brief hesitation on attackers.' },
  { name: 'Pyric Axiom', tier: 'X', desc: 'A unique skill at an anomalous tier. The Pyric Axiom defines a single absolute truth that Raven has burned into the fabric of reality through sheer force of will. The nature and exact mechanics of this skill are not fully understood — even by Raven. It activates in moments of ultimate conviction.' },
  { name: 'Death Magic', tier: 'IV', desc: 'Advanced Necromancy — not the crude animation of corpses but the sophisticated manipulation of the boundary between life and death. At Tier IV, Raven can communicate with the dead, perceive soul-residue, and manipulate necrotic energy with surgical precision.' },
  { name: 'Kind Touch, Cold Flesh', tier: 'I', desc: 'A healing skill with a necromantic foundation. Raven\'s touch can mend wounds, but the healed flesh feels momentarily cold — a reminder that the magic comes from someone who walks the line between life and death. Effective but unsettling.' },
  { name: 'Umbramancy', tier: 'III', desc: 'Shadow magic at an advanced level. At Tier III, Raven can shape shadow into semi-solid constructs, use shadows as sensory extensions, and create zones of absolute darkness. Her primary school of study at Scholomance alongside Fel.' },
  { name: 'Veinweaving', tier: 'I', desc: 'Granted by The Arterial Lexicon. The ability to sense and manipulate active blood channels — within herself, willing allies, or spilled blood nearby. Can trace emotion, history, or intent through fresh bloodstains.' },
  { name: 'Grayscale Insight', tier: 'I', desc: 'A perception skill that strips away emotional coloring and reveals situations in stark, objective clarity. Useful for seeing through deception, illusion, and emotional manipulation. The world appears briefly drained of color when active.' },
  { name: 'Moonwell Intuition', tier: 'I', desc: 'A passive awareness skill attuned to water and moonlight. Grants subtle danger-sense near bodies of water and heightened magical perception under moonlight. Occasionally surfaces prophetic impressions in dreams.' },
  { name: 'Accelerated Horizon', tier: 'I', desc: 'An ‹Epochbreaker› time-combat skill. Briefly accelerates Raven\'s personal timeframe, allowing her to perceive and react faster than her surroundings. At Tier I, the window is short but enough for a decisive strike or dodge.' },
  { name: 'Thaumaturgy', tier: 'II', desc: 'The art of fusion casting — combining elements from multiple magical disciplines into a single effect. At Tier II, Raven can reliably blend two schools (e.g., Umbramancy + Murder Magic) and occasionally manage three-school fusions with concentration.' },
  { name: 'Third Presence', tier: 'II', desc: 'A ‹Shattered Self› derivative. Creates a phantom sensory presence — enemies detect three sources of threat instead of one (Raven, Echo, and the Third). At Tier II, the third presence can deliver phantom strikes that cause real flinching.' },
  { name: 'Wings of the Everwill', tier: 'III', desc: 'Manifests spectral wings of crystallized will. At Tier III, grants true flight (not merely gliding), allows aerial combat maneuvers, and the wings can deflect magical projectiles. The wings are visible — dark and luminous, edged in faint gold.' },
  { name: 'Abjuration', tier: 'II', desc: 'Defensive and counter-magic. At Tier II, Raven can erect magical barriers, dispel hostile enchantments, and create wards against specific damage types or magical schools. A practical, essential discipline.' },
  { name: 'Smithing', tier: 'II', desc: 'Magical and mundane metalwork. At Tier II, Raven can maintain and enhance her equipment, inscribe minor enchantments, and perform field repairs on magical items. Not her primary strength but a valuable utility skill.' },
  { name: 'Essence Reservoir', tier: 'III', desc: 'Expands and manages Raven\'s mana pool. At Tier III, provides a significantly larger reserve than baseline, allows efficient mana recovery during brief rests, and can temporarily overclock mana output at the cost of post-combat exhaustion.' },
  { name: 'Sepulchral Refrain', tier: 'III', desc: 'A death-magic performance skill. Raven speaks or sings, and the words carry necrotic resonance that weakens, binds, or commands undead and spirits. At Tier III, the refrain can affect a wide area and even give pause to powerful undead.' },
  { name: 'Supremacy Harvest', tier: 'II', desc: 'A ‹Demon Lord› growth skill. After defeating a significant foe, Raven absorbs a fragment of their power — a temporary stat boost, a brief skill mimicry, or insight into their techniques. At Tier II, the harvest is more reliable and the absorbed power lasts longer.' },
  { name: null, tier: null, desc: null },
  { name: null, tier: null, desc: null },
];

const PERKS = [
  { name: 'Boon of the White Bloom', type: 'Passive', desc: 'In places of death and despair — graveyards, charnel halls, battlefields, desecrated places — the air around Raven calms. Aggression toward her from minor undead or emotionally tormented enemies is delayed, as if something unseen holds them back for a moment, asking them to remember who they were.' },
  { name: 'Desire Remembered', type: 'Active · 1/Day', desc: 'Raven does not fear her wanting. She remembers it — and wields it. Once per day, she may invoke one true desire aloud, and her next skill, spell, or attack benefits from additional Charisma scaling. The desire must be genuine.' },
  { name: 'Ember of Self Control', type: 'Passive / Active', desc: 'Passively boosts willpower against external influence. Once per day, can be activated to burn away foreign mental and emotional influences — charm, fear, compulsion, despair — leaving only Raven\'s own mind behind the flame.' },
  { name: 'Mark of the Hollow Choir', type: 'Active · 1/Hour', desc: 'Raven can imbue her voice with a strange weight for a time. Enemies hesitate when she commands, and allies are strangely reassured — as if a chorus of unseen voices stands behind her words, lending them gravity.' },
  { name: 'Scarlet Mark', type: 'Passive / Active', desc: 'Provides deep insight into Blood Magic and Murder Magic — Raven can sense the structure and intent behind these spells instinctively. The mark flares to alert her when Blood or Murder Magic is used nearby. Once per day, she can interrupt a blood ritual by slashing open her palm and bleeding on the ritual site.' },
  { name: 'Shattered Self', type: 'Passive / Active', desc: 'The defining perk of Raven\'s dual nature. Grants her second primary class ‹Eclipse Princess› and the existence of Echo. Once per day, Raven may summon Echo for up to 40 seconds. Echo acts fully independently, using any of Raven\'s skills, and always chooses differently than Raven would. While Echo is manifested, Raven cannot be affected by charm, suggestion, or fear — but also cannot benefit from ally-based inspiration effects.' },
  { name: 'Stillwater Memory', type: 'Passive', desc: 'Raven\'s connection to purified waters deepens. Water-based spells and abilities have their duration or effect subtly extended when cast in natural environments. While submerged or in rain, mana regeneration slightly increases and water magic resists interruption. Spirits or creatures aligned with water may recognize her as a purifier and hesitate before acting with hostility.' },
];

const GEAR = {
  'Weapons & Tools': [
    { name: 'Sutureblade, Threaded Grief', fx: [{ n: 'Wound as Restoration', d: 'Strikes unravel affliction. Against cursed, possessed, or transformed creatures, the blade severs the affliction without killing the host. Leaves a silver scar-line.' }, { n: 'Fatecleave', d: 'Once per day, cuts through destiny itself — negating a prophecy, fatal strike, or divinely mandated doom. The wielder is scarred each time.' }, { n: "Mercy's Edge", d: 'Cannot kill unless the wielder deliberately chooses death. Recoils against rage or impulse; surges with radiant force when wielded with clarity and purpose.' }, { n: 'Grieving Edge', d: 'Stores sorrow from each act of mercy or restraint. When drawn against an oath-breaker, it burns with righteous weight, bypassing all magical or divine defense.' }, { n: 'Sever Regret', d: 'Can touch a willing ally and remove a memory tied to deep emotional pain. The memory is stored in the blade — the wielder can relive it later.' }], warn: 'Each time the blade heals through harm, the wielder experiences a fraction of the pain taken away. This accumulates in the soul.', flav: '"It was never meant to kill. Not truly. It was meant to close what never should have been opened."' },
    { name: 'Riverglass Fang', fx: [{ n: 'Flowcut Form', d: 'Unnaturally fluid in motion. No momentum penalty between chained attacks. Boosted in water.' }, { n: 'Spellchannel Core', d: 'Stores one spell for detonation on the next melee strike.' }, { n: 'Moonwater Resonance', d: 'Attacks become silent in natural water or rain. Stealth boost and silver-blue afterimages distort enemy reactions.' }, { n: 'Spirit Recognition', d: 'Purified spirits regard it as sacred. Aberrant spirits recoil from its presence.' }], flav: '"It remembers what the river was before the rot — and it fights to keep it so."' },
    { name: 'Thirstbrand Dagger', fx: [{ n: 'Wound to Weave', d: 'Self-inflicted wounds fuel spell surges with heightened potency. These injuries cannot be healed by expending health.' }, { n: 'Arcane Hunger', d: 'The dagger remembers its user. If not fed blood regularly, it whispers, urging harm.' }, { n: 'Sympathetic Link', d: 'A drop of blood on the blade forms a brief tether — the next spell can target the marked individual regardless of line of sight.' }], flav: '"Every wound a syllable. Every spell, a scream."' },
    { name: 'Tetherlash', fx: [{ n: 'Latching Pull', d: 'Anchors to a struck foe and yanks them off balance. Ideal for breaking formations.' }, { n: 'Ceiling Hook', d: 'Latches to ceilings and archways for vaulting, repositioning, or suspension.' }, { n: 'Whisper Coil', d: 'When coiled, emits a soft hiss that masks the wielder\'s movement.' }], warn: 'The whip does not like being idle. In dreams, you may feel pulled upward.' },
    { name: 'Scriptfang Quill of Covenant and Rebellion', fx: [{ n: 'Script of the Living Word', d: 'Once per hour, write five words or fewer in blood to make them temporarily real. The world twists to accommodate — at a cost.' }, { n: "Bloodletter's Authority", d: 'Blood rituals performed with the quill are faster, harder to dispel, and can override existing wards.' }, { n: 'Scripture of the Unbowed', d: 'Records fulfilled vows. These recorded truths strengthen her presence during blood rites and cause enemies of prophecy to hesitate.' }, { n: 'Ink That Cuts', d: 'Write phrases directly into bodies or objects as delayed runes that trigger when conditions are met.' }, { n: 'The Second Word', d: 'Inscribe a second phrase while the first remains active, drawn from the same emotional core.' }], warn: 'Cannot write lies in blood. Attempting to turns the ink against her, revealing her truest fear.' },
    { name: 'Dirgeflute of the Last Masque', fx: [{ n: 'Soundless Dirge', d: 'A chosen foe hears a melody no one else can perceive. Mental pressure builds with continued play.' }, { n: 'Solo for the Marked', d: 'Extended play escalates to hallucination, phantom pain, or overwhelming dread.' }, { n: 'One-Note Ending', d: 'Once per day, end the performance with a ghostly note that staggers or stuns the entranced target.' }], flav: '"Every masque ends… but not every mask is removed."' },
    { name: 'The Arterial Lexicon', fx: [{ n: 'Veinweaving', d: 'Sense and manipulate active blood channels. Trace emotion, history, or intent through bloodstains.' }, { n: 'Rite of the Living Seal', d: 'Seal part of a dying creature\'s essence into a page. Max seven. Earlier ones rot if exceeded.' }, { n: 'Spilled Ink, Spilled Life', d: 'Substitute blood for mana in rituals. Genuine sacrifice strengthens the effect.' }], warn: 'The back pages contain rituals that should not be used. One page is missing.' },
  ],
  'Armor & Clothing': [
    { name: 'Cuirass of the Silent Sentence', fx: [{ n: 'Silent Dominion', d: 'Cannot be compelled to speak, magically or otherwise.' }, { n: 'Weight of Judgment', d: 'Unjust attackers suffer cumulative slowing, as though bound by unseen cords.' }, { n: 'Iron Witness', d: 'Detects lies and oathbreaking within the last minute, replayed as a whisper.' }], warn: 'Striking the innocent or betraying an oath summons a haunting tolling bell until atonement.' },
    { name: 'Deathfeather Cloak', fx: [{ n: 'Necrotic Resistance', d: 'Resistance to necrotic attacks.' }, { n: 'Veil of the Forgotten', d: 'Stealth bonus in dim light. Motionlessness triggers feather-camouflage.' }, { n: "Death's Mourning", d: 'Once per day, feign death while conscious. Rise partially healed amid spectral feathers.' }], warn: 'Dreams of mourning rites in dead languages.' },
    { name: 'Petal-Pinned Slippers', fx: [{ n: 'Soundless Step', d: 'Zero audible noise on any terrain.' }, { n: 'Untraceable Grace', d: 'Leaves no physical trail whatsoever.' }, { n: 'Lingering Scent', d: 'False perfume trails mislead scent-based trackers.' }] },
  ],
  'Accessories': [
    { name: 'Amber-Touched Hourglass', fx: [{ n: 'Resinbound Flow', d: 'Chronomancy effects last longer and maintain stability under disruption.' }, { n: 'Temporal Anchor', d: 'Partial resistance to hostile time-warping effects.' }, { n: 'Attunement Drift', d: 'Enhanced precision on timing-dependent skills.' }] },
    { name: 'Bracers of the Clinked Chalice', fx: [{ n: 'Resonant Guard', d: 'Builds resonance on deflections. Three successful guards releases a staggering shockwave.' }, { n: 'Toast to Blood', d: 'Deflecting a blow from a previously wounded foe amplifies the next strike against them.' }] },
    { name: 'Splitsecond Watch', fx: [{ n: 'Split the Moment', d: 'Splits a single instant into two parallel fragments — enabling impossible timing.' }, { n: 'Wound the Ticking World', d: 'Temporal backlash desyncs nearby movement and sound.' }], warn: 'Damaged by overuse. The watch seizes if forced too often.' },
    { name: 'Lucid Signet', fx: [{ n: 'Clear of Cloud', d: 'Dampens intoxicants, compulsions, and emotion-altering effects.' }, { n: 'Lucid Rejection', d: 'Once per day, instantly negates all mental status effects.' }, { n: 'Scent of Iron', d: 'Emotional manipulators perceive the wearer as distasteful.' }] },
    { name: 'Giltcoil Band', fx: [{ n: 'Stolen Favor', d: 'Once per day, redirect an enemy buff to yourself.' }, { n: 'Golden Soliloquy', d: 'Charisma increases when outnumbered.' }, { n: 'Lone Majesty', d: 'Passive awe in battle. Enemies must resist the urge to simply watch.' }] },
    { name: 'Graftfang Loop', fx: [{ n: 'Mimic Predator', d: 'Briefly replicate a witnessed monster technique.' }, { n: 'Instinctive Lurch', d: 'Unnatural evasive reactions when caught off guard.' }, { n: 'Spliced Reflex', d: 'Movement skills gain unpredictable fluidity.' }] },
    { name: 'Veinroot Anklet', fx: [{ n: 'Flicker Step', d: 'Burst acceleration in darkness or silence.' }, { n: 'Climbing Bloom', d: 'First step on vertical surfaces ignores normal limitations.' }, { n: 'Echo Veins', d: 'Phantom footfalls mislead pursuers.' }], warn: 'Blood sometimes feels like it moves on its own.' },
    { name: 'Sash of Spiraling Steps', fx: [{ n: 'Flowstate', d: 'Agility increases while in constant motion.' }, { n: 'Spiral Reposition', d: 'Mid-dodge direction changes.' }, { n: 'Momentum Harmony', d: 'Chained physical skills sharpen and smooth.' }] },
  ],
  'Trinkets & Curiosities': [
    { name: 'Cork of the Final Bottle', fx: [{ n: 'Preserved Moment', d: 'Once per day, seal a state of being into a container. Preserved perfectly until released.' }, { n: 'Sealed with Intention', d: 'Symbolic or emotional moments carry powerful resonance when uncorked.' }] },
    { name: 'Folded Napkin of Apology', fx: [{ n: 'Gesture of Grace', d: 'Once per day, pacify a wounded enemy briefly.' }, { n: 'Atoning Thread', d: 'Charisma boost when interacting with those she\'s wronged.' }, { n: 'Marked by Courtesy', d: 'Enemies who reject the napkin suffer a subtle curse on their next attack.' }] },
    { name: 'Mask of the Forgotten Role', fx: [{ n: 'Hidden in the Role', d: 'Obscures identity from all divination.' }, { n: 'Roleborn Echo', d: 'Once per day, assume a convincing false persona for 10 minutes.' }], warn: 'Prolonged wear blurs the line between Raven and the mask.' },
    { name: 'Red Verdict Charm', fx: [{ n: "Verdict's Edge", d: 'Amplifies the next blow against a foe who struck first.' }, { n: 'Echo of Harm', d: 'Once per day, stagger an attacker after taking grievous injury.' }], warn: 'Grows cold and inert if she harms the truly innocent.' },
    { name: 'White Glove of the Final Ovation', fx: [{ n: 'Emotive Masking', d: 'Suppresses emotional output — face, voice, posture stay neutral.' }, { n: 'Gesture of the Hollow Stage', d: 'Once per rest, a dramatic gesture causes hesitation.' }, { n: 'Phantom Ovation', d: 'Spectral applause after poetic victories. Allies gain morale.' }], warn: 'Stores suppressed grief. May eventually leak.' },
  ],
};

const RELS = [
  { name: 'Ascenia', desc: 'An elf. Silver hair, starry-night eyes. Dark, intricately patterned robes with celestial motifs. Class: ‹Archimage›, specializing in Thaumaturgy. One of Raven\'s closest friends at Scholomance. Carries the quiet confidence of someone who has fully earned her power.' },
  { name: 'Kaela', desc: 'Sea-green hair. Energetic, bubbly, warm, very social. A Hydromancer. Raven is beginning to feel a spark of romantic interest toward her — something new and not entirely comfortable. Kaela is sunlight-adjacent in a way that draws the twilight princess more than she has fully admitted to herself.' },
  { name: 'Fel', desc: 'Black hair, often braided. Glasses. Scholarly robes. Serious, studious — the gothesque nerd of the group. Studies Umbral Magic, the same as Raven, forming a natural point of kinship.' },
  { name: 'King Corvus Nightingale', desc: '‹Machiavellian Nightingale King (3)›. A Tier 3 ascended king. King first, father second. Raven loves him and does not fully trust him. He would use her ‹Demon Lord› status. So she ran before he could. Her feelings are complicated — love, wariness, missing him, and the decision to flee all coexist.' },
  { name: 'Prince Rook Nightingale', desc: '‹Nightingale Prince (1)›. Raven\'s older brother and heir. Has always been kind and generous to her. She loves him dearly and fiercely. The first thing she did at Scholomance was write him a letter to say she was safe.' },
  { name: "Raven's Mother", desc: 'An elf. Lives in the Elven Kingdom. Raven has never met her. A wound that exists quietly, not yet examined.' },
];

// ──── DOM BUILDERS ────

function buildSkillsPage(container) {
  container.innerHTML = '';
  SKILLS.forEach((s, i) => {
    const div = document.createElement('div');
    div.className = 'skill-card' + (s.name ? '' : ' skill-card-empty');
    div.innerHTML = s.name
      ? `<div class="skill-card-header"><span class="skill-slot">${i + 1}.</span><span class="skill-card-name" contenteditable="true">‹${s.name}›</span><span class="skill-card-tier" contenteditable="true">${s.tier}</span></div><div class="skill-card-desc" contenteditable="true">${s.desc}</div>`
      : `<div class="skill-card-header"><span class="skill-slot">${i + 1}.</span><span class="skill-card-name" contenteditable="true">Empty Slot</span><span class="skill-card-tier">—</span></div>`;
    container.appendChild(div);
  });
}

function buildPerksPage(container) {
  container.innerHTML = '';
  PERKS.forEach(p => {
    const div = document.createElement('div');
    div.className = 'perk-card';
    div.innerHTML = `<div class="perk-name" contenteditable="true">${p.name}</div><div class="perk-type" contenteditable="true">${p.type}</div><div class="perk-desc" contenteditable="true">${p.desc}</div>`;
    container.appendChild(div);
  });
}

function buildGearPage(container) {
  container.innerHTML = '';
  Object.entries(GEAR).forEach(([cat, items]) => {
    const catDiv = document.createElement('div');
    catDiv.className = 'gear-category-title';
    catDiv.textContent = cat;
    container.appendChild(catDiv);
    items.forEach(item => {
      const d = document.createElement('div');
      d.className = 'gear-item';
      let html = item.fx.map(e => `<div class="gear-effect"><span class="gear-effect-name">${e.n}</span> — ${e.d}</div>`).join('');
      if (item.warn) html += `<div class="gear-drawback">\u26A0 ${item.warn}</div>`;
      if (item.flav) html += `<div class="gear-flavor">${item.flav}</div>`;
      d.innerHTML = `<div class="gear-toggle" onclick="toggleGear(this)"><span class="gear-arrow">\u25B6</span><span class="gear-name">${item.name}</span></div><div class="gear-details" contenteditable="true">${html}</div>`;
      container.appendChild(d);
    });
  });
}

function buildRelsPage(container) {
  container.innerHTML = '';
  RELS.forEach(r => {
    const d = document.createElement('div');
    d.className = 'rel-card';
    d.innerHTML = `<div class="rel-name" contenteditable="true">${r.name}</div><div class="rel-details" contenteditable="true">${r.desc}</div>`;
    container.appendChild(d);
  });
}

function initPages() {
  buildSkillsPage(document.getElementById('skills-list'));
  buildPerksPage(document.getElementById('perks-list'));
  buildGearPage(document.getElementById('gear-list'));
  buildRelsPage(document.getElementById('rels-list'));
}

// ──── UI HELPERS ────

function toggleCard(el) {
  el.closest('.card').classList.toggle('collapsed');
}

function toggleGear(el) {
  el.closest('.gear-item').classList.toggle('open');
}

// ──── ROUTING ────

const PAGES = ['overview', 'skills', 'perks', 'inventory', 'identity', 'relationships', 'chronicle'];

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
  // Handle hash changes
  window.addEventListener('hashchange', () => {
    navigate(location.hash.replace('#', '') || 'overview');
  });
  // Nav tab clicks
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const page = tab.id.replace('tab-', '');
      location.hash = page;
    });
  });
  // Initial route
  navigate(location.hash.replace('#', '') || 'overview');
}

// ──── FIREBASE SYNC ────

const CONFIG_KEY = 'raven_fb_cfg';
const LOCAL_KEY = 'raven_sheet_v3';
let db = null, sheetRef = null, isOnline = false, activeSection = null, suppressRemote = {}, saveTimers = {};

const ALL_KEYS = [
  'header/charName', 'header/charTitle', 'header/charRace',
  'stats', 'classes', 'disciplines',
  'skills', 'perks', 'gear',
  'personality', 'oath', 'echo',
  'relationships', 'story', 'notes'
];

// Focus tracking
document.addEventListener('focusin', e => {
  const sec = e.target.closest('[data-section]');
  const fld = e.target.closest('[data-field]');
  if (sec) activeSection = sec.dataset.section;
  else if (fld) activeSection = fld.dataset.field;
  else if (e.target.id === 'notes-area') activeSection = 'notes';
  else activeSection = null;
});
document.addEventListener('focusout', () => { setTimeout(() => { activeSection = null; }, 300); });

function getVal(key) {
  if (key === 'stats') { const o = {}; document.querySelectorAll('.stat-input').forEach(i => { o[i.dataset.stat] = i.value; }); return o; }
  if (key === 'notes') return document.getElementById('notes-area').value;
  const fld = document.querySelector(`[data-field="${key}"]`);
  if (fld) return fld.innerHTML;
  const sec = document.querySelector(`[data-section="${key}"]`);
  if (sec) return sec.innerHTML;
  return null;
}

function setVal(key, val) {
  if (val == null) return;
  if (key === 'stats' && typeof val === 'object') { document.querySelectorAll('.stat-input').forEach(i => { if (val[i.dataset.stat] !== undefined) i.value = val[i.dataset.stat]; }); return; }
  if (key === 'notes') { document.getElementById('notes-area').value = val; return; }
  const fld = document.querySelector(`[data-field="${key}"]`);
  if (fld) { fld.innerHTML = val; return; }
  const sec = document.querySelector(`[data-section="${key}"]`);
  if (sec) {
    sec.innerHTML = val;
    if (key === 'gear') sec.querySelectorAll('.gear-toggle').forEach(t => t.setAttribute('onclick', 'toggleGear(this)'));
  }
}

function setStatus(state, label) {
  document.getElementById('status-dot').className = 'status-dot ' + state;
  document.getElementById('status-label').textContent = label;
}
function setSave(text, cls) {
  const el = document.getElementById('save-indicator');
  el.textContent = text; el.className = 'save-indicator ' + (cls || '');
}

function scheduleSave(key) {
  if (saveTimers[key]) clearTimeout(saveTimers[key]);
  setSave('Saving...', 'saving');
  saveTimers[key] = setTimeout(() => {
    const val = getVal(key);
    if (isOnline && sheetRef) {
      suppressRemote[key] = true;
      sheetRef.child(key).set(val).then(() => setSave('Saved', 'saved')).catch(() => setSave('Error', ''));
    }
    try { const l = JSON.parse(localStorage.getItem(LOCAL_KEY) || '{}'); l[key] = val; localStorage.setItem(LOCAL_KEY, JSON.stringify(l)); } catch (e) { }
    if (!isOnline) setSave('Saved locally', 'saved');
  }, 800);
}

function attachSyncListeners() {
  document.querySelectorAll('[data-field]').forEach(el => el.addEventListener('input', () => scheduleSave(el.dataset.field)));
  document.querySelectorAll('[data-section]').forEach(el => el.addEventListener('input', () => scheduleSave(el.dataset.section)));
  document.querySelectorAll('.stat-input').forEach(i => i.addEventListener('input', () => scheduleSave('stats')));
  document.getElementById('notes-area').addEventListener('input', () => scheduleSave('notes'));
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
    db = firebase.database();
    sheetRef = db.ref('sheet');
    db.ref('.info/connected').on('value', snap => {
      if (snap.val() === true) { isOnline = true; setStatus('connected', 'Connected — syncing live'); }
      else { isOnline = false; setStatus('offline', 'Offline — saving locally'); }
    });
    showApp(); startListening();
  } catch (e) {
    document.getElementById('setup-error').textContent = 'Error: ' + e.message;
    document.getElementById('setup-error').style.display = 'block';
  }
}

function saveConfig() {
  if (!firebaseAvailable()) { document.getElementById('setup-error').textContent = 'Firebase SDK not loaded. Download and open in a browser.'; document.getElementById('setup-error').style.display = 'block'; return; }
  const a = document.getElementById('cfg-apiKey').value.trim();
  const c = document.getElementById('cfg-databaseURL').value.trim();
  const b = document.getElementById('cfg-authDomain').value.trim();
  const d = document.getElementById('cfg-projectId').value.trim();
  if (!a || !c) { document.getElementById('setup-error').textContent = 'apiKey and databaseURL are required.'; document.getElementById('setup-error').style.display = 'block'; return; }
  const cfg = { apiKey: a, authDomain: b, databaseURL: c, projectId: d };
  localStorage.setItem(CONFIG_KEY, JSON.stringify(cfg));
  initFirebase(cfg);
}

function skipSetup() {
  isOnline = false; showApp();
  setStatus('offline', firebaseAvailable() ? 'Offline — localStorage only' : 'Preview mode — download for sync');
  try { const l = JSON.parse(localStorage.getItem(LOCAL_KEY) || '{}'); ALL_KEYS.forEach(k => { if (l[k]) setVal(k, l[k]); }); } catch (e) { }
}

// ──── BOOT ────

document.addEventListener('DOMContentLoaded', () => {
  initPages();
  if (!firebaseAvailable()) { skipSetup(); return; }
  const s = localStorage.getItem(CONFIG_KEY);
  if (s) { try { initFirebase(JSON.parse(s)); } catch (e) { document.getElementById('setup-panel').style.display = 'block'; } }
  else { document.getElementById('setup-panel').style.display = 'block'; }
});
