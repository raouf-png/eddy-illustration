/* Eddy Illustration
   Script commun. Aucune dependance, aucun appel reseau sauf le changement de
   langue, qui va chercher la page jumelle du site lui-meme.
   Tout vit dans init(), rejoue quand la langue change sans rechargement. */
(function () {
  'use strict';
  var I18N = [["Le Service Vous est fourni « EN L'ÉTAT » et « SELON DISPONIBILITÉ », avec tous ses défauts et sans garantie d'aucune sorte. Dans toute la mesure permise par la loi applicable, la Société, en son nom propre et au nom de ses Sociétés affiliées et de leurs concédants et fournisseurs de services respectifs, décline expressément toute garantie, expresse, implicite, légale ou autre, concernant le Service, y compris toute garantie implicite de qualité marchande, d'adéquation à un usage particulier, de titre et de non-contrefaçon, ainsi que toute garantie pouvant découler des usages, de la pratique commerciale ou de l'exécution. Sans limiter ce qui précède, la Société ne garantit pas que le Service répondra à Vos exigences, atteindra les résultats souhaités, sera compatible ou fonctionnera avec tout autre logiciel, application, système ou service, fonctionnera sans interruption, respectera des normes de performance ou de fiabilité, ou sera exempt d'erreurs, ni qu'une erreur ou un défaut pourra ou sera corrigé.", "The Service is provided to You \"AS IS\" and \"AS AVAILABLE\" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected."], ["Maxime Bruneel grandit au bord de la mer avant de rejoindre Paris pour y étudier la direction artistique et le dessin, puis la School of Visual Arts de New York. Il développe un univers graphique singulier, nourri de références entre peinture, animation et image en mouvement, où le trait rencontre la couleur dans des compositions à la fois intuitives et maîtrisées. Réalisateur de renom en animation et en prise de vue réelle, pour des clients tels qu'Adidas, Facebook ou Back Market, il nourrit son travail d'illustrateur de cette même culture de l'image. Ses illustrations, qu'elles répondent à des commandes ou à une démarche personnelle, portent une sensibilité immédiatement reconnaissable. Depuis son atelier à La Trochette, il explore désormais la peinture comme prolongement naturel de sa pratique. Il est représenté par Eddy pour ses projets d'illustration de commande.", "Maxime Bruneel grew up by the sea before studying art direction and drawing in Paris, then at the School of Visual Arts in New York. He has developed a singular graphic universe, drawing on painting, animation and moving image, where line meets colour in compositions that feel at once intuitive and precise. An acclaimed director in both animation and live-action advertising, for clients including Adidas, Facebook and Back Market, he brings that same image culture to his illustration work. His illustrations, whether commissioned or personal, carry an immediately recognisable sensibility. From his studio at La Trochette, he now explores painting as a natural extension of his practice. He is represented by Eddy for commissioned illustration projects."], ["Diplômée de l'École supérieure des arts décoratifs de Strasbourg en 2014, Maïté Grandjouan construit des récits qu'elle met en scène dans des tableaux sombres et colorés, à la croisée du nouveau réalisme d'Edward Hopper, du pop art et du romantisme allemand de Caspar David Friedrich. Elle publie en 2016 aux éditions Magnani sa première bande dessinée, Fantasma, sélectionnée pour le Prix Artémisia 2017, puis Lena La-très-seule en 2023, une œuvre quasi muette qui se rapproche de la peinture et évoque l'univers de René Magritte. Son travail l'a menée à signer des affiches de festivals de bande dessinée et à collaborer avec des artistes musicaux, notamment pour le clip Fou à lier de Feu! Chatterton. Elle travaille également comme directrice artistique sur le long métrage La ligne, produit par Eddy Cinéma.", "A graduate of the École supérieure des arts décoratifs de Strasbourg (2014), Maïté Grandjouan builds narratives staged in dark, colourful tableaux, drawing from Edward Hopper's new realism, pop art and the German Romanticism of Caspar David Friedrich. In 2016 she published her first graphic novel, Fantasma, with Éditions Magnani, selected for the Prix Artémisia 2017, followed in 2023 by Lena La-très-seule, an almost wordless work that draws close to painting and calls to mind the universe of René Magritte. Her work has led her to create festival posters and collaborate with musicians, including the music video Fou à lier for Feu! Chatterton. She also works as art director on the feature film La ligne, produced by Eddy Cinéma."], ["Dans toute la mesure permise par la loi applicable, la Société et ses fournisseurs ne sauraient en aucun cas être tenus responsables de dommages spéciaux, accessoires, indirects ou consécutifs de quelque nature que ce soit (y compris, sans limitation, les dommages pour perte de bénéfices, perte de données ou d'autres informations, interruption d'activité, préjudice corporel ou atteinte à la vie privée découlant de ou liés de quelque manière que ce soit à l'utilisation ou à l'impossibilité d'utiliser le Service, aux logiciels tiers et au matériel tiers utilisés avec le Service, ou autrement en lien avec toute disposition des présentes Conditions), même si la Société ou un fournisseur a été informé de la possibilité de tels dommages et même si le recours ne remplit pas son objectif essentiel.", "To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and third-party hardware used with the Service, or otherwise in connection with any provision of these Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose."], ["Formée aux Gobelins à Paris, Mathilde Loubes développe un univers graphique tout en douceur et en ombres, où l'illustration et l'animation se nourrissent mutuellement. Elle coréalise avec Antoine Bonnet le court-métrage Un Diable dans la Poche (2019), puis L'Heure Bleue (2022), une œuvre animée produite pour la Scène 3 de l'Opéra de Paris sur une musique de l'Orchestre Philharmonique de Berlin. Son travail d'illustratrice et de réalisatrice l'a menée à collaborer avec des artistes tels que Polo & Pan, Gorillaz et Breakbot, et à signer en 2023 le Doodle Google en hommage à France Gall. Ses illustrations, qu'elles répondent à une commande ou à une démarche personnelle, portent une sensibilité poétique et immédiatement reconnaissable.", "Trained at the Gobelins school in Paris, Mathilde Loubes has developed a graphic universe defined by softness and shadow, where illustration and animation constantly inform one another. She co-directed with Antoine Bonnet the short film Un Diable dans la Poche (2019), followed by L'Heure Bleue (2022), an animated work produced for the Paris Opera's 3rd Stage platform, set to music by the Berlin Philharmonic. Her work as an illustrator and director has led her to collaborate with artists such as Polo & Pan, Gorillaz and Breakbot, and in 2023 she created the Google Doodle in tribute to France Gall. Her illustrations, commissioned or personal, carry a poetic and immediately recognisable sensibility."], ["Sans limiter ce qui précède, ni la Société ni aucun de ses fournisseurs ne fait de déclaration ou ne donne de garantie, expresse ou implicite : (i) quant au fonctionnement ou à la disponibilité du Service, ou des informations, contenus et éléments ou produits qui y figurent ; (ii) quant à la continuité ou à l'absence d'erreur du Service ; (iii) quant à l'exactitude, la fiabilité ou l'actualité de toute information ou de tout contenu fourni par l'intermédiaire du Service ; ou (iv) quant à l'absence, dans le Service, ses serveurs, son contenu ou les courriels envoyés par ou au nom de la Société, de virus, scripts, chevaux de Troie, vers, logiciels malveillants, bombes logiques ou autres composants nuisibles.", "Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components."], ["Réalisateur, illustrateur et auteur de bande dessinée, Apollo Thomas est diplômé des Beaux-Arts de Paris. Ses illustrations ont paru dans des magazines comme Vice, Frederic Magazine, Mondo Zero, Papier x Colette et Arte Episode, ainsi que dans plusieurs graphzines, dont High Fantasy et Mecha Sakura (Edwin), Replica (Fltmstpc), Venetian Blinds (1991 Books) et Zug Magazine #5 (Innen Book). Des groupes comme Il est vilaine, Kids Return, Lulu Van Trapp et Simon Says lui ont confié direction artistique et pochettes d'album ; il a aussi travaillé pour Bang & Olufsen, la marque de sneakers de Los Angeles Shoes 53045, le festival Rock en Seine, et signé des affiches de soirées pour Social Club et Gina XXX.", "Director, illustrator and cartoonist Apollo Thomas is a graduate of the Beaux-Arts de Paris. As an illustrator his work has appeared in magazines such as Vice, Frederic Magazine, Mondo Zero, Papier x Colette and Arte Episode, as well as several graphzines including High Fantasy and Mecha Sakura (Edwin), Replica (Fltmstpc), Venetian Blinds (1991 Books) and Zug Magazine #5 (Innen Book). He has been commissioned by bands such as Il est vilaine, Kids Return, Lulu Van Trapp and Simon Says for art direction and album covers, by the high-end brand Bang & Olufsen, the Los Angeles sneaker brand Shoes 53045 and the music festival Rock en Seine, and has made party posters for Social Club and Gina XXX."], ["Née entre la Guadeloupe et la région bordelaise, Marie Deboissy grandit bercée par la nature et la lumière, deux influences qui traversent durablement son travail. Elle se forme à l'animation à l'Atelier supérieur d'animation de l'Atelier de Sèvres, dont elle sort diplômée en 2019, et cofonde à l'issue de sa formation le Collectif 99°. Réalisatrice et illustratrice, elle développe un univers graphique dominé par la couleur : des compositions réalistes et mystérieuses, nourries de cinéma, de voyages et de peinture. En parallèle de ses films et de ses illustrations de commande, elle pratique la peinture à l'huile comme prolongement naturel de sa démarche.", "Born between Guadeloupe and the Bordeaux region, Marie Deboissy grew up surrounded by nature and light - two influences that run through all her work. She trained in animation at the Atelier supérieur d'animation de l'Atelier de Sèvres, graduating in 2019, and co-founded the Collectif 99° upon completing her studies. As a director and illustrator, she has developed a graphic universe built on colour - realistic yet mysterious compositions, shaped by cinema, travel and painting. Alongside her films and commissioned illustrations, she practises oil painting as a natural extension of her creative practice."], ["Né en 1994, Thomas Trichet grandit à Saint-Maur-des-Fossés en région parisienne. À la suite de ses études d'art à l'ENSAAMA et à l'École des Arts Décoratifs de Paris, il réalise en 2019 son premier court-métrage d'animation, Le Taxi de Sun City. Il développe une pratique artistique plurielle puisqu'il réalise à la fois des films en prise de vue réelle et en animation, de fiction ou de documentaire. Son activité de réalisateur se mêle à celle d'illustrateur, qu'il s'agisse de projets personnels ou commissionnés. En 2020, il fonde avec Martin Maire et Théo Jollet le collectif artistique JTM, ainsi que la société de production du même nom.", "Born in 1994, Thomas Trichet grew up in Saint-Maur-des-Fossés, near Paris. After studying art at ENSAAMA and the École des Arts Décoratifs de Paris, he directed his first animated short film, Le Taxi de Sun City, in 2019. He has since developed a multifaceted artistic practice, working across live-action and animated filmmaking, in both fiction and documentary. His work as a director weaves together with his practice as an illustrator, whether on personal or commissioned projects. In 2020, he co-founded the artistic collective JTM with Martin Maire and Théo Jollet, along with the production company of the same name."], ["Diplômée de l'EMCA en 2013, Lila Poppins est réalisatrice d'animation, spécialisée dans le stop motion et l'art du papier découpé. Avec une approche minutieuse et un vrai savoir-faire artisanal, elle crée des films très détaillés où chaque élément est fabriqué à la main. Entre textures organiques, compositions complexes et palettes éclatantes, elle développe un univers à la fois délicat et immersif. Première réalisatrice en stop motion chez Eddy, elle collabore avec des institutions culturelles, des médias et des créateurs de contenu, et repousse sans cesse les limites de cette technique artisanale.", "Graduated from EMCA in 2013, Lila Poppins is an animation director specializing in stop-motion and the art of paper cut-out. With a meticulous approach and deep craftsmanship, she creates highly detailed films where every element is carefully hand-crafted. Blending organic textures, intricate compositions, and vibrant color palettes, she develops a distinctive universe that is both delicate and immersive. As the first female stop-motion director at Eddy, she collaborates with cultural institutions, media, and content creators, constantly pushing the boundaries of this artisanal technique to bring unique visual narratives to life."], ["Marius Segond est illustrateur, auteur de bandes dessinées et menuisier, installé à Toulouse. Issu d'une reconversion, il mène de front ces deux pratiques manuelles et développe un univers graphique où l'humour et l'absurde sont poussés à l'extrême, avec une prédilection pour la sérigraphie et la risographie. Ses illustrations ont été publiées dans plusieurs revues indépendantes, dont Gros Gris, Samandal Comics et Moules-Frites. En 2023, il remporte le Prix BDFIL-Caran d'Ache, l'une des récompenses les plus reconnues dans le monde de la bande dessinée indépendante européenne.", "Marius Segond is an illustrator, comic artist and carpenter, based in Toulouse. Following a career change, he runs both practices in parallel, and has developed a graphic universe where humour and absurdity are pushed to the extreme, with a particular interest in screen printing and risography. His illustrations have appeared in several independent publications, including Gros Gris, Samandal Comics and Moules-Frites. In 2023, he won the Prix BDFIL-Caran d'Ache, one of the most recognised awards in European independent comics. He is represented by Eddy for commissioned illustration projects."], ["Passionné de dessin, Clément Soulmagnon a réalisé de nombreux courts-métrages et publicités pour des clients comme Hermès, Jean-Paul Gaultier, Apple ou Visa. Il collabore régulièrement avec la presse, notamment The New Yorker. Il aime explorer tous types de techniques, du motion design abstrait à la 3D, en les imprégnant de son univers coloré pour rendre chaque histoire marquante. Son approche singulière de l'animation fluide, des transitions étonnantes et de la narration fait de lui l'un des talents français les plus passionnants à suivre.", "Passionate about drawing, Clément Soulmagnon has directed numerous short films and advertisements for clients such as Hermès, Jean-Paul Gaultier, Apple and Visa. He regularly collaborates with the press, including The New Yorker. He likes to explore all types of techniques, from abstract motion design to 3D, while creating colorful universes to make each story memorable. His distinctive approach to storytelling, fluid animation and amazing transitions makes him one of the most exciting French talents to watch."], ["Diplômée des Arts Décoratifs de Paris, Mathilde Bédouet est réalisatrice de films d'animation et illustratrice. Après trois ans en agence de communication où elle réalise une cinquantaine de films d'animation, Mathilde travaille désormais à son compte pour développer son univers coloré et ses personnages attachants. Toujours à la recherche de défis, elle aime expérimenter avec différentes techniques d'animation 2D, dont la rotoscopie, pour réaliser des pubs, des films institutionnels, mais aussi des courts métrages et des clips.", "A graduate of the Arts Décoratifs school in Paris, Mathilde Bédouet is an animator and illustrator. After three years of working in a communication agency and creating more than fifty animated films, Mathilde now works on her own to push even further her colorful universe and endearing characters. Always looking for challenges, she likes to experiment with different 2D animation techniques, including rotoscoping, to make commercials, corporate films, but also short films and music videos."], ["La Société n'a aucun contrôle sur le contenu, les politiques de confidentialité ou les pratiques des sites ou services tiers et n'assume aucune responsabilité à leur égard. Vous reconnaissez et acceptez en outre que la Société ne saurait être tenue responsable, directement ou indirectement, de tout dommage ou perte causé ou présumé causé par ou en lien avec l'utilisation ou la confiance accordée à tout contenu, bien ou service disponible sur ou via ces sites ou services.", "The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services."], ["Réalisateur d'animation, César Luton a coréalisé le court métrage La Diplomatie de l'éclipse, présélectionné aux Student Academy Awards, puis développé avec Eddy Animation Mantis Garden, un projet de mini-série. Il définit son style comme un mélange de réalisme et de rêverie : des personnages clairement animés, mis en scène comme au cinéma en prise de vue réelle, aux mouvements lents et précis, dans des couleurs sourdes.", "Animation director César Luton co-directed the short film La Diplomatie de l'éclipse, shortlisted for the Student Academy Awards, then developed Mantis Garden, a mini-series project, with Eddy Animation. He describes his style as a blend of realism and dreaminess: characters that are clearly animated, staged like live-action cinema, with slow and deliberate movements, in muted colours."], ["Certaines juridictions n'autorisent pas l'exclusion de certains types de garanties ou la limitation des droits légaux applicables des consommateurs, de sorte que tout ou partie des exclusions et limitations ci-dessus peuvent ne pas s'appliquer à Vous. Dans ce cas, les exclusions et limitations énoncées dans la présente section s'appliquent dans toute la mesure permise par la loi applicable.", "Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law."], ["Nous nous réservons le droit, à Notre seule discrétion, de modifier ou de remplacer les présentes Conditions à tout moment. Si une modification est substantielle, Nous ferons des efforts raisonnables pour Vous en informer au moins 30 jours avant l'entrée en vigueur des nouvelles conditions. Ce qui constitue une modification substantielle est laissé à Notre seule appréciation.", "We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion."], ["Sauf disposition contraire des présentes, le fait de ne pas exercer un droit ou de ne pas exiger l'exécution d'une obligation au titre des présentes Conditions n'affecte pas la capacité d'une partie à exercer ce droit ou à exiger cette exécution ultérieurement, et la renonciation à invoquer un manquement ne vaut pas renonciation à invoquer tout manquement ultérieur.", "Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach."], ["Nonobstant tout dommage que Vous pourriez subir, la responsabilité totale de la Société et de ses fournisseurs au titre des présentes Conditions, et Votre recours exclusif pour tout ce qui précède, sont limités au montant que Vous avez effectivement payé par l'intermédiaire du Service, ou à 100 euros si Vous n'avez rien acheté par l'intermédiaire du Service.", "Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of these Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 euros if You haven't purchased anything through the Service."], ["Les courriels reçus sont traités par Eddy Illustration, groupe Eddy, pour répondre à votre demande et, si vous vous inscrivez, pour vous envoyer les nouvelles de l'agence. Les demandes sont conservées le temps de les traiter et de suivre la relation ; l'inscription aux nouvelles, jusqu'à votre désinscription, possible à tout moment par simple réponse.", "Emails received are processed by Eddy Illustration, Eddy group, to answer your request and, if you sign up, to send you the agency's news. Requests are kept for as long as needed to handle them and follow up the relationship; newsletter sign-ups until you unsubscribe, which you can do at any time by simple reply."], ["Certaines législations n'autorisent pas l'exclusion des garanties implicites ou la limitation de responsabilité pour les dommages accessoires ou consécutifs, de sorte que certaines des limitations ci-dessus peuvent ne pas s'appliquer. Dans ce cas, la responsabilité de chaque partie sera limitée dans toute la mesure permise par la loi.", "Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law."], ["désigne une entité qui contrôle, est contrôlée par ou est sous contrôle commun avec une partie, où « contrôle » signifie la détention de 50 % ou plus des actions, participations ou autres titres donnant droit de vote à l'élection des administrateurs ou de toute autre autorité de gestion.", "means an entity that controls, is controlled by or is under common control with a party, where \"control\" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority."], ["Il garde seulement votre choix de langue le temps de la visite, dans le stockage de session de votre navigateur. Cette information ne quitte pas votre appareil et s'efface à la fermeture de l'onglet. Elle sert une fonction que vous demandez et ne requiert donc pas de consentement.", "It only keeps your language choice for the length of the visit, in your browser's session storage. This information never leaves your device and is erased when the tab is closed. It serves a function you ask for and therefore requires no consent."], ["En continuant à accéder au Service ou à l'utiliser après l'entrée en vigueur de ces modifications, Vous acceptez d'être lié par les conditions révisées. Si Vous n'acceptez pas les nouvelles conditions, en tout ou partie, veuillez cesser d'utiliser le Site web et le Service.", "By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service."], ["Si une disposition des présentes Conditions est jugée inapplicable ou invalide, elle sera modifiée et interprétée de manière à atteindre ses objectifs dans toute la mesure permise par la loi applicable, et les autres dispositions resteront pleinement en vigueur.", "If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect."], ["Eddy Illustration, l'agence d'illustrateur.ices du groupe Eddy. Nous représentons des illustrateur.ices, nous les proposons aux marques, aux éditeurs et aux agences, et nous prolongeons leurs images en animation et en film avec les équipes du groupe.", "Eddy Illustration, the illustrators' agency of the Eddy group. We represent illustrators, we propose them to brands, publishers and agencies, and we extend their images into animation and film with the group's teams."], ["Votre accès au Service et son utilisation sont subordonnés à Votre acceptation et à Votre respect des présentes Conditions générales. Elles s'appliquent à tous les visiteurs, utilisateurs et autres personnes qui accèdent au Service ou l'utilisent.", "Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service."], ["Le droit du Pays, à l'exclusion de ses règles de conflit de lois, régit les présentes Conditions et Votre utilisation du Service. Votre utilisation du Service peut également être soumise à d'autres lois locales, nationales ou internationales.", "The laws of the Country, excluding its conflicts of law rules, shall govern these Terms and Your use of the Service. Your use of the Service may also be subject to other local, state, national, or international laws."], ["Eddy Illustration est l'agence d'illustrateurs du groupe Eddy, société de production à Paris. Nous représentons des artistes au style affirmé et, quand le projet le demande, nous le portons de l'image fixe à l'animation et au film.", "Eddy Illustration is the illustrators' agency of the Eddy group, a production company in Paris. We represent artists with a distinct style and, when the project calls for it, we carry it from the still image to animation and film."], ["Les présentes Conditions générales régissent l'utilisation de ce Service et constituent l'accord qui lie Vous et la Société. Elles définissent les droits et obligations de tous les utilisateurs concernant l'utilisation du Service.", "These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service."], ["Les illustrations, animations et images présentées sur le Service sont la propriété de leurs auteurs, les artistes représentés par Eddy Illustration, ou de leurs clients. Elles sont montrées ici pour présenter leur travail.", "The illustrations, animations and images shown on the Service are the property of their authors, the artists represented by Eddy Illustration, or of their clients. They are shown here to present their work."], ["Aucune image du Service ne peut être reproduite, téléchargée, modifiée ou utilisée à quelque fin que ce soit sans l'accord écrit préalable de son auteur ou de la Société. Pour toute demande d'utilisation, écrivez-nous.", "No image from the Service may be reproduced, downloaded, altered or used for any purpose without the prior written consent of its author or of the Company. For any request of use, write to us."], ["En accédant au Service ou en l'utilisant, Vous acceptez d'être lié par les présentes Conditions générales. Si Vous êtes en désaccord avec une partie quelconque de ces Conditions, Vous ne pouvez pas accéder au Service.", "By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service."], ["Nous pouvons résilier ou suspendre Votre accès immédiatement, sans préavis ni responsabilité, pour quelque raison que ce soit, y compris, sans limitation, si Vous ne respectez pas les présentes Conditions générales.", "We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions."], ["Les mots dont la première lettre est en majuscule ont la signification définie dans les conditions suivantes. Les définitions suivantes ont la même signification, qu'elles apparaissent au singulier ou au pluriel.", "The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural."], ["de la Société, qui décrivent la manière dont ce site traite les données : il ne dépose aucun cookie et ne collecte aucune donnée personnelle. Veuillez les lire attentivement avant d'utiliser le Service.", ", which describes how this site handles data: it sets no cookies and collects no personal data. Please read it carefully before using Our Service."], ["désigne la personne physique accédant au Service ou l'utilisant, ou la société ou toute autre entité juridique au nom de laquelle cette personne accède au Service ou l'utilise, selon le cas.", "means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable."], ["Vous nous confiez un brief. Nous vous proposons l'artiste dont le style correspond, nous cadrons le projet, les droits et le budget, puis nous suivons la production jusqu'à la livraison.", "You give us a brief. We propose the artist whose style fits, we frame the project, the rights and the budget, then we follow production through to delivery."], ["Nous représentons des illustrateur.ices, nous les proposons aux marques, aux éditeurs et aux agences, et nous prolongeons leurs images en animation et en film avec les équipes du groupe.", "We represent illustrators, we propose them to brands, publishers and agencies, and we extend their images into animation and film with the group's teams."], ["(également désignées par « Conditions ») désignent les présentes Conditions générales qui forment l'intégralité de l'accord entre Vous et la Société concernant l'utilisation du Service.", "(also referred as \"Terms\") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service."], ["désigne tout service ou contenu (y compris des données, informations, produits ou services) fourni par un tiers et pouvant être affiché, inclus ou rendu disponible par le Service.", "means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service."], ["Eddy Illustration, l'agence du groupe Eddy. Nous représentons des illustrateurs et prolongeons leurs images en animation et en film avec les équipes de production du groupe.", "Eddy Illustration, the agency of the Eddy group. We represent illustrators and extend their images into animation and film with the group's production teams."], ["Si Vous avez une préoccupation ou un litige concernant le Service, Vous acceptez d'essayer d'abord de le résoudre de manière informelle en contactant la Société.", "If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company."], ["Nous Vous conseillons vivement de lire les conditions générales et les politiques de confidentialité de tout site web ou service tiers que Vous visitez.", "We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit."], ["Si Vous êtes un consommateur de l'Union européenne, Vous bénéficiez de toutes les dispositions impératives de la loi du pays dans lequel Vous résidez.", "If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which you are resident."], ["Les présentes Conditions générales sont rédigées en français et proposées aussi en anglais. En cas de divergence, la version française prévaut.", "These Terms and Conditions are written in French and also offered in English. In case of a dispute, the French text shall prevail."], ["Notre Service peut contenir des liens vers des sites web ou des services tiers qui ne sont ni détenus ni contrôlés par la Société.", "Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company."], ["Ce site ne dépose aucun cookie et ne charge aucun service tiers : ni mesure d'audience, ni publicité, ni module de réseau social.", "This site sets no cookies and loads no third-party service: no analytics, no advertising, no social media plugin."], ["(désignée par « la Société », « Nous », « Notre » ou « Nos » dans le présent contrat) désigne Eddy, 6 rue Rougemont, 75009 Paris.", "(referred to as either \"the Company\", \"We\", \"Us\" or \"Our\" in this Agreement) refers to Eddy, 6 rue Rougemont, 75009 Paris."], ["Vous disposez d'un droit d'accès, de rectification, d'effacement, d'opposition, de limitation et de portabilité : écrivez à ", "You have the right to access, rectify, erase, object, restrict and port your data: write to "], ["La phrase sur la place d'Eddy Illustration dans le groupe Eddy vient ici. Elle sert aussi d'accroche sur la page d'accueil.", "The line on Eddy Illustration's place in the Eddy group goes here. It also opens the home page."], ["Vous déclarez être âgé de plus de 18 ans. La Société n'autorise pas les personnes de moins de 18 ans à utiliser le Service.", "You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service."], ["Cette adresse ne mène nulle part. Les artistes, eux, sont bien là. Attrapez-en un, ou cliquez à côté pour les relancer.", "This address leads nowhere. The artists, though, are right here. Grab one, or click beside them to throw them again."], ["Le formulaire de contact et l'inscription aux nouvelles ouvrent votre messagerie : le site lui-même n'enregistre rien.", "The contact form and the newsletter sign-up open your email app: the site itself records nothing."], ["désigne tout appareil pouvant accéder au Service, tel qu'un ordinateur, un téléphone mobile ou une tablette numérique.", "means any device that can access the Service such as a computer, a cellphone or a digital tablet."], ["Les projets viendront ici, six en vitrine puis le catalogue complet. Aucun projet n'est publié pour l'instant.", "Projects will live here, six on display then the full catalogue. No project is published yet."], ["Pour toute question concernant les présentes Conditions générales, Vous pouvez nous contacter par courriel à", "If you have any questions about these Terms and Conditions, You can contact us by email at"], ["L'hébergeur enregistre, comme tout serveur web, les adresses IP des visites dans ses journaux techniques.", "Like any web server, the host records visitors' IP addresses in its technical logs."], ["Le texte de présentation du projet vient ici, en trois paragraphes, avec les partenaires cités et liés.", "The project text goes here, in three paragraphs, with the partners named and linked."], ["Le nom Eddy Illustration, le nom Eddy, le Site web et sa mise en page sont la propriété de la Société.", "The name Eddy Illustration, the name Eddy, the Website and its layout are the property of the Company."], ["Une même image déclinée en édition, en campagne, en animation et en film par les équipes du groupe.", "One image carried across publishing, campaigns, animation and film by the group's teams."], ["Des illustrateurs au style affirmé. Une fiche par artiste, avec ses projets et un contact direct.", "Illustrators with a distinct style. One page per artist, with their projects and a direct contact."], ["Eddy Illustration, l'agence du groupe Eddy. Des illustrateurs au style affirmé, du print au film.", "Eddy Illustration, the agency of the Eddy group. Illustrators with a distinct style, from print to film."], ["Eddy Illustration, l'agence du groupe Eddy. Des illustrateurs au style affirmé, du print au film.", "Eddy Illustration, illustration and animation: illustrators and animators represented by Eddy."], ["Votre accès au Service et son utilisation sont également subordonnés à Votre acceptation des", "Your access to and use of the Service is also conditioned on Your acceptance of the Company's"], ["Eddy Illustration représente des illustrateurs au style affirmé, du print au film.", "Eddy Illustration represents illustrators with a distinct style, from print to film."], ["Votre projet en quelques lignes : brief, format, échéance, budget si vous l'avez.\"", "Your project in a few lines: brief, format, deadline, budget if you have one.\""], ["Les projets viendront ici, six en vitrine puis le catalogue, filtrés par rubrique.", "Projects will live here, six on display then the catalogue, filtered by category."], ["Nous lisons votre brief et proposons l'illustrateur dont le style lui correspond.", "We read your brief and propose the illustrator whose style fits it."], ["Nous lisons votre brief et proposons l'illustrateur dont le style lui correspond.", "We read your brief and propose the illustrator whose style fits it."], ["Agences et marques avec lesquelles Eddy Illustration travaille, liste à donner.", "Agencies and brands Eddy Illustration works with, list to be given."], ["Sorties de projets et nouvelles signatures, par courriel, quelques fois par an.", "Project releases and new signings, by email, a few times a year."], ["En cas de résiliation, Votre droit d'utiliser le Service cesse immédiatement.", "Upon termination, Your right to use the Service will cease immediately."], ["Nouveaux projets, nouveaux artistes : quelques courriels par an, pas plus.", "New projects, new artists: a few emails a year, no more."], ["La phrase sur la place d'Eddy Illustration dans le groupe Eddy vient ici.", "The line on Eddy Illustration's place in the Eddy group goes here."], ["Une même image déclinée en édition, en campagne, en animation et en film.", "One image carried across publishing, campaigns, animation and film."], ["Pour un nouveau projet ou une demande de portfolio, écrivez à l'équipe.", "For a new project or a portfolio request, write to the team."], ["Les visuels du projet viennent ici, en pleine largeur puis par paires.", "The project visuals go here, full width then in pairs."], ["Les images présentées sur ce site sont la propriété de leurs auteurs.", "The images on this site are the property of their authors."], ["Une demande pour un artiste, un projet, une question : écrivez-nous.", "A request for an artist, a project, a question: write to us."], ["Les artistes représentés par Eddy Illustration, du print au film.", "The artists represented by Eddy Illustration, from print to film."], ["Eddy Illustration représente des illustrateurs et des animateurs.", "Eddy Illustration represents illustrators and animators."], ["Les artistes représentés par Eddy Illustration, du print au film.", "The artists represented by Eddy Illustration, in illustration and animation."], ["Ce site ne dépose aucun cookie et ne charge aucun service tiers.", "This site sets no cookies and loads no third-party service."], ["Eddy Illustration, l'agence d'illustrateur.ices du groupe Eddy.", "Eddy Illustration, the illustrators' agency of the Eddy group."], ["Les trois lignes sur l'agence et le groupe Eddy viennent ici.", "The three lines on the agency and the Eddy group go here."], ["Conditions générales d'utilisation du site Eddy Illustration.", "Terms and Conditions of the Eddy Illustration website."], ["La démarche de l'agence, du brief à la livraison, vient ici.", "The agency's approach, from brief to delivery, goes here."], ["Un projet, une demande de portfolio ? Écrivez à l'équipe.", "A project, a portfolio request? Write to the team."], ["Joindre Eddy Illustration : courriel, adresse et réseaux.", "Reach Eddy Illustration: email, address and social."], ["Forme juridique et numéro d'immatriculation à compléter.", "Legal form and registration number to be completed."], [". Vous pouvez aussi adresser une réclamation à la CNIL.", ". You may also lodge a complaint with the CNIL (French data protection authority)."], ["Les nouvelles d'Eddy Illustration, quelques fois par an", "News from Eddy Illustration, a few times a year"], ["Des illustrateurs au style affirmé, du print au film.", "Illustrators with a distinct style, from print to film."], ["Eddy Illustration : présentation, services et équipe.", "Eddy Illustration: about, services and team."], ["ou par courrier à Eddy, 6 rue Rougemont, 75009 Paris.", "or by post at Eddy, 6 rue Rougemont, 75009 Paris."], ["Un projet, un artiste, une question : écrivez-nous.", "A project, an artist, a question: write to us."], ["Survol pour voir, clic pour entrer dans la fiche.", "Hover to see, click to open the profile."], ["désigne Eddy Illustration, accessible à l'adresse", "refers to Eddy Illustration, accessible from"], ["Le texte de présentation de l'agence vient ici.", "The agency text goes here."], ["Clause « en l'état » et « selon disponibilité »", "\"AS IS\" and \"AS AVAILABLE\" Disclaimer"], ["Ce site ne collecte aucune donnée personnelle.", "This site collects no personal data."], ["Aux fins des présentes Conditions générales :", "For the purposes of these Terms and Conditions:"], ["Mentions légales du site Eddy Illustration.", "Legal notice of the Eddy Illustration website."], [", artiste représenté par Eddy Illustration.", ", artist represented by Eddy Illustration."], ["L'adresse de contact de l'agence vient ici.", "The agency contact address goes here."], ["Eddy Illustration, l'agence du groupe Eddy.", "Eddy Illustration, the agency of the Eddy group."], ["Recevoir les nouvelles d'Eddy Illustration", "Get the Eddy Illustration news"], ["Gabarit de page projet, Eddy Illustration.", "Project page template, Eddy Illustration."], ["Sorties de projets, nouvelles signatures", "Project releases, new signings"], ["Balayez, touchez pour ouvrir la fiche.", "Swipe, tap to open the profile."], ["Modifications des présentes Conditions", "Changes to These Terms and Conditions"], ["Devis, contrats, droits et livraison.", "Quotes, contracts, rights and delivery."], ["Devis, contrats, droits et livraison.", "Quotes, contracts, rights and delivery."], ["Ils ont travaillé avec nos artistes", "They have worked with our artists"], ["Présentation de l'artiste à écrire.", "Artist's presentation to be written."], ["Votre demande, en quelques lignes.\"", "Your request, in a few lines.\""], ["Un projet ou une question générale", "A project or a general question"], ["Conditions générales d'utilisation", "Terms and Conditions"], ["Utilisateurs de l'Union européenne", "For European Union (EU) Users"], ["Les projets d'Eddy Illustration.", "Eddy Illustration projects."], ["Instagram et site à renseigner.", "Instagram and website to be added."], ["Titre de la nouvelle à écrire.", "Headline to be written."], ["Service de réseau social tiers", "Third-party Social Media Service"], ["Scénographie et installations", "Set design and installations"], ["Ce que fait Eddy Illustration", "What Eddy Illustration does"], ["Interprétation et définitions", "Interpretation and Definitions"], ["Liens vers d'autres sites web", "Links to Other Websites"], ["Deux lignes sur la nouvelle.", "Two lines about the news."], ["Artistes | Eddy Illustration", "Artists | Eddy Illustration"], ["Limitation de responsabilité", "Limitation of Liability"], ["Divisibilité et renonciation", "Severability and Waiver"], ["Suivez-nous sur les réseaux", "Follow us on social media"], ["Projets | Eddy Illustration", "Projects | Eddy Illustration"], ["Un artiste, et les projets", "One artist, and the projects"], ["Sept pièces, sept artistes", "Seven pieces, seven artists"], ["Illustration et animation.", "Illustration and animation."], ["Illustration et animation.", "Illustration and animation."], ["Les nouvelles de l'agence", "News from the agency"], ["Illustration et animation", "Illustration and animation"], ["Un projet ? Écrivez-nous.", "A project? Write to us."], ["Cette page n'existe pas.", "This page does not exist."], ["Propriété intellectuelle", "Intellectual Property"], ["Recevoir les nouvelles.", "Receive the news."], ["Dernière mise à jour :", "Last updated:"], ["Un projet, une demande", "A project, a request"], ["Le site est édité par", "This site is published by"], [", découvrir l'artiste", ", discover the artist"], ["Règlement des litiges", "Disputes Resolution"], ["Données personnelles", "Personal data"], ["Conditions générales", "Terms and Conditions"], ["désigne le Site web.", "refers to the Website."], ["Conditions générales", "Terms and Conditions"], ["content=\"À propos |", "content=\"About |"], ["Packaging et objets", "Packaging and objects"], ["content=\"L'agence |", "content=\"The agency |"], ["Découvrir l'artiste", "Discover the artist"], ["Envoyer la demande", "Send the request"], ["Affiches et prints", "Posters and prints"], ["Retour à l'accueil", "Back to home"], ["Nouvelle signature", "New signing"], ["désigne la France.", "refers to: France."], ["<title>À propos |", "<title>About |"], ["Édition et presse", "Publishing and press"], ["Animation et film", "Animation and film"], ["<title>L'agence |", "<title>The agency |"], ["Page introuvable.", "Page not found."], ["Rester en contact", "Stay in touch"], ["Tous les artistes", "All artists"], ["Artiste · Client", "Artist · Client"], ["Du print au film", "From print to film"], ["Page introuvable", "Page not found"], ["Mentions légales", "Legal notice"], ["Tous les projets", "All projects"], ["Sortie de projet", "Project release"], ["vous@exemple.fr\"", "you@example.com\""], ["Illustration de ", "Illustration by "], ["Du print au film", "From print to film"], ["Un interlocuteur", "One point of contact"], ["Du print au film", "From print to film"], ["Un interlocuteur", "One point of contact"], ["3 septembre 2026", "September 3, 2026"], ["Société affiliée", "Affiliate"], ["mentions légales", "legal notice"], ["Droit applicable", "Governing Law"], ["Titre du projet", "Project title"], ["Ordre d'origine", "Original order"], ["Voir l'artiste", "View the artist"], ["Votre courriel", "Your email"], ["Prénom et nom\"", "First and last name\""], ["Le bon artiste", "The right artist"], ["Le bon artiste", "The right artist"], ["Interprétation", "Interpretation"], ["Reconnaissance", "Acknowledgment"], ["Nous contacter", "Contact Us"], ["Votre message", "Your message"], ["Les artistes.", "The artists."], ["Les artistes\"", "The artists\""], ["Demande pour ", "Request for "], ["À propos <i>", "About <i>"], [">Projets</b>", ">Projects</b>"], ["L'agence <i>", "The agency <i>"], ["Trois pièces", "Three pieces"], ["Les artistes", "The artists"], ["Pied de page", "Footer"], ["Rattachement", "The group"], ["Présentation", "About"], ["Portrait de ", "Portrait of "], ["Divisibilité", "Severability"], ["Renonciation", "Waiver"], ["À propos de", "About"], ["Suivez-nous", "Follow us"], ["Six projets", "Six projects"], ["Résiliation", "Termination"], ["Le travail", "The work"], ["En vitrine", "On display"], ["Erreur 404", "Error 404"], ["Vie privée", "Privacy"], ["Actualités", "News"], ["Traduction", "Translation Interpretation"], ["Campagnes", "Campaigns"], ["Votre nom", "Your name"], ["Le roster", "The roster"], ["Précédent", "Previous"], ["S'abonner", "Subscribe"], ["Hébergeur", "Host"], ["À propos", "About"], ["L'agence", "The agency"], ["Approche", "Approach"], ["L'équipe", "The team"], ["À la une", "Featured"], ["Artistes", "Artists"], ["Appareil", "Device"], ["Site web", "Website"], ["Fermer\"", "Close\""], ["Agences", "Agencies"], ["Marques", "Brands"], ["Éditeur", "Publisher"], ["Crédits", "Credits"], ["Données", "Data"], ["Envoyer", "Send"], ["Adresse", "Address"], ["Réseaux", "Social"], ["Suivant", "Next"], ["Exemple", "Example"], ["à venir", "to come"], ["Accueil", "Home"], ["Projets", "Projects"], ["Artiste", "Artist"], ["Société", "Company"], ["Agence", "Agency"], ["Droits", "Rights"], ["Écrire", "Write"], ["Équipe", "Team"], ["Projet", "Project"], ["A à Z", "A to Z"], ["Année", "Year"], ["Liens", "Links"], ["Tous", "All"], ["Plan", "Site map"], ["Pour", "For"], ["Site", "Website"], ["Pays", "Country"], ["Vous", "You"]];
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
    function lbOpen(src, alt) {
      if (!lb) {
        lb = document.createElement('div'); lb.className = 'lb'; lb.hidden = true;
        lb.innerHTML = '<button type="button" class="lb__x" aria-label="' + (EN() ? 'Close' : 'Fermer') + '"><svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M2 2l12 12M14 2L2 14"/></svg></button><figure class="lb__f"><img alt=""></figure>';
        document.body.appendChild(lb);
        lb.addEventListener('click', function (e) { if (e.target.tagName !== 'IMG') { lbClose(); } });
      }
      var im = lb.querySelector('img'); im.src = src; im.alt = alt || '';
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
        var pool = U.filter(function (x) { return x.s !== heroSlug && x.p.length >= 3; });
        if (!pool.length) { pool = U; }
        var ua = pool[Math.floor(Math.random() * pool.length)];
        var nm = document.getElementById('une-n'), go2 = document.getElementById('une-go'), bio = document.getElementById('une-bio');
        nm.textContent = ua.n; nm.href = 'a-' + ua.s; go2.href = 'a-' + ua.s;
        bio.textContent = ua.bio || (EN() ? 'Artist presentation to be written.' : 'Présentation de l\'artiste à écrire.');
        bio.classList.toggle('ph', !ua.bio);
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
