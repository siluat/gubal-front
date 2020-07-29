import { useState, useEffect } from 'react';
import { Item } from '../../types/Item';
import { getItemDetail } from '../../lib/api';

function useItem(id: number) {
  const [loading, setLoading] = useState<boolean>(true);
  const [item, setItem] = useState<Item | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const { data } = await getItemDetail(id);
        setItem(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  return { loading, item, error };
}

export default useItem;
