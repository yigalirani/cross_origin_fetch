
chrome.runtime.onInstalled.addListener(() => {
  const RULE = {
    id: 1,
    condition:{resourceTypes: ['xmlhttprequest'] },
    action: {
      type: 'modifyHeaders',
      responseHeaders: [
        {header: 'Link', operation: 'remove'},
      ],
    },
  };
  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [1],
    addRules: [RULE],
  });
});

self.addEventListener('fetch', async (event) => {
  console.log('service worker: fetch',event.request.url)
  return fetch(event.request.url)
})
console.log('service worker: hello')