import {
    BREAK_LG,
    BREAK_MD,
    BREAK_SM,
    BREAK_XS,
} from "../config";
import { useMediaQuery } from 'react-responsive'

export const useBreakpoints = () => {
    const breakLgUp = useMediaQuery({ minWidth: BREAK_LG });
    const breakLgDown = useMediaQuery({ maxWidth: BREAK_LG - 1 });

    const breakMdUp = useMediaQuery({ minWidth: BREAK_MD });
    const breakMdDown = useMediaQuery({ maxWidth: BREAK_MD - 1 });

    const breakSmUp = useMediaQuery({ minWidth: BREAK_SM });
    const breakSmDown = useMediaQuery({ maxWidth: BREAK_SM - 1 });

    const breakXsUp = useMediaQuery({ minWidth: BREAK_XS });
    const breakXsDown = useMediaQuery({ maxWidth: BREAK_XS - 1 });

    return {
        breakLgUp, breakLgDown,
        breakMdUp, breakMdDown,
        breakSmUp, breakSmDown,
        breakXsUp, breakXsDown,
    };
};