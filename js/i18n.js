(function () {
  const STORAGE_KEY = "9bitts-lang";
  const LOCALES = ["en", "pt", "de"];
  const LOCALE_LABELS = { en: "EN", pt: "PT", de: "DE" };

  const dict = {
    en: {
      "nav.listen": "Listen",
      "nav.notes": "Notes",
      "nav.journal": "Journal",
      "nav.world": "World",
      "nav.visuals": "Visuals",
      "nav.objects": "Objects",
      "nav.about": "About",
      "nav.menu": "Menu",
      "nav.lang": "Language",

      "footer.tagline": "Electronic music for attention. Made in Leipzig.",
      "footer.tagline.home": "Electronic music for attention. A small home in the universe — made in Leipzig.",
      "footer.dev": "Also building systems →",
      "footer.explore": "Explore",
      "footer.connect": "Connect",
      "footer.legal": "Legal",
      "footer.terms": "Terms",
      "footer.privacy": "Privacy",
      "footer.contact": "Contact",
      "footer.copy": "© 9bitts 2026",
      "footer.copy.full": "© 9bitts 2026. Made in Germany.",

      "cta.email": "Send an email",
      "cta.whatsapp": "Message on WhatsApp",
      "cta.support": "Support the project",
      "cta.youtube": "Watch on YouTube →",
      "cta.setPage": "Open set page →",
      "cta.allSets": "All sets →",
      "cta.openSet": "Open set →",

      "join.eyebrow": "Collaborate",
      "join.photographers": "Photographers",
      "join.djs": "DJs",
      "join.producers": "Producers",

      "radio.toggle": "9bitts Radio",
      "radio.onAir": "9bitts Radio · On air",
      "radio.close": "Close radio",

      "listen.mix": "Mix {n}",
      "listen.tribute": "Tribute",
      "listen.set": "Set",
      "listen.empty": "Sets are on their way.",
      "listen.error": "Couldn't load sets right now.",
      "listen.loading": "Loading sets…",

      "notes.empty": "The first note is on its way.",
      "notes.error": "Couldn't load notes right now. Check back soon.",
      "notes.loading": "Loading notes…",
      "notes.continue": "Continue",

      "journal.loading": "Loading essays…",
      "journal.empty": "The first essay is on its way.",
      "journal.error": "Couldn't load essays right now.",
      "journal.read": "Read →",
      "journal.prev": "← Previous",
      "journal.next": "Next →",

      "featured.prefix": "Featured",
      "mix.back": "← All sets",
      "mix.youtube": "Watch on YouTube",
      "mix.mixcloud": "Open on Mixcloud",
      "mix.more": "Explore more from 9bitts",
      "mix.guide": "Electronic Music Guide",

      "home.eyebrow": "Leipzig · Melodic techno · Deep house",
      "home.tagline": "electronic music for attention",
      "home.lead": "A small room where sound, image, and thought meet. Sets made to be heard from start to finish — and words for what the music leaves behind.",
      "home.cta.play": "Play the latest set",
      "home.cta.note": "Read today's note",
      "home.now": "Now in the room",
      "home.room.eyebrow": "The room",
      "home.room.title": "Press play.<br><em>Stay until the end.</em>",
      "home.room.lead": "One featured set — sequenced with intention. Not a playlist. A journey.",
      "home.notes.eyebrow": "Notes",
      "home.notes.title": "What is in the room<br><em>this week.</em>",
      "home.notes.lead": "Short dispatches — a listen, a thought, a visual. Updated often. Easy to return to.",
      "home.notes.cta": "All notes",
      "home.journal.eyebrow": "Journal",
      "home.journal.title": "Longer thoughts<br><em>from the quiet side.</em>",
      "home.journal.lead": "Essays drawn from thinkers who looked closely — paired with the music that makes them land.",
      "home.journal.card1.tag": "Reflection",
      "home.journal.card1.title": "Music, art, and the examined life",
      "home.journal.card1.body": "Open the journal for essays on attention, craft, and what sound carries when it stops being entertainment.",
      "home.journal.card2.title": "The unexamined life",
      "home.journal.card2.body": "He didn't ask questions to win arguments. He asked because most people were sleepwalking through their own existence.",
      "home.journal.card3.title": "Loss as teacher",
      "home.journal.card3.body": "What grief taught one of music's most uncompromising voices — and what it asks of anyone who makes work.",
      "home.journal.cta": "Enter the journal",
      "home.around.eyebrow": "Around the sound",
      "home.around.title": "The world that<br><em>holds the music.</em>",
      "home.world.title": "Guide & artists",
      "home.world.body": "A living encyclopedia of electronic music — and the people shaping it today.",
      "home.visuals.title": "The visual side",
      "home.visuals.body": "Photographs from the floor, the booth, the light. An archive in progress.",
      "home.belong.eyebrow": "Stay in the room",
      "home.belong.title": "One thought.<br>One set.<br><em>Every week.</em>",
      "home.belong.body": "Reflections on music and attention — delivered quietly. No noise. Just the work.",
      "home.support.eyebrow": "Keep the frequency alive",
      "home.support.title": "If this music<br>means something<br><em>to you.</em>",
      "home.support.body": "9bitts is made by one person, with no label behind it. If a set or a note stayed with you, you can help keep the room open.",
      "home.support.fine": "Or take something with you →",
      "home.join.title": "Want to be part<br>of <em>the room?</em>",
      "home.join.lead": "Photographers and DJs who care about attention and atmosphere — write to me. Tell me who you are and what you make. I answer personally.",

      "listen.eyebrow": "Listen",
      "listen.title": "Sets made to be heard<br><em>in full.</em>",
      "listen.lead": "Carefully sequenced mixes. Each set has its own page — press play, stay until the end. YouTube for the journey, Mixcloud when you want the room open.",
      "listen.join.title": "DJ or producer<br>in the <em>same spirit?</em>",
      "listen.join.lead": "If your sets live in melodic techno, deep house, or the quieter hours of the night — and you want to be part of 9bitts — get in touch. Photographers welcome too.",

      "notes.eyebrow": "Notes",
      "notes.title": "A living feed<br><em>from the room.</em>",
      "notes.lead": "Short pieces — a listen, a thought, a visual cue. Written often so there is always something new to return to. For longer essays, visit the Journal.",

      "journal.eyebrow": "Journal",
      "journal.title": "Music, art,<br>and the <em>examined life.</em>",
      "journal.lead": "Longer essays — one thought at a time, paired with the music that makes it land. For short weekly dispatches, see Notes.",
      "journal.nl.eyebrow": "Stay close",
      "journal.nl.title": "One thought. One set. Every week.",
      "journal.nl.body": "A quiet letter from the room — reflection and sound, nothing else.",

      "world.eyebrow": "World",
      "world.title": "The culture<br><em>around the sound.</em>",
      "world.lead": "Electronic music did not appear from nowhere. It has origins, machines, cities, and people. This is the map 9bitts keeps open.",
      "world.guide.tag": "Guide",
      "world.guide.title": "The story of electronic music",
      "world.guide.body": "Origins, genres, machines, cities, culture — from musique concrète to Berlin techno. A living encyclopedia.",
      "world.artists.tag": "Artists",
      "world.artists.title": "The people behind the sound",
      "world.artists.body": "A curated guide to producers and DJs shaping melodic techno, deep house, techno, and beyond.",

      "visuals.eyebrow": "Visuals",
      "visuals.title": "The visual side<br><em>of the sound.</em>",
      "visuals.lead": "An archive of electronic music in images — floor, booth, haze, the last light before the drop. Built slowly, with credit always given.",
      "visuals.cell1": "Atmosphere · archive growing",
      "visuals.cell2": "Booth",
      "visuals.cell3": "Floor",
      "visuals.cell4": "Light",
      "visuals.cell5": "Night · submit your work",
      "visuals.photo.tag": "Photographers",
      "visuals.photo.title": "Work with 9bitts",
      "visuals.photo.body": "Original photos from electronic music events — your credit, your name, your audience.",
      "visuals.photo.cta": "For photographers",
      "visuals.archive.tag": "Full archive",
      "visuals.archive.title": "Photos",
      "visuals.archive.body": "The longer visual board — mood, references, and featured frames.",
      "visuals.archive.cta": "Open photos",
      "visuals.join.title": "Shoot for the<br><em>archive?</em>",
      "visuals.join.lead": "If you photograph electronic music with care — floor, booth, light — send a few frames or a link. Full credit, always. DJs who want to connect are welcome too.",

      "objects.eyebrow": "Objects",
      "objects.title": "Things that belong<br><em>in the room.</em>",
      "objects.lead": "Support the project, or take something with you — tools and books chosen with the same attention as the sets. Nothing here is noise.",
      "objects.support.title": "Keep the frequency alive",
      "objects.support.body": "9bitts is built by one person in Leipzig — no label, no sponsor. If a set, a note, or an essay stayed with you, supporting the project is how the room stays open.",
      "objects.support.fine": "Any amount. Secure via PayPal. Thank you for listening.",
      "objects.shelf.made": "Made with 9bitts",
      "objects.shelf.made.lead": "Original objects from the project — arriving soon. The same spirit as the sets: few, considered, worth keeping.",
      "objects.print.title": "Mix prints",
      "objects.print.body": "Artwork from Dusk, Sunrise, Between Worlds — for the wall that faces the speakers.",
      "objects.zine.title": "Listening zine",
      "objects.zine.body": "One essay, one tracklist, one photograph. A small object for slow listening.",
      "objects.tools.title": "Studio tools",
      "objects.tools.body": "Sample moods and templates used in the 9bitts workflow — when they are ready to leave the booth.",
      "objects.shelf.studio": "In the studio",
      "objects.shelf.studio.lead": "What actually sits in the process. If you buy through these links, a small part helps keep 9bitts going — at no extra cost to you.",
      "objects.beatport.badge": "Most used",
      "objects.beatport.body": "Where every 9bitts set starts. Melodic techno, deep house, progressive — chosen one track at a time.",
      "objects.beatport.cta": "Open Beatport →",
      "objects.djcity.badge": "Record pool",
      "objects.djcity.body": "Daily releases, edits, and versions that keep a working set current.",
      "objects.djcity.cta": "Explore DJcity →",
      "objects.plugin.badge": "Production",
      "objects.plugin.body": "Plugins, synths, and sounds for understanding how the music is built.",
      "objects.plugin.cta": "Browse tools →",
      "objects.shelf.reading": "Essential reading",
      "objects.book.view": "View →",
      "objects.book1": "Simon Reynolds — the definitive history of rave and dance culture.",
      "objects.book2": "Brewster & Broughton — the DJ as the through-line of dance music history.",
      "objects.book3": "David Stubbs — from Stockhausen to the present, machines and mavericks.",
      "objects.book4": "David Toop — ambient listening, from Debussy to Aphex Twin.",
      "objects.book5": "Dan Sicko — Detroit techno, industrial soil, and a sound that changed the world.",
      "objects.book6": "Matthew Collin — ecstasy culture, acid house, and a generation remade by sound.",
      "objects.disclosure": "<strong>Affiliate disclosure.</strong> Some links on this page are affiliate links. When you purchase through them, 9bitts receives a small commission at no extra cost to you. Recommendations are genuine — only platforms and books actually used and trusted.",

      "about.eyebrow": "About",
      "about.title": "Music, attention<br>and <em>depth.</em>",
      "about.lead": "9bitts began as a curation of electronic music. It grew into a small room where sound, image, and thought meet — made by one person, in Leipzig.",
      "about.01.num": "01 — The project",
      "about.01.title": "Not a radio. Not a playlist.",
      "about.01.p1": "9bitts is a curatorial project about electronic music — and what it carries when it stops being just entertainment. Each set is chosen with intention: for the energy it has, the moment it evokes, the way its tracks speak to each other.",
      "about.01.p2": "Notes keep the room alive week to week. The journal goes deeper. The world guide maps the culture. <strong>It is a perspective — on sound, on attention, on what is worth staying for.</strong>",
      "about.02.num": "02 — The person",
      "about.02.title": "One person, one city, one project.",
      "about.02.p1": "9bitts is a one-person project, built in Leipzig. Not a label. Not an agency. Someone who believes electronic music deserves to be taken seriously — as art, as culture, as a form of attention to the world.",
      "about.02.p2": "Leipzig has always made space for subculture and for music that asks something of the people who listen. <strong>That is the soil.</strong>",
      "about.03.num": "03 — The craft",
      "about.03.title": "Automation in service of attention.",
      "about.03.p1": "A custom pipeline helps publish across platforms — not to replace curation, but to free it. The real work stays human: which track, which idea, which image is worth your time.",
      "about.03.p2": "<strong>The machine handles the rest.</strong>",
      "about.03.studio": "The same craft that keeps this room running also builds custom web systems — platforms that need to work with real data, real users, and real care.",
      "about.04.num": "04 — The name",
      "about.04.title": "A small signal that carries something large.",
      "about.04.p1": "The name has to do with frequency, with bits of information, with the idea that a small signal can carry something large. Electronic music works the same way — repetition with variation, structure with freedom.",
      "about.04.p2": "<strong>Nine bits. Two t's. A small asymmetry. That is enough.</strong>",
      "about.05.num": "05 — How it stays alive",
      "about.05.title": "If this music means something to you.",
      "about.05.p1": "There is no sponsor behind the curtain. The room stays open because listeners stay — and because some of them choose to support the work or take an object from the studio shelf.",
      "about.05.support.title": "Keep the frequency alive",
      "about.05.support.body": "Support is how one person keeps publishing sets, notes, and essays without turning the project into noise.",
      "about.05.objects": "Visit Objects",
      "about.belong.eyebrow": "Stay in the room",
      "about.belong.title": "One thought.<br>One set.<br><em>Every week.</em>",
      "about.belong.body": "A quiet letter — reflection and sound. Nothing else.",
      "about.join.title": "Want to be part<br>of <em>the room?</em>",
      "about.join.lead": "Photographers and DJs who care about attention, atmosphere, and craft — write to me. Tell me who you are and what you make. I answer personally.",
    },

    pt: {
      "nav.listen": "Ouvir",
      "nav.notes": "Notas",
      "nav.journal": "Diário",
      "nav.world": "Mundo",
      "nav.visuals": "Visuais",
      "nav.objects": "Objetos",
      "nav.about": "Sobre",
      "nav.menu": "Menu",
      "nav.lang": "Idioma",

      "footer.tagline": "Música eletrônica para atenção. Feito em Leipzig.",
      "footer.tagline.home": "Música eletrônica para atenção. Uma pequena casa no universo — feita em Leipzig.",
      "footer.dev": "Também construindo sistemas →",
      "footer.explore": "Explorar",
      "footer.connect": "Conectar",
      "footer.legal": "Legal",
      "footer.terms": "Termos",
      "footer.privacy": "Privacidade",
      "footer.contact": "Contato",
      "footer.copy": "© 9bitts 2026",
      "footer.copy.full": "© 9bitts 2026. Feito na Alemanha.",

      "cta.email": "Enviar e-mail",
      "cta.whatsapp": "Mensagem no WhatsApp",
      "cta.support": "Apoiar o projeto",
      "cta.youtube": "Ver no YouTube →",
      "cta.setPage": "Abrir página do set →",
      "cta.allSets": "Todos os sets →",
      "cta.openSet": "Abrir set →",

      "join.eyebrow": "Colaborar",
      "join.photographers": "Fotógrafos",
      "join.djs": "DJs",
      "join.producers": "Produtores",

      "radio.toggle": "9bitts Rádio",
      "radio.onAir": "9bitts Rádio · No ar",
      "radio.close": "Fechar rádio",

      "listen.mix": "Mix {n}",
      "listen.tribute": "Tributo",
      "listen.set": "Set",
      "listen.empty": "Os sets estão a caminho.",
      "listen.error": "Não foi possível carregar os sets agora.",
      "listen.loading": "Carregando sets…",

      "notes.empty": "A primeira nota está a caminho.",
      "notes.error": "Não foi possível carregar as notas agora. Volte em breve.",
      "notes.loading": "Carregando notas…",
      "notes.continue": "Continuar",

      "journal.loading": "Carregando ensaios…",
      "journal.empty": "O primeiro ensaio está a caminho.",
      "journal.error": "Não foi possível carregar os ensaios agora.",
      "journal.read": "Ler →",
      "journal.prev": "← Anterior",
      "journal.next": "Próximo →",

      "featured.prefix": "Destaque",
      "mix.back": "← Todos os sets",
      "mix.youtube": "Ver no YouTube",
      "mix.mixcloud": "Abrir no Mixcloud",
      "mix.more": "Explore mais do 9bitts",
      "mix.guide": "Guia de Música Eletrônica",

      "home.eyebrow": "Leipzig · Melodic techno · Deep house",
      "home.tagline": "música eletrônica para atenção",
      "home.lead": "Um pequeno espaço onde som, imagem e pensamento se encontram. Sets feitos para serem ouvidos do início ao fim — e palavras para o que a música deixa.",
      "home.cta.play": "Tocar o último set",
      "home.cta.note": "Ler a nota de hoje",
      "home.now": "Agora na sala",
      "home.room.eyebrow": "A sala",
      "home.room.title": "Aperte play.<br><em>Fique até o fim.</em>",
      "home.room.lead": "Um set em destaque — sequenciado com intenção. Não é uma playlist. É uma jornada.",
      "home.notes.eyebrow": "Notas",
      "home.notes.title": "O que está na sala<br><em>esta semana.</em>",
      "home.notes.lead": "Despachos curtos — uma escuta, um pensamento, um visual. Atualizados com frequência. Fáceis de voltar.",
      "home.notes.cta": "Todas as notas",
      "home.journal.eyebrow": "Diário",
      "home.journal.title": "Pensamentos mais longos<br><em>do lado quieto.</em>",
      "home.journal.lead": "Ensaios de pensadores que olharam de perto — emparelhados com a música que os faz pousar.",
      "home.journal.card1.tag": "Reflexão",
      "home.journal.card1.title": "Música, arte e a vida examinada",
      "home.journal.card1.body": "Abra o diário para ensaios sobre atenção, ofício e o que o som carrega quando deixa de ser entretenimento.",
      "home.journal.card2.title": "A vida não examinada",
      "home.journal.card2.body": "Ele não fazia perguntas para ganhar discussões. Fazia porque a maioria das pessoas sonambulava pela própria existência.",
      "home.journal.card3.title": "A perda como mestra",
      "home.journal.card3.body": "O que o luto ensinou a uma das vozes mais intransigentes da música — e o que pede a quem cria.",
      "home.journal.cta": "Entrar no diário",
      "home.around.eyebrow": "Em torno do som",
      "home.around.title": "O mundo que<br><em>segura a música.</em>",
      "home.world.title": "Guia e artistas",
      "home.world.body": "Uma enciclopédia viva da música eletrônica — e as pessoas que a moldam hoje.",
      "home.visuals.title": "O lado visual",
      "home.visuals.body": "Fotografias da pista, da cabine, da luz. Um arquivo em progresso.",
      "home.belong.eyebrow": "Fique na sala",
      "home.belong.title": "Um pensamento.<br>Um set.<br><em>Toda semana.</em>",
      "home.belong.body": "Reflexões sobre música e atenção — entregues em silêncio. Sem ruído. Só o trabalho.",
      "home.support.eyebrow": "Mantenha a frequência viva",
      "home.support.title": "Se essa música<br>significa algo<br><em>para você.</em>",
      "home.support.body": "O 9bitts é feito por uma pessoa, sem gravadora por trás. Se um set ou uma nota ficou com você, pode ajudar a manter a sala aberta.",
      "home.support.fine": "Ou leve algo com você →",
      "home.join.title": "Quer fazer parte<br>da <em>sala?</em>",
      "home.join.lead": "Fotógrafos e DJs que se importam com atenção e atmosfera — escrevam para mim. Digam quem são e o que fazem. Respondo pessoalmente.",

      "listen.eyebrow": "Ouvir",
      "listen.title": "Sets feitos para serem ouvidos<br><em>por completo.</em>",
      "listen.lead": "Mixes sequenciados com cuidado. Cada set tem sua página — aperte play, fique até o fim. YouTube para a jornada, Mixcloud quando quiser a sala aberta.",
      "listen.join.title": "DJ ou producer<br>no <em>mesmo espírito?</em>",
      "listen.join.lead": "Se seus sets vivem no melodic techno, deep house ou nas horas mais quietas da noite — e você quer fazer parte do 9bitts — entre em contato. Fotógrafos também são bem-vindos.",

      "notes.eyebrow": "Notas",
      "notes.title": "Um feed vivo<br><em>da sala.</em>",
      "notes.lead": "Peças curtas — uma escuta, um pensamento, um sinal visual. Escritos com frequência para sempre haver algo novo a que voltar. Para ensaios mais longos, visite o Diário.",

      "journal.eyebrow": "Diário",
      "journal.title": "Música, arte<br>e a <em>vida examinada.</em>",
      "journal.lead": "Ensaios mais longos — um pensamento de cada vez, emparelhados com a música que os faz pousar. Para despachos semanais curtos, veja Notas.",
      "journal.nl.eyebrow": "Fique perto",
      "journal.nl.title": "Um pensamento. Um set. Toda semana.",
      "journal.nl.body": "Uma carta quieta da sala — reflexão e som, nada mais.",

      "world.eyebrow": "Mundo",
      "world.title": "A cultura<br><em>em torno do som.</em>",
      "world.lead": "A música eletrônica não surgiu do nada. Tem origens, máquinas, cidades e pessoas. Este é o mapa que o 9bitts mantém aberto.",
      "world.guide.tag": "Guia",
      "world.guide.title": "A história da música eletrônica",
      "world.guide.body": "Origens, gêneros, máquinas, cidades, cultura — da musique concrète ao techno de Berlim. Uma enciclopédia viva.",
      "world.artists.tag": "Artistas",
      "world.artists.title": "As pessoas por trás do som",
      "world.artists.body": "Um guia curado de producers e DJs que moldam melodic techno, deep house, techno e além.",

      "visuals.eyebrow": "Visuais",
      "visuals.title": "O lado visual<br><em>do som.</em>",
      "visuals.lead": "Um arquivo da música eletrônica em imagens — pista, cabine, névoa, a última luz antes do drop. Construído com calma, com crédito sempre dado.",
      "visuals.cell1": "Atmosfera · arquivo crescendo",
      "visuals.cell2": "Cabine",
      "visuals.cell3": "Pista",
      "visuals.cell4": "Luz",
      "visuals.cell5": "Noite · envie seu trabalho",
      "visuals.photo.tag": "Fotógrafos",
      "visuals.photo.title": "Trabalhe com o 9bitts",
      "visuals.photo.body": "Fotos originais de eventos de música eletrônica — seu crédito, seu nome, seu público.",
      "visuals.photo.cta": "Para fotógrafos",
      "visuals.archive.tag": "Arquivo completo",
      "visuals.archive.title": "Fotos",
      "visuals.archive.body": "O quadro visual mais longo — clima, referências e frames em destaque.",
      "visuals.archive.cta": "Abrir fotos",
      "visuals.join.title": "Fotografar para o<br><em>arquivo?</em>",
      "visuals.join.lead": "Se você fotografa música eletrônica com cuidado — pista, cabine, luz — envie alguns frames ou um link. Crédito completo, sempre. DJs que queiram conectar também são bem-vindos.",

      "objects.eyebrow": "Objetos",
      "objects.title": "Coisas que pertencem<br><em>à sala.</em>",
      "objects.lead": "Apoie o projeto ou leve algo consigo — ferramentas e livros escolhidos com a mesma atenção dos sets. Nada aqui é ruído.",
      "objects.support.title": "Mantenha a frequência viva",
      "objects.support.body": "O 9bitts é feito por uma pessoa em Leipzig — sem gravadora, sem patrocinador. Se um set, uma nota ou um ensaio ficou com você, apoiar o projeto é como a sala permanece aberta.",
      "objects.support.fine": "Qualquer valor. Seguro via PayPal. Obrigado por ouvir.",
      "objects.shelf.made": "Feito com 9bitts",
      "objects.shelf.made.lead": "Objetos originais do projeto — em breve. O mesmo espírito dos sets: poucos, considerados, que valem guardar.",
      "objects.print.title": "Prints de mixes",
      "objects.print.body": "Arte de Dusk, Sunrise, Between Worlds — para a parede que enfrenta as caixas.",
      "objects.zine.title": "Zine de escuta",
      "objects.zine.body": "Um ensaio, uma tracklist, uma fotografia. Um objeto pequeno para escuta lenta.",
      "objects.tools.title": "Ferramentas de estúdio",
      "objects.tools.body": "Moods e templates usados no fluxo do 9bitts — quando estiverem prontos para sair da cabine.",
      "objects.shelf.studio": "No estúdio",
      "objects.shelf.studio.lead": "O que realmente faz parte do processo. Se você compra por esses links, uma pequena parte ajuda a manter o 9bitts — sem custo extra para você.",
      "objects.beatport.badge": "Mais usado",
      "objects.beatport.body": "Onde todo set do 9bitts começa. Melodic techno, deep house, progressive — escolhido faixa a faixa.",
      "objects.beatport.cta": "Abrir Beatport →",
      "objects.djcity.badge": "Record pool",
      "objects.djcity.body": "Lançamentos diários, edits e versões que mantêm um set atual.",
      "objects.djcity.cta": "Explorar DJcity →",
      "objects.plugin.badge": "Produção",
      "objects.plugin.body": "Plugins, synths e sons para entender como a música é construída.",
      "objects.plugin.cta": "Ver ferramentas →",
      "objects.shelf.reading": "Leitura essencial",
      "objects.book.view": "Ver →",
      "objects.book1": "Simon Reynolds — a história definitiva da cultura rave e dance.",
      "objects.book2": "Brewster & Broughton — o DJ como fio condutor da história da dance music.",
      "objects.book3": "David Stubbs — de Stockhausen ao presente, máquinas e mavericks.",
      "objects.book4": "David Toop — escuta ambient, de Debussy a Aphex Twin.",
      "objects.book5": "Dan Sicko — techno de Detroit, solo industrial e um som que mudou o mundo.",
      "objects.book6": "Matthew Collin — cultura ecstasy, acid house e uma geração remoldada pelo som.",
      "objects.disclosure": "<strong>Divulgação de afiliados.</strong> Alguns links nesta página são de afiliados. Ao comprar por eles, o 9bitts recebe uma pequena comissão sem custo extra para você. As recomendações são genuínas — só plataformas e livros realmente usados e confiáveis.",

      "about.eyebrow": "Sobre",
      "about.title": "Música, atenção<br>e <em>profundidade.</em>",
      "about.lead": "O 9bitts começou como uma curadoria de música eletrônica. Cresceu para uma pequena sala onde som, imagem e pensamento se encontram — feito por uma pessoa, em Leipzig.",
      "about.01.num": "01 — O projeto",
      "about.01.title": "Não é um rádio. Não é uma playlist.",
      "about.01.p1": "O 9bitts é um projeto curatorial sobre música eletrônica — e o que ela carrega quando deixa de ser só entretenimento. Cada set é escolhido com intenção: pela energia que tem, pelo momento que evoca, pela forma como as faixas conversam entre si.",
      "about.01.p2": "As notas mantêm a sala viva semana a semana. O diário vai mais fundo. O guia do mundo mapeia a cultura. <strong>É uma perspectiva — sobre som, sobre atenção, sobre o que vale a pena ficar.</strong>",
      "about.02.num": "02 — A pessoa",
      "about.02.title": "Uma pessoa, uma cidade, um projeto.",
      "about.02.p1": "O 9bitts é um projeto de uma pessoa, construído em Leipzig. Não é uma gravadora. Não é uma agência. Alguém que acredita que a música eletrônica merece ser levada a sério — como arte, como cultura, como forma de atenção ao mundo.",
      "about.02.p2": "Leipzig sempre fez espaço para a subcultura e para música que pede algo de quem escuta. <strong>Esse é o solo.</strong>",
      "about.03.num": "03 — O ofício",
      "about.03.title": "Automação a serviço da atenção.",
      "about.03.p1": "Um pipeline próprio ajuda a publicar em várias plataformas — não para substituir a curadoria, mas para liberá-la. O trabalho real continua humano: qual faixa, qual ideia, qual imagem vale o seu tempo.",
      "about.03.p2": "<strong>A máquina cuida do resto.</strong>",
      "about.03.studio": "O mesmo ofício que mantém esta sala funcionando também constrói sistemas web sob medida — plataformas que precisam trabalhar com dados reais, usuários reais e cuidado real.",
      "about.04.num": "04 — O nome",
      "about.04.title": "Um sinal pequeno que carrega algo grande.",
      "about.04.p1": "O nome tem a ver com frequência, com bits de informação, com a ideia de que um sinal pequeno pode carregar algo grande. A música eletrônica funciona assim — repetição com variação, estrutura com liberdade.",
      "about.04.p2": "<strong>Nove bits. Dois t's. Uma pequena assimetria. Isso basta.</strong>",
      "about.05.num": "05 — Como permanece vivo",
      "about.05.title": "Se essa música significa algo para você.",
      "about.05.p1": "Não há patrocinador atrás da cortina. A sala permanece aberta porque os ouvintes ficam — e porque alguns escolhem apoiar o trabalho ou levar um objeto da prateleira do estúdio.",
      "about.05.support.title": "Mantenha a frequência viva",
      "about.05.support.body": "O apoio é como uma pessoa continua publicando sets, notas e ensaios sem transformar o projeto em ruído.",
      "about.05.objects": "Visitar Objetos",
      "about.belong.eyebrow": "Fique na sala",
      "about.belong.title": "Um pensamento.<br>Um set.<br><em>Toda semana.</em>",
      "about.belong.body": "Uma carta quieta — reflexão e som. Nada mais.",
      "about.join.title": "Quer fazer parte<br>da <em>sala?</em>",
      "about.join.lead": "Fotógrafos e DJs que se importam com atenção, atmosfera e ofício — escrevam para mim. Digam quem são e o que fazem. Respondo pessoalmente.",
    },

    de: {
      "nav.listen": "Hören",
      "nav.notes": "Notizen",
      "nav.journal": "Journal",
      "nav.world": "Welt",
      "nav.visuals": "Visuell",
      "nav.objects": "Objekte",
      "nav.about": "Über",
      "nav.menu": "Menü",
      "nav.lang": "Sprache",

      "footer.tagline": "Elektronische Musik für Aufmerksamkeit. Gemacht in Leipzig.",
      "footer.tagline.home": "Elektronische Musik für Aufmerksamkeit. Ein kleines Zuhause im Universum — gemacht in Leipzig.",
      "footer.dev": "Auch Systeme bauen →",
      "footer.explore": "Entdecken",
      "footer.connect": "Verbinden",
      "footer.legal": "Rechtliches",
      "footer.terms": "AGB",
      "footer.privacy": "Datenschutz",
      "footer.contact": "Kontakt",
      "footer.copy": "© 9bitts 2026",
      "footer.copy.full": "© 9bitts 2026. Made in Germany.",

      "cta.email": "E-Mail senden",
      "cta.whatsapp": "Nachricht per WhatsApp",
      "cta.support": "Projekt unterstützen",
      "cta.youtube": "Auf YouTube ansehen →",
      "cta.setPage": "Set-Seite öffnen →",
      "cta.allSets": "Alle Sets →",
      "cta.openSet": "Set öffnen →",

      "join.eyebrow": "Mitmachen",
      "join.photographers": "Fotografen",
      "join.djs": "DJs",
      "join.producers": "Produzenten",

      "radio.toggle": "9bitts Radio",
      "radio.onAir": "9bitts Radio · On air",
      "radio.close": "Radio schließen",

      "listen.mix": "Mix {n}",
      "listen.tribute": "Tribute",
      "listen.set": "Set",
      "listen.empty": "Sets sind unterwegs.",
      "listen.error": "Sets konnten gerade nicht geladen werden.",
      "listen.loading": "Sets werden geladen…",

      "notes.empty": "Die erste Notiz ist unterwegs.",
      "notes.error": "Notizen konnten gerade nicht geladen werden. Bald wieder vorbeischauen.",
      "notes.loading": "Notizen werden geladen…",
      "notes.continue": "Weiter",

      "journal.loading": "Essays werden geladen…",
      "journal.empty": "Der erste Essay ist unterwegs.",
      "journal.error": "Essays konnten gerade nicht geladen werden.",
      "journal.read": "Lesen →",
      "journal.prev": "← Zurück",
      "journal.next": "Weiter →",

      "featured.prefix": "Featured",
      "mix.back": "← Alle Sets",
      "mix.youtube": "Auf YouTube ansehen",
      "mix.mixcloud": "Auf Mixcloud öffnen",
      "mix.more": "Mehr von 9bitts entdecken",
      "mix.guide": "Elektronische Musik Guide",

      "home.eyebrow": "Leipzig · Melodic Techno · Deep House",
      "home.tagline": "elektronische Musik für Aufmerksamkeit",
      "home.lead": "Ein kleiner Raum, in dem Klang, Bild und Gedanke sich treffen. Sets zum Durchhören — und Worte für das, was die Musik hinterlässt.",
      "home.cta.play": "Neuestes Set spielen",
      "home.cta.note": "Heutige Notiz lesen",
      "home.now": "Jetzt im Raum",
      "home.room.eyebrow": "Der Raum",
      "home.room.title": "Play drücken.<br><em>Bis zum Ende bleiben.</em>",
      "home.room.lead": "Ein Featured Set — mit Absicht sequenziert. Keine Playlist. Eine Reise.",
      "home.notes.eyebrow": "Notizen",
      "home.notes.title": "Was diese Woche<br><em>im Raum ist.</em>",
      "home.notes.lead": "Kurze Depeschen — ein Hörstück, ein Gedanke, ein Bild. Oft aktualisiert. Leicht zurückzukehren.",
      "home.notes.cta": "Alle Notizen",
      "home.journal.eyebrow": "Journal",
      "home.journal.title": "Längere Gedanken<br><em>von der stillen Seite.</em>",
      "home.journal.lead": "Essays von Denkern, die genau hinsahen — gepaart mit der Musik, die sie landen lässt.",
      "home.journal.card1.tag": "Reflexion",
      "home.journal.card1.title": "Musik, Kunst und das geprüfte Leben",
      "home.journal.card1.body": "Öffne das Journal für Essays über Aufmerksamkeit, Handwerk und was Klang trägt, wenn er aufhört, Unterhaltung zu sein.",
      "home.journal.card2.title": "Das ungeprüfte Leben",
      "home.journal.card2.body": "Er stellte keine Fragen, um Argumente zu gewinnen. Er fragte, weil die meisten Menschen durch die eigene Existenz schlafwandelten.",
      "home.journal.card3.title": "Verlust als Lehrer",
      "home.journal.card3.body": "Was Trauer eine der kompromisslosesten Stimmen der Musik lehrte — und was sie von jedem verlangt, der Arbeit macht.",
      "home.journal.cta": "Ins Journal",
      "home.around.eyebrow": "Um den Klang",
      "home.around.title": "Die Welt, die<br><em>die Musik hält.</em>",
      "home.world.title": "Guide & Artists",
      "home.world.body": "Eine lebendige Enzyklopädie elektronischer Musik — und die Menschen, die sie heute formen.",
      "home.visuals.title": "Die visuelle Seite",
      "home.visuals.body": "Fotografien von Floor, Booth und Licht. Ein Archiv im Aufbau.",
      "home.belong.eyebrow": "Bleib im Raum",
      "home.belong.title": "Ein Gedanke.<br>Ein Set.<br><em>Jede Woche.</em>",
      "home.belong.body": "Reflexionen über Musik und Aufmerksamkeit — leise zugestellt. Kein Lärm. Nur die Arbeit.",
      "home.support.eyebrow": "Die Frequenz am Leben halten",
      "home.support.title": "Wenn diese Musik<br>dir etwas<br><em>bedeutet.</em>",
      "home.support.body": "9bitts wird von einer Person gemacht, ohne Label dahinter. Wenn ein Set oder eine Notiz bei dir blieb, kannst du den Raum offen halten helfen.",
      "home.support.fine": "Oder nimm etwas mit →",
      "home.join.title": "Teil des<br><em>Raums</em> werden?",
      "home.join.lead": "Fotografen und DJs, denen Aufmerksamkeit und Atmosphäre wichtig sind — schreibt mir. Sagt mir, wer ihr seid und was ihr macht. Ich antworte persönlich.",

      "listen.eyebrow": "Hören",
      "listen.title": "Sets zum<br><em>Durchhören.</em>",
      "listen.lead": "Sorgfältig sequenzierte Mixes. Jedes Set hat eine eigene Seite — Play drücken, bis zum Ende bleiben. YouTube für die Reise, Mixcloud wenn der Raum offen bleiben soll.",
      "listen.join.title": "DJ oder Producer<br>im <em>gleichen Geist?</em>",
      "listen.join.lead": "Wenn deine Sets in Melodic Techno, Deep House oder den stilleren Stunden der Nacht leben — und du Teil von 9bitts sein willst — melde dich. Fotografen sind ebenso willkommen.",

      "notes.eyebrow": "Notizen",
      "notes.title": "Ein lebendiger Feed<br><em>aus dem Raum.</em>",
      "notes.lead": "Kurze Stücke — ein Hörstück, ein Gedanke, ein visueller Impuls. Oft geschrieben, damit es immer etwas Neues zum Zurückkehren gibt. Für längere Essays: das Journal.",

      "journal.eyebrow": "Journal",
      "journal.title": "Musik, Kunst<br>und das <em>geprüfte Leben.</em>",
      "journal.lead": "Längere Essays — ein Gedanke nach dem anderen, gepaart mit der Musik, die ihn landen lässt. Für kurze wöchentliche Depeschen: Notizen.",
      "journal.nl.eyebrow": "Bleib nah",
      "journal.nl.title": "Ein Gedanke. Ein Set. Jede Woche.",
      "journal.nl.body": "Ein stiller Brief aus dem Raum — Reflexion und Klang, sonst nichts.",

      "world.eyebrow": "Welt",
      "world.title": "Die Kultur<br><em>um den Klang.</em>",
      "world.lead": "Elektronische Musik kam nicht aus dem Nichts. Sie hat Ursprünge, Maschinen, Städte und Menschen. Das ist die Karte, die 9bitts offen hält.",
      "world.guide.tag": "Guide",
      "world.guide.title": "Die Geschichte elektronischer Musik",
      "world.guide.body": "Ursprünge, Genres, Maschinen, Städte, Kultur — von Musique concrète zu Berliner Techno. Eine lebendige Enzyklopädie.",
      "world.artists.tag": "Artists",
      "world.artists.title": "Die Menschen hinter dem Sound",
      "world.artists.body": "Ein kuratierter Guide zu Producern und DJs, die Melodic Techno, Deep House, Techno und mehr formen.",

      "visuals.eyebrow": "Visuell",
      "visuals.title": "Die visuelle Seite<br><em>des Sounds.</em>",
      "visuals.lead": "Ein Archiv elektronischer Musik in Bildern — Floor, Booth, Nebel, das letzte Licht vor dem Drop. Langsam gebaut, mit Credit immer gegeben.",
      "visuals.cell1": "Atmosphäre · Archiv wächst",
      "visuals.cell2": "Booth",
      "visuals.cell3": "Floor",
      "visuals.cell4": "Licht",
      "visuals.cell5": "Nacht · Arbeit einreichen",
      "visuals.photo.tag": "Fotografen",
      "visuals.photo.title": "Mit 9bitts arbeiten",
      "visuals.photo.body": "Originale Fotos von elektronischen Events — dein Credit, dein Name, dein Publikum.",
      "visuals.photo.cta": "Für Fotografen",
      "visuals.archive.tag": "Volles Archiv",
      "visuals.archive.title": "Fotos",
      "visuals.archive.body": "Das längere visuelle Board — Mood, Referenzen und Featured Frames.",
      "visuals.archive.cta": "Fotos öffnen",
      "visuals.join.title": "Fürs Archiv<br><em>fotografieren?</em>",
      "visuals.join.lead": "Wenn du elektronische Musik mit Sorgfalt fotografierst — Floor, Booth, Licht — schick ein paar Frames oder einen Link. Voller Credit, immer. DJs, die sich verbinden wollen, sind ebenso willkommen.",

      "objects.eyebrow": "Objekte",
      "objects.title": "Dinge, die in den<br><em>Raum gehören.</em>",
      "objects.lead": "Unterstütze das Projekt oder nimm etwas mit — Tools und Bücher mit derselben Aufmerksamkeit wie die Sets. Hier ist nichts Lärm.",
      "objects.support.title": "Die Frequenz am Leben halten",
      "objects.support.body": "9bitts wird von einer Person in Leipzig gebaut — kein Label, kein Sponsor. Wenn ein Set, eine Notiz oder ein Essay bei dir blieb, hält Unterstützung den Raum offen.",
      "objects.support.fine": "Jeder Betrag. Sicher über PayPal. Danke fürs Zuhören.",
      "objects.shelf.made": "Mit 9bitts gemacht",
      "objects.shelf.made.lead": "Originale Objekte aus dem Projekt — kommen bald. Derselbe Geist wie die Sets: wenige, bedacht, wert zu behalten.",
      "objects.print.title": "Mix-Prints",
      "objects.print.body": "Artwork von Dusk, Sunrise, Between Worlds — für die Wand gegenüber den Boxen.",
      "objects.zine.title": "Listening Zine",
      "objects.zine.body": "Ein Essay, eine Tracklist, eine Fotografie. Ein kleines Objekt für langsames Hören.",
      "objects.tools.title": "Studio-Tools",
      "objects.tools.body": "Sample Moods und Templates aus dem 9bitts-Workflow — wenn sie bereit sind, die Booth zu verlassen.",
      "objects.shelf.studio": "Im Studio",
      "objects.shelf.studio.lead": "Was wirklich im Prozess liegt. Wenn du über diese Links kaufst, hilft ein kleiner Teil, 9bitts am Laufen zu halten — ohne Mehrkosten für dich.",
      "objects.beatport.badge": "Am meisten genutzt",
      "objects.beatport.body": "Wo jedes 9bitts-Set beginnt. Melodic Techno, Deep House, Progressive — Track für Track gewählt.",
      "objects.beatport.cta": "Beatport öffnen →",
      "objects.djcity.badge": "Record Pool",
      "objects.djcity.body": "Tägliche Releases, Edits und Versionen, die ein arbeitendes Set aktuell halten.",
      "objects.djcity.cta": "DJcity entdecken →",
      "objects.plugin.badge": "Production",
      "objects.plugin.body": "Plugins, Synths und Sounds, um zu verstehen, wie die Musik gebaut wird.",
      "objects.plugin.cta": "Tools durchstöbern →",
      "objects.shelf.reading": "Essentielle Lektüre",
      "objects.book.view": "Ansehen →",
      "objects.book1": "Simon Reynolds — die definitive Geschichte von Rave und Dance Culture.",
      "objects.book2": "Brewster & Broughton — der DJ als roter Faden der Dance-Music-Geschichte.",
      "objects.book3": "David Stubbs — von Stockhausen bis heute, Maschinen und Mavericks.",
      "objects.book4": "David Toop — Ambient Listening, von Debussy bis Aphex Twin.",
      "objects.book5": "Dan Sicko — Detroit Techno, industrieller Boden und ein Sound, der die Welt veränderte.",
      "objects.book6": "Matthew Collin — Ecstasy Culture, Acid House und eine Generation, neu geformt durch Sound.",
      "objects.disclosure": "<strong>Affiliate-Hinweis.</strong> Einige Links auf dieser Seite sind Affiliate-Links. Wenn du darüber kaufst, erhält 9bitts eine kleine Provision ohne Mehrkosten für dich. Empfehlungen sind echt — nur Plattformen und Bücher, die wirklich genutzt und vertraut werden.",

      "about.eyebrow": "Über",
      "about.title": "Musik, Aufmerksamkeit<br>und <em>Tiefe.</em>",
      "about.lead": "9bitts begann als Kuratierung elektronischer Musik. Es wurde ein kleiner Raum, in dem Klang, Bild und Gedanke sich treffen — gemacht von einer Person, in Leipzig.",
      "about.01.num": "01 — Das Projekt",
      "about.01.title": "Kein Radio. Keine Playlist.",
      "about.01.p1": "9bitts ist ein kuratorisches Projekt über elektronische Musik — und was sie trägt, wenn sie aufhört, nur Unterhaltung zu sein. Jedes Set ist mit Absicht gewählt: für die Energie, den Moment, die Art, wie Tracks miteinander sprechen.",
      "about.01.p2": "Notizen halten den Raum Woche für Woche lebendig. Das Journal geht tiefer. Der World Guide kartiert die Kultur. <strong>Es ist eine Perspektive — auf Klang, auf Aufmerksamkeit, auf das, wofür es sich lohnt zu bleiben.</strong>",
      "about.02.num": "02 — Die Person",
      "about.02.title": "Eine Person, eine Stadt, ein Projekt.",
      "about.02.p1": "9bitts ist ein Ein-Personen-Projekt, gebaut in Leipzig. Kein Label. Keine Agentur. Jemand, der glaubt, dass elektronische Musik ernst genommen werden verdient — als Kunst, als Kultur, als Form von Aufmerksamkeit für die Welt.",
      "about.02.p2": "Leipzig hat immer Raum für Subkultur und für Musik gemacht, die den Hörenden etwas abverlangt. <strong>Das ist der Boden.</strong>",
      "about.03.num": "03 — Das Handwerk",
      "about.03.title": "Automation im Dienst der Aufmerksamkeit.",
      "about.03.p1": "Eine eigene Pipeline hilft beim Veröffentlichen über Plattformen — nicht um Kuratierung zu ersetzen, sondern sie freizusetzen. Die echte Arbeit bleibt menschlich: welcher Track, welche Idee, welches Bild deine Zeit wert ist.",
      "about.03.p2": "<strong>Die Maschine erledigt den Rest.</strong>",
      "about.03.studio": "Dasselbe Handwerk, das diesen Raum am Laufen hält, baut auch maßgeschneiderte Websysteme — Plattformen, die mit echten Daten, echten Nutzern und echter Sorgfalt arbeiten müssen.",
      "about.04.num": "04 — Der Name",
      "about.04.title": "Ein kleines Signal, das Großes trägt.",
      "about.04.p1": "Der Name hat mit Frequenz zu tun, mit Bits von Information, mit der Idee, dass ein kleines Signal etwas Großes tragen kann. Elektronische Musik funktioniert so — Wiederholung mit Variation, Struktur mit Freiheit.",
      "about.04.p2": "<strong>Neun Bits. Zwei t's. Eine kleine Asymmetrie. Das reicht.</strong>",
      "about.05.num": "05 — Wie es am Leben bleibt",
      "about.05.title": "Wenn diese Musik dir etwas bedeutet.",
      "about.05.p1": "Es gibt keinen Sponsor hinter dem Vorhang. Der Raum bleibt offen, weil Hörer bleiben — und weil manche die Arbeit unterstützen oder ein Objekt vom Studio-Regal mitnehmen.",
      "about.05.support.title": "Die Frequenz am Leben halten",
      "about.05.support.body": "Unterstützung ist, wie eine Person Sets, Notizen und Essays weiter veröffentlicht, ohne das Projekt in Lärm zu verwandeln.",
      "about.05.objects": "Objekte besuchen",
      "about.belong.eyebrow": "Bleib im Raum",
      "about.belong.title": "Ein Gedanke.<br>Ein Set.<br><em>Jede Woche.</em>",
      "about.belong.body": "Ein stiller Brief — Reflexion und Klang. Sonst nichts.",
      "about.join.title": "Teil des<br><em>Raums</em> werden?",
      "about.join.lead": "Fotografen und DJs, denen Aufmerksamkeit, Atmosphäre und Handwerk wichtig sind — schreibt mir. Sagt mir, wer ihr seid und was ihr macht. Ich antworte persönlich.",
    },
  };

  const NAV_BY_HREF = {
    "/listen.html": "nav.listen",
    "/notes.html": "nav.notes",
    "/journal.html": "nav.journal",
    "/world.html": "nav.world",
    "/visuals.html": "nav.visuals",
    "/objects.html": "nav.objects",
    "/about.html": "nav.about",
    "/terms.html": "footer.terms",
    "/privacy.html": "footer.privacy",
    "/music/": "mix.guide",
    "/music": "mix.guide",
  };

  let lang = "en";

  function detectLang() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && LOCALES.includes(stored)) return stored;
    } catch (_) {}
    const nav = (navigator.language || "").toLowerCase();
    if (nav.startsWith("pt")) return "pt";
    if (nav.startsWith("de")) return "de";
    return "en";
  }

  function t(key, vars) {
    const table = dict[lang] || dict.en;
    let str = table[key] ?? dict.en[key] ?? key;
    if (vars) {
      Object.keys(vars).forEach((k) => {
        str = str.replace(new RegExp("\\{" + k + "\\}", "g"), vars[k]);
      });
    }
    return str;
  }

  function setLang(next) {
    if (!LOCALES.includes(next)) return;
    lang = next;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (_) {}
    apply();
    document.dispatchEvent(new CustomEvent("9bitts:langchange", { detail: { lang } }));
  }

  function applyText(el, value) {
    if (el.hasAttribute("data-i18n-html")) {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  }

  function applyMarked() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      applyText(el, t(key));
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (!key) return;
      el.innerHTML = t(key);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (key) el.setAttribute("aria-label", t(key));
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (key) el.setAttribute("placeholder", t(key));
    });
  }

  function normalizePath(href) {
    if (!href) return "";
    try {
      const u = new URL(href, window.location.origin);
      let path = u.pathname;
      if (path.length > 1 && path.endsWith("/")) path = path.slice(0, -1);
      return path;
    } catch {
      return href.split("?")[0].split("#")[0];
    }
  }

  function applyNavAndFooter() {
    document.querySelectorAll(".nav-links a, #mobile-menu a, .site-footer a, .mix-page-links a").forEach((a) => {
      const path = normalizePath(a.getAttribute("href"));
      const key = NAV_BY_HREF[path] || NAV_BY_HREF[path + ".html"];
      if (key) a.textContent = t(key);
    });

    const hamburger = document.getElementById("hamburger");
    if (hamburger) hamburger.setAttribute("aria-label", t("nav.menu"));

    document.querySelectorAll(".site-footer .footer-brand > p:not(.footer-dev)").forEach((p) => {
      const isHome = !!document.querySelector(".home-hero");
      p.textContent = t(isHome ? "footer.tagline.home" : "footer.tagline");
    });

    document.querySelectorAll(".site-footer .footer-dev").forEach((p) => {
      const link = p.querySelector("a");
      const href = link ? link.getAttribute("href") : "https://9bitts.dev/";
      const label = link ? link.textContent.trim() : "9bitts.dev";
      p.innerHTML = `${t("footer.dev")} <a href="${href}" target="_blank" rel="noopener">${label}</a>`;
    });

    document.querySelectorAll(".site-footer .footer-col h4").forEach((h) => {
      const text = h.textContent.trim().toLowerCase();
      if (text === "explore" || text === "explorar" || text === "entdecken") h.textContent = t("footer.explore");
      else if (text === "connect" || text === "conectar" || text === "verbinden") h.textContent = t("footer.connect");
      else if (text === "legal" || text === "rechtliches") h.textContent = t("footer.legal");
    });

    document.querySelectorAll(".footer-bottom > div").forEach((div) => {
      const raw = div.textContent.trim();
      if (/^© 9bitts/.test(raw)) {
        div.textContent = raw.includes("Germany") || raw.includes("Alemanha") || raw.includes("Made in")
          ? t("footer.copy.full")
          : t("footer.copy");
      } else if (div.querySelector('a[href^="mailto:"]') && !div.querySelector("a").textContent.includes("@")) {
        div.querySelector("a").textContent = t("footer.contact");
      }
    });

    const radioToggle = document.getElementById("radioToggle");
    if (radioToggle) {
      const svg = radioToggle.querySelector("svg");
      radioToggle.innerHTML = "";
      if (svg) radioToggle.appendChild(svg);
      radioToggle.appendChild(document.createTextNode(" " + t("radio.toggle")));
    }
    const radioLabel = document.querySelector(".radio-label");
    if (radioLabel) radioLabel.textContent = t("radio.onAir");
    const radioClose = document.querySelector(".radio-close");
    if (radioClose) radioClose.setAttribute("aria-label", t("radio.close"));
  }

  function updateSwitcher() {
    const root = document.getElementById("lang-switcher");
    if (!root) return;
    root.querySelectorAll("[data-lang]").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === lang ? "true" : "false");
    });
    const current = root.querySelector(".lang-current");
    if (current) current.textContent = LOCALE_LABELS[lang];
  }

  function mountSwitcher() {
    const nav = document.getElementById("site-nav");
    if (!nav || document.getElementById("lang-switcher")) return;

    const wrap = document.createElement("div");
    wrap.className = "lang-switcher";
    wrap.id = "lang-switcher";
    wrap.innerHTML = `
      <button type="button" class="lang-btn" aria-haspopup="true" aria-expanded="false" aria-label="${t("nav.lang")}">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
          <circle cx="12" cy="12" r="9"/>
          <path d="M3 12h18"/>
          <path d="M12 3a14 14 0 0 1 0 18"/>
          <path d="M12 3a14 14 0 0 0 0 18"/>
        </svg>
        <span class="lang-current">${LOCALE_LABELS[lang]}</span>
      </button>
      <div class="lang-menu" role="menu">
        ${LOCALES.map(
          (code) =>
            `<button type="button" role="menuitem" data-lang="${code}" class="${code === lang ? "active" : ""}">${LOCALE_LABELS[code]}</button>`
        ).join("")}
      </div>
    `;

    const actions = document.createElement("div");
    actions.className = "nav-actions";
    actions.appendChild(wrap);

    const hamburger = document.getElementById("hamburger");
    if (hamburger) {
      nav.insertBefore(actions, hamburger);
      actions.appendChild(hamburger);
    } else {
      nav.appendChild(actions);
    }

    const btn = wrap.querySelector(".lang-btn");
    const menu = wrap.querySelector(".lang-menu");

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = wrap.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });

    menu.querySelectorAll("[data-lang]").forEach((item) => {
      item.addEventListener("click", (e) => {
        e.stopPropagation();
        setLang(item.getAttribute("data-lang"));
        wrap.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", () => {
      wrap.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    });
  }

  function apply() {
    document.documentElement.lang = lang;
    applyMarked();
    applyNavAndFooter();
    updateSwitcher();
  }

  lang = detectLang();
  mountSwitcher();
  apply();

  window.i18n = {
    t,
    get lang() {
      return lang;
    },
    setLang,
    apply,
    locales: LOCALES,
  };
})();
