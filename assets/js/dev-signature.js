window.WanaLikeDevSignature = {
  version: '1.0.0',
  contact: 'https://wanalike.net/contact',
  comment: `
/***************************************************************
 *                                                             *
 *   WanaLike Creative Tech Ecosystem                          *
 *   Source signature for developers and curious minds.         *
 *                                                             *
 *   [FR]                                                      *
 *   Bonjour à toi petit curieux qui regarde ce code.           *
 *   Bienvenue dans la matrice WanaLike.                        *
 *                                                             *
 *   Pour un retour technique ou un signalement responsable :   *
 *   https://wanalike.net/contact                              *
 *                                                             *
 *   Si tu aimes le design, la navigation ou l'idée,            *
 *   partage le site et passe voir les projets.                 *
 *                                                             *
 *   [EN]                                                      *
 *   Hello curious developer reading this source.               *
 *   Welcome inside the WanaLike matrix.                        *
 *                                                             *
 *   For technical feedback or responsible reporting:           *
 *   https://wanalike.net/contact                              *
 *                                                             *
 *   Built with love, Linux, caffeine and unreasonable ideas.   *
 *                                                             *
 *   Sincerely, KoS_.                                          *
 *                                                             *
 ***************************************************************/
`
};

(function exposeSignature() {
  try {
    const marker = document.createComment(window.WanaLikeDevSignature.comment);
    document.documentElement.insertBefore(marker, document.documentElement.firstChild);
    console.info('%cWanaLike Matrix', 'background:#050816;color:#00a2ff;font-size:16px;font-weight:bold;padding:6px 10px;border-radius:6px;');
    console.info('Developer contact:', window.WanaLikeDevSignature.contact);
  } catch (error) {
    console.warn('WanaLike signature could not be injected:', error);
  }
})();
