import css from './LoadMoreBtn.module.css';
import { MouseEvent } from 'react';

type LoadMoreImgPropsType = {
 loadMoreImg: () => void;
} 

export default function LoadMore({ loadMoreImg }: LoadMoreImgPropsType) {
  
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    loadMoreImg();
  };

  return (
    <div className={css.loadButtonBlock}>
      <button className={css.loadButton} onClick={handleClick }>Load More</button>
    </div>
  );
}
