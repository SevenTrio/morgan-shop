import { useReducer, useEffect } from 'react';
import debounce from 'lodash.debounce';

const initialBodyOffset = document.body.getBoundingClientRect();

const scrollInitialState = {
    scrollY: initialBodyOffset.top,
    scrollX: initialBodyOffset.left,
    scrollDirection: "",
};

const scrollReducer = (state, action) => {
    switch (action.type) {
        case 'setScroll':
            return {
                scrollY: -action.payload.top,
                scrollX: action.payload.left,
                scrollDirection: state.top > -action.payload.top ? 'down' : 'up',
            };
        default:
            return state;
    }
}

export const useScroll = () => {
    const [scroll, dispatch] = useReducer(scrollReducer, scrollInitialState);

    const listener = () => {
        const BoundingClientRect = document.body.getBoundingClientRect();
        dispatch({
            type: 'setScroll',
            payload: BoundingClientRect,
        })
    };

    useEffect(() => {
        window.addEventListener('scroll', debounce(listener, 100));
        return () => {
            window.removeEventListener('scroll', listener);
        };
    }, []);

    return {
        scrollY: scroll.scrollY,
        scrollX: scroll.scrollX,
        scrollDirection: scroll.scrollDirection,
    };
}