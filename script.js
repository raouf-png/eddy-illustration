/* Eddy Illustration
   Script commun. Aucune dependance, aucun appel reseau sauf le changement de
   langue, qui va chercher la page jumelle du site lui-meme.
   Tout vit dans init(), rejoue quand la langue change sans rechargement. */
(function () {
  'use strict';
  var I18N = [["Maxime Bruneel grandit au bord de la mer avant de rejoindre Paris pour y étudier la direction artistique et le dessin, puis la School of Visual Arts de New York. Il développe un univers graphique singulier, nourri de références entre peinture, animation et image en mouvement, où le trait rencontre la couleur dans des compositions à la fois intuitives et maîtrisées. Réalisateur de renom en animation et en prise de vue réelle, pour des clients tels qu'Adidas, Facebook ou Back Market, il nourrit son travail d'illustrateur de cette même culture de l'image. Ses illustrations, qu'elles répondent à des commandes ou à une démarche personnelle, portent une sensibilité immédiatement reconnaissable. Depuis son atelier à La Trochette, il explore désormais la peinture comme prolongement naturel de sa pratique. Il est représenté par Eddy pour ses projets d'illustration de commande.", "Maxime Bruneel grew up by the sea before studying art direction and drawing in Paris, then at the School of Visual Arts in New York. He has developed a singular graphic universe, drawing on painting, animation and moving image, where line meets colour in compositions that feel at once intuitive and precise. An acclaimed director in both animation and live-action advertising, for clients including Adidas, Facebook and Back Market, he brings that same image culture to his illustration work. His illustrations, whether commissioned or personal, carry an immediately recognisable sensibility. From his studio at La Trochette, he now explores painting as a natural extension of his practice. He is represented by Eddy for commissioned illustration projects."], ["Diplômée de l'École supérieure des arts décoratifs de Strasbourg en 2014, Maïté Grandjouan construit des récits qu'elle met en scène dans des tableaux sombres et colorés, à la croisée du nouveau réalisme d'Edward Hopper, du pop art et du romantisme allemand de Caspar David Friedrich. Elle publie en 2016 aux éditions Magnani sa première bande dessinée, Fantasma, sélectionnée pour le Prix Artémisia 2017, puis Lena La-très-seule en 2023, une œuvre quasi muette qui se rapproche de la peinture et évoque l'univers de René Magritte. Son travail l'a menée à signer des affiches de festivals de bande dessinée et à collaborer avec des artistes musicaux, notamment pour le clip Fou à lier de Feu! Chatterton. Elle travaille également comme directrice artistique sur le long métrage La ligne, produit par Eddy Cinéma.", "A graduate of the École supérieure des arts décoratifs de Strasbourg (2014), Maïté Grandjouan builds narratives staged in dark, colourful tableaux, drawing from Edward Hopper's new realism, pop art and the German Romanticism of Caspar David Friedrich. In 2016 she published her first graphic novel, Fantasma, with Éditions Magnani, selected for the Prix Artémisia 2017, followed in 2023 by Lena La-très-seule, an almost wordless work that draws close to painting and calls to mind the universe of René Magritte. Her work has led her to create festival posters and collaborate with musicians, including the music video Fou à lier for Feu! Chatterton. She also works as art director on the feature film La ligne, produced by Eddy Cinéma."], ["Formée aux Gobelins à Paris, Mathilde Loubes développe un univers graphique tout en douceur et en ombres, où l'illustration et l'animation se nourrissent mutuellement. Elle coréalise avec Antoine Bonnet le court-métrage Un Diable dans la Poche (2019), puis L'Heure Bleue (2022), une œuvre animée produite pour la Scène 3 de l'Opéra de Paris sur une musique de l'Orchestre Philharmonique de Berlin. Son travail d'illustratrice et de réalisatrice l'a menée à collaborer avec des artistes tels que Polo & Pan, Gorillaz et Breakbot, et à signer en 2023 le Doodle Google en hommage à France Gall. Ses illustrations, qu'elles répondent à une commande ou à une démarche personnelle, portent une sensibilité poétique et immédiatement reconnaissable.", "Trained at the Gobelins school in Paris, Mathilde Loubes has developed a graphic universe defined by softness and shadow, where illustration and animation constantly inform one another. She co-directed with Antoine Bonnet the short film Un Diable dans la Poche (2019), followed by L'Heure Bleue (2022), an animated work produced for the Paris Opera's 3rd Stage platform, set to music by the Berlin Philharmonic. Her work as an illustrator and director has led her to collaborate with artists such as Polo & Pan, Gorillaz and Breakbot, and in 2023 she created the Google Doodle in tribute to France Gall. Her illustrations, commissioned or personal, carry a poetic and immediately recognisable sensibility."], ["Réalisateur, illustrateur et auteur de bande dessinée, Apollo Thomas est diplômé des Beaux-Arts de Paris. Ses illustrations ont paru dans des magazines comme Vice, Frederic Magazine, Mondo Zero, Papier x Colette et Arte Episode, ainsi que dans plusieurs graphzines, dont High Fantasy et Mecha Sakura (Edwin), Replica (Fltmstpc), Venetian Blinds (1991 Books) et Zug Magazine #5 (Innen Book). Des groupes comme Il est vilaine, Kids Return, Lulu Van Trapp et Simon Says lui ont confié direction artistique et pochettes d'album ; il a aussi travaillé pour Bang & Olufsen, la marque de sneakers de Los Angeles Shoes 53045, le festival Rock en Seine, et signé des affiches de soirées pour Social Club et Gina XXX.", "Director, illustrator and cartoonist Apollo Thomas is a graduate of the Beaux-Arts de Paris. As an illustrator his work has appeared in magazines such as Vice, Frederic Magazine, Mondo Zero, Papier x Colette and Arte Episode, as well as several graphzines including High Fantasy and Mecha Sakura (Edwin), Replica (Fltmstpc), Venetian Blinds (1991 Books) and Zug Magazine #5 (Innen Book). He has been commissioned by bands such as Il est vilaine, Kids Return, Lulu Van Trapp and Simon Says for art direction and album covers, by the high-end brand Bang & Olufsen, the Los Angeles sneaker brand Shoes 53045 and the music festival Rock en Seine, and has made party posters for Social Club and Gina XXX."], ["Née entre la Guadeloupe et la région bordelaise, Marie Deboissy grandit bercée par la nature et la lumière, deux influences qui traversent durablement son travail. Elle se forme à l'animation à l'Atelier supérieur d'animation de l'Atelier de Sèvres, dont elle sort diplômée en 2019, et cofonde à l'issue de sa formation le Collectif 99°. Réalisatrice et illustratrice, elle développe un univers graphique dominé par la couleur : des compositions réalistes et mystérieuses, nourries de cinéma, de voyages et de peinture. En parallèle de ses films et de ses illustrations de commande, elle pratique la peinture à l'huile comme prolongement naturel de sa démarche.", "Born between Guadeloupe and the Bordeaux region, Marie Deboissy grew up surrounded by nature and light - two influences that run through all her work. She trained in animation at the Atelier supérieur d'animation de l'Atelier de Sèvres, graduating in 2019, and co-founded the Collectif 99° upon completing her studies. As a director and illustrator, she has developed a graphic universe built on colour - realistic yet mysterious compositions, shaped by cinema, travel and painting. Alongside her films and commissioned illustrations, she practises oil painting as a natural extension of her creative practice."], ["Né en 1994, Thomas Trichet grandit à Saint-Maur-des-Fossés en région parisienne. À la suite de ses études d'art à l'ENSAAMA et à l'École des Arts Décoratifs de Paris, il réalise en 2019 son premier court-métrage d'animation, Le Taxi de Sun City. Il développe une pratique artistique plurielle puisqu'il réalise à la fois des films en prise de vue réelle et en animation, de fiction ou de documentaire. Son activité de réalisateur se mêle à celle d'illustrateur, qu'il s'agisse de projets personnels ou commissionnés. En 2020, il fonde avec Martin Maire et Théo Jollet le collectif artistique JTM, ainsi que la société de production du même nom.", "Born in 1994, Thomas Trichet grew up in Saint-Maur-des-Fossés, near Paris. After studying art at ENSAAMA and the École des Arts Décoratifs de Paris, he directed his first animated short film, Le Taxi de Sun City, in 2019. He has since developed a multifaceted artistic practice, working across live-action and animated filmmaking, in both fiction and documentary. His work as a director weaves together with his practice as an illustrator, whether on personal or commissioned projects. In 2020, he co-founded the artistic collective JTM with Martin Maire and Théo Jollet, along with the production company of the same name."], ["Diplômée de l'EMCA en 2013, Lila Poppins est réalisatrice d'animation, spécialisée dans le stop motion et l'art du papier découpé. Avec une approche minutieuse et un vrai savoir-faire artisanal, elle crée des films très détaillés où chaque élément est fabriqué à la main. Entre textures organiques, compositions complexes et palettes éclatantes, elle développe un univers à la fois délicat et immersif. Première réalisatrice en stop motion chez Eddy, elle collabore avec des institutions culturelles, des médias et des créateurs de contenu, et repousse sans cesse les limites de cette technique artisanale.", "Graduated from EMCA in 2013, Lila Poppins is an animation director specializing in stop-motion and the art of paper cut-out. With a meticulous approach and deep craftsmanship, she creates highly detailed films where every element is carefully hand-crafted. Blending organic textures, intricate compositions, and vibrant color palettes, she develops a distinctive universe that is both delicate and immersive. As the first female stop-motion director at Eddy, she collaborates with cultural institutions, media, and content creators, constantly pushing the boundaries of this artisanal technique to bring unique visual narratives to life."], ["Marius Segond est illustrateur, auteur de bandes dessinées et menuisier, installé à Toulouse. Issu d'une reconversion, il mène de front ces deux pratiques manuelles et développe un univers graphique où l'humour et l'absurde sont poussés à l'extrême, avec une prédilection pour la sérigraphie et la risographie. Ses illustrations ont été publiées dans plusieurs revues indépendantes, dont Gros Gris, Samandal Comics et Moules-Frites. En 2023, il remporte le Prix BDFIL-Caran d'Ache, l'une des récompenses les plus reconnues dans le monde de la bande dessinée indépendante européenne.", "Marius Segond is an illustrator, comic artist and carpenter, based in Toulouse. Following a career change, he runs both practices in parallel, and has developed a graphic universe where humour and absurdity are pushed to the extreme, with a particular interest in screen printing and risography. His illustrations have appeared in several independent publications, including Gros Gris, Samandal Comics and Moules-Frites. In 2023, he won the Prix BDFIL-Caran d'Ache, one of the most recognised awards in European independent comics. He is represented by Eddy for commissioned illustration projects."], ["Passionné de dessin, Clément Soulmagnon a réalisé de nombreux courts-métrages et publicités pour des clients comme Hermès, Jean-Paul Gaultier, Apple ou Visa. Il collabore régulièrement avec la presse, notamment The New Yorker. Il aime explorer tous types de techniques, du motion design abstrait à la 3D, en les imprégnant de son univers coloré pour rendre chaque histoire marquante. Son approche singulière de l'animation fluide, des transitions étonnantes et de la narration fait de lui l'un des talents français les plus passionnants à suivre.", "Passionate about drawing, Clément Soulmagnon has directed numerous short films and advertisements for clients such as Hermès, Jean-Paul Gaultier, Apple and Visa. He regularly collaborates with the press, including The New Yorker. He likes to explore all types of techniques, from abstract motion design to 3D, while creating colorful universes to make each story memorable. His distinctive approach to storytelling, fluid animation and amazing transitions makes him one of the most exciting French talents to watch."], ["Diplômée des Arts Décoratifs de Paris, Mathilde Bédouet est réalisatrice de films d'animation et illustratrice. Après trois ans en agence de communication où elle réalise une cinquantaine de films d'animation, Mathilde travaille désormais à son compte pour développer son univers coloré et ses personnages attachants. Toujours à la recherche de défis, elle aime expérimenter avec différentes techniques d'animation 2D, dont la rotoscopie, pour réaliser des pubs, des films institutionnels, mais aussi des courts métrages et des clips.", "A graduate of the Arts Décoratifs school in Paris, Mathilde Bédouet is an animator and illustrator. After three years of working in a communication agency and creating more than fifty animated films, Mathilde now works on her own to push even further her colorful universe and endearing characters. Always looking for challenges, she likes to experiment with different 2D animation techniques, including rotoscoping, to make commercials, corporate films, but also short films and music videos."], ["Réalisateur d'animation, César Luton a coréalisé le court métrage La Diplomatie de l'éclipse, présélectionné aux Student Academy Awards, puis développé avec Eddy Animation Mantis Garden, un projet de mini-série. Il définit son style comme un mélange de réalisme et de rêverie : des personnages clairement animés, mis en scène comme au cinéma en prise de vue réelle, aux mouvements lents et précis, dans des couleurs sourdes.", "Animation director César Luton co-directed the short film La Diplomatie de l'éclipse, shortlisted for the Student Academy Awards, then developed Mantis Garden, a mini-series project, with Eddy Animation. He describes his style as a blend of realism and dreaminess: characters that are clearly animated, staged like live-action cinema, with slow and deliberate movements, in muted colours."], ["Formée aux Gobelins, Chloé Farr est réalisatrice et autrice de films d'animation, installée à Paris. Elle a coréalisé Au revoir Jérôme !, son film de fin d'études, lauréat du Grand prix du film de fin d'études au Festival national du film d'animation. Elle a signé l'affiche de la 25e Fête du cinéma d'animation et un Google Doodle pour la Fête de la musique 2026.", "Trained at Gobelins, Chloé Farr is an animation director and author based in Paris. She co-directed Au revoir Jérôme!, her graduation film, which won the Grand Prize for Student Short Films at the National Animation Film Festival. She created the poster for the 25th Fête du cinéma d'animation and a Google Doodle for the Fête de la musique 2026."], ["Les courriels reçus sont traités par Eddy Illustration, groupe Eddy, pour répondre à votre demande et, si vous vous inscrivez, pour vous envoyer les nouvelles de l'agence. Les demandes sont conservées le temps de les traiter et de suivre la relation ; l'inscription aux nouvelles, jusqu'à votre désinscription, possible à tout moment par simple réponse.", "Emails received are processed by Eddy Illustration, Eddy group, to answer your request and, if you sign up, to send you the agency's news. Requests are kept for as long as needed to handle them and follow up the relationship; newsletter sign-ups until you unsubscribe, which you can do at any time by simple reply."], ["Un court film publicitaire façon anime pour la marque de lunettes taïwanaise Klassic, commandé pour ses sept ans. Inspiré de Sailor Moon, Cowboy Bebop et Evangelion, le film suit une héroïne dans un laboratoire où une machine scanne son visage, choisit sa forme de lunettes et la projette dans un Taipei imaginaire.", "A short anime-style commercial for the Taiwanese eyewear brand Klassic, commissioned for its seventh anniversary. Inspired by Sailor Moon, Cowboy Bebop and Evangelion, the film follows a heroine into a lab where a machine scans her face, picks her frame shape and projects her into an imaginary Taipei."], ["Il garde seulement votre choix de langue le temps de la visite, dans le stockage de session de votre navigateur. Cette information ne quitte pas votre appareil et s'efface à la fermeture de l'onglet. Elle sert une fonction que vous demandez et ne requiert donc pas de consentement.", "It only keeps your language choice for the length of the visit, in your browser's session storage. This information never leaves your device and is erased when the tab is closed. It serves a function you ask for and therefore requires no consent."], ["Eddy Illustration, l'agence d'illustrateur.ices du groupe Eddy. Nous représentons des illustrateur.ices, nous les proposons aux marques, aux éditeurs et aux agences, et nous prolongeons leurs images en animation et en film avec les équipes du groupe.", "Eddy Illustration, the illustrators' agency of the Eddy group. We represent illustrators, we propose them to brands, publishers and agencies, and we extend their images into animation and film with the group's teams."], ["Eddy Illustration est l'agence d'illustrateurs du groupe Eddy, société de production à Paris. Nous représentons des artistes au style affirmé et, quand le projet le demande, nous le portons de l'image fixe à l'animation et au film.", "Eddy Illustration is the illustrators' agency of the Eddy group, a production company in Paris. We represent artists with a distinct style and, when the project calls for it, we carry it from the still image to animation and film."], ["Les illustrations et images présentées appartiennent à leurs auteurs, les artistes représentés par Eddy Illustration, ou à leurs clients. Toute reproduction, modification ou utilisation sans accord écrit préalable est interdite.", "The illustrations and images shown belong to their authors, the artists represented by Eddy Illustration, or to their clients. Any reproduction, modification or use without prior written consent is prohibited."], ["Un bestiaire en papier pour la décoration du terminal 2E de Roissy-Charles-de-Gaulle : des oiseaux posés dans les arbres accompagnent les voyageurs entre deux vols. Agence Malherbe, photographies de Katell Bouniol.", "A paper bestiary for the decoration of Terminal 2E at Roissy-Charles-de-Gaulle: birds perched in trees keep travellers company between flights. Agency Malherbe, photographs by Katell Bouniol."], ["L'habillage du pop-up Coty dans le Marais : un jardin chimérique en papier blanc pour présenter quatorze nouvelles fragrances. Plus de 1 300 pétales découpés et 150 mètres de papier. Agence Reflex Paris.", "The dressing of Coty's pop-up in the Marais: a chimerical garden in white paper to present fourteen new fragrances. Over 1,300 cut petals and 150 metres of paper. Agency Reflex Paris."], ["Eddy Production, SAS au capital de 10 000 €, immatriculée au RCS de Paris sous le numéro 810 579 235, siège social 6 rue Rougemont, 75009 Paris. Eddy Illustration est une marque d'Eddy Production.", "Eddy Production, a French SAS with a share capital of €10,000, registered with the Paris Trade and Companies Register under number 810 579 235, registered office 6 rue Rougemont, 75009 Paris. Eddy Illustration is a brand of Eddy Production."], ["Un conte en trois chapitres en papier découpé à la main et animé en stop motion : The Mesmerizing Dice, The Merriest Card et The Hopeful Horse. Musique d'Antoine Duchêne, tournage de Manuel Cam.", "A three-chapter tale in hand-cut paper animated in stop motion: The Mesmerizing Dice, The Merriest Card and The Hopeful Horse. Music by Antoine Duchêne, shot by Manuel Cam."], ["Vous nous confiez un brief. Nous vous proposons l'artiste dont le style correspond, nous cadrons le projet, les droits et le budget, puis nous suivons la production jusqu'à la livraison.", "You give us a brief. We propose the artist whose style fits, we frame the project, the rights and the budget, then we follow production through to delivery."], ["Nous représentons des illustrateur.ices, nous les proposons aux marques, aux éditeurs et aux agences, et nous prolongeons leurs images en animation et en film avec les équipes du groupe.", "We represent illustrators, we propose them to brands, publishers and agencies, and we extend their images into animation and film with the group's teams."], ["Eddy Illustration, l'agence du groupe Eddy. Nous représentons des illustrateurs et prolongeons leurs images en animation et en film avec les équipes de production du groupe.", "Eddy Illustration, the agency of the Eddy group. We represent illustrators and extend their images into animation and film with the group's production teams."], ["Eddy Production s'efforce de tenir les informations du site exactes et à jour, sans pouvoir le garantir. Le site peut être interrompu pour maintenance.", "Eddy Production strives to keep the information on the site accurate and up to date, without being able to guarantee it. The site may be interrupted for maintenance."], ["Des illustrations pour les parfums Goddess et Hero de Burberry, publiées par Burberry Beauty pour la Saint-Valentin et la fête des mères 2026.", "Illustrations for Burberry's Goddess and Hero fragrances, published by Burberry Beauty for Valentine's Day and Mother's Day 2026."], ["Ces conditions sont soumises au droit français. En cas de litige, et à défaut d'accord amiable, les tribunaux de Paris sont compétents.", "These terms are governed by French law. In the event of a dispute, and failing an amicable settlement, the courts of Paris have jurisdiction."], ["Ce site ne dépose aucun cookie et ne charge aucun service tiers : ni mesure d'audience, ni publicité, ni module de réseau social.", "This site sets no cookies and loads no third-party service: no analytics, no advertising, no social media plugin."], ["Vous disposez d'un droit d'accès, de rectification, d'effacement, d'opposition, de limitation et de portabilité : écrivez à ", "You have the right to access, rectify, erase, object, restrict and port your data: write to "], ["Le site renvoie vers des sites tiers (Instagram, sites des artistes). Eddy Production n'est pas responsable de leur contenu.", "The site links to third-party websites (Instagram, artists' websites). Eddy Production is not responsible for their content."], ["La phrase sur la place d'Eddy Illustration dans le groupe Eddy vient ici. Elle sert aussi d'accroche sur la page d'accueil.", "The line on Eddy Illustration's place in the Eddy group goes here. It also opens the home page."], ["Cette adresse ne mène nulle part. Les artistes, eux, sont bien là. Attrapez-en un, ou cliquez à côté pour les relancer.", "This address leads nowhere. The artists, though, are right here. Grab one, or click beside them to throw them again."], ["Le formulaire de contact et l'inscription aux nouvelles ouvrent votre messagerie : le site lui-même n'enregistre rien.", "The contact form and the newsletter sign-up open your email app: the site itself records nothing."], ["Une animation pour l'ouverture du nouveau magasin Hermès China World à Pékin, réalisée avec l'illustrateur Jacco Bunt.", "An animation for the opening of the new Hermès China World store in Beijing, made with the illustrator Jacco Bunt."], ["Les présentes conditions encadrent l'utilisation du site eddyillustration.tv, édité par Eddy Production (voir les", "These terms govern the use of the eddyillustration.tv website, published by Eddy Production (see the"], ["Les projets viendront ici, six en vitrine puis le catalogue complet. Aucun projet n'est publié pour l'instant.", "Projects will live here, six on display then the full catalogue. No project is published yet."], ["Deux illustrations en papier découpé pour le magazine, sur le thème de la friperie et des trouvailles vintage.", "Two cut-paper illustrations for the magazine, on the theme of thrift shops and vintage finds."], ["L'hébergeur enregistre, comme tout serveur web, les adresses IP des visites dans ses journaux techniques.", "Like any web server, the host records visitors' IP addresses in its technical logs."], ["Le texte de présentation du projet vient ici, en trois paragraphes, avec les partenaires cités et liés.", "The project text goes here, in three paragraphs, with the partners named and linked."], ["L'affiche de la 25e Fête du cinéma d'animation, du 11 au 31 octobre 2026, en France et dans le monde.", "The poster for the 25th Fête du cinéma d'animation, from 11 to 31 October 2026, in France and worldwide."], ["Une même image déclinée en édition, en campagne, en animation et en film par les équipes du groupe.", "One image carried across publishing, campaigns, animation and film by the group's teams."], ["Des illustrateurs au style affirmé. Une fiche par artiste, avec ses projets et un contact direct.", "Illustrators with a distinct style. One page per artist, with their projects and a direct contact."], ["Eddy Illustration, l'agence du groupe Eddy. Des illustrateurs au style affirmé, du print au film.", "Eddy Illustration, the agency of the Eddy group. Illustrators with a distinct style, from print to film."], ["Eddy Illustration, l'agence du groupe Eddy. Des illustrateurs au style affirmé, du print au film.", "Eddy Illustration, illustration and animation: illustrators and animators represented by Eddy."], ["Sept personnages créés pour l'ouverture de l'Apple Store des Champs-Élysées, à Paris.", "Seven characters created for the opening of the Apple Store on the Champs-Élysées in Paris."], ["Le nom Eddy Illustration, le site et sa mise en page appartiennent à Eddy Production.", "The Eddy Illustration name, the website and its layout belong to Eddy Production."], ["Le site ne dépose aucun cookie. Le traitement des courriels reçus est décrit dans les", "The site sets no cookies. The handling of emails received is described in the"], ["Eddy Illustration représente des illustrateurs au style affirmé, du print au film.", "Eddy Illustration represents illustrators with a distinct style, from print to film."], ["Votre projet en quelques lignes : brief, format, échéance, budget si vous l'avez.\"", "Your project in a few lines: brief, format, deadline, budget if you have one.\""], ["Les projets viendront ici, six en vitrine puis le catalogue, filtrés par rubrique.", "Projects will live here, six on display then the catalogue, filtered by category."], ["Nous lisons votre brief et proposons l'illustrateur dont le style lui correspond.", "We read your brief and propose the illustrator whose style fits it."], ["Nous lisons votre brief et proposons l'illustrateur dont le style lui correspond.", "We read your brief and propose the illustrator whose style fits it."], ["Agences et marques avec lesquelles Eddy Illustration travaille, liste à donner.", "Agencies and brands Eddy Illustration works with, list to be given."], ["Sorties de projets et nouvelles signatures, par courriel, quelques fois par an.", "Project releases and new signings, by email, a few times a year."], ["Nouveaux projets, nouveaux artistes : quelques courriels par an, pas plus.", "New projects, new artists: a few emails a year, no more."], ["La phrase sur la place d'Eddy Illustration dans le groupe Eddy vient ici.", "The line on Eddy Illustration's place in the Eddy group goes here."], ["<span class=\"nw\">Un projet ?</span> <span class=\"nw\">Écrivez-nous.</span>", "<span class=\"nw\">A project?</span> <span class=\"nw\">Write to us.</span>"], ["Une même image déclinée en édition, en campagne, en animation et en film.", "One image carried across publishing, campaigns, animation and film."], ["Pour un nouveau projet ou une demande de portfolio, écrivez à l'équipe.", "For a new project or a portfolio request, write to the team."], ["Le design des personnages et les images du film Coco Crush pour Chanel.", "Character design and stills from the Coco Crush film for Chanel."], ["Directeur de la publication : le représentant légal d'Eddy Production.", "Publication director: the legal representative of Eddy Production."], ["Les visuels du projet viennent ici, en pleine largeur puis par paires.", "The project visuals go here, full width then in pairs."], ["Les images présentées sur ce site sont la propriété de leurs auteurs.", "The images on this site are the property of their authors."], ["Une demande pour un artiste, un projet, une question : écrivez-nous.", "A request for an artist, a project, a question: write to us."], ["Les artistes représentés par Eddy Illustration, du print au film.", "The artists represented by Eddy Illustration, from print to film."], ["Eddy Illustration représente des illustrateurs et des animateurs.", "Eddy Illustration represents illustrators and animators."], ["Les artistes représentés par Eddy Illustration, du print au film.", "The artists represented by Eddy Illustration, in illustration and animation."], ["Ce site ne dépose aucun cookie et ne charge aucun service tiers.", "This site sets no cookies and loads no third-party service."], ["Eddy Illustration, l'agence d'illustrateur.ices du groupe Eddy.", "Eddy Illustration, the illustrators' agency of the Eddy group."], ["Les trois lignes sur l'agence et le groupe Eddy viennent ici.", "The three lines on the agency and the Eddy group go here."], ["Conditions générales d'utilisation du site Eddy Illustration.", "Terms and Conditions of the Eddy Illustration website."], ["La démarche de l'agence, du brief à la livraison, vient ici.", "The agency's approach, from brief to delivery, goes here."], ["Un projet, une demande de portfolio ? Écrivez à l'équipe.", "A project, a portfolio request? Write to the team."], ["Joindre Eddy Illustration : courriel, adresse et réseaux.", "Reach Eddy Illustration: email, address and social."], [". Vous pouvez aussi adresser une réclamation à la CNIL.", ". You may also lodge a complaint with the CNIL (French data protection authority)."], ["Les nouvelles d'Eddy Illustration, quelques fois par an", "News from Eddy Illustration, a few times a year"], ["). Utiliser le site vaut acceptation de ces conditions.", "). Using the site means accepting these terms."], ["Des illustrateurs au style affirmé, du print au film.", "Illustrators with a distinct style, from print to film."], ["Eddy Illustration : présentation, services et équipe.", "Eddy Illustration: about, services and team."], ["Un projet, un artiste, une question : écrivez-nous.", "A project, an artist, a question: write to us."], ["Survol pour voir, clic pour entrer dans la fiche.", "Hover to see, click to open the profile."], ["Le texte de présentation de l'agence vient ici.", "The agency text goes here."], ["Ce site ne collecte aucune donnée personnelle.", "This site collects no personal data."], ["Mentions légales du site Eddy Illustration.", "Legal notice of the Eddy Illustration website."], [", artiste représenté par Eddy Illustration.", ", artist represented by Eddy Illustration."], ["L'adresse de contact de l'agence vient ici.", "The agency contact address goes here."], ["Eddy Illustration, l'agence du groupe Eddy.", "Eddy Illustration, the agency of the Eddy group."], ["Recevoir les nouvelles d'Eddy Illustration", "Get the Eddy Illustration news"], ["Gabarit de page projet, Eddy Illustration.", "Project page template, Eddy Illustration."], ["Projet de l'artiste, hors production Eddy", "The artist's own project, not produced by Eddy"], ["Sorties de projets, nouvelles signatures", "Project releases, new signings"], ["Balayez, touchez pour ouvrir la fiche.", "Swipe, tap to open the profile."], ["Devis, contrats, droits et livraison.", "Quotes, contracts, rights and delivery."], ["Devis, contrats, droits et livraison.", "Quotes, contracts, rights and delivery."], ["Ils ont travaillé avec nos artistes", "They have worked with our artists"], ["Présentation de l'artiste à écrire.", "Artist's presentation to be written."], ["Votre demande, en quelques lignes.\"", "Your request, in a few lines.\""], ["Un projet ou une question générale", "A project or a general question"], ["Conditions générales d'utilisation", "Terms and Conditions"], ["Les projets d'Eddy Illustration.", "Eddy Illustration projects."], ["Instagram et site à renseigner.", "Instagram and website to be added."], ["<span class=\"mi\">Projet</span>", "<span class=\"mi\">Project</span>"], ["Titre de la nouvelle à écrire.", "Headline to be written."], ["Scénographie et installations", "Set design and installations"], ["Ce que fait Eddy Illustration", "What Eddy Illustration does"], ["Deux lignes sur la nouvelle.", "Two lines about the news."], ["Artistes | Eddy Illustration", "Artists | Eddy Illustration"], ["Suivez-nous sur les réseaux", "Follow us on social media"], ["Projets | Eddy Illustration", "Projects | Eddy Illustration"], ["Un artiste, et les projets", "One artist, and the projects"], ["Sept pièces, sept artistes", "Seven pieces, seven artists"], ["Illustration et animation.", "Illustration and animation."], ["Illustration et animation.", "Illustration and animation."], ["Les nouvelles de l'agence", "News from the agency"], ["Illustration et animation", "Illustration and animation"], ["Un projet ? Écrivez-nous.", "A project? Write to us."], ["Cette page n'existe pas.", "This page does not exist."], ["Propriété intellectuelle", "Intellectual property"], ["Recevoir les nouvelles.", "Receive the news."], ["Dernière mise à jour :", "Last updated:"], ["Un projet, une demande", "A project, a request"], ["Le site est édité par", "This site is published by"], [", découvrir l'artiste", ", discover the artist"], ["Données personnelles", "Personal data"], ["Conditions générales", "Terms and Conditions"], ["Données personnelles", "Personal data"], ["content=\"À propos |", "content=\"About |"], ["Packaging et objets", "Packaging and objects"], ["content=\"L'agence |", "content=\"The agency |"], ["Découvrir l'artiste", "Discover the artist"], ["Tous les projets →", "All projects →"], ["Envoyer la demande", "Send the request"], ["Affiches et prints", "Posters and prints"], ["Retour à l'accueil", "Back to home"], ["Nouvelle signature", "New signing"], ["<title>À propos |", "<title>About |"], ["Édition et presse", "Publishing and press"], ["Animation et film", "Animation and film"], ["<title>L'agence |", "<title>The agency |"], ["Page introuvable.", "Page not found."], ["Rester en contact", "Stay in touch"], ["Tous les artistes", "All artists"], ["28 septembre 2026", "28 September 2026"], ["<b>Sélection</b>", "<b>Selection</b>"], ["<b>Catégorie</b>", "<b>Category</b>"], ["Tous les projets", "All projects"], ["Artiste · Client", "Artist · Client"], ["Du print au film", "From print to film"], ["Page introuvable", "Page not found"], ["Mentions légales", "Legal notice"], ["Tous les projets", "All projects"], ["Sortie de projet", "Project release"], ["vous@exemple.fr\"", "you@example.com\""], ["Illustration de ", "Illustration by "], ["Du print au film", "From print to film"], ["Un interlocuteur", "One point of contact"], ["Du print au film", "From print to film"], ["Un interlocuteur", "One point of contact"], ["mentions légales", "legal notice"], ["mentions légales", "legal notice"], ["Droit applicable", "Governing law"], ["Production Eddy", "Produced by Eddy"], ["Titre du projet", "Project title"], ["Ordre d'origine", "Original order"], ["<b>Artiste</b>", "<b>Artist</b>"], ["Voir l'artiste", "View the artist"], ["Votre courriel", "Your email"], ["Prénom et nom\"", "First and last name\""], ["Le bon artiste", "The right artist"], ["Le bon artiste", "The right artist"], ["Liens externes", "External links"], ["Responsabilité", "Liability"], ["<p>Contact : ", "<p>Contact: "], ["Votre message", "Your message"], ["Les artistes.", "The artists."], ["Les artistes\"", "The artists\""], ["Demande pour ", "Request for "], ["Voir le film", "Watch the film"], ["<b>Année</b>", "<b>Year</b>"], ["À propos <i>", "About <i>"], [">Projets</b>", ">Projects</b>"], ["L'agence <i>", "The agency <i>"], ["Trois pièces", "Three pieces"], ["Les artistes", "The artists"], ["Pied de page", "Footer"], ["Rattachement", "The group"], ["Présentation", "About"], ["Portrait de ", "Portrait of "], ["À propos de", "About"], ["Suivez-nous", "Follow us"], ["Six projets", "Six projects"], ["Le travail", "The work"], ["En vitrine", "On display"], ["Erreur 404", "Error 404"], ["Vie privée", "Privacy"], ["Actualités", "News"], ["Campagnes", "Campaigns"], ["Votre nom", "Your name"], ["Le roster", "The roster"], ["Précédent", "Previous"], ["S'abonner", "Subscribe"], ["Hébergeur", "Host"], ["À propos", "About"], ["L'agence", "The agency"], ["Approche", "Approach"], ["L'équipe", "The team"], ["À la une", "Featured"], ["Artistes", "Artists"], ["Fermer\"", "Close\""], ["Agences", "Agencies"], ["Marques", "Brands"], ["Éditeur", "Publisher"], ["Crédits", "Credits"], ["Données", "Data"], ["Envoyer", "Send"], ["Adresse", "Address"], ["Réseaux", "Social"], ["Suivant", "Next"], ["Exemple", "Example"], ["à venir", "to come"], ["Accueil", "Home"], ["Projets", "Projects"], ["Artiste", "Artist"], ["Agence", "Agency"], ["Droits", "Rights"], ["Écrire", "Write"], ["Équipe", "Team"], ["Projet", "Project"], ["A à Z", "A to Z"], ["Année", "Year"], ["Liens", "Links"], ["Objet", "Purpose"], ["Tous", "All"], ["Plan", "Site map"], ["Pour", "For"], ["Site", "Website"]];
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var coarse = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
  var root = document.documentElement;
  var S = { deck: null, moveU: null, onLink: null };   /* l'etat courant, remplace a chaque init */

  function EN() { return root.lang === 'en'; }

  /* ================================================== la traduction en place */
  function esc(x) { return x.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
  function translatePage(to) {
    var from = to === 'en' ? 'fr' : 'en';
    if (root.lang === to) { return; }
    var pairs = I18N.map(function (p) { return to === 'en' ? p : [p[1], p[0]]; });
    pairs.sort(function (a, b) { return b[0].length - a[0].length; });
    var res = pairs.map(function (p) {
      var k = p[0], sb = /^\p{L}/u.test(k) ? '(^|[^\\p{L}])' : '()', eb = /\p{L}$/u.test(k) ? '(?=[^\\p{L}]|$)' : '';
      return [new RegExp(sb + esc(k) + eb, 'gu'), p[1]];
    });
    function tr(t) {
      var o = t;
      res.forEach(function (r) { if (r[0].test(t)) { t = t.replace(r[0], function (m, pre) { return pre + r[1]; }); } r[0].lastIndex = 0; });
      return t;
    }
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null), nodes = [];
    while (w.nextNode()) { nodes.push(w.currentNode); }
    nodes.forEach(function (n) {
      var tag = n.parentNode && n.parentNode.tagName;
      if (!n.nodeValue.trim() || tag === 'SCRIPT' || tag === 'STYLE') { return; }
      var t = tr(n.nodeValue); if (t !== n.nodeValue) { n.nodeValue = t; }
    });
    ['alt', 'aria-label', 'placeholder', 'title'].forEach(function (attr) {
      [].forEach.call(document.querySelectorAll('[' + attr + ']'), function (el) { var v = el.getAttribute(attr), t = tr(v); if (t !== v) { el.setAttribute(attr, t); } });
    });
    [].forEach.call(document.querySelectorAll('a[href^="mailto:"]'), function (a) {
      var h = a.getAttribute('href'); var t = decodeURIComponent(h); var u = tr(t); if (u !== t) { a.setAttribute('href', u.replace(/ /g, '%20')); }
    });
    document.title = tr(document.title);
    var md = document.querySelector('meta[name="description"]'); if (md) { md.setAttribute('content', tr(md.getAttribute('content'))); }
    root.lang = to;
    var hint = document.getElementById('hint');
    if (hint) { hint.textContent = tr(hint.textContent); }
  }

  /* ================================================== ce qui ne se branche qu'une fois */
  if (!window.__eddy) {
    window.__eddy = true;

    /* l'entree de page */
    window.requestAnimationFrame(function () { window.requestAnimationFrame(function () { root.classList.remove('is-entering'); }); });
    window.addEventListener('pageshow', function (e) { if (e.persisted) { root.classList.remove('is-leaving'); root.classList.remove('is-entering'); } });

    /* la sortie vers la page suivante */
    document.addEventListener('click', function (e) {
      if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button) { return; }
      var a = e.target.closest ? e.target.closest('a[href]') : null;
      if (!a || a.classList.contains('lang')) { return; }
      var href = a.getAttribute('href');
      if (!href || href.charAt(0) === '#' || /^(mailto:|tel:|https?:|data:)/.test(href) || a.target === '_blank' || a.hasAttribute('download')) { return; }
      if (reduce) { return; }
      e.preventDefault();
      var delay = 240;
      if (a.closest('.bar__n') && S.moveU) {
        [].forEach.call(a.parentNode.querySelectorAll('a'), function (o) { o.classList.toggle('on', o === a); });
        S.moveU(a); delay = 300;
      }
      root.classList.add('is-leaving');
      window.setTimeout(function () { window.location.href = href; }, delay);
    });

    /* la loupe : une piece pressee s'ouvre en grand, la croix hors de l'image, clic a cote ou Echap pour fermer */
    var lb = null;
    function lbClose() {
      if (!lb || lb.hidden) { return; }
      lb.classList.remove('is-on'); root.style.overflow = '';
      window.setTimeout(function () { if (lb && !lb.classList.contains('is-on')) { lb.hidden = true; } }, 300);
    }
    /* la loupe dans la loupe : un clic zoome a l'endroit clique et la souris promene l'image,
       au doigt on pince, on glisse, deux tapes rapides zooment ou reviennent */
    function lbZoom(im) {
      var z = 1, ox = 50, oy = 50, pinch = null, drag = null, lastTap = 0;
      function paint() {
        im.style.transformOrigin = ox + '% ' + oy + '%';
        im.style.transform = z > 1 ? 'scale(' + z + ')' : '';
        im.classList.toggle('is-z', z > 1);
      }
      function at(x, y) {
        var r = im.getBoundingClientRect();
        ox = Math.max(0, Math.min(100, (x - r.left) / r.width * 100));
        oy = Math.max(0, Math.min(100, (y - r.top) / r.height * 100));
      }
      im.lbReset = function () { z = 1; ox = oy = 50; paint(); };
      im.addEventListener('click', function (e) {
        if (Date.now() - (im.lastTouch || 0) < 700) { return; }
        if (z > 1) { z = 1; } else { at(e.clientX, e.clientY); z = 2.5; }
        paint();
      });
      im.addEventListener('mousemove', function (e) { if (z > 1) { at(e.clientX, e.clientY); paint(); } });
      function dist(t) { return Math.hypot(t[0].clientX - t[1].clientX, t[0].clientY - t[1].clientY); }
      im.addEventListener('touchstart', function (e) {
        im.lastTouch = Date.now();
        if (e.touches.length === 2) {
          pinch = { d: dist(e.touches), z: z };
          at((e.touches[0].clientX + e.touches[1].clientX) / 2, (e.touches[0].clientY + e.touches[1].clientY) / 2);
        } else if (e.touches.length === 1) {
          var now = Date.now();
          if (now - lastTap < 300) { if (z > 1) { z = 1; } else { at(e.touches[0].clientX, e.touches[0].clientY); z = 2.5; } paint(); lastTap = 0; return; }
          lastTap = now;
          drag = { x: e.touches[0].clientX, y: e.touches[0].clientY, ox: ox, oy: oy };
        }
      }, { passive: true });
      im.addEventListener('touchmove', function (e) {
        if (pinch && e.touches.length === 2) {
          e.preventDefault();
          z = Math.max(1, Math.min(5, pinch.z * dist(e.touches) / pinch.d)); paint();
        } else if (drag && z > 1 && e.touches.length === 1) {
          e.preventDefault();
          var r = im.getBoundingClientRect();
          ox = Math.max(0, Math.min(100, drag.ox - (e.touches[0].clientX - drag.x) / r.width * 100 * z));
          oy = Math.max(0, Math.min(100, drag.oy - (e.touches[0].clientY - drag.y) / r.height * 100 * z));
          paint();
        }
      }, { passive: false });
      im.addEventListener('touchend', function (e) {
        im.lastTouch = Date.now();
        if (e.touches.length < 2) { pinch = null; }
        if (!e.touches.length) { drag = null; if (z < 1.05) { z = 1; paint(); } }
      });
    }
    function lbOpen(src, alt) {
      if (!lb) {
        lb = document.createElement('div'); lb.className = 'lb'; lb.hidden = true;
        lb.innerHTML = '<button type="button" class="lb__x" aria-label="' + (EN() ? 'Close' : 'Fermer') + '"><svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M2 2l12 12M14 2L2 14"/></svg></button><figure class="lb__f"><img alt=""></figure>';
        document.body.appendChild(lb);
        lb.addEventListener('click', function (e) { if (e.target.tagName !== 'IMG') { lbClose(); } });
        lbZoom(lb.querySelector('img'));
      }
      var im = lb.querySelector('img'); im.src = src; im.alt = alt || ''; im.lbReset();
      lb.hidden = false; root.style.overflow = 'hidden';
      window.requestAnimationFrame(function () { lb.classList.add('is-on'); lb.querySelector('.lb__x').focus(); });
    }
    document.addEventListener('click', function (e) {
      var z = e.target.closest ? e.target.closest('[data-zoom]') : null;
      if (!z) { return; }
      e.preventDefault();
      var im = z.querySelector('img');
      lbOpen(z.getAttribute('data-zoom'), im ? im.alt : '');
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { lbClose(); } });

    /* la barre se range en descendant et revient en remontant ; sur l'accueil elle se pose en blanc apres la porte */
    var lastY = window.pageYOffset, ticking = false;
    function solid() {
      var bar = document.getElementById('bar'), hero = document.getElementById('hero');
      if (!bar || !hero) { return; }
      bar.classList.toggle('is-solid', window.pageYOffset > hero.offsetHeight - bar.offsetHeight);
    }
    window.addEventListener('scroll', function () {
      if (ticking) { return; }
      ticking = true;
      window.requestAnimationFrame(function () {
        var bar = document.getElementById('bar'), y = window.pageYOffset;
        solid();
        if (bar) {
          if (y > lastY + 10 && y > 160) { bar.classList.add('is-hid'); }
          else if (y < lastY - 4 || y < 80) { bar.classList.remove('is-hid'); }
        }
        lastY = y; ticking = false;
      });
    }, { passive: true });
    S.solid = solid;

    /* les fleches du jeu, si le jeu est a l'ecran, survole ou focalise */
    document.addEventListener('keydown', function (e) {
      var d = S.deck;
      if (!d || d.busy()) { return; }
      var t = e.target;
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA')) { return; }
      if (!d.active()) { return; }
      if (e.key === 'ArrowRight') { e.preventDefault(); d.next(); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); d.prev(); }
      else if (e.key === 'Home') { e.preventDefault(); d.first(); }
      else if (e.key === 'End') { e.preventDefault(); d.last(); }
    });
    document.addEventListener('visibilitychange', function () { if (S.deck) { if (document.hidden) { S.deck.stop(); } else { S.deck.play(); } } });
    window.addEventListener('resize', function () {
      root.style.setProperty('--chrome', (document.getElementById('bar') ? document.getElementById('bar').offsetHeight : 0) + 'px');
      if (S.deck) { S.deck.relayout(); }
      if (S.moveU) { S.moveU(S.onLink); }
      if (S.throwCards) { S.throwCards(); }
    });
    window.addEventListener('load', function () {
      root.style.setProperty('--chrome', (document.getElementById('bar') ? document.getElementById('bar').offsetHeight : 0) + 'px');
      if (S.deck) { S.deck.relayout(); }
      if (S.moveU) { S.moveU(S.onLink, true); }
    });
    window.addEventListener('popstate', function () { window.location.reload(); });
  }

  /* ================================================== init : tout ce qui depend de la page en cours */
  function init() {
    var bar = document.getElementById('bar');
    root.style.setProperty('--chrome', (bar ? bar.offsetHeight : 0) + 'px');
    if (S.solid) { S.solid(); }

    /* la porte : si son image n'a pas ete tiree (page arrivee sans rechargement), on tire */
    var heroData = document.getElementById('hero-data'), heroIm = document.getElementById('hero-im');
    if (heroData && heroIm && !heroIm.getAttribute('src')) {
      try {
        var H = JSON.parse(heroData.textContent), a = H[Math.floor(Math.random() * H.length)], h = document.getElementById('hero');
        heroIm.srcset = a.set; heroIm.src = a.src; heroIm.width = a.w; heroIm.height = a.h; heroIm.alt = (EN() ? 'Illustration by ' : 'Illustration de ') + a.n;
        h.style.setProperty('--c', a.c); h.style.setProperty('--fg', a.fg);
        root.style.setProperty('--fg', a.fg); root.style.setProperty('--fgi', a.fg === '#fff' ? '#0d0d0d' : '#fff');
        document.getElementById('hero-a').href = 'a-' + a.s; document.getElementById('hero-n').textContent = a.n;
        heroIm.addEventListener('load', function () { h.classList.add('is-on'); });
      } catch (e) {}
    }

    /* la langue : l'interrupteur traduit la page sur place, mot a mot, sans rien charger */
    var lt = document.querySelector('.colo__b .lang');
    if (lt) {
      lt.href = lt.getAttribute('href').split('?')[0].split('#')[0] + window.location.search + window.location.hash;
      lt.addEventListener('click', function (e) {
        e.preventDefault(); e.stopPropagation();
        var to = lt.getAttribute('data-lang');
        try { sessionStorage.setItem('lang', to); } catch (er) {}
        lt.classList.add('is-switching');
        window.setTimeout(function () {
          translatePage(to);
          lt.classList.remove('is-switching');
          lt.setAttribute('data-on', to); lt.setAttribute('data-lang', to === 'en' ? 'fr' : 'en'); lt.setAttribute('aria-checked', to === 'en' ? 'true' : 'false');
          lt.setAttribute('aria-label', to === 'en' ? 'Français' : 'English');
          var opts = lt.querySelectorAll('.lsw__o'); opts[0].classList.toggle('is-on', to === 'fr'); opts[1].classList.toggle('is-on', to === 'en');
          lt.href = (to === 'en' ? (root.getAttribute('data-root') === 'en' ? '' : '../') : (root.getAttribute('data-root') === 'en' ? 'en/' : '')) ;
          lt.href = lt.getAttribute('data-href-' + (to === 'en' ? 'fr' : 'en')) || '#';
        }, 0);
      });
    }

    /* le menu : le soulignement (ecran) ou le bloc noir (telephone) glisse d'une entree a l'autre */
    var nav = document.querySelector('.bar__n');
    S.moveU = null; S.onLink = null;
    if (nav) {
      var u = nav.querySelector('.bar__u');
      if (!u) { u = document.createElement('span'); u.className = 'bar__u'; nav.appendChild(u); }
      S.onLink = nav.querySelector('a.on');
      S.moveU = function (el, instant) {
        if (!el) { u.style.opacity = '0'; return; }
        var r = el.getBoundingClientRect(), nr = nav.getBoundingClientRect();
        if (instant) { u.style.transition = 'none'; }
        u.style.opacity = '1'; u.style.width = r.width + 'px'; u.style.transform = 'translateX(' + (r.left - nr.left) + 'px)';
        if (instant) { void u.offsetWidth; u.style.transition = ''; }
      };
      S.moveU(S.onLink, true);
      var cells = function () { return window.matchMedia && window.matchMedia('(max-width: 760px)').matches; };
      [].slice.call(nav.querySelectorAll('a')).forEach(function (a) { a.addEventListener('mouseenter', function () { if (!coarse && !cells()) { S.moveU(a); } }); });
      nav.addEventListener('mouseleave', function () { if (!cells()) { S.moveU(S.onLink); } });
    }

    /* a la une : un artiste au hasard, trois pieces au hasard, jamais l'artiste de la porte */
    var uneData = document.getElementById('une-data'), une = document.getElementById('une');
    if (uneData && une) {
      try {
        var U = JSON.parse(uneData.textContent);
        var ha = document.getElementById('hero-a');
        var heroSlug = ha ? (ha.getAttribute('href') || '').replace(/^a-|\.html$/g, '') : '';
        var pool = U.filter(function (x) { return x.s !== heroSlug && x.p.length >= 3 && x.pj && x.pj.length; });
        if (!pool.length) { pool = U.filter(function (x) { return x.s !== heroSlug && x.p.length >= 3; }); }
        if (!pool.length) { pool = U; }
        var ua = pool[Math.floor(Math.random() * pool.length)];
        var nm = document.getElementById('une-n'), go2 = document.getElementById('une-go'), bio = document.getElementById('une-bio');
        nm.textContent = ua.n; nm.href = 'a-' + ua.s; go2.href = 'a-' + ua.s;
        bio.textContent = ua.bio || (EN() ? 'Artist presentation to be written.' : 'Présentation de l\'artiste à écrire.');
        bio.classList.toggle('ph', !ua.bio);
        var uph = document.getElementById('une-ph');
        if (uph) { if (ua.ph) { uph.src = ua.ph; uph.alt = ua.n; uph.hidden = false; } else { uph.hidden = true; } }
        var ur = document.getElementById('une-r'), ul = document.getElementById('une-l'), up = document.getElementById('une-p');
        if (ur && ul) {
          var seen = {}, cats = [];
          (ua.pj || []).forEach(function (q) { if (!seen[q.r]) { seen[q.r] = 1; cats.push(q.r); } });
          ur.innerHTML = cats.map(function (c) { return '<a class="rub" href="projects">' + c + '</a>'; }).join('');
          ul.innerHTML = (ua.pj || []).map(function (q) { return '<li><a href="' + q.h.replace(/\.html$/, '') + '">' + q.t + '</a></li>'; }).join('');
          if (up) { up.hidden = !(ua.pj && ua.pj.length); }
        }
        var picks = ua.p.slice().sort(function () { return Math.random() - 0.5; }).slice(0, 3);
        [].slice.call(document.querySelectorAll('#une-w .flat')).forEach(function (f, k) {
          var q = picks[k]; if (!q) { return; }
          var im = f.querySelector('img');
          im.srcset = q.set; im.src = q.src; im.width = q.w; im.height = q.h; im.alt = (EN() ? 'Illustration by ' : 'Illustration de ') + ua.n;
          f.style.backgroundImage = 'linear-gradient(' + ua.tint + ',' + ua.tint + ')';
          if (f.tagName === 'A') { f.href = 'a-' + ua.s; f.setAttribute('aria-label', ua.n + (EN() ? ', discover the artist' : ', découvrir l\'artiste')); }
        });
      } catch (e) {}
    }
    /* le travail : chaque cadre tire une piece de son artiste */
    [].slice.call(document.querySelectorAll('.wk[data-alts]')).forEach(function (c) {
      try {
        var alts = JSON.parse(c.getAttribute('data-alts') || '[]');
        if (alts.length > 1) { var q = alts[Math.floor(Math.random() * alts.length)], im = c.querySelector('img'); im.srcset = q.set; im.src = q.src; im.width = q.w; im.height = q.h; }
      } catch (e) {}
    });

    /* apparition au defilement */
    var rv = [].slice.call(document.querySelectorAll('.rv:not(.in)'));
    if (rv.length && 'IntersectionObserver' in window && !reduce) {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
      rv.forEach(function (el) { io.observe(el); });
    } else { rv.forEach(function (el) { el.classList.add('in'); }); }

    /* la pilule de demande suit la lecture */
    var dem = document.getElementById('dem'), ask = document.getElementById('ask'), colo = document.querySelector('.colo');
    if (dem && ask && 'IntersectionObserver' in window) {
      var pastDem = false, footVisible = false;
      var show = function () {
        var on = pastDem && !footVisible;
        ask.classList.toggle('is-on', on);
        ask.setAttribute('aria-hidden', on ? 'false' : 'true');
        ask.querySelector('a').tabIndex = on ? 0 : -1;
      };
      new IntersectionObserver(function (es) { es.forEach(function (e) { pastDem = !e.isIntersecting && e.boundingClientRect.top < 0; }); show(); }, { threshold: 0 }).observe(dem);
      if (colo) { new IntersectionObserver(function (es) { es.forEach(function (e) { footVisible = e.isIntersecting; }); show(); }, { threshold: 0 }).observe(colo); }
    }

    /* le jeu de cartes */
    S.deck = null;
    var deck = document.getElementById('deck');
    var swipeMode = function () { return window.matchMedia && window.matchMedia('(max-width: 760px)').matches; };
    if (deck) {
      var vp = deck.querySelector('.deck__vp'), track = deck.querySelector('.deck__tr'), capsTrack = deck.querySelector('.caps__tr');
      var cards = [].slice.call(deck.querySelectorAll('.card')), caps = [].slice.call(deck.querySelectorAll('.cap'));
      var ender = deck.querySelector('.card__end'), capEnder = deck.querySelector('.cap__end');
      var hint = document.getElementById('hint');
      var n = cards.length, cur = 0, timer = null, inView = true;
      var geo = { open: 300, slat: 60, w: 0 };
      /* a chaque visite, une piece differente pour chaque artiste */
      cards.forEach(function (c) {
        try {
          var alts = JSON.parse(c.getAttribute('data-alts') || '[]');
          if (alts.length > 1) { var a = alts[Math.floor(Math.random() * alts.length)], im = c.querySelector('img'); im.srcset = a.set; im.src = a.src; }
        } catch (e) {}
      });
      function fit() {
        if (swipeMode()) {
          /* telephone : la carte ouverte fait 76 % de la largeur, le jeu prend sa hauteur */
          deck.style.height = Math.round(vp.clientWidth * 0.76 * 4 / 3 + 24) + 'px';
          return;
        }
        deck.style.height = '';
        if (!deck.classList.contains('deck--page')) { return; }
        var intro = document.querySelector('.intro');
        var hh = window.innerHeight - (bar ? bar.offsetHeight : 0) - (intro ? intro.offsetHeight : 0);
        deck.style.height = Math.max(380, hh) + 'px';
      }
      function measure() {
        var vw = vp.clientWidth, vh = vp.clientHeight, min, max, open;
        if (swipeMode()) {
          open = Math.round(vw * 0.76); min = 20; max = 28;
        } else {
          if (vw < 560) { min = 22; max = 34; } else if (vw < 1000) { min = 34; max = 50; } else { min = 44; max = 62; }
          open = Math.round(Math.min(vh * 0.8, vw * 0.5, 540));
          open = Math.max(open, 170);
        }
        var slat = Math.round((vw * 1.16 - open) / (n - 1));
        slat = Math.max(min, Math.min(max, slat));
        geo.open = open; geo.slat = slat; geo.w = open + (n - 1) * slat; geo.vw = vw;
      }
      function place() {
        var x = 0, openX = 0;
        for (var i = 0; i < n; i++) {
          cards[i].style.setProperty('--w', geo.open + 'px'); cards[i].style.setProperty('--x', x + 'px'); cards[i].style.zIndex = String(i + 1);
          caps[i].style.setProperty('--w', geo.open + 'px'); caps[i].style.setProperty('--x', x + 'px'); caps[i].style.zIndex = String(i + 1);
          if (i === cur) { openX = x; }
          x += (i === cur ? geo.open : geo.slat);
        }
        [ender, capEnder].forEach(function (e) { if (!e) { return; } e.style.setProperty('--w', geo.open + 'px'); e.style.setProperty('--x', x + 'px'); e.style.zIndex = String(n + 2); });
        var off;
        if (geo.w <= geo.vw) { off = -(geo.vw - geo.w) / 2; }
        else { off = openX + geo.open / 2 - geo.vw / 2; off = Math.max(0, Math.min(geo.w - geo.vw, off)); }
        var t = 'translate3d(' + (-off) + 'px,0,0)';
        track.style.transform = t; capsTrack.style.transform = t;
      }
      function open(i, silent) {
        cur = (i + n) % n;
        for (var k = 0; k < n; k++) {
          cards[k].classList.toggle('is-open', k === cur); caps[k].classList.toggle('is-open', k === cur);
          cards[k].setAttribute('aria-current', k === cur ? 'true' : 'false');
        }
        place();
        if (!silent) { restart(); }
      }
      function play() { if (reduce || !inView) { return; } stop(); timer = window.setInterval(function () { open(cur + 1, true); }, 3400); }
      function stop() { if (timer) { window.clearInterval(timer); timer = null; } }
      function restart() { stop(); play(); }
      /* au doigt : le doigt qui glisse fait defiler les cartes une a une (une lamelle de
         course = une carte, comme le survol a la souris), un toucher sur une lamelle la met
         devant, un toucher sur la carte ouverte entre dans la fiche. Le telephone rejoue des
         evenements souris (mouseenter, focus) juste apres un toucher : on les ignore, sinon
         le premier toucher ouvrait la carte ET entrait dans la fiche d'un coup. */
      var tch = { at: 0, x: 0, y: 0, from: 0, axis: '', scrubbed: false };
      var viaTouch = function () { return Date.now() - tch.at < 1200; };
      cards.forEach(function (c, k) {
        c.addEventListener('mouseenter', function () { if (viaTouch()) { return; } stop(); open(k, true); });
        c.addEventListener('focus', function () { if (viaTouch()) { return; } stop(); open(k, true); });
        c.addEventListener('click', function (e) {
          if (tch.scrubbed) { e.preventDefault(); tch.scrubbed = false; return; }
          if (k !== cur) { e.preventDefault(); stop(); open(k, true); }
        });
      });
      caps.forEach(function (c, k) {
        c.addEventListener('mouseenter', function () { if (viaTouch()) { return; } stop(); open(k, true); });
        c.addEventListener('click', function () { stop(); open(k, true); });
      });
      deck.addEventListener('mouseleave', play);
      deck.addEventListener('focusout', function (e) { if (!deck.contains(e.relatedTarget)) { play(); } });
      vp.addEventListener('touchstart', function (e) {
        var t = e.changedTouches[0];
        tch.at = Date.now(); tch.x = t.clientX; tch.y = t.clientY; tch.from = cur; tch.axis = ''; tch.scrubbed = false;
        stop();
      }, { passive: true });
      vp.addEventListener('touchmove', function (e) {
        var t = e.changedTouches[0], dx = t.clientX - tch.x, dy = t.clientY - tch.y;
        if (!tch.axis) {
          if (Math.abs(dx) < 6 && Math.abs(dy) < 6) { return; }
          tch.axis = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';
        }
        if (tch.axis !== 'x') { return; }
        tch.scrubbed = true;
        var step = Math.max(geo.slat, 24);
        var idx = Math.max(0, Math.min(n - 1, tch.from + Math.round(-dx / step)));
        if (idx !== cur) { open(idx, true); }
      }, { passive: true });
      vp.addEventListener('touchend', function () { tch.at = Date.now(); }, { passive: true });
      vp.addEventListener('touchcancel', function () { tch.at = Date.now(); tch.axis = ''; }, { passive: true });
      if ('IntersectionObserver' in window) {
        new IntersectionObserver(function (es) { es.forEach(function (e) { inView = e.isIntersecting; if (inView) { play(); } else { stop(); } }); }, { threshold: 0.35 }).observe(deck);
      }
      S.deck = {
        busy: function () { return false; },
        active: function () { return document.body.contains(deck) && (inView || deck.contains(document.activeElement) || deck.matches(':hover')); },
        next: function () { open(cur + 1); }, prev: function () { open(cur - 1); }, first: function () { open(0); }, last: function () { open(n - 1); },
        play: play, stop: stop, relayout: function () { fit(); measure(); place(); }
      };
      fit(); measure(); open(Math.floor(n / 2), true); play();
    }

    /* la page introuvable : le jeu renverse */
    S.throwCards = null;
    var lost = document.getElementById('lost');
    if (lost) {
      var lcards = [].slice.call(lost.querySelectorAll('.lcard'));
      var colors = JSON.parse(lost.getAttribute('data-colors') || '[]');
      var pick = colors[Math.floor(Math.random() * colors.length)];
      if (pick) { lost.style.setProperty('--c', pick[0]); lost.style.setProperty('--fg', pick[1]); }
      var base = [];
      function throwCards() {
        var W = lost.clientWidth, Hh = lost.clientHeight;
        var cw = lcards[0].offsetWidth, ch = cw * 4 / 3;
        var text = lost.querySelector('.lost__t').getBoundingClientRect(), lb = lost.getBoundingClientRect();
        var order = lcards.map(function (c, i) { return i; }).sort(function () { return Math.random() - 0.5; });
        base = [];
        lcards.forEach(function (c, i) {
          var x, y, tries = 0;
          do { x = Math.random() * (W - cw - 40) + 20; y = Math.random() * (Hh - ch - 40) + 20; tries++; }
          while (tries < 20 && x < (text.right - lb.left) + 10 && y + ch > (text.top - lb.top) - 10);
          var r = (Math.random() * 44 - 22);
          base[i] = { x: x, y: y, r: r };
          c.style.setProperty('--x', x + 'px'); c.style.setProperty('--y', y + 'px'); c.style.setProperty('--r', r.toFixed(1) + 'deg');
          c.style.setProperty('--z', String(order[i] + 1)); c.style.setProperty('--d', (-Math.random() * 7).toFixed(2) + 's');
        });
      }
      S.throwCards = throwCards;
      throwCards();
      window.requestAnimationFrame(function () { lost.classList.add('is-live'); });
      lost.addEventListener('click', function (e) {
        if (e.target.closest('.lcard') || e.target.closest('.lost__t')) { return; }
        lost.classList.add('is-thrown'); throwCards();
        window.setTimeout(function () { lost.classList.remove('is-thrown'); }, 1400);
      });
      var drag = null, topZ = 50;
      lcards.forEach(function (c, i) {
        c.addEventListener('pointerdown', function (e) {
          if (e.button && e.button !== 0) { return; }
          drag = { i: i, sx: e.clientX, sy: e.clientY, ox: base[i].x, oy: base[i].y, moved: false };
          c.setPointerCapture(e.pointerId); c.classList.add('is-drag'); c.style.setProperty('--z', String(++topZ));
        });
        c.addEventListener('pointermove', function (e) {
          if (!drag || drag.i !== i) { return; }
          var dx = e.clientX - drag.sx, dy = e.clientY - drag.sy;
          if (Math.abs(dx) > 5 || Math.abs(dy) > 5) { drag.moved = true; }
          base[i].x = drag.ox + dx; base[i].y = drag.oy + dy;
          c.style.setProperty('--x', base[i].x + 'px'); c.style.setProperty('--y', base[i].y + 'px');
        });
        var drop = function () {
          if (!drag || drag.i !== i) { return; }
          c.classList.remove('is-drag');
          if (drag.moved) { c.setAttribute('data-moved', '1'); window.setTimeout(function () { c.removeAttribute('data-moved'); }, 50); }
          drag = null;
        };
        c.addEventListener('pointerup', drop); c.addEventListener('pointercancel', drop);
        c.addEventListener('click', function (e) { if (c.getAttribute('data-moved')) { e.preventDefault(); } });
        c.addEventListener('dragstart', function (e) { e.preventDefault(); });
      });
      if (!coarse && !reduce) {
        lost.addEventListener('mousemove', function (e) {
          if (drag) { return; }
          var lb = lost.getBoundingClientRect();
          var mx = (e.clientX - lb.left) / lb.width - 0.5, my = (e.clientY - lb.top) / lb.height - 0.5;
          lcards.forEach(function (c, i) { var depth = ((i % 5) + 1) * 6; c.style.setProperty('--x', (base[i].x - mx * depth) + 'px'); c.style.setProperty('--y', (base[i].y - my * depth) + 'px'); });
        });
      }
    }

    /* les filtres des projets : une rubrique, les cartes qui la portent */
    var rubsF = document.querySelector('.rubs--f');
    if (rubsF) {
      var pills = [].slice.call(rubsF.querySelectorAll('[data-rub]')), cardsP = [].slice.call(document.querySelectorAll('.pj[data-rub]'));
      pills.forEach(function (b) {
        b.addEventListener('click', function () {
          var r = b.getAttribute('data-rub');
          pills.forEach(function (o) { o.setAttribute('aria-pressed', o === b ? 'true' : 'false'); });
          cardsP.forEach(function (c) { c.hidden = !!r && c.getAttribute('data-rub').split('|').indexOf(r) < 0; });
        });
      });
    }

    /* le tri du roster */
    var tiles = document.getElementById('tiles');
    if (tiles) {
      var btns = [].slice.call(document.querySelectorAll('[data-sort]'));
      btns.forEach(function (b) {
        b.addEventListener('click', function () {
          var mode = b.getAttribute('data-sort');
          btns.forEach(function (o) { o.setAttribute('aria-pressed', o === b ? 'true' : 'false'); });
          var items = [].slice.call(tiles.children);
          items.sort(function (a, c) {
            if (mode === 'name') { return a.getAttribute('data-name').localeCompare(c.getAttribute('data-name'), EN() ? 'en' : 'fr'); }
            return (+a.getAttribute('data-n')) - (+c.getAttribute('data-n'));
          });
          items.forEach(function (it) { tiles.appendChild(it); it.classList.add('in'); });
        });
      });
    }

    /* ecrire et s'abonner : par courriel tant qu'aucun service n'est branche */
    var rosterData = document.getElementById('roster-data'), names = {};
    if (rosterData) { JSON.parse(rosterData.textContent).forEach(function (a) { names[a.s] = a.n; }); }
    var demande = document.getElementById('demande');
    /* le message grandit en ecrivant, la ou field-sizing n'existe pas */
    var msg = document.getElementById('f-msg');
    if (msg && !(window.CSS && CSS.supports && CSS.supports('field-sizing', 'content'))) {
      var grow = function () { msg.style.height = 'auto'; msg.style.height = msg.scrollHeight + 'px'; };
      msg.addEventListener('input', grow); grow();
    }
    if (demande) {
      var m = /[?&]artiste=([a-z0-9-]+)/.exec(window.location.search), sel = document.getElementById('f-artiste');
      if (m && sel) { sel.value = m[1]; if (window.location.hash === '#demande') { demande.scrollIntoView(); } }
      demande.addEventListener('submit', function (e) {
        if (demande.getAttribute('action')) { return; }
        e.preventDefault();
        var who = sel && sel.value ? names[sel.value] : '';
        var subject = who ? (EN() ? 'Request for ' : 'Demande pour ') + who : (EN() ? 'Request to Eddy Illustration' : 'Demande à Eddy Illustration');
        var body = document.getElementById('f-msg').value + '\n\n' + document.getElementById('f-nom').value + '\n' + document.getElementById('f-mail').value;
        window.location.href = 'mailto:' + (demande.getAttribute('data-to') || '') + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
        var note = document.getElementById('f-note');
        if (note) { note.textContent = EN() ? 'Thank you, we will get back to you shortly.' : 'Merci, nous vous répondons rapidement.'; }
      });
    }
    var lettre = document.getElementById('lettre');
    if (lettre) {
      lettre.addEventListener('submit', function (e) {
        if (lettre.getAttribute('action')) { return; }
        e.preventDefault();
        var mail = lettre.querySelector('input[type=email]').value;
        window.location.href = 'mailto:' + (lettre.getAttribute('data-to') || '') + '?subject=' + encodeURIComponent(EN() ? 'Newsletter subscription' : 'Abonnement aux nouvelles') + '&body=' + encodeURIComponent((EN() ? 'Please subscribe me to the Eddy Illustration news: ' : 'Merci de m\'abonner aux nouvelles d\'Eddy Illustration : ') + mail);
      });
    }
  }

  init();
}());
