import { writable } from 'svelte/store';

function createOpenHandler(isOpen: boolean) {
	const { subscribe, set, update } = writable(isOpen);

	function open() {
		set(true); // update(() => true)
	}
	function close() {
		set(false); //update(() => false);
	}
	function toggle() {
		update((isOpen) => !isOpen);
	}

	return { subscribe, open, close, toggle };
}

export const dropdownOpen = createOpenHandler(false);
export const mobileNavOpen = createOpenHandler(false);

/**
 * 하위 컴포넌트를 제어할 때는 아래 섹션을 참고할 것!
 * Using stores with context
 * https://kit.svelte.dev/docs/state-management#using-stores-with-context
 */
