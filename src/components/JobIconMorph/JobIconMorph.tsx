import React, { useState, useEffect } from 'react';
import { interpolate } from '@siluat/flubber';
import JobIconPaths from './JobIconPath';

// 프레임별 SVG path를 미리 계산
const interpolators: Array<(t: number) => string> = [];
for (let i = 0; i < JobIconPaths.length; i++) {
  interpolators.push(
    interpolate(
      JobIconPaths[i].path,
      JobIconPaths[i + 1] ? JobIconPaths[i + 1].path : JobIconPaths[0].path,
    ),
  );
}

export type JobIconMorphProps = {
  color?: string;
};

function JobIconMorph({ color = '#bbac94' }: JobIconMorphProps) {
  const [pathIndex, setPathIndex] = useState(0);
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    timer = setInterval(() => {
      const nextIndex = (pathIndex + 1) % JobIconPaths.length;
      setFrame(0);
      setPathIndex(nextIndex);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [pathIndex, frame]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    timer = setInterval(() => {
      const nextFrame = Math.min(frame + 0.045, 1);
      setFrame(nextFrame);
    }, 10);
    return () => {
      clearInterval(timer);
    };
  }, [frame]);

  return (
    <svg width="64" height="64" viewBox="0 0 512 512">
      <title data-testid="job-title">
        {JobIconPaths[(pathIndex + 1) % JobIconPaths.length].job}
      </title>
      <path fill={color} d={interpolators[pathIndex](frame)} />
    </svg>
  );
}

export default JobIconMorph;
