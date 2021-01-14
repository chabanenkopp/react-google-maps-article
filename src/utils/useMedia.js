/* eslint-disable radix */
import useMediaHook from 'use-media'
import { DEVICE } from 'Theme'

const BREAKPOINT = {
  S: DEVICE.S,
  M: DEVICE.M,
  L: DEVICE.L,
  XL: DEVICE.XL,
}

const queries = Object.entries(BREAKPOINT).reduce(
  (acc, [breakpointKey, width], index, array) => {
    const isFirst = index !== 0
    const nextBreakpoint = array[index + 1]
    return {
      ...acc,
      [breakpointKey]: {
        ...(isFirst && { minWidth: Number.parseInt(width, 10) }),
        ...(nextBreakpoint && {
          maxWidth: Number.parseInt(nextBreakpoint[1], 10) - 0.1,
        }),
      },
    }
  },
  {}
)

const { S, M, L, XL } = queries

export const useMedia = () => ({
  S: useMediaHook(S),
  M: useMediaHook(M),
  L: useMediaHook(L),
  XL: useMediaHook(XL),
})
