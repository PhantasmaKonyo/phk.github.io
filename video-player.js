const deepDiveVideos = document.querySelectorAll('.project-video-shell');

deepDiveVideos.forEach((shell) => {
  const video = shell.querySelector('.project-video');
  const playButton = shell.querySelector('.project-play-button');

  const playVideo = () => {
    video.play();
  };

  const pauseVideo = () => {
    video.pause();
  };

  shell.addEventListener('click', (event) => {
    if (event.target.closest('.project-play-button') || event.target === video) {
      if (video.paused) {
        playVideo();
      } else {
        pauseVideo();
      }
    }
  });

  video.addEventListener('play', () => {
    shell.classList.add('is-playing');
    video.setAttribute('controls', '');
  });

  video.addEventListener('pause', () => {
    shell.classList.remove('is-playing');
  });

  playButton.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      playVideo();
    }
  });
});
