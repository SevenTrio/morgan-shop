import { useBreakpoints } from "../../customHooks/useBreakpoints";

const Hidden = ({
    children,
    lgUp, lgDown,
    mdUp, mdDown,
    smUp, smDown,
    xsUp, xsDown,
}) => {
    const {
        breakLgUp, breakLgDown,
        breakMdUp, breakMdDown,
        breakSmUp, breakSmDown,
        breakXsUp, breakXsDown,
    } = useBreakpoints();

    switch (false) {
        case lgUp && breakLgUp:
            return children;

        case lgDown && breakLgDown:
            return children;

        case mdUp && breakMdUp:
            return children;

        case mdDown && breakMdDown:
            return children;

        case smUp && breakSmUp:
            return children;

        case smDown && breakSmDown:
            return children;

        case xsUp && breakXsUp:
            return children;

        case xsDown && breakXsDown:
            return children;

        default:
            return null;
    }
}

export default Hidden;