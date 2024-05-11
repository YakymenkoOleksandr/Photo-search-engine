import css from './LoadMoreBtn.module.css';

export default function LoadMore({loadMoreImg }) {
  return (
    <div className={css.loadButtonBlock}>
      <button className={css.loadButton} onClick={loadMoreImg }>Load More</button>
    </div>
  );
}
