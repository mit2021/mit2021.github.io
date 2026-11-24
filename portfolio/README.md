# Yanqing Wang’s research portfolio

The [portfolio](https://mit2021.github.io/portfolio/) is linked from the existing [blog homepage](https://mit2021.github.io/). The repository publishes the root of its publishing branch through GitHub Pages. A push to that branch starts the site deployment.

## Project materials

| Profile | Presentation |
| --- | --- |
| HiPore-C enhancer ranking | Dual-channel architecture, filter comparison, bin stability, higher-order contacts, cell-specific synergy and benchmark loci |
| AlphaGenome at MYB | Predicted RNA signal at candidate intervals |
| Generative genomics | Data sparsity, ABC calibration and distance-stratified performance |
| Miao | FLAMINGOr reconstruction and OpenMiChroM chromosome 13 simulations |
| VCC | Team bio’s final and frozen validation rankings, submission pipeline and subsequent model extension |
| Wei | Active and inactive X chromosome reconstructions with Xist and Dxz4 landmarks |
| Yuan | Akita method and three HFF benchmark windows |

## Update a profile

Edit its HTML under `profiles/` and the corresponding research card in `index.html`. Each presentation has a PowerPoint and a matching PDF under `downloads/`. Export the edited PowerPoint to PDF and replace both files together. A project page includes a browser slide viewer, a full-size figure and an embedded PDF.

For the expanded profiles, render each PDF page at 1440 × 810 px, stack the images vertically in slide order and save the resulting WebP in `assets/slides/`. Each viewer frame shows one slide using an equally spaced vertical position from 0% to 100%. Update the slide descriptions, menu and frame positions if the slide count changes. AlphaGenome uses two individual preview images.

Preview by serving the repository root locally and opening `/portfolio/`. After publishing, check the blog navigation, project links, slide controls and PDF/PowerPoint downloads. Standalone English and Chinese CVs are maintained separately from the public portfolio.
