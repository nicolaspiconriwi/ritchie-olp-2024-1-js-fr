import styles from './navigation-bar.css';

export function NavigationBar(
  { user, userImage } =
    { user: 'User', userImage: 'https://via.placeholder.com/150' }
) {

  return `
  <div class="${styles.container}">
    <p>${user}</p>
    <img src="${userImage}" alt="User image">
  </div>
  `;
}