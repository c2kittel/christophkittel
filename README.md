# Site de recherche avec Astro : guide pas à pas

Ce dépôt contient le code du site [ckittel.eu](https://ckittel.eu) : accueil, CV, publications, projets, news. Ce fichier explique comment créer un site similaire, sous **Windows** comme sous **macOS/Linux**. Ce README n'est pas publié sur le site (seul le dossier `dist/` l'est).

Le site est statique : gratuit à héberger, rapide, sans base de données ni CMS à mettre à jour.

## 1. Stack

| Brique | Outil | Rôle |
|---|---|---|
| Génération du site | [Astro](https://astro.build) 5 | Transforme les pages en HTML statique |
| Style | Tailwind CSS 3 (`@astrojs/tailwind`) | Classes utilitaires, pas de CSS à écrire à la main |
| Hébergement | GitHub Pages | Gratuit, HTTPS automatique |
| Déploiement | GitHub Actions | Build et mise en ligne à chaque `git push` sur `main` |
| Nom de domaine | Au choix (ex. Infomaniak) | Optionnel, ~15 €/an |

## 2. Installer les outils (une seule fois)

### Sous Windows

1. **Node.js 22 ou plus** : télécharger l'installeur LTS sur <https://nodejs.org> et l'exécuter avec les options par défaut.
2. **Git for Windows** : <https://git-scm.com/download/win>, options par défaut. Il installe aussi **Git Bash** et **Git Credential Manager**, qui gère la connexion à GitHub.
3. **Un éditeur de texte** : VS Code (<https://code.visualstudio.com>).
4. **Un compte GitHub** : <https://github.com>.
5. Fermer puis rouvrir le terminal, et vérifier :
   ```powershell
   node -v
   npm -v
   git --version
   ```

Alternative en une ligne si `winget` est disponible (PowerShell) :

```powershell
winget install OpenJS.NodeJS.LTS Git.Git Microsoft.VisualStudioCode
```

**Quel terminal ?** PowerShell (menu Démarrer > PowerShell), Git Bash ou le terminal intégré de VS Code (menu Terminal > Nouveau terminal).

**Si PowerShell répond « l'exécution de scripts est désactivée sur ce système »** en lançant `npm`, exécuter une fois :

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

### Sous macOS / Linux

1. **Node.js 22 ou plus** : installeur sur <https://nodejs.org>, ou via un gestionnaire de paquets :
   ```sh
   brew install node          # macOS avec Homebrew
   ```
   Sous Linux, utiliser le gestionnaire de la distribution ou [nvm](https://github.com/nvm-sh/nvm), en vérifiant que la version est 22 ou plus.
2. **Git** : déjà présent sur la plupart des systèmes, sinon `brew install git` (macOS) ou `sudo apt install git` (Debian/Ubuntu).
3. Un éditeur de texte (VS Code) et un compte GitHub.
4. Vérifier :
   ```sh
   node -v
   npm -v
   git --version
   ```

**Quel terminal ?** L'application Terminal (macOS), le terminal du système (Linux) ou le terminal intégré de VS Code.

### Les commandes des sections suivantes

Les commandes `npm` et `git` sont **identiques** sous Windows et macOS/Linux. Quand une commande diffère, les deux versions sont données.

## 3. Deux façons de démarrer

### Option A : partir des sources de ce dépôt (recommandé, le plus rapide)

Deux points à régler avant :

- **Accès** : le dépôt `c2kittel/christophkittel` doit être public, ou Christoph doit inviter la personne (Settings > Collaborators).
- **Contenu personnel** : le dépôt contient les photos, le CV, les publications et les news de Christoph. Le plus propre est de le copier **sans l'historique git**, puis de remplacer tout le contenu personnel (section 5).

**Windows (PowerShell) :**

```powershell
git clone https://github.com/c2kittel/christophkittel.git mon-site
cd mon-site
Remove-Item -Recurse -Force .git
git init
git branch -M main
```

**macOS / Linux (ou Git Bash sous Windows) :**

```sh
git clone https://github.com/c2kittel/christophkittel.git mon-site
cd mon-site
rm -rf .git
git init
git branch -M main
```

Puis passer à la section 4.

### Option B : repartir de zéro

```sh
npm create astro@latest mon-site
cd mon-site
npx astro add tailwind
```

Choisir le template « Empty », TypeScript « Relaxed », et accepter l'installation des dépendances. Il faudra ensuite recréer les pages et la mise en page (`src/layouts/BaseLayout.astro`, `src/pages/*.astro`). L'option A fait gagner plusieurs heures.

## 4. Lancer le site en local

```sh
npm install --legacy-peer-deps
npm run dev
```

Le site est alors visible sur <http://localhost:4321> et se met à jour à chaque sauvegarde de fichier. `Ctrl + C` arrête le serveur. `npm run build` génère le site final dans `dist/`.

## 5. Ce qu'il faut personnaliser (option A)

| Fichier | À adapter |
|---|---|
| `astro.config.mjs` | `site:` = l'adresse du futur site (domaine ou `https://pseudo.github.io`). Si le site est sous `pseudo.github.io/nom-du-depot`, ajouter `base: '/nom-du-depot'` |
| `public/CNAME` | Le nom de domaine, ou supprimer le fichier si pas de domaine propre |
| `public/img/` | Remplacer les photos et logos (`ledoug.jpg`, logos d'universités, etc.) |
| `src/layouts/BaseLayout.astro` | Bandeau de navigation (fonction, université) et pied de page (nom, mention éventuelle sur l'IA) |
| `src/pages/index.astro` | Accueil : photo, contacts, bio, intérêts de recherche, timeline des postes |
| `src/data/cv.js` | Expériences, enseignement, formation, distinctions |
| `src/pages/cv.astro` | Les sections Supervision et Service à la communauté sont écrites directement dans cette page |
| `src/data/projects.js` | Liste des projets (voir 6.2) |
| `src/data/publications.js` | Liste des publications (voir 6.1) |
| `src/pages/publications.astro` | La liste `highlightedDOIs` : les publications mises en avant |
| `src/content/news/` | Supprimer les news existantes, en écrire de nouvelles (voir 6.3) |
| `src/pages/404.astro` | **À modifier** : l'iframe contient la clé NotFound.org liée au site de Christoph. Soit s'inscrire sur <https://notfound.org> pour obtenir sa propre clé, soit supprimer l'iframe |
| `README.md` | Ce fichier : à remplacer par la description de votre propre dépôt |

## 6. Mettre à jour le contenu

### 6.1 Publications

Chaque publication est un objet dans `src/data/publications.js` :

```js
{
  title: "Titre de l'article",
  authors: "Nom, P., Autre, A., & Dernier, D.",
  year: 2026,
  journal: "Revue, volume (numéro), pages",
  doi: "10.xxxx/xxxxx",
  link: "https://hdl.handle.net/2268/xxxxxx"   // lien ORBi ou DOI
}
```

Les plus récentes sont **à la fin** de la liste (la page les inverse pour l'affichage). Astuce : les listes d'auteurs complètes se récupèrent via `https://api.crossref.org/works/<DOI>`.

### 6.2 Projets

Chaque projet est un objet dans `src/data/projects.js` (`id`, `title`, `status` valant `ongoing` ou `past`, `role`, `period`, `funding`, `institution`, `consortium`, `summary`, `fullDescription`, `tags`). Champs optionnels : `website` (lien affiché dans la fiche) et `relatedDOIs` (liste de DOI de publications à afficher sous « Related Publications »). Les projets `ongoing` apparaissent dans « Active Research », les `past` dans « Past Projects ».

### 6.3 News

Créer un fichier `src/content/news/AAAA-mon-titre.md` :

```markdown
---
title: "Titre de la news"
date: 2026-11-10
summary: "Une ou deux phrases pour la liste des news."
relatedProject: "id-du-projet"   # optionnel : la news apparaît dans « Latest Updates » du projet
---

Texte en Markdown.
```

## 7. Mettre en ligne sur GitHub Pages

1. Sur GitHub, créer un dépôt vide (par exemple `mon-site`), sans README ni `.gitignore`.
2. Y envoyer le code (remplacer `PSEUDO` et `mon-site`) :
   ```sh
   git add -A
   git commit -m "Premier commit"
   git remote add origin https://github.com/PSEUDO/mon-site.git
   git push -u origin main
   ```
   - **Windows** : une fenêtre de navigateur s'ouvre au premier `git push` pour se connecter à GitHub (Git Credential Manager). Aucune clé SSH n'est nécessaire avec l'adresse `https://`.
   - **macOS** : même principe si Git est installé via Homebrew ou Xcode, sinon GitHub demande un *personal access token* à la place du mot de passe (GitHub > Settings > Developer settings > Personal access tokens).
   - **Linux** : GitHub demande un *personal access token* à la place du mot de passe, ou on configure une clé SSH (<https://docs.github.com/authentication/connecting-to-github-with-ssh>) et on utilise l'adresse `git@github.com:PSEUDO/mon-site.git`.
3. Sur GitHub : **Settings > Pages > Build and deployment > Source : GitHub Actions**.
4. Le fichier `.github/workflows/deploy.yml` (déjà présent dans les sources) construit et publie le site à chaque push sur `main`. L'avancement se suit dans l'onglet **Actions**.
5. Le site est disponible sur `https://PSEUDO.github.io/mon-site/` après quelques minutes.

### Nom de domaine personnalisé (optionnel)

1. Acheter un domaine (Infomaniak, OVH, Gandi...).
2. Dans le DNS du domaine, créer un enregistrement `CNAME` (pour `www`) vers `PSEUDO.github.io`. Pour le domaine nu, suivre la documentation GitHub (enregistrements `A`).
3. Mettre le domaine dans `public/CNAME` et dans `site:` de `astro.config.mjs`.
4. Sur GitHub : **Settings > Pages > Custom domain**, puis cocher **Enforce HTTPS**.

## 8. Au quotidien

```sh
git pull                       # récupérer les derniers changements
# ... modifier des fichiers ...
npm run dev                    # vérifier le rendu en local
git add -A
git commit -m "Description du changement"
git push                       # déclenche la mise en ligne automatique
```

## 9. Problèmes fréquents

- **Windows : `npm` répond « l'exécution de scripts est désactivée »** : voir la commande `Set-ExecutionPolicy` de la section 2, ou utiliser Git Bash.
- **Windows : `node` ou `git` « n'est pas reconnu »** : fermer et rouvrir le terminal après l'installation. Si ça persiste, redémarrer Windows.
- **Windows : avertissements `LF will be replaced by CRLF` de Git** : sans gravité, ce sont des fins de ligne converties automatiquement.
- **macOS / Linux : `permission denied` à l'installation de paquets** : ne pas utiliser `sudo npm`. Installer Node avec Homebrew ou nvm plutôt qu'avec les droits administrateur.
- **macOS / Linux : `git push` refuse le mot de passe** : GitHub n'accepte plus les mots de passe, utiliser un *personal access token* ou une clé SSH (section 7).
- **`npm install` échoue sur des dépendances incompatibles** : utiliser `npm install --legacy-peer-deps` (c'est aussi ce que fait le workflow).
- **Un avertissement « Auto-generating collections... deprecated »** : sans gravité, le site fonctionne. Pour le supprimer, définir la collection `news` dans `src/content.config.ts`.
- **Le site en ligne n'a pas changé** : regarder l'onglet Actions de GitHub, le build a sûrement échoué.
- **Liens ou images cassés sous `pseudo.github.io/nom-du-depot`** : il manque `base: '/nom-du-depot'` dans `astro.config.mjs`.
- **Version de Node trop ancienne** : Astro 5 demande Node 22 ou plus.

## 10. Ressources

- Documentation Astro : <https://docs.astro.build>
- Documentation Tailwind : <https://tailwindcss.com/docs>
- Documentation GitHub Pages : <https://docs.github.com/pages>
