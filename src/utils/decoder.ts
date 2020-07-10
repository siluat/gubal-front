export function decodeIcon(code: string): string {
  const basePath = '/ui/icon';
  const filename = code.padStart(6, '0');
  const group = filename.slice(0, 3).padEnd(6, '0');
  return `${basePath}/${group}/${filename}${'.png'}`;
}

export function decodeItemCategory(
  code: number,
): { name: string; icon: string } {
  return { name: '양손창', icon: '/ui/icon/060000/060104.png' };
}
