import { Plugin } from '@nuxt/types';


export const hello = async () => {
  console.log('hello');
}

export default hello;


// const installPrompt: Plugin = ({ app }) => {
//   let deferredPrompt: any;

//   window.addEventListener('beforeinstallprompt', (e: Event) => {
//     e.preventDefault();
//     deferredPrompt = e;
//     app.store?.commit('showInstallButton', true); // Assuming you have Vuex
//   });

//   app.store?.subscribe((mutation: { type: string }) => {
//     if (mutation.type === 'userClickedInstall') { // When user clicks "Install"
//       deferredPrompt.prompt();
//       deferredPrompt.userChoice.then((choiceResult: { outcome: string }) => {
//         app.store?.commit('showInstallButton', false);
//         console.log(`User response: ${choiceResult.outcome}`);
//       });
//     }
//   });
// };

// export default installPrompt;
