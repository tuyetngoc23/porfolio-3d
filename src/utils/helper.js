export const renderDefaultProjectLogo = () => {
  const index = Math.floor(Math.random() * 5 + 1);
  return `/porfolio-3d/assets/project-logo${index}.png`;
};

export const renderDefaultProjectSpotlight = () => {
  const index = Math.floor(Math.random() * 5 + 1);
  return `/porfolio-3d/assets/spotlight${index}.png`;
};