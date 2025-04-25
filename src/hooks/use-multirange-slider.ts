import { useState, useCallback, useEffect, ChangeEvent } from 'react';

interface UseMultiRangeSliderProps {
  min: number;
  max: number;
  onChange?: (values: { min: number; max: number }) => void;
}

export const useMultiRangeSlider = ({ min, max, onChange }: UseMultiRangeSliderProps) => {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  const handleMinChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = Math.min(Number(event.target.value), maxValue);
      setMinValue(value);
    },
    [maxValue]
  );

  const handleMaxChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = Math.max(Number(event.target.value), minValue);
      setMaxValue(value);
    },
    [minValue]
  );

  useEffect(() => {
    onChange?.({ min: minValue, max: maxValue });
  }, [minValue, maxValue, onChange]);

  return {
    minValue,
    maxValue,
    handleMinChange,
    handleMaxChange,
  };
};
