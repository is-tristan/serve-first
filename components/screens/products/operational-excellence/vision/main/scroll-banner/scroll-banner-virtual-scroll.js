let virtualScrollHandler = null;

export function setScrollBannerVirtualScroll(handler) {
    virtualScrollHandler = handler;
}

export function handleScrollBannerVirtualScroll(data) {
    if (!virtualScrollHandler) {
        return true;
    }

    return virtualScrollHandler(data);
}
