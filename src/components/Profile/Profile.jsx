// import clsx from "clsx";
import css from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
  
  return (
    <div className={css.container} >
      
  <div >
    <img className={css.image}
      src={image}
          alt={name}
    />
    <p className={css.name}>{name}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}, Brasil</p>
  </div>

  <ul className={css.list}>
    <li className={css.item}>
    <span className={css.stats}>Folovers</span>
    <span className={css.count}>{stats.followers}</span>
    </li>
    <li className={css.item}>
      <span className={css.stats}>Views</span>
      <span className={css.count}>{stats.views}</span>
    </li>
    <li className={css.item}>
      <span className={css.stats}>Likes</span>
      <span className={css.count}>{stats.likes}</span>
    </li>
  </ul>
</div>
  );
};