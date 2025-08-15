type VoidFn = () => void;

function debounce<T extends (...args: unknown[]) => void>(fn: T, wait = 120) {
    let t: number | undefined;
    return (...args: Parameters<T>) => {
        if (t !== undefined) window.clearTimeout(t);
        t = window.setTimeout(() => fn(...args), wait);
    };
}

export function initVh(options?: { debounceMs?: number }): VoidFn {
    if (typeof window === "undefined" || typeof document === "undefined") {
        return () => {};
    }

    const setVh = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setVh();

    const debouncedSetVh = debounce(setVh, options?.debounceMs ?? 120);

    window.addEventListener("resize", debouncedSetVh, { passive: true });
    window.addEventListener("orientationchange", debouncedSetVh, {
        passive: true,
    });
    window.addEventListener("pageshow", setVh);

    return () => {
        window.removeEventListener("resize", debouncedSetVh);
        window.removeEventListener("orientationchange", debouncedSetVh);
        window.removeEventListener("pageshow", setVh);
    };
}
