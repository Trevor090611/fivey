const params = new URLSearchParams(location.search);
if (params.get('course') === 'biology') {
  const banner = document.querySelector('[data-biology-banner]');
  if (banner && (!banner.dataset.bannerView || banner.dataset.bannerView === params.get('view'))) {
    const title = banner.dataset.bannerTitle && document.getElementById(banner.dataset.bannerTitle);
    if (title) {
      banner.querySelector('.wrap').append(title);
      banner.hidden = false;
    }
    banner.classList.add('biology-photo-banner');
  }
}
