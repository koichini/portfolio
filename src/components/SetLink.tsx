import { useState } from 'react';

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};

function SetLink({page, children}: {page: any, children: any}) {
  const [status, setStatus] = useState(STATUS.NORMAL);

  const onMouseEnter = () => {
    console.log('mouse enter');
    setStatus(STATUS.HOVERED);
  };

  const onMouseLeave = () => {
    console.log('mouse leave');
    setStatus(STATUS.NORMAL);
  }

  return (
    <a 
      className={status}
      href={page || '#'}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </a>
  );
}

export default SetLink;