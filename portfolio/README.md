# Yanqing Wang’s research portfolio

Bioinformatics Engineer at Shenzhen Bay Laboratory. The homepage links to four project presentations and a one-page CV in English and Chinese. Each CV is available as a PDF and an editable Word document.

## Publish on the existing mit2021 site

This package adds `portfolio/` to the existing blog and a **Research portfolio** link beside **Home** in the blog navigation. The blog is at https://mit2021.github.io/ and the portfolio is at https://mit2021.github.io/portfolio/.

1. Open or clone the existing [mit2021 Pages repository](https://github.com/mit2021/mit2021.github.io) in GitHub Desktop and fetch its latest `master` branch.
2. Extract the ZIP. Copy the entire `portfolio` folder into the repository root. The separate top-level `index.html` is the blog homepage from commit `dcc0ba1` with the new navigation link. If the homepage has changed since then, add this link beside **Home** in the current page instead of replacing it.

   ```html
   <a class="navbar-item" href="/portfolio/">Research portfolio</a>
   ```
3. Review the changes, commit to the publishing branch, and push. If the branch is protected, push a feature branch and merge a pull request. GitHub Pages is already enabled. Use the default GitHub Pages domain for both the blog and the portfolio.
4. Once deployment completes, open the blog homepage, select **Research portfolio**, and open a project. Select **View presentation** to browse slides. **Read the PDF on this page** opens the embedded document. Use **Download PowerPoint** for the editable deck.

For troubleshooting, check the Pages deployment in the repository’s Actions tab and confirm its publishing source in Settings → Pages. [GitHub Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Make updates

- **Bio and contact.** Edit `portfolio/index.html`. The GitHub link points to `mit2021`.
- **CVs.** Edit `downloads/Yanqing-Wang-CV.docx` for English or `downloads/Yanqing-Wang-CV-ZH.docx` for Chinese. Export the revised file as a PDF with the matching name. Keep each PDF to one page and check the Chinese glyphs after export.
- **Research.** Edit the corresponding HTML file in `profiles/`. Each profile describes the question, method, observation, and a proposed follow-up.
- **Presentations.** Edit the PowerPoint under `downloads/` and export its PDF with the same basename. The slide viewer displays local slide images for compatibility on phones and computers. Update the matching numbered images in `assets/slides/` when a deck changes. If the slide count changes, update the image list and alternative text in the project page. The viewer counts its slides automatically.
- **Local preview.** Open `portfolio/index.html` directly, or run `python3 -m http.server 8000` from the extracted package root and visit `http://localhost:8000/portfolio/`.
