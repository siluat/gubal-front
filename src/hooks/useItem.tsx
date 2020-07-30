import { useState, useEffect } from 'react';
import { Item } from '../types/Item';
import { getItemDetail } from '../lib/api';

function useItem(id: number) {
  const [loading, setLoading] = useState<boolean>(true);
  const [item, setItem] = useState<Item | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isCancel = false;

    const fetchItem = async () => {
      try {
        const { data } = await getItemDetail(id);
        !isCancel && setItem(data);
      } catch (error) {
        !isCancel && setError(error);
      } finally {
        !isCancel && setLoading(false);
      }
    };

    fetchItem();

    return () => {
      isCancel = true;
    };
  }, [id]);

  return { loading, item, error };
}

export default useItem;
