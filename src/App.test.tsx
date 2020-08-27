import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitFor, fireEvent } from './utils/test-utils';
import App, { AppRoute } from './App';
import userEvent from '@testing-library/user-event';

describe('페이지 라우팅 테스트', () => {
  test('렌더링', async () => {
    render(<App />);

    expect(screen.getByTestId('search-page')).toBeInTheDocument();
  });

  test('/search URL로 직접 접근시 검색 페이지로 라우팅', async () => {
    render(
      <MemoryRouter initialEntries={['/search']}>
        <AppRoute />
      </MemoryRouter>,
    );

    expect(screen.getByTestId('search-page')).toBeInTheDocument();
  });

  test('/item/:id URL로 직접 접근시 검색 페이지로 라우팅', async () => {
    render(
      <MemoryRouter initialEntries={['/item/28292']}>
        <AppRoute />
      </MemoryRouter>,
    );

    expect(screen.getByTestId('item-page')).toBeInTheDocument();
  });
});

describe('아이템 상세 정보 조회 페이지', () => {
  test('아이템 정보 조회 실패시 관련 안내 메시지를 출력된다', async () => {
    render(
      <MemoryRouter initialEntries={['/item/-123']}>
        <AppRoute />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(screen.getByTestId('error-message')).toBeInTheDocument();
    });
  });

  test('아이템 정보가 출력된다', async () => {
    render(
      <MemoryRouter initialEntries={['/item/28292']}>
        <AppRoute />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(screen.queryByTestId('error-message')).not.toBeInTheDocument();
      expect(screen.getByText('절 롱고미안트')).toBeInTheDocument();
    });
  });
});

describe('아이템 검색 후 상세 정보 조회', () => {
  test('아이템 검색 결과 클릭시 상세 정보 페이지로 이동된다', async () => {
    render(
      <MemoryRouter initialEntries={['/search']}>
        <AppRoute />
      </MemoryRouter>,
    );

    const searchInput = screen.getByLabelText('검색어');
    userEvent.type(searchInput, '롱고미안트');

    await waitFor(() => {
      expect(screen.getByText('절 롱고미안트')).toBeInTheDocument();
    });

    const item = screen.getByText('절 롱고미안트');
    fireEvent.click(item);

    await waitFor(() => {
      expect(screen.getByTestId('item-page')).toBeInTheDocument();
      expect(screen.getByText('양손창')).toBeInTheDocument();
    });
  });

  test('/main URL로 접근시 MainPage가 렌더링 된다', async () => {
    render(
      <MemoryRouter initialEntries={['/main']}>
        <AppRoute />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(screen.getByText(/Main Page/i)).toBeInTheDocument();
    });
  });
});
