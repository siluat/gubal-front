import React from 'react';
import { useParams } from 'react-router-dom';
import useItem from '../hooks/useItem';
import ItemDetail from '../components/ItemDetail/ItemDetail';

function ErrorMessage() {
  return <div data-testid="error-message">아이템 정보를 찾을 수 없습니다.</div>;
}

function ItemPage(props: React.HTMLAttributes<HTMLDivElement>) {
  const { id } = useParams();
  const { loading, item, error } = useItem(id as number);

  if (!loading && error) {
    return <ErrorMessage />;
  }

  return <div {...props}>{item && <ItemDetail item={item} />}</div>;
}

export default ItemPage;
