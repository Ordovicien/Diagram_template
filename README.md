# Flesh and Blood: First Cut - Game Design Document

## 1. Aperçu du Jeu

- **Titre du jeu :** *Flesh and Blood: First Cut*
- **Genre :** Jeu de Cartes à Collectionner Stratégique (TCG/CCG) Mobile
- **Plateformes :** iOS et Android
- **Public cible :**
    - Joueurs de TCG/CCG sur mobile
    - Fans de Flesh and Blood existants
    - Nouveaux joueurs
- **Pitch :** « L'expérience authentique de Flesh and Blood, désormais sur mobile ! Plongez dans des duels tactiques intenses avec une interface optimisée pour le tactile. Choisissez votre héros, construisez votre deck et maîtrisez l'art du combat dans l'arène de Rathe. »
- **Inspiration et Fidélité :** Le jeu s'inspire fidèlement des règles et du gameplay de *Flesh and Blood TCG*, en adaptant l'expérience aux spécificités des plateformes mobiles. L'objectif est de capturer l'essence du jeu original tout en offrant une expérience mobile fluide et engageante.

## 2. Gameplay

### 2.1 Vue d'ensemble

Dans **Flesh and Blood : First Cut**, deux joueurs (ou un joueur contre une IA) s'affrontent en incarnant des héros dotés de capacités uniques. Chaque joueur utilise un deck personnalisé pour attaquer, défendre et gérer ses ressources. Le dernier héros debout remporte la victoire. L'adaptation mobile se concentre sur des parties plus rapides et une interface intuitive pour une expérience de jeu optimale sur écran tactile.

### 2.2 Mécaniques de base

### 2.2.1 Gestion des Ressources

- **Main et pioche :** Chaque joueur commence avec une main de cartes (généralement 4) et pioche une carte au début de son tour.
- **Coût en ressources :** Les cartes nécessitent des ressources pour être jouées.
- **Génération de ressources :**
    - "Pitcher" des cartes de la main (utiliser leur valeur de ressource).
    - Utiliser une carte stockée dans l’Arsenal.
- **L’Arsenal :**
    - Permet de stocker une carte pour un usage ultérieur.
    - Peut être utilisé pour "pitcher" une carte et générer des ressources.

### 2.2.2 Phases de Jeu (Tour par Tour)

Un tour de jeu dans Flesh and Blood: First Cut est divisé en quatre phases distinctes, qui se déroulent toujours dans le même ordre.

1. **Phase de début (start phase) :**
    - Le joueur actif pioche une carte de son deck et l'ajoute à sa main. Si le deck du joueur est vide, il subit un point de dégât de fatigue (à adapter pour le jeu mobile si nécessaire, peut-être plus de dégâts de fatigue pour accélérer les parties).
    - Certains effets de "début de tour" se résolvent à ce moment.
2. **Phase d’action (action phase) :**
    - Durant cette phase, le joueur actif peut effectuer les actions suivantes dans l'ordre de son choix :
        1. **Jouer une carte Action :** Le joueur peut jouer une carte Action (Attaque, Défense Réaction, Action Générique, ou Action de Classe) depuis sa main, en payant son coût en ressources. *Important :* Une seule carte Action peut être jouée par tour, sauf si un effet précise le contraire (par exemple, un effet "Go Again"). Les cartes Action sont généralement défaussées après avoir été jouées (sauf exceptions).
        2. **Jouer une carte Équipement :** Le joueur peut jouer une carte Équipement depuis sa main, en payant son coût en ressources. Les équipements sont placés devant le héros et restent en jeu jusqu'à ce qu'ils soient détruits ou remplacés par un autre équipement du même type (Arme, Tête, Torse, Bras, Jambes, Accessoire). *Important : Contrairement aux cartes Action, le nombre de cartes Équipement jouables n'est pas limité à une par tour.*
        3. **Placer une carte dans l'Arsenal :** Le joueur peut placer une carte de sa main face cachée dans son Arsenal. Cela coûte 1 ressource. L'Arsenal peut contenir une seule carte à la fois. Une carte placée dans l'Arsenal peut être utilisée au tour suivant pour générer des ressources (en la défaussant pour sa valeur de pitch) ou être jouée normalement.
3. **Phase de combat (Combat Phase):**
    - **Déclaration des Attaques :** Le joueur actif peut choisir d'attaquer. Une attaque peut être effectuée en jouant une carte Attaque depuis sa main, ou en utilisant la capacité d'une arme équipée ou une capacité de son Héros. Le joueur actif annonce l'attaque et ses modificateurs (bonus de dégâts, effets spéciaux, etc.).
    - **Défense et Résolution :** Le joueur défenseur a alors la possibilité de se défendre contre l'attaque. Il peut :
        1. Ne pas se défendre : Dans ce cas, il subit la totalité des dégâts de l'attaque.
        2. Bloquer avec des cartes Défense Réaction : Le joueur défenseur peut jouer des cartes Défense Réaction de sa main pour bloquer une partie ou la totalité des dégâts de l'attaque. La valeur de défense d'une carte est utilisée pour réduire les dégâts subis.
        3. Utiliser des Instantanés : Des cartes Instantané peuvent être jouées à tout moment, y compris pendant la phase de combat, pour contrer l'attaque, renforcer la défense ou activer d'autres effets.
    - Une fois que les deux joueurs ont déclaré leurs actions (attaques, défenses, instantanés), les dégâts sont calculés et appliqués. Les cartes utilisées pour attaquer et défendre sont défaussées (sauf exceptions).
4. **Phase de fin :**
    - Les effets de "fin de tour" se résolvent.
    - Tous les effets qui durent "jusqu'à la fin du tour" prennent fin.
    - Le tour passe au joueur suivant.

### 2.3 Jeu des Cartes

### 2.3.1 Types de Cartes

- **Hero (Héros) :** Carte unique représentant le personnage du joueur. Définit les points de vie de départ, la classe, une capacité héroïque unique et parfois une arme de départ. Les héros peuvent avoir des versions "jeune" et "adulte" avec des caractéristiques différentes. *Exemple : Dorinthea Ironsong (Warrior).*
- **Weapon (Arme) :** Utilisée pour attaquer. Possède une valeur d'attaque et potentiellement d'autres effets. Certaines armes sont spécifiques à une classe. *Exemple : Dawnblade (Warrior).*
- **Action :** Cartes à usage unique avec divers effets. Il existe quatre sous-types d'actions :
    - **Attack (Attaque) :** Inflige des dégâts à l'adversaire. Possède une valeur d'attaque et potentiellement d'autres effets. *Exemple : Scar for a Scar (Warrior).*
    - **Defense Reaction (Réaction de Défense) :** Jouée pendant la phase de combat pour bloquer ou réduire les dégâts d'une attaque. Possède une valeur de défense. *Exemple : Sink Below (Générique).*
    - **Generic Action (Action Générique) :** Actions non-attaque et non-défense, utilisables par toutes les classes. Effets variés comme piocher des cartes, soigner, etc. *Exemple : Pummel (Générique).*
    - **Class Action (Action de Classe) :** Actions spécifiques à une classe de héros. Offrent des effets puissants et synergiques avec le style de jeu de la classe. *Exemple : Blade Break (Warrior).*
- **Instant (Instantané) :** Cartes jouables à tout moment, y compris pendant le tour de l'adversaire, généralement en réaction à une action spécifique. Offrent une grande flexibilité tactique. *Exemple : Unmovable (Générique).*
- **Equipment (Équipement) :** Cartes qui restent en jeu et offrent des bonus permanents au héros, comme une augmentation des statistiques ou des capacités supplémentaires. Il existe différents emplacements d'équipement :
    - **Arms (Bras) :** Généralement des gants ou des brassards. *Exemple : Ironrot Gauntlet (Warrior).*
    - **Head (Tête) :** Casques ou autres protections de tête. *Exemple : Helm of Isen's Peak (Générique).*
    - **Chest (Torse) :** Armures ou vêtements. *Exemple : Courage of Bladehold (Warrior).*
    - **Legs (Jambes) :** Bottes ou jambières. *Exemple : Ironhide Legs (Warrior).*
    - **Accessory (Accessoire) :** Objets divers offrant des bonus variés. *Exemple : Nullrune Boots (Générique).*
- **Resource (Ressource) :** Principalement des cartes de terrain (Land) utilisées pour payer le coût des autres cartes. La gestion des ressources est essentielle dans Flesh and Blood.
- **Token (Jeton) :** Représentent des effets temporaires ou des marqueurs. Créés par d'autres cartes, ils ne font pas partie du deck. *Exemple : +1/+1 counter token.*

### 2.4 Modes de Jeu

- **Partie rapide :** Mode de jeu rapide contre l'IA ou d'autres joueurs en ligne, idéal pour des sessions courtes. Permet de tester des decks et de se familiariser avec les mécaniques du jeu.
- **Classée :** Mode de jeu compétitif où les joueurs s'affrontent pour gagner des points de classement et progresser dans les ligues. Offre des récompenses et du prestige aux meilleurs joueurs.
- **Draft (*à étudier*) :** Mode de jeu où les joueurs construisent leurs decks en choisissant des cartes parmi un ensemble aléatoire. Met l'accent sur l'adaptation et la stratégie. Son implémentation sur mobile sera étudiée.
- **Défis :** Missions et scénarios spécifiques avec des objectifs variés, offrant des récompenses uniques. Permet de découvrir de nouvelles stratégies et de diversifier l'expérience de jeu.
- **Tutoriel :** Un tutoriel interactif et complet pour apprendre les règles du jeu et les mécaniques de base. Indispensable pour les nouveaux joueurs.

## 

## 3. Héros et Classes

*(Cette section doit lister les héros disponibles au lancement. Pour chaque héros, incluez les informations suivantes. Exemples avec Dorinthea Ironsong et Bravo, Showstopper :)*

### 3.1 Dorinthea Ironsong (Warrior)

- **Points de vie de départ :** 20
- **Capacité Héroïque :** *Inspiring Boldness* - Une fois par tour, vous pouvez regarder la carte du dessus de votre deck. Si c'est une carte Action d'attaque, vous pouvez la révéler et l'ajouter à votre main. Sinon, remettez-la sur le dessus de votre deck.
- **Arme de départ :** Dawnblade (Attaque : 3, coût : 1 ressource)
- **Forces :** Attaques puissantes, capacité à générer des actions supplémentaires ("Go Again"), bonne mobilité.
- **Faiblesses :** Vulnérable aux decks contrôle, dépendante de son arme.
- **Cartes spécifiques :**
    - *Strike*: Attaque de base efficace.
    - *Razor Reflex*: Attaque puissante avec "Go Again" si elle touche.
    - *Command and Conquer*: Action puissante permettant de piocher des cartes et d'infliger des dégâts.
- **Style de jeu :** Agressif, orienté vers l'attaque. Cherche à infliger des dégâts rapidement et à prendre l'avantage dès le début de la partie. S'appuie sur des combos avec "Go Again" pour enchaîner les attaques.

### 3.2 Bravo, Showstopper (Guardian)

- **Points de vie de départ :** 22
- **Capacité Héroïque :** *Anoint the Chosen* - Une fois par tour, vous pouvez regarder les deux cartes du dessus de votre deck. Si l'une d'elles est une carte Équipement, vous pouvez la révéler et l'ajouter à votre main. Sinon, les deux cartes sont placées au fond du deck.
- **Arme de départ :** Hammer of Justice (Attaque : 3, Défense : 2, Coût : 2 ressources)
- **Forces :** Points de vie élevés, excellente défense, capacité à contrôler le rythme du jeu.
- **Faiblesses :** Manque de mobilité, attaques moins puissantes que les autres classes.
- **Cartes spécifiques :**
    - *Crushing Blow*: Attaque puissante qui peut étourdir l'adversaire.
    - *Unmovable*: Réaction de Défense instantanée qui annule les effets "Go Again".
    - *Sigil of Protection*: Equipement tête qui offre une défense supplémentaire et permet de récupérer de la vie.
- **Style de jeu :** Contrôle, défensif. Cherche à contrer les attaques adverses, à gérer les ressources efficacement et à gagner la partie sur la longueur.

*(Répétez cette section pour chaque héros disponible au lancement. Essayez de donner 3 exemples de cartes spécifiques pour chaque héros, et décrivez brièvement leurs effets)*

### 3.3 Interactions entre les classes

L'équilibrage des classes est essentiel pour un jeu de cartes compétitif. *Flesh and Blood: First Cut* vise à créer un métagame dynamique où chaque classe a ses forces et ses faiblesses, créant ainsi des interactions stratégiques. Voici un exemple simplifié des interactions entre les classes Warrior et Guardian :

- **Warrior contre Guardian :** Les Warriors, avec leur style de jeu agressif, ont généralement l'avantage contre les Guardians en début de partie. Cependant, les Guardians peuvent contrer les attaques du Warrior avec leurs cartes Défense et leur capacité à contrôler le rythme du jeu. Si le Warrior ne parvient pas à infliger suffisamment de dégâts rapidement, le Guardian peut prendre le dessus grâce à ses points de vie élevés et sa capacité à stabiliser la partie.

*(Décrivez les interactions entre les autres classes de la même manière. Un tableau ou une matrice d'interaction pourrait être utile pour visualiser les relations entre toutes les classes.)*

## 4. Interface Utilisateur (UI)

L'interface utilisateur de *Flesh and Blood: First Cut* est conçue pour être intuitive, réactive et optimisée pour les écrans tactiles des appareils mobiles. L'objectif est de permettre aux joueurs d'interagir facilement avec le jeu, tout en conservant la richesse stratégique de Flesh and Blood.

### 4.1 Navigation

- **Menus clairs et concis :** Les menus principaux (Accueil, Collection, Deckbuilding, Jeu, Boutique, Profil, Options) seront accessibles via une barre de navigation en bas de l'écran ou un menu déroulant. Chaque menu sera organisé de manière logique et intuitive.
- **Navigation fluide :** La navigation entre les différents écrans se fera via des transitions fluides et des animations claires. L'utilisation de gestes tactiles (glisser, tapoter, pincer) sera privilégiée pour une expérience utilisateur naturelle.
- **Accès rapide aux informations clés :** Les informations importantes, telles que le nombre de pièces d'or et de gemmes, le niveau du joueur et les notifications, seront affichées de manière claire et accessible depuis l'écran principal.

### 4.2 Affichage des informations

- **Clair et lisible :** Les informations de jeu essentielles (points de vie, ressources, cartes en main, zones de jeu, etc.) seront affichées de manière claire et lisible, avec une police et une taille de texte adaptées aux écrans mobiles. Des icônes intuitives seront utilisées pour représenter les différents types de cartes et les effets.
- **Informations contextuelles :** Un appui long sur une carte affichera une fenêtre contextuelle contenant toutes les informations détaillées sur la carte (texte, coût, effets, mots-clés, etc.).
- **Journal des actions :** Un journal des actions permettra aux joueurs de suivre le déroulement de la partie et de revoir les actions précédentes.

### 4.3 Interactions

- **Glisser-déposer :** Le système de glisser-déposer sera utilisé pour jouer des cartes, attaquer, défendre et interagir avec les différentes zones de jeu.
- **Interactions tactiles intuitives :** Des gestes simples et intuitifs (tapoter, glisser, pincer) permettront d'effectuer toutes les actions nécessaires dans le jeu.
- **Retour haptique :** Un retour haptique (vibration) confirmera les actions du joueur et rendra l'expérience plus immersive.

### 4.4 Ergonomie mobile

- **Adaptation à différents formats d'écran :** L'interface s'adaptera automatiquement aux différents formats d'écran et résolutions des appareils mobiles.
- **Utilisation à une main :** La disposition des éléments de l'interface sera optimisée pour permettre une utilisation confortable du jeu à une main.
- **Options d'accessibilité :** Des options d'accessibilité seront disponibles pour adapter l'interface aux besoins des joueurs (taille du texte, contraste, daltonisme, etc.).

## 5. Histoire et Univers

### 5.1 Contexte

*Flesh and Blood: First Cut* prend place dans le monde fantastique de Rathe, un monde riche en histoire et en conflits. Les différentes régions de Rathe (Aridia, Volcor, Solana, etc.) seront présentées brièvement dans le jeu, notamment à travers les illustrations des cartes et les descriptions des héros.

### 5.2 Personnages

Les héros du jeu sont des personnages importants de l'univers de Flesh and Blood, chacun avec sa propre histoire, ses motivations et son rôle dans les conflits de Rathe. Ces histoires pourront être découvertes à travers de courtes biographies accessibles depuis l'écran de sélection des héros.

### 5.3 Intégration dans le Gameplay

L'histoire et l'univers de Flesh and Blood seront intégrés au gameplay de plusieurs manières :

- **Illustrations des cartes :** Les illustrations des cartes refléteront l'univers et les personnages de Flesh and Blood, contribuant à l'immersion des joueurs.
- **Dialogues et cinématiques :** De courts dialogues et cinématiques (facultatif) pourront accompagner les parties, notamment pendant le tutoriel et les événements spéciaux, pour enrichir l'expérience narrative.
- **Défis thématiques :** Des défis basés sur l'histoire et le lore de Flesh and Blood pourront être proposés aux joueurs.

## 6. Art

### 6.1 Style Visuel

Le style visuel de *Flesh and Blood: First Cut* sera fidèle à l'esthétique du jeu de cartes original, avec des illustrations dynamiques, détaillées et colorées. Un soin particulier sera apporté à l'adaptation des illustrations aux écrans mobiles, en optimisant la résolution et les performances.

### 6.2 Exemples Visuels

*(Insérer ici des exemples d'illustrations de cartes, d'interfaces, et éventuellement de modèles 3D si applicable.)*

## 7. Son

### 7.1 Musique

La musique de *Flesh and Blood: First Cut* sera épique et immersive, inspirée de la bande originale du jeu de cartes physique. Les compositions orchestrales et les thèmes héroïques créeront une ambiance dynamique et captivante pendant les parties, renforçant l'intensité des duels. L'adaptation mobile inclura des variations des thèmes musicaux pour les différents écrans et modes de jeu (menu principal, sélection de héros, combat, victoire, défaite, etc.).

### 7.2 Effets Sonores

Des effets sonores de haute qualité accompagneront les différentes actions du jeu, tels que :

- **Attaques :** Impacts d'épée, coups de poing, explosions, etc. Des variations sonores seront implémentées pour différencier les types d'attaques et les armes utilisées.
- **Défenses :** Bruits de bouclier, sons métalliques, chocs absorbés, etc.
- **Activation de capacités :** Sorts magiques, effets spéciaux, sons distinctifs pour chaque héros.
- **Interactions avec l'interface :** Sons de clics, de glissements, de notifications, etc. Ces sons seront discrets mais efficaces pour confirmer les actions du joueur.

L'ensemble des effets sonores sera conçu pour être clair, immersif et contribuer à l'impact des combats, tout en restant agréable à l'écoute, même pendant de longues sessions de jeu.

## 8. Monétisation

*Flesh and Blood: First Cut* adopte un modèle free-to-play avec des achats intégrés optionnels, permettant aux joueurs de profiter de l'expérience de jeu complète sans dépenser d'argent tout en offrant des options pour accélérer leur progression ou personnaliser leur expérience.

### 8.1 Modèle Économique : Free-to-Play

Le jeu est gratuit à télécharger et à jouer. Les joueurs peuvent gagner des cartes, de l'or et d'autres récompenses en jouant des parties, en relevant des défis et en progressant dans le jeu.

### 8.2 Achats Intégrés

Les achats intégrés sont optionnels et offrent aux joueurs la possibilité d'acquérir des éléments pour améliorer leur expérience de jeu :

- **Packs de boosters virtuels :** Achat de boosters virtuels contenant des cartes aléatoires. Différents types de boosters pourront être proposés, avec des raretés et des contenus variés.
- **Cosmétiques :** Achat d'éléments cosmétiques pour personnaliser l'apparence des héros, des cartes (dos de carte alternatifs) et de l'interface de jeu. Ces éléments n'auront aucun impact sur le gameplay.
- **Offres spéciales et packs de démarrage :** Offres promotionnelles temporaires proposant des packs de cartes, des ressources et des cosmétiques à prix réduit. Des packs de démarrage pourront être proposés aux nouveaux joueurs pour les aider à démarrer leur collection.
- **"Passe de combat" (optionnel) :** Un système de "Passe de combat" pourra être implémenté, offrant des récompenses premium aux joueurs qui progressent dans les niveaux du passe en jouant régulièrement.

### 8.3 Système d'Or et de Gemmes

Le jeu utilise deux monnaies virtuelles :

- **Or :** Monnaie gagnée en jouant des parties, en relevant des défis et en progressant dans le jeu. L'or peut être utilisé pour acheter des boosters virtuels et d'autres objets dans la boutique du jeu.
- **Gemmes :** Monnaie premium pouvant être achetée avec de l'argent réel ou obtenue en petites quantités via des récompenses spéciales. Les gemmes permettent d'acheter des objets exclusifs dans la boutique, tels que des cosmétiques rares ou des boosters spéciaux.

L'équilibre entre l'or et les gemmes sera soigneusement ajusté pour garantir une expérience de jeu équitable et gratifiante pour tous les joueurs, qu'ils choisissent de dépenser de l'argent ou non.

## 9. Planification et Développement

### 9.1 Étapes de développement

- **Prototype** : Création d'une première version fonctionnelle pour tester les concepts de base du jeu.
- **Développement du cœur du jeu** : Mise en place des mécaniques de jeu principales, des systèmes de combat, et des interactions.
- **Intégration des héros et des cartes** : Ajout des personnages, capacités et cartes spécifiques au gameplay.
- **Bêta fermée/ouverte** : Phases de tests pour recueillir les retours des joueurs et ajuster le jeu avant le lancement.
- **Lancement** : Mise en ligne du jeu pour le public avec toutes les fonctionnalités complètes.

### 9.2 Planning

- **Estimation de la durée de chaque étape** :
    - Détail des délais pour chaque phase de développement.
    - Création d'un calendrier prévisionnel pour l’ensemble du projet, incluant des points de contrôle importants.
